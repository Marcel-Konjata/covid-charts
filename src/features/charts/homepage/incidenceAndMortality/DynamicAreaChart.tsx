import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "@/features/charts/homepage/ErrorComponent";
import Dynamic from "next/dynamic";
import { Skeleton } from "antd";
import { FC } from "react";

const Area = Dynamic(
  () => import("@ant-design/charts").then(({ Area }) => Area),
  {
    ssr: false,
    loading: () => <Skeleton />,
  }
);

interface DynamicAreaChartProps {
  data: { type: string; numberOfCases: number | null; date: Date }[];
}
/**
 * @description
 * this component has dynamic import inside due to antd is unable to hydrate on server,
 * since it has higher chance to resolve in some kind of unexpected behavior its wrapped with error boundary,
 * if there will be a lot of problem consider some error logging like sentry or replacing chart library
 * */
export const DynamicAreaChart: FC<DynamicAreaChartProps> = ({ data }) => {
  const config = {
    data,
    xField: "date",
    yField: "numberOfCases",
    seriesField: "type",
    isGrouped: true,
    xAxis: {
      tickCount: 5,
      range: [1, 0],
    },
  };
  return (
    <ErrorBoundary
      fallback={
        <ErrorComponent
          errorText={"import from antd charts had erro, try to reload page"}
        />
      }
    >
      <Area {...config} />
    </ErrorBoundary>
  );
};

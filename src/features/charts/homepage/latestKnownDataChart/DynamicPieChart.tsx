import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "@/features/charts/homepage/ErrorComponent";
import Dynamic from "next/dynamic";
import { Skeleton } from "antd";
import { FC } from "react";

const Pie = Dynamic(() => import("@ant-design/charts").then(({ Pie }) => Pie), {
  ssr: false,
  loading: () => <Skeleton />,
});

interface DynamicPieChartProps {
  data: { type: string; value: number }[];
}
/**
 * @description
 * this component has dynamic import inside due to antd is unable to hydrate on server,
 * since it has higher chance to resolve in some kind of unexpected behavior its wrapped with error boundary,
 * if there will be a lot of problem consider some error logging like sentry or replacing chart library
 * */
export const DynamicPieChart: FC<DynamicPieChartProps> = ({ data }) => {
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "12px",
        },
        content: "Incidence/Mortality",
      },
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
      {/*  @ts-ignore antd Pie has improper type inference for statistics.title*/}
      <Pie {...config} />
    </ErrorBoundary>
  );
};

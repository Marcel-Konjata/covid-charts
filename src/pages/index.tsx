import Head from "next/head";
import { Inter } from "next/font/google";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { MenuBar } from "@/features/layout/menuBars/MenuBar";
import { HomeMenuBarNavigation } from "@/features/layout/menuBars/homePage/HomeMenuBarNavigation";
import { HomepageCovidIncidenceCharts } from "@/features/charts/homepage/HomepageCovidIncidenceCharts";
import { getAllNationDataPrefetchQuery } from "@/restAPI/data/getAllNationData";
import { getNationLatestDataPrefetchQuery } from "@/restAPI/data/getLatestNationData";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Covid example</title>
        <meta
          name="description"
          content="Generated by create next app - covid api task"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBar
        navigationComponent={<HomeMenuBarNavigation />}
        pageTitle={"Page Title"}
      />
      <HomepageCovidIncidenceCharts />
    </>
  );
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await getAllNationDataPrefetchQuery(queryClient, "england");
  await getNationLatestDataPrefetchQuery(queryClient, "england");
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

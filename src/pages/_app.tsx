import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "antd/dist/antd.css";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { MainLayout } from "@/features/layout/MainLayout";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const emotionCache = createCache({ key: "next" });
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </HydrationBoundary>
      </QueryClientProvider>
    </CacheProvider>
  );
}

import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { ClerkProvider } from '@clerk/nextjs'; 

import "~/styles/globals.css";
import { Header } from "~/components/Header";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Header />
      <Component {...pageProps} />
    </ClerkProvider>
  )
};

export default api.withTRPC(MyApp);

import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

import localFont from "next/font/local";

const marfa = localFont({
  src: [
    {
      path: "../../public/Marfa-Regular.woff",
      weight: "400",
    },
    // {
    //   path: "../../public/Marfa-Thin.woff",
    //   weight: "100",
    // },
    {
      path: "../../public/Marfa-Light.woff",
      weight: "300",
    },
    {
      path: "../../public/Marfa-Medium.woff",
      weight: "500",
    },
    {
      path: "../../public/Marfa-Semibold.woff",
      weight: "600",
    },
    {
      path: "../../public/Marfa-Bold.woff",
      weight: "700",
    },
    {
      path: "../../public/Marfa-Black.woff",
      weight: "900",
    },
  ],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={marfa.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;

"use client";

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

interface LayoutProps {
  children: ReactNode;
}

const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    <ThirdwebProvider
      activeChain={Sepolia}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      <SessionProvider>
        <ProgressBar
          height="4px"
          color="#fffd00"
          options={{ showSpinner: false }}
          shallowRouting
        />
        {children}
      </SessionProvider>
    </ThirdwebProvider>
  );
};

export default Providers;
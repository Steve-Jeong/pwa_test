declare module "next-pwa" {
  import { NextConfig } from "next";

  interface PWAConfig {
    dest?: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    scope?: string;
    sw?: string;
  }

  function createNextPwa(config: PWAConfig): (config: NextConfig) => NextConfig;
  export default createNextPwa;
}

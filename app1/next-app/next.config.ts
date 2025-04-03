import type { NextConfig } from "next";
import createNextPwa from "next-pwa";

const basePath = process.env.NODE_ENV === 'production' ? '/app1' : '';
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

let nextConfig: NextConfig = {
  /* config options here */
  basePath : process.env.NODE_ENV === 'production' ? '/app1' : '',
  assetPrefix : process.env.NODE_ENV === 'production' ? '/app1' : '',
};

console.log('basePath : ', nextConfig.basePath)
console.log('NODE_ENV : ', process.env.NODE_ENV)

// PWA 설정 추가 (개발 중에는 비활성화하는 것이 일반적)
if (process.env.NODE_ENV === "production") {
  const withPWA = createNextPwa({
    dest: "public", // 서비스 워커 및 관련 파일 출력 위치
    register: true, // 클라이언트 측에서 서비스 워커 자동 등록
    skipWaiting: true, // 새 서비스 워커 즉시 활성화
    // disable: process.env.NODE_ENV === 'development', // 개발 모드에서 PWA 비활성화
    // scope: '/app1', // basePath가 설정되면 자동으로 처리될 수 있음, 명시적 설정 필요시 추가
    sw: "service-worker.js", // 서비스 워커 파일 이름
    // 필요한 경우 추가 PWA 옵션 설정 (예: 런타임 캐싱 전략)
  });
  nextConfig = withPWA(nextConfig);
}
export default nextConfig;

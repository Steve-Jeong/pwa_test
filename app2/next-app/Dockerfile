# 1. 기본 이미지 설정 (Node.js 버전은 프로젝트 요구사항에 맞게 조정)
FROM node:20-alpine AS base

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 의존성 설치 단계 (빌드 속도 향상을 위해 분리)
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile

# 4. 빌드 단계
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Next.js 앱 빌드 (환경 변수 설정이 필요하면 여기에 추가)
RUN npm run build

# 5. 프로덕션 실행 단계
FROM base AS runner
WORKDIR /app

# 프로덕션 환경 설정
ENV NODE_ENV=development
# basePath는 next.config.mjs에서 설정되므로 여기서는 불필요

# 빌드 결과물 복사
COPY --from=builder /app/public ./public
# Next.js는 standalone 출력을 권장하기도 합니다. 그 경우 복사 대상이 달라집니다.
# .next/standalone 폴더를 사용하는 경우:
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static

# 일반적인 .next 폴더를 사용하는 경우: Standalone 사용 시 불필요
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules 
COPY --from=builder /app/package.json ./package.json

# 애플리케이션 실행 포트 노출 (컨테이너 내부 포트)
EXPOSE 3000

# 애플리케이션 실행 명령어 (package.json의 "start" 스크립트 사용)
# standalone 사용 시: CMD ["node", "server.js"]
CMD ["npm", "start"]

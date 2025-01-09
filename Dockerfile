
# Step 1: Base image 설정 (Node.js 사용)
FROM node:20.18.1-alpine

# Step 2: 작업 디렉토리 설정 (도커 컨테이너 내부의 작업 디렉토리를 말한다)
WORKDIR /app

# Step 3: 의존성 설치를 위한 package.json 복사 (package.json and package-lock.json 복사)
COPY package*.json ./

# Step 4: 의존성 설치 (아직 소스코드를 복사해오지는 않았지만, 위에서 package.json을 복사해왔기 때문에 의존성을 먼저 설치할 수 있다)
RUN npm install --include=dev

# Step 5: 소스 코드 복사 (. .이라 이게 무슨 소리인가 할 수 있지만, 첫번째 .은 호스트의 현재 디렉토리를 의미하고, 두번째 .은 도커 컨테이너의 작업 디렉토리를 의미한다)
COPY . .

# Step 6: 빌드 (Production 환경용)
RUN npm run build

# Step 7: 노출할 포트 설정
EXPOSE 3000

# Step 8: 애플리케이션 실행
CMD ["npm", "run", "start:prod"]
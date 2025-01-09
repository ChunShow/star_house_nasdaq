# StarHouseNasdaq Project
스타하우스에서 진행하는 나스닥 급등주 디텍팅 프로젝트의 상시 서버 코드입니다.
## Production Operating Environment
### Google Cloud Run
- why? 적은 컴퓨팅 리소스(비용)으로 효율적으로 운영하기 위함
- why? minjun-P가 Google Cloud가 익숙함.
## How To Run In Local Development Environment
```shell
./dev-with-local-db.sh
```
위 쉘 스크립트를 실행하면 특정 환경 파일`.env.development.local`을 환경파일로 하여 docker-compose를 실행할 수 있음.
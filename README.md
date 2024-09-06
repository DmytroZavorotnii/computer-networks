## Start

- Download node v20.*
- Install nest + dependencies
  ~ npm install -g @nestjs/cli
  ~ npm install
- Run application
  ~ npm run start:dev

## Endpoints

1. (lr1) curl -w "\n" -X POST http://192.168.1.100:3000/api/v1/lab-1/process -H "Content-Type: application/json" -d '{"ip": "192.168.1.100"}'
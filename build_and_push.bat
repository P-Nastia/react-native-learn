@echo off

REM ==== API ====
cd JustDoItApi
docker build -t bolto-api .
docker tag bolto-api:latest nastiapyv/bolto-api:latest
docker push nastiapyv/bolto-api:latest

echo DONE
pause
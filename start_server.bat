@echo off
title TinyCore Web Emulator Server
echo ==============================================
echo    Starting TinyCore Web Emulator Server...
echo ==============================================
echo.
echo The server is starting on http://localhost:8080
echo Keep this window open to keep the server running.
echo You can also use stop_server.bat to stop it.
echo.
node local_server.js
pause

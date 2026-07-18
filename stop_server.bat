@echo off
title Stop Web Emulator Server
echo ==============================================
echo    Stopping TinyCore Web Emulator Server...
echo ==============================================
echo.
echo Searching for processes on port 8080...

for /f "tokens=5" %%a in ('netstat -a -n -o ^| findstr :8080') do (
    echo Killing process %%a...
    taskkill /F /PID %%a
)

echo.
echo Done!
pause

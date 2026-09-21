@echo off
setlocal
title Gerar Site - Tutorial FlexSim
echo.
echo ==============================================
echo   Gerando o site a partir do Word-Mestre...
echo ==============================================
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0build.ps1"
echo.
echo ==============================================
echo   Concluido. Veja relatorio-build.txt para os avisos.
echo ==============================================
pause

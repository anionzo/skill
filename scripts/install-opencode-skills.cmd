@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\install-opencode-skills.mjs" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\install-opencode-skills.mjs" %*
)

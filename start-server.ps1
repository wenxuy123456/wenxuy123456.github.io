Set-Location -LiteralPath $PSScriptRoot
& "C:\Program Files\nodejs\node.exe" "$PSScriptRoot\server.js" *> "$PSScriptRoot\server-start.log"

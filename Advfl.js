UI.AddHotkey ("random jitter");
UI. AddsliderInt ("Fake-Lag limit", 1, 15);
15 hs.js
var heavy_cache = UI. Gatvalue ("Anti-Aim", "Fake-Lag", "Limit")
function sex() {
var heavy_cache - UI. Gatvalue ("Script items", "Fake-Lag limit");
var isActive = UI. IsHotkeyActive("Script items", "Fake-Lag");
12
if (icActive =s true
UI. SetValue ("Anti-Aim",
"Fake-Lag”,
"Limit", heavy_cache)
else
UI.Setvalue ("Anti-Aim",
"Fake-Lag", "Limit", heavy_cache)
14
basnajs - Visual Studio Code
RegisterCallback("CreateMove", "sex")

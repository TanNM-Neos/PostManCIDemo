#!/usr/bin/env node
var handler = require("./NewManRunner");
handler.runPostManCollection("sample-collection", function(result) {
    console.log(result);
});
#!/usr/bin/env node
var expect = require("chai").expect;
var handler = require("./NewManRunner");
handler.runPostManCollection("sample-collection", function(result) {
    console.log(result);
});
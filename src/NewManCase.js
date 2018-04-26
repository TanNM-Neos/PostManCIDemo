#!/usr/bin/env node
var expect = require("chai").expect;
var handler = require("./NewManRunner");
handler.runPostManCollection("sample-collection", function(result) {
    console.log(result);
    expect(result).to.equal("The sample-collection run completed with result pass.")
});
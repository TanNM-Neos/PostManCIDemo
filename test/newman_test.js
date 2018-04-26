var expect = require("chai").expect;
var tools = require("../src/NewManRunner");

describe("Tools", function() {

	describe("runPostManCollection()", function() {

		this.timeout(180000); // 3 minutes

		it("Test sample-collection api with newman", function(done) {
			tools.runPostManCollection("sample-collection", function(result) {
                // time out for waiting cli report
                setTimeout(function() { 
					console.log("---------------------------------------------------------------------");
					console.log("__.__.__.__.__.__.__.__Mocha Testing Result__.__.__.__.__.__.__.__.__");
                    expect(result).to.equal("The sample-collection run completed with result pass.")
				    done();
                }, 10000);
			});
		});

	});

});
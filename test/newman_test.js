var expect = require("chai").expect;
var tools = require("../src/NewManRunner");

describe("Tools", function() {

	describe("runPostManCollection()", function() {

		this.timeout(30000);

		it("Test sample-collection api with newman", function(done) {
			tools.runPostManCollection("sample-collection", function(result) {
				expect(result).to.equal("The sample-collection run completed with result pass.")
				done();
			});
		});

	});

});
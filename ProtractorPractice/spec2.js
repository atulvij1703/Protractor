describe("Non angular sites", function(){
	it("Opening google site", function(){
		
		browser.waitForAngularEnabled(false);
		browser.get("https://google.com");
	})
})
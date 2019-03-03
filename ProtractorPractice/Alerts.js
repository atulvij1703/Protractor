describe("Alerts Practice", function(){
	it("Opening the site", function(){
		
		browser.waitForAngularEnabled(false);
		browser.get("http://www.qaclickacademy.com/practice.php");
		element(by.id("confirmbtn")).click();
		
		//Switch to java alert.
		browser.switchTo().alert().accept();
		
	})
})
describe("Frames Practice", function(){
	it("Opening the site", function(){
		
		browser.waitForAngularEnabled(false);
		
		browser.driver.manage().window().maximize();
		browser.get("http://www.qaclickacademy.com/practice.php");
		
		//Switch to frame.
		browser.switchTo().frame("courses-iframe");
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			
			console.log(text);
		})
		
		
		
	})
})
describe("Actions", function(){
	it("Opening the site", function(){
		
		browser.get("https://posse.com/");
		
//		element(by.model("userInputQuery")).sendKeys("Rivers");
		
		//Mouse 
//		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
//		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			
//			browser.sleep(5000);
//		})
		
		element.all(by.css("span[class='location']")).get(2).click().then(function(){
			browser.sleep(3000);
		})
		
		element.all(by.css("div[class='row placeDetailsRow']")).get(2).click();
		element.all(by.css("span[ng-bind='searchResult.place.name']")).get(2).click().then(function(){
			browser.sleep(3000);
		})
		
		//Switching to child window
		browser.getAllWindowHandles().then(function(handles){
			
			browser.switchTo().window(handles[1]);
			
			browser.getTitle().then(function(text){
				
				console.log(text);
			})
			element(by.css("a[href='/profile/18951']")).click();
				
			browser.switchTo().window(handles[0]);
				
			browser.getTitle().then(function(text){
					
				console.log(text);
		
		
			})
		})
		
		
	
	})
})
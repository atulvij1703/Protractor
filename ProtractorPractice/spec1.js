describe("Protractor practice",function(){
	it("Opening the no vacancy webapp",function(){
		
		//Open the No vacancy webapp.
		browser.get("http://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("4");
		element(by.id("gobutton")).click();
		
		element(by.css("h2[class='ng-binding']")).getText().then(function(ans){
			
			console.log(ans);
			
			if(ans == '7')
				{
				console.log("Pass");
				}
			else
				{
				console.log("Fail");
				}

		})
		//Real output will display only when you resolve promise.
		
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("7");
		//Jasmine takes care of promise resolve.
		
		
	})	
})
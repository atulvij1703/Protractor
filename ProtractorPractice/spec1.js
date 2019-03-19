describe("Protractor practice",function(){
	var obj = require("./jsObject.js");
	
	beforeEach(function(){
		obj.getURL();
		
	})
	it("Opening the site",function(){
				
		obj.first.sendKeys("3");
		obj.second.sendKeys("4");
		obj.go.click();
		
		obj.result.getText().then(function(ans){
			
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
		
		expect(obj.result.getText()).toBe("7");
		//Jasmine takes care of promise resolve.
		
		
	})	
	afterEach(function(){
		console.log("Test completed");
	})
})
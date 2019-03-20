describe("Protractor practice",function(){
	var obj = require("./jsObject.js");
	var d = require("./data.js");
	var using = require("jasmine-data-provider");
	
	
	beforeEach(function(){
		obj.getURL();
		
	})
	//data stores the actual data like firstinput etc
	//description stores the sub object like FirstData etc.
	//for every iteration one data set is picked.
	using(d.datadrive, function (data, description) {
		it("Opening the site",function(){
			
			obj.first.sendKeys(data.firstinput);
			obj.second.sendKeys(data.secondinput);
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
			
			expect(obj.result.getText()).toBe(data.result);
			//Jasmine takes care of promise resolve.
		
	});
	
		
		
	})	
	afterEach(function(){
		console.log("Test completed");
	})
})
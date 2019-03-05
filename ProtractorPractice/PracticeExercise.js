describe("Protractor Commerce", function(){
	it("Opening the site", function(){
		
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		
		element(by.name("name")).sendKeys("Test");
		element(by.name("email")).sendKeys("test@test.test");
		element(by.id("exampleInputPassword1")).sendKeys("testing");
		element(by.css("input[type='checkbox']")).click();
		element(by.cssContainingText("select[class='form-control'] option","Female")).click();
		element.all(by.className("form-check-label")).get(3).click();
		element(by.buttonText("Submit")).click();
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("T");
		element(by.className("alert alert-danger")).getText().then(function(text){
			
			console.log(text);
		
		})
	
	})
})

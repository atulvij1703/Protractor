describe("All",function(){
	
	function multiply(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	
	it("Fetch",function(){
		
		browser.get("http://juliemr.github.io/protractor-demo/");
		
		multiply(2,3);
		multiply(5,6);
		multiply(212,7);
		multiply(63,47);
		multiply(64,75);
		multiply(76,76);
		multiply(635,37);

		element.all(by.repeater("result in memory")).count().then(function(count) {
			console.log(count);
		})
	})
	it("Print",function(){
		
		element.all(by.repeater("result in memory")).each(function(no) {
			no.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})
	})
})
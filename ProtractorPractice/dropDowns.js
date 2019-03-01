describe("Drop Downs",function(){
	
	function calc(a,b,c){
		element(by.model("first")).sendKeys(a);
		
		
		element.all(by.tagName("option")).each(function(item) {
			
			item.getAttribute("value").then(function(text){
				
				if(text==c)
					{
						item.click();
					}
				})
			})
			
			element(by.model("second")).sendKeys(b);
		
			element(by.id("gobutton")).click();
	}
	
	function result()
	{
		element.all(by.repeater("result in memory")).each(function(item){
			
			item.element(by.tagName("td:nth-child(3)")).getText().then(function(text)
			{
				console.log(text);
			})
		})
	
	}
		
		
		
		
	it("test",function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
		
		calc(8,2,"DIVISION");
		calc(8,2,"DIVISION");
		calc(8,2,"DIVISION");
		calc(8,2,"DIVISION");
		calc(8,2,"DIVISION");
		
		result();

})

})
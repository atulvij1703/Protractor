function objects()
{
	this.first=element(by.model("first"));
	this.second=element(by.model("second"));
	this.go=element(by.id("gobutton"));
	this.result=element(by.css("h2[class='ng-binding']"));
	
	this.getURL = function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
	}
}

module.exports = new objects();
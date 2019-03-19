exports.config = {
//seleniumAddress : 'http://localhost:4444/wd/hub',
specs: ['spec1.js'],

onPrepare: function(){
	browser.driver.manage().window().maximize();
}
//capabilities: {
//	  'browserName': 'firefox'
//	}
 
};
describe('Practice Exercise',function() {  

	function callback(b){
		console.log('vaue',b);
		
	}
	
	
function selectItems(product)
{
//take 4 cards into list
//go through each index in the list - and get the title= if title =desired title then in that index i will select add button
element.all(by.tagName("app-card")).each(function(item)
{

item.element(by.css("h4 a")).getText().then(function(text)
{
if(text==product)
{
item.element(By.css("button[class*='btn-info']")).click();
}
}) }) 
}

it('practice',function() {
	
	browser.driver.manage().window().maximize();


browser.get("https://qaclickacademy.github.io/protocommerce/");

element(by.name("name")).sendKeys("Mystudents");
element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
element(by.id("exampleInputPassword1")).sendKeys("password2");
element(by.css("input[type='checkbox']")).click();
element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
element.all(by.name("inlineRadioOptions")).first().click();
element(by.buttonText("Submit")).click().then(function()
{
element(by.css("div[class*='success']")).getText().then(function(text)
{
console.log(text);
})
})
element(by.name("name")).clear();
element(by.name("name")).sendKeys("M").then(function()
{
element(by.css("[class='alert alert-danger']")).getText().then(function(text)
{
console.log(text);
})
})
element(by.linkText("Shop")).click();
selectItems("Samsung Note 8");
selectItems("iphone X");

element(by.partialLinkText("Checkout")).getText().then(function(text)
{
var res=text.split("(");
var x=Number(res[1].trim().charAt(0));

expect(x).toBe(2);
})

element(by.partialLinkText("Checkout")).click();


	element.all(by.css("tbody tr")).count().then(function(c){
	
})

var b = 0;
element.all(by.css("tbody tr")).then(function(item){
	element.all(by.css("tbody tr")).count().then(function(c){
		
	 for(let i = 0; i<(c-2); i++)
		 {
	 item[i].element(by.css("td:nth-child(4)")).getText().then((text)=>{
		 var a = text.split(" ");
		 var x = Number(a[1]);
		 
		 b = b+x;
		 
		 while(i==(c-3))
			 {
			 expect(b).toBe(185000);
			 }
		 
	 })
	
		 }
	 
	 
	 
 })
 
 


})

})})


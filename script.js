const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
let btn = document.getElementById("btn");
let output = document.getElementById("output");
btn.addEventListener("click",async()=>{

	
		let response = await fetch(url);
		let data = await response.json();
	

	output.textContent = JSON.stringify(data);
})
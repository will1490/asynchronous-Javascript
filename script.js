const exemple = document.getElementById("fetch");
exemple.addEventListener("click", () => {
	fetch("data.json")
		.then((response) => response.json()) // Parse the response as JSON
		.then((data) => {
			const agenda = document.createElement("ul");
			document.body.appendChild(agenda); // Append the ul element to the document body

			data.forEach((element) => {
				let li = document.createElement("li");
				li.textContent = element;
				agenda.appendChild(li); // Append the li element to the ul element
			});
		})
		.catch((error) => {
			console.log(error);
		});
});

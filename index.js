document.getElementById("get-fact").addEventListener("click", function () {
	fetch("https://asli-fun-fact-api.herokuapp.com/")
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			document.getElementById(
				"fact-list"
			).innerHTML = `<h3>${data.data.fact}</h3>`;
		});
});

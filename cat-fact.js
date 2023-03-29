// Cat Fact API
fetch('https://catfact.ninja/fact')
	.then(response => response.json())
	.then(data => {
		const catFactCard = document.getElementById('cat-fact');
		catFactCard.querySelector('.card-body').innerHTML = `<p>${data.fact}</p>`;
	})
	.catch(error => console.log(error));

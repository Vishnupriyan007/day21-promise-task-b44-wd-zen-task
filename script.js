// Random Joke API
fetch('https://official-joke-api.appspot.com/random_joke')
	.then(response => response.json())
	.then(data => {
		document.getElementById('joke').innerHTML = `<p><strong>${data.setup}</strong></p><p>${data.punchline}</p>`;
	})
	.catch(error => console.log(error));

// Quote API
fetch('https://api.quotable.io/random')
	.then(response => response.json())
	.then(data => {
		document.getElementById('quote').innerHTML = `<p>"${data.content}"</p><p>- ${data.author}</p>`;
	})
	.catch(error => console.log(error));

// Cat Fact API
fetch('https://catfact.ninja/fact')
	.then(response => response.json())
	.then(data => {
		document.getElementById('cat-fact').innerHTML = `<p>${data.fact}</p>`;
	})
	.catch(error => console.log(error));

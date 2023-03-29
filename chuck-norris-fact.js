// Chuck Norris Fact API
fetch('https://api.chucknorris.io/jokes/random')
	.then(response => response.json())
	.then(data => {
		const chuckNorrisCard = document.getElementById('chuck-norris-fact');
		chuckNorrisCard.querySelector('.card-body').innerHTML = `<p>${data.value}</p>`;
	})
	.catch(error => console.log(error));

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a92a5ed21dmsh666d2d37271f6f5p1fea2ajsn039d1be78b19',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



fetch ('https://api.nasa.gov/planetary/apod?api_key=Blevdngru4uXheqWFtLTAe7qMdXMox5NJj8nf0of')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerHTML = data.title;
        document.querySelector('img').src = data.hdurl
        document.querySelector('.date').innerHTML = data.date
        document.querySelector('p').innerHTML = data.explanation
        document.querySelector('.copyright').innerHTML = data.copyright
    })
    .catch (err => {
        console.log(`error ${err}`)
    })

fetch ('https://api.nasa.gov/planetary/apod?api_key=Blevdngru4uXheqWFtLTAe7qMdXMox5NJj8nf0of')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch (err => {
        console.log(`error ${err}`)
    })
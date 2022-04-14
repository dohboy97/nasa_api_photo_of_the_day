


fetch ('https://api.nasa.gov/planetary/apod?date=2022-03-30&api_key=Blevdngru4uXheqWFtLTAe7qMdXMox5NJj8nf0of')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        document.querySelector('h2').innerHTML = data.title;

        if(data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl;

        }else if (data.media_type === 'video'){
            document.querySelector('iframe').classList.toggle('invisible')
            document.querySelector('iframe').src = data.url
        }

        document.querySelector('.date').innerHTML = data.date;

        document.querySelector('p').innerHTML = data.explanation;

        if(data.hasOwnProperty('copyright') === true){
        document.querySelector('.copyright').innerHTML = data.copyright;}

    })
    .catch (err => {
        console.log(`error ${err}`)
    })


    //if (data.media_type = 'video')
    //if(data.media_type = 'image')
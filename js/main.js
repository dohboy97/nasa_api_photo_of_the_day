
document.querySelector('.submit').addEventListener('click', getAPOD)

function getAPOD(){
let date = document.querySelector('input').value

document.querySelector('iframe').classList.add('invisible')

fetch (`https://api.nasa.gov/planetary/apod?date=${date}&api_key=Blevdngru4uXheqWFtLTAe7qMdXMox5NJj8nf0of`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        //clearing everything on initial run
        document.querySelector('img').src = '';

        document.querySelector('.date').innerHTML = '';

        document.querySelector('p').innerHTML = '';

        document.querySelector('.copyright').innerHTML = ''

        document.querySelector('h2').innerHTML = data.title;

        

        //if APOD is an img


        if(data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl;

        document.querySelector('.date').innerHTML = data.date;

        document.querySelector('p').innerHTML = data.explanation;

        if(data.hasOwnProperty('copyright') === true){
        document.querySelector('.copyright').innerHTML = data.copyright;}

        //if APOD is a video


        }else if (data.media_type === 'video'){
            document.querySelector('iframe').classList.toggle('invisible');
            document.querySelector('iframe').src = data.url;
            document.querySelector('img').src = '';

            document.querySelector('.date').innerHTML = data.date;

            document.querySelector('p').innerHTML = data.explanation;
    
            if(data.hasOwnProperty('copyright') === true){
            document.querySelector('.copyright').innerHTML = data.copyright;}

            //if APOD is outside of date range

        }else{
            document.querySelector('h2').innerHTML = data.msg
        }

        

    })
    .catch (err => {
        console.log(`error ${err}`)
    })

}

    //if (data.media_type = 'video')
    //if(data.media_type = 'image')
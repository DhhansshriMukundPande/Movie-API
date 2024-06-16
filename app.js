let api = 'https://www.omdbapi.com/?apikey=5b0e567e&t=';
 
let title=document.querySelector('#title');
let description=document.querySelector('#description');
let genre =document.querySelector('#genre');
let actors=document.querySelector('#actors');
let directors=document.querySelector('#directors');
let awards=document.querySelector('#awards');
let boxOffice=document.querySelector('#collection');
let languages=document.querySelector('#ln');
let rating=document.querySelector('#ratings');
let poster=document.querySelector('#poster');
let error = document.querySelector('#error');
let suggestion =document.querySelector('.suggestion');

let container=document.querySelector('#container');
container.classList.add('hidden');
function search()
{
    let movieInput = document.querySelector('#movieName');
    let query = api + movieInput.value;
    fetch(query).then((data)=>{
        return data.json()
    }).then(data=>{
            error.innerText ="";
        if(data.Error ==='Movie not found!'){
            container.classList.add('hidden')
          error.innerText='Movie not found!'
        }
        else{
                   container.classList.remove('hidden')
                   title.innerText=data.Title;
                   description.innerText=data.Plot;
                   genre.innerText=data.Genre;
                   actors.innerText=data.Actors;
                   directors.innerText=data.Director;
                   awards.innerText=data.Awards;
                   boxOffice.innerText=data.BoxOffice;
                   languages.innerText=data.Language;
                   rating.innerText=data.imdbRating;
                   poster.src=data.Poster;

                   if(data.imdbRating >7){
                    suggestion.innerText='Worth Watching';
                    suggestion.style.color='green';
                    suggestion.style.fontWeight='bold';
                   }
                   else if(data.imdbRating> 6 && data.imdbRating<=7){
                      suggestion.innerText='Can Watch';
                      suggestion.style.color='orange';
                    suggestion.style.fontWeight='bold';
                   }
                   else{
                    suggestion.innerText='Time Waste';
                    suggestion.style.color='red';
                    suggestion.style.fontWeight='bold';
                   }
        }   
   
    })

            
}



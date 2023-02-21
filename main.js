import { API_KEY } from "./src/secrets.js";
const apiUrl = "https://api.themoviedb.org/3"

const instance = axios.create({
    baseURL: apiUrl,
    headers: {'apy_key': API_KEY}
  });

async function getMoviePreviewTrend(){
    const res = await fetch(`${apiUrl}/trending/movie/day?api_key=${API_KEY}`)
    const data = await res.json()
    const movies = data.results
    console.log(movies)
    
    movies.forEach(movie => {
        const containerMovie = document.getElementById('movie-tendencias')
        const article = document.createElement('article')
        const figureContainer = document.createElement('figure')
        figureContainer.classList.add('tendencia-container')
        
        const imagMovie = document.createElement('img')
        imagMovie.classList.add('category-movie')
        imagMovie.setAttribute('alt', movie.title)
        imagMovie.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
        
        figureContainer.append(imagMovie)

        const containerInfo = document.createElement('div')
        
        containerInfo.classList.add('datos-movie')

        const containerPuntuacion = document.createElement('div')
        
        const puntuacion = movie.vote_average
        const imagPositive = document.createElement('img')
        imagPositive.setAttribute('src', "/images/estrella.png")
        imagPositive.classList.add('start')

        const imagNegative = document.createElement('img')
        imagNegative.setAttribute('src', "/images/estrellaFalse.png")
        imagNegative.classList.add('start')

        if(puntuacion < 5){
            containerPuntuacion.append(imagPositive, imagPositive, imagNegative, imagNegative, imagNegative)
            containerInfo.append(containerPuntuacion)
            article.append(figureContainer,containerInfo,containerPuntuacion)
            containerMovie.append(article)
        }else if(puntuacion < 7){
            containerPuntuacion.append(imagPositive,imagPositive,imagPositive,imagNegative,imagNegative)
            containerInfo.append(containerPuntuacion)
            article.append(figureContainer,containerInfo,containerPuntuacion)
            containerMovie.append(article)
        }else if(puntuacion <=8){
            containerPuntuacion.append(imagPositive,imagPositive,imagPositive,imagPositive,imagNegative)
            containerInfo.append(containerPuntuacion)
            article.append(figureContainer,containerInfo,containerPuntuacion)
            containerMovie.append(article)
        }else if(puntuacion > 8){
            containerPuntuacion.append(imagPositive,imagPositive,imagPositive,imagPositive,imagPositive)
            containerInfo.append(containerPuntuacion)
            article.append(figureContainer,containerInfo,containerPuntuacion)
            containerMovie.append(article)
        }
    });

}

async function getMoviePreviewPopular(){
    const res = await fetch(`${apiUrl}/trending/movie/day?api_key=${API_KEY}&page=2`)
    const data = await res.json()
    const movies = data.results
    console.log(movies);
    movies.forEach(movie => {
        const containerMovie = document.getElementById('movie-popular')
        const article = document.createElement('article')
        const figureContainer = document.createElement('figure')
        figureContainer.classList.add('tendencia-container')
        
        const imagMovie = document.createElement('img')
        imagMovie.classList.add('category-movie')
        imagMovie.setAttribute('alt', movie.title)
        imagMovie.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
        
        figureContainer.append(imagMovie)
        article.appendChild(figureContainer)
        containerMovie.appendChild(article)
        const containerInfo = document.createElement('div')
        
        containerInfo.classList.add('datos-movie')

        const containerPuntuacion = document.createElement('div')
        
        const puntuacion = movie.vote_average
        const imagPositive = document.createElement('img')
        imagPositive.setAttribute('src', "/images/estrella.png")
        imagPositive.classList.add('start')

        const imagNegative = document.createElement('img')
        imagNegative.setAttribute('src', "/images/estrellaFalse.png")
        imagNegative.classList.add('start')

        if(puntuacion < 5){
            containerPuntuacion.append(imagPositive, imagPositive, imagNegative, imagNegative, imagNegative)
            containerInfo.append(containerPuntuacion)
            article.append(figureContainer,containerInfo,containerPuntuacion)
            containerMovie.append(article)
        }else if(puntuacion < 7){
            containerPuntuacion.append(imagPositive,imagPositive,imagPositive,imagNegative,imagNegative)
            containerInfo.append(containerPuntuacion)
            article.append(figureContainer,containerInfo,containerPuntuacion)
            containerMovie.append(article)
        }else if(puntuacion <=8){
            containerPuntuacion.append(imagPositive,imagPositive,imagPositive,imagPositive,imagNegative)
            containerInfo.append(containerPuntuacion)
            article.append(figureContainer,containerInfo,containerPuntuacion)
            containerMovie.append(article)
        }else if(puntuacion > 8){
            containerPuntuacion.append(imagPositive,imagPositive,imagPositive,imagPositive,imagPositive)
            containerInfo.append(containerPuntuacion)
            article.append(figureContainer,containerInfo,containerPuntuacion)
            containerMovie.append(article)
        }
    });
}

async function getGenderMovies (){
    const res = await fetch(`${apiUrl}/genre/movie/list?api_key=${API_KEY}&language=es-Mx`)
    const data = await res.json()
    const genderes = data.genres
    
    genderes.forEach((gender)=>{
        const containerGenderMovie = document.querySelector('.container-gender-movies')
        const containerTitleGender = document.createElement('article')
        containerTitleGender.classList.add('gender-movies-list')

        const divContainer = document.createElement('div')
        divContainer.classList.add('gender-movies')

        const title = document.createElement('p')
        title.classList.add('gender')
        title.setAttribute('id', gender.id)
        title.innerText = gender.name
        
        divContainer.appendChild(title)
        containerTitleGender.appendChild(divContainer)
        containerGenderMovie.appendChild(containerTitleGender)
    })
}

getMoviePreviewTrend()
getMoviePreviewPopular()
getGenderMovies()
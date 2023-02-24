const instance_api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
        "language": "es-ES"
    },
});

const createE = (elemento) => document.createElement(elemento);

const iconSearchMovie = document.getElementById('search-movie')
iconSearchMovie.addEventListener('click', showSearchAndMenu)

const searchInput = document.getElementById('search-input')
const containerNav = document.getElementsByClassName('nav')
const menuBurger = document.getElementById('burger')
menuBurger.addEventListener('click', onlyMenuBurgerAndNav)

const searchIconInput = document.querySelector('.search-icon-input')
const iconSeacrch = document.querySelector('.icon-search') 
iconSeacrch.addEventListener('click', goSearchMovie)

const seeAllTrends = document.querySelector('#see-all-trends')
seeAllTrends.addEventListener('click', goSeeAllMovie)

const seeAllPopulars = document.querySelector('#see-all-populars')
seeAllPopulars.addEventListener('click', goSeeAllMovie)

function goSearchMovie(){
    location.hash = '#search='
}

function goSeeAllMovie(){
    location.hash = '#gender='
}

function showSearchAndMenu (){
    iconSearchMovie.classList.add('inactive')
    searchInput.classList.remove('icon-input')
    for (const iterator of containerNav) {
        iterator.classList.add('inactive')
    }
    menuBurger.style.display='block'
    searchIconInput.style.cssText = 'width: 50%; min-width: 240px;'
    searchInput.style.width='100%'
}

function onlyMenuBurgerAndNav(){
    iconSearchMovie.classList.remove('inactive')
    searchInput.classList.add('icon-input')
    for (const iterator of containerNav) {
        iterator.classList.remove('inactive')
    }
    menuBurger.style.display='none'
    searchIconInput.style.cssText = 'min-width: none;'
    searchInput.style.width='0'
}

async function getMoviePreviewTrend(){
    const {data} = await instance_api('/trending/movie/day')
    const movies = data.results
    
    movies.forEach(movie => {
        const containerMovie = document.getElementById('movie-tendencias')
        const article = createE('article')
        article.classList.add('article')
        const figureContainer = createE('figure')
        figureContainer.classList.add('tendencia-container')
        
        const imagMovie = createE('img')
        imagMovie.classList.add('category-movie')
        imagMovie.setAttribute('alt', movie.title)
        imagMovie.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
        
        figureContainer.append(imagMovie)

        const containerInfo = createE('div')
        
        containerInfo.classList.add('datos-movie')

        const containerPuntuacion = createE('div')
        
        const puntuacion = movie.vote_average
        const imagPositive = createE('img')
        imagPositive.setAttribute('src', "images/estrella.png")
        imagPositive.classList.add('start')

        const imagNegative = createE('img')
        imagNegative.setAttribute('src', "images/estrellaFalse.png")
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
    const {data} = await instance_api('/trending/movie/day')
    const movies = data.results
    
    movies.forEach(movie => {
        const containerMovie = document.getElementById('movie-popular')
        const article = createE('article')
        article.classList.add('article')
        const figureContainer = createE('figure')
        figureContainer.classList.add('tendencia-container')
        
        const imagMovie = createE('img')
        imagMovie.classList.add('category-movie')
        imagMovie.setAttribute('alt', movie.title)
        imagMovie.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
        
        figureContainer.append(imagMovie)
        article.appendChild(figureContainer)
        containerMovie.appendChild(article)
        const containerInfo = createE('div')
        
        containerInfo.classList.add('datos-movie')

        const containerPuntuacion = createE('div')
        
        const puntuacion = movie.vote_average
        const imagPositive = createE('img')
        imagPositive.setAttribute('src', "images/estrella.png")
        imagPositive.classList.add('start')

        const imagNegative = createE('img')
        imagNegative.setAttribute('src', "images/estrellaFalse.png")
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
    const {data} = await instance_api('/genre/movie/list')
    const genderes = data.genres
    
    genderes.forEach((gender)=>{
        const containerGenderMovie = document.querySelector('.container-gender-movies')
        const containerTitleGender = createE('article')
        containerTitleGender.classList.add('gender-movies-list')

        const divContainer = createE('div')
        divContainer.classList.add('gender-movies')

        const title = createE('p')
        title.classList.add('gender')
        title.setAttribute('id', gender.id)
        title.innerText = gender.name
        
        divContainer.appendChild(title)
        containerTitleGender.appendChild(divContainer)
        containerGenderMovie.appendChild(containerTitleGender)
    })
}

async function getMovieForCategory(){
    const {data} = await instance_api('/trending/movie/day')
    const movies = data.results
    
    movies.forEach(movie => {
        const containerMovie = document.getElementById('movieForCategory')
        const article = createE('article')
        article.classList.add = ('art-movie')
        const figureContainer = createE('figure')
        figureContainer.classList.add('tendencia-container')
        
        const imagMovie = createE('img')
        imagMovie.classList.add('category-for-movie')
        imagMovie.setAttribute('alt', movie.title)
        imagMovie.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
        
        figureContainer.append(imagMovie)
        article.append(figureContainer)
        containerMovie.append(article)
        
    });
}
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


const imgHeroPage = document.getElementById('imgHeroPage')

const iconSearchMovie = document.getElementById('search-movie')
iconSearchMovie.addEventListener('click', showSearchAndMenu)

const searchInput = document.getElementById('search-input')
const containerNav = document.getElementsByClassName('nav')

const input = document.querySelector('#search')

const menuBurger = document.getElementById('burger')
menuBurger.addEventListener('click', onlyMenuBurgerAndNav)

const iconSeacrch = document.querySelector('.icon-search') 
iconSeacrch.addEventListener('click', goSearchMovie)

const seeAllTrends = document.querySelector('#see-all-trends')
seeAllTrends.addEventListener('click', goSeeAllMovie)

const seeAllPopulars = document.querySelector('#see-all-populars')
seeAllPopulars.addEventListener('click', goSeeAllMovie)

const buttonUp = document.getElementById('arrow-up')
buttonUp.addEventListener('click', goToUp)

const ulList = document.querySelector('.ul-list_navegation')

function goToUp(){
    containerCategories.scrollTo( 0, 0 );
}

function goSearchMovie(){
    console.log(decodeURI(input.value).trim())
    location.hash = `#search=${input.value.trim()}`
}

document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        goSearchMovie();
    }
});


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
    searchInputNav.style.cssText = 'width: 80%; min-width: 240px;'
    searchInput.style.width='90%'
    
    ulList.style.cssText = 'justify-content: center'
}

function onlyMenuBurgerAndNav(){
    iconSearchMovie.classList.remove('inactive')
    searchInput.classList.add('icon-input')
    for (const iterator of containerNav) {
        iterator.classList.remove('inactive')
    }
    menuBurger.style.display='none'
    searchInputNav.style.cssText = 'min-width: none;'
    searchInput.style.width='0'
    ulList.style.cssText = 'justify-content: space-evenly'
}

function renderMoviesHomePage(data, nodo){
    if(nodo){
        nodo.innerHTML =''
    }
    data.forEach(movie => {
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
            nodo.append(article)
        }else if(puntuacion < 7){
            containerPuntuacion.append(imagPositive,imagPositive,imagPositive,imagNegative,imagNegative)
            containerInfo.append(containerPuntuacion)
            article.append(figureContainer,containerInfo,containerPuntuacion)
            nodo.append(article)
        }else if(puntuacion <=8){
            containerPuntuacion.append(imagPositive,imagPositive,imagPositive,imagPositive,imagNegative)
            containerInfo.append(containerPuntuacion)
            article.append(figureContainer,containerInfo,containerPuntuacion)
            nodo.append(article)
        }else if(puntuacion > 8){
            containerPuntuacion.append(imagPositive,imagPositive,imagPositive,imagPositive,imagPositive)
            containerInfo.append(containerPuntuacion)
            article.append(figureContainer,containerInfo,containerPuntuacion)
            nodo.append(article)
        }
    });
}

function renderCategoriesMovies(data, nodo){
    if(nodo){
        nodo.innerHTML =''
    }

    data.forEach((movie)=>{
        imgHeroPage.setAttribute('src', `https://image.tmdb.org/t/p/w300${data[0].poster_path}`)
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
        nodo.append(article)
    })
}

async function getMoviePreviewTrend(){
    
    const {data} = await instance_api('/trending/movie/day', {
        params:{
            page: 1
        }
    })
    const movies = data.results
    const containerMovie = document.getElementById('movie-tendencias')
    renderMoviesHomePage(movies, containerMovie)
}

async function getMoviePreviewPopular(){
    const {data} = await instance_api('/trending/movie/day',
    {
        params:{
            page: 2
        }
    })
    const movies = data.results
    imgHeroPage.setAttribute('src', `https://image.tmdb.org/t/p/w300${movies[1].poster_path}`)
    const containerMovie = document.getElementById('movie-popular')
    renderMoviesHomePage(movies, containerMovie)
}

async function getCategoryMovies (){
    const {data} = await instance_api('/genre/movie/list')
    
    const genderes = data.genres
    const containerGenderMovie = document.querySelector('.container-gender-movies')
    if(containerGenderMovie){
        containerGenderMovie.innerText = ''
    }
    genderes.forEach((gender)=>{
        const containerTitleGender = createE('article')
        containerTitleGender.classList.add('gender-movies-list')

        const divContainer = createE('div')
        divContainer.classList.add('gender-movies')

        const title = createE('p')
        title.classList.add('gender')
        title.setAttribute('id', gender.id)
        title.innerText = gender.name
        
        title.addEventListener('click', ()=>{
            location.hash = `#gender=${gender.id}-${gender.name}`
        })
        
        divContainer.appendChild(title)
        containerTitleGender.appendChild(divContainer)
        containerGenderMovie.appendChild(containerTitleGender)
    })   
    
}

async function getMovieByCategory(id){
    const {data} = await instance_api('/discover/movie', {
        params: {
            with_genres : id,
        }
    })
    const movies = data.results
    const containerMovie = document.getElementById('movieForCategory')
    renderCategoriesMovies(movies, containerMovie)
}

async function getMovieBySearch(query){
    const {status, data} = await instance_api('/search/movie', {
        params: {
            query,
        }
    })
    const containerMovie = document.getElementById('movieForCategory')
    const movies = data.results
    renderCategoriesMovies(movies, containerMovie)
    console.log({status});
}
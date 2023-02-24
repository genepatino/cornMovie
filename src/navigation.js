function navigator (){
    console.log({location})

    const hashes = {
        '#trends': () => trendsPage(),
        '#search=': () => searchPage(),
        '#movie=': () => moviePage(),
        '#gender=': () => genderPage()
    }

    for (const key in hashes) {
        if(location.hash.startsWith(key)){
            hashes[key]()
            return
        }
    }
    homePage()
}

const qselect = (elemento) => document.querySelector(elemento)
const containerTrends = qselect('.tendencia')
const containerPopulars = qselect('.populares')
const genderMovies = qselect('.gender-categories-movies')
const imagHeroContainer = qselect('.imag-hero-container')
const containerCategories = qselect('.container-categories')
const carrusel = qselect('.slider-container')
const recommendedTrailer = qselect('.recommended-trailer')
const cardTrailerMovie = qselect('.cardTrailerMovieCategory')
const searchInputNav = qselect('.input-nav')
const movieForCategory = qselect('.movieForCategory')

function homePage(){
    console.log('HOME')
    carrusel.classList.remove('slider-container')
    carrusel.classList.add('inactive')

    searchInputNav.classList.add('search-icon-input')
    searchInputNav.classList.remove('input-nav')

    containerTrends.classList.add('tendencia')
    containerTrends.classList.remove('inactive')

    containerPopulars.classList.add('populares')
    containerPopulars.classList.remove('inactive')

    genderMovies.classList.add('gender-categories-movies')
    genderMovies.classList.remove('inactive')

    imagHeroContainer.classList.add('imag-hero-container')
    imagHeroContainer.classList.remove('inactive')
    
    containerCategories.classList.remove('container-carrusel')
    containerCategories.classList.add('container-categories')

    movieForCategory.classList.remove('movieForCategory')

    recommendedTrailer.style.display='none'
    cardTrailerMovie.style.display='none'

    getMoviePreviewTrend()
    getMoviePreviewPopular()
    getGenderMovies()
}


function searchPage(){
    console.log('SEARCH')
    containerTrends.classList.remove('tendencia')
    containerTrends.classList.add('inactive')

    containerPopulars.classList.remove('populares')
    containerPopulars.classList.add('inactive')

    genderMovies.classList.remove('gender-categories-movies')
    genderMovies.classList.add('inactive')

    imagHeroContainer.classList.add('inactive')
    imagHeroContainer.classList.remove('imag-hero-container')
    
    containerCategories.classList.remove('container-categories')
    containerCategories.classList.add('container-carrusel')

    carrusel.classList.remove('inactive')

    searchInputNav.classList.add('search-icon-input')
    searchInputNav.classList.remove('input-nav')
}

function moviePage(){
    console.log('MOVIE')
}

function trendsPage(){
    console.log('TRENDS')
}

function genderPage(){
    console.log('GENDER')
    
    searchInputNav.classList.add('search-icon-input')
    searchInputNav.classList.remove('input-nav')

    carrusel.classList.remove('slider-container')
    carrusel.classList.add('inactive')
    
    containerTrends.classList.remove('tendencia')
    containerTrends.classList.add('inactive')

    imagHeroContainer.classList.add('imag-hero-container')
    imagHeroContainer.classList.remove('inactive')

    containerPopulars.classList.remove('populares')
    containerPopulars.classList.add('inactive')

    genderMovies.classList.add('gender-categories-movies')
    genderMovies.classList.remove('inactive')
    
    containerCategories.classList.remove('container-carrusel')
    containerCategories.classList.add('container-categories')

    recommendedTrailer.style.display='none'
    cardTrailerMovie.style.display='none'

    movieForCategory.classList.remove('inactive')

    getMovieForCategory()
    getGenderMovies()

}

window.addEventListener('load', navigator, false)
window.addEventListener('hashchange', navigator, false)
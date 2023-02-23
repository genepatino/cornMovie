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

function homePage(){
    console.log('HOME')
    carrusel.classList.remove('slider-container')
    carrusel.classList.add('inactive')

    containerTrends.classList.add('tendencia')
    containerTrends.classList.remove('inactive')

    containerPopulars.classList.add('populares')
    containerPopulars.classList.remove('inactive')

    genderMovies.classList.add('gender-categories-movies')
    genderMovies.classList.remove('inactive')

    imagHeroContainer.classList.add('imag-hero-container')
    imagHeroContainer.classList.remove('inactive')
    
    containerCategories.classList.add('container-categories')
    containerCategories.classList.remove('container-carrusel')



    getMoviePreviewTrend()
    getMoviePreviewPopular()
    getGenderMovies()
}

function trendsPage(){
    console.log('TRENDS')
}

function searchPage(){
    console.log('SEARCH')
}

function moviePage(){
    console.log('MOVIE')
}

function genderPage(){
    console.log('GENDER')
    containerTrends.classList.remove('tendencia')
    containerTrends.classList.add('inactive')

    containerPopulars.classList.remove('populares')
    containerPopulars.classList.add('inactive')

    genderMovies.classList.remove('gender-categories-movies')
    genderMovies.classList.add('inactive')

    imagHeroContainer.classList.remove('imag-hero-container')
    imagHeroContainer.classList.add('inactive')
    
    containerCategories.classList.remove('container-categories')
    containerCategories.classList.add('container-carrusel')

    carrusel.classList.remove('inactive')


}

window.addEventListener('load', navigator, false)
window.addEventListener('hashchange', navigator, false)
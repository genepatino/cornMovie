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
    /* document.body.scrollTop = 0
    document.documentElement.scrollTop = 0 */
}


const qselect = (elemento) => document.querySelector(elemento)
const containerTrends = qselect('.tendencia')
const containerPopulars = qselect('.populares')
const genderMovies = qselect('.gender-categories-movies')
const imagHeroContainer = qselect('.imag-hero-container')
const description = qselect('.description')
const cardTrailerMovie = qselect('.cardTrailerMovieCategory')
const searchInputNav = qselect('.input-nav')
const movieForCategory = qselect('.movieForCategory')
const titleByCategory = document.getElementById('title-by-category')
const mainContainer = qselect('.main-container')
const containerCategories = qselect('.container-categories')
const mainNav = qselect('.main-nav')

function homePage(){
    console.log('HOME')

    mainContainer.classList.remove('main-container-movie')
    mainContainer.classList.add('main-container')

    description.classList.remove('description')
    description.style.display = 'none'

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

    movieForCategory.classList.remove('movieForCategory')
    movieForCategory.classList.add('inactive')

    getMoviePreviewTrend()
    getMoviePreviewPopular()
    getCategoryMovies()
}


function searchPage(){
    console.log('SEARCH')

    description.classList.remove('description')
    description.style.display = 'none'

    searchInputNav.classList.add('search-icon-input')
    searchInputNav.classList.remove('input-nav')

    containerTrends.classList.remove('tendencia')
    containerTrends.classList.add('inactive')

    imagHeroContainer.classList.add('imag-hero-container')
    imagHeroContainer.classList.remove('inactive')

    containerPopulars.classList.remove('populares')
    containerPopulars.classList.add('inactive')

    genderMovies.classList.add('gender-categories-movies')
    genderMovies.classList.remove('inactive')

    movieForCategory.classList.remove('inactive')
    movieForCategory.classList.add('movieForCategory')

    const [_, query] = location.hash.split("=")
    /* decodeURI() */
    getMovieBySearch(decodeURI(query))
    getCategoryMovies()
}


function genderPage(){
    console.log('GENDER')

    description.classList.remove('description')
    description.style.display = 'none'

    searchInputNav.classList.add('search-icon-input')
    searchInputNav.classList.remove('input-nav')

    containerTrends.classList.remove('tendencia')
    containerTrends.classList.add('inactive')

    imagHeroContainer.classList.add('imag-hero-container')
    imagHeroContainer.classList.remove('inactive')

    containerPopulars.classList.remove('populares')
    containerPopulars.classList.add('inactive')

    genderMovies.classList.add('gender-categories-movies')
    genderMovies.classList.remove('inactive')

    movieForCategory.classList.remove('inactive')
    movieForCategory.classList.add('movieForCategory')
    
    const [id, nameCategory] = location.hash.replace('#gender=', '').split('-');
    
    getMovieByCategory(id)
    getCategoryMovies()
    /* decodeURI() */
    if(nameCategory){
        titleByCategory.innerText = decodeURI(nameCategory)
    }else{
        titleByCategory.style.display ='none'
    }
    
}

function moviePage(){
    console.log('MOVIE')

    mainNav.classList.add('inactive')

    imagHeroContainer.classList.remove('imag-hero-container')
    imagHeroContainer.classList.add('inactive')

    containerTrends.classList.remove('tendencia')
    containerTrends.classList.add('inactive')

    containerPopulars.classList.remove('populares')
    containerPopulars.classList.add('inactive')

    genderMovies.classList.add('gender-categories-movies')
    genderMovies.classList.remove('inactive')
    genderMovies.style.cssText = 'z-index:2'

    movieForCategory.classList.add('inactive')
    movieForCategory.classList.remove('movieForCategory')

    const [_, id] = location.hash.split("=")

    getMovieById(id)
    getCategoryMovies()
}

function trendsPage(){
    console.log('TRENDS')
}


window.addEventListener('load', navigator, false)
window.addEventListener('hashchange', navigator, false)
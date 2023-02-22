function navigator (){
    console.log({location})

    const hashes = {
        '#trends': () => trendsPage(),
        '#search=': () => searchPage(),
        '#movie': () => moviePage(),
        'gender': () => genderPage()
    }

    for (const key in hashes) {
        if(location.hash.startsWith(key)){
            hashes[key]()
            return
        }
    }
    homePage()
}

function homePage(){
    console.log('HOME')
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
}

window.addEventListener('load', navigator, false)
window.addEventListener('hashchange', navigator, false)
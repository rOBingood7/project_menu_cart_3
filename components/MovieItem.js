export function MovieItem(item) {
    const li = document.createElement('li')
    const del = document.createElement('li')
    const promo__genre = document.querySelector('.promo__genre')
    const promo__title = document.querySelector('.promo__title')
    const promo__descr = document.querySelector('.promo__descr')
    const promo__ratings = document.querySelector('.promo__ratings')
    const promo_bg = document.querySelector('.promo__bg')

    li.classList.add('promo__interactive-item')
    del.classList.add('delete')

    li.innerHTML = item.Title

    li.append(del)

    li.onclick = () => {
        promo__genre.innerHTML = item.Genre
        promo__title.innerHTML = item.Title
        promo__descr.innerHTML = item.Plot
        promo__ratings.innerHTML = `<span>IMDb: ${item.imdbRating}</span><span>Metascore: ${item.Metascore}</span>` 
        promo_bg.style.background = `url('${item.Poster}') no-repeat center center/cover`
    }

    return li
}

export function filterMovies(movies, searchQuery, isShortMovie) {
    const moviesByQuery = movies.filter((item) => {
        const strRu = String(item.nameRU).toLowerCase();
        const strEn = String(item.nameEN).toLowerCase();
        const searchStr = searchQuery.toString().toLowerCase().trim();
        return (strRu.indexOf(searchStr) !== -1 || strEn.indexOf(searchStr) !== -1);
    });

    if (isShortMovie) {
        return filterShortMovies(moviesByQuery);
    }

    return moviesByQuery;
};

export function filterShortMovies(movies) {
    return movies.filter((movie) => movie.duration <= 40);
};
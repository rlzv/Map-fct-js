const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const doubles = numbers.map(function(num){
    return num * 2;
})

//[2, 4, 6, 8 ...]


const movies = [
    {
        title: 'Amari',
        score: 99
    },
    {
        title: 'Stand With U',
        score: 85
    },
    {
        title: 'Warzone',
        score: 95
    },
    {
        title: 'Blinders',
        score: 90,
    }
]


const titles = movies.map(function(movie){
    return movie.title.toUpperCase();
})
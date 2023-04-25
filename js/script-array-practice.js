//STEP 1
// let faveMovie = ["chasing mavericks","point break","clueless","enola","matrix"]
// console.log(faveMovie[1])

//STEP 2
// let movies = new Array(5)
// movies[0] = 'chasing mavericks'
// movies[1] = 'point break'
// movies[2] = 'clueless'
// movies[3] = 'enola'
// movies[4] = 'matrix'
// console.log(movies[0])

//STEP 3
// let movies = new Array(5)
// movies[0] = 'chasing mavericks'
// movies[1] = 'point break'
// movies[2] = 'clueless'
// movies[5] = 'enola'
// movies[4] = 'matrix'
// movies[3] = 'gatacca'
// console.log(movies.length)

//STEP 4
// let movies = ["chasing mavericks","point break","clueless","enola","matrix"]
// delete movies[0]
// console.log(movies)

//STEP 5
// let movies = ['chasing mavericks','point break','clueless','enola','matrix','star wars','tangled']
// for (let movie in movies) {
//     console.log(movies[movie])
// }

//STEP 6
// let movies = ['chasing mavericks','point break','clueless','enola','matrix','star wars','tangled']
// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 7
// let movies = ['chasing mavericks','point break','clueless','enola','matrix','star wars','tangled'].sort()
// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 8
// let movies = ['chasing mavericks','point break','clueless','enola','matrix','star wars','tangled']
// console.log(`Movies I like:\n\n`)
// for (let movie of movies) {
//     console.log(movie)
// }
// console.log(`\n`)
// let leastFavMovies = ['disenchanted','hocus pocus 2','mummy 3']
// console.log(`Movies I regret watching:\n\n`)
// for (let least of leastFavMovies) {
//     console.log(least)
// }


//STEP 9
// let movies = ['chasing mavericks','point break','clueless','enola','matrix','star wars','tangled']

// let leastFavMovies = ['disenchanted','hocus pocus 2','mummy 3']

// let allMovies = movies.concat(leastFavMovies).reverse()
// for (let all of allMovies) {
//     console.log(all)
// }


//STEP 10
// let movies = ['chasing mavericks','point break','clueless','enola','matrix','star wars','tangled']

// let leastFavMovies = ['disenchanted','hocus pocus 2','mummy 3']

// let allMovies = movies.concat(leastFavMovies)
// let lastMovie = console.log(allMovies[9]) 

//STEP 11
// let movies = ['chasing mavericks','point break','clueless','enola','matrix','star wars','tangled']

// let leastFavMovies = ['disenchanted','hocus pocus 2','mummy 3']

// let allMovies = movies.concat(leastFavMovies)
// let lastMovie = console.log(allMovies[0]) 

//STEP 12
// allMovies.splice(7,8, 'never have i ever','500 days of summer')
// console.log(allMovies)

//STEP 13
// let movies = [['chasing mavericks',1],['point break',2],['clueless',3],['gatacca',4],['tangled',5]]
// let movieName = movies.filter((item) => {
//         return typeof item === 'string' 
// })
// console.log(movieName)


//STEP 14
// let employees = ['zak','jessica','mark','fred','sally']
// function showEmployee(name) {
//     for (let i = 0; i < employees.length; i++) {
//         console.log(`${employees[i]}`)
//     }
// }
// showEmployee()


//STEP 15
// let randomStuff = [58, '', 'abcd', true, null, false, 0]
// let randomFilter = randomStuff.filter((item) => {
//     return item === 58 || item === true || item === 'abcd'
// })
// console.log(randomFilter)


//STEP 16
// let nums = [1, 2, 99.8, 4, 5, 6, 7, 8, 9 ,100]
// function getRandomNum(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         newNum = Math.floor(Math.random() * 10)
//     }
//     console.log(`${nums[newNum]}`)  
// }
// getRandomNum(nums)


//STEP 17
let nums = [1, 2, 99.8, 4, 5, 6, 7, 800, 9 ,100]
let largest = nums[0]

function largeNum (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (largest < nums[i]) {
            largest = nums[i] 
        }
    }
    console.log(largest)
}
largeNum(nums)
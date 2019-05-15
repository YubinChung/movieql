export const people = [
  {
    id: 1,
    name: "yubin",
    age: 18,
    gender : "female"
  },
  {
    id: 2, 
    name: "yubin2",
    age: 18,
    gender : "male"
  },
  {
    id: 3, 
    name: "yubin3",
    age: 18,
    gender : "male"
  }
];

let movies = [
  {
    id: 1,
    name: "Movie 1",
    score : 99
  },
  {
    id: 2,
    name: "Movie 2",
    score : 58
  },
  {
    id: 3,
    name: "Movie 3",
    score : 42
  },
  {
    id: 4,
    name: "Movie 4",
    score : 96
  }
];

export const getById = id => {
  const filteredPeople = people.filter(people => people.id === id);
  return filteredPeople[0]; // return the first item from filtered array
}

export const getMovies = () => movies;
export const getMovieById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0]; // return the first item from filtered array
}

export const deleteMovie = (id) => {
  const cleanedMovie = movies.filter(movie => movie.id !== id);
  if(movies.length > cleanedMovie.length){
    movies = cleanedMovie;
    return true;
  }else{ return false;}
}

export const createMovie = (name, score) =>{
  let id = movies.length + 1;
  let newMovie = {id , name, score}
  movies.push( newMovie)
  return newMovie;
}
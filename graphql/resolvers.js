// import { people, getById, getMovies, getMovieById, createMovie, deleteMovie } from "./db";

// const resolvers = {
//   Query:{
//     people: () => people,
//     person: (_, {id}) => getById(id),
//     movies: () => getMovies(),
//     movie: (_, {id}) => getMovieById(id)
//   },
//   Mutation:{
//     addMovie: (_, {name, score})=> createMovie(name, score),
//     deleteMovie: (_, {id}) => deleteMovie(id)
//   }
// }


import { getMovies, getMovie, getSuggestions } from "./api";
const resolvers = {
  Query:{
    movies: (_, {limit, minimum_rating})=> getMovies(limit, minimum_rating),
    movie : (_, {id}) => getMovie(id),
    suggestions : (_, {id}) => getSuggestions(id),
  }
}

export default resolvers;
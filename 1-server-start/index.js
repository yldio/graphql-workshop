const { ApolloServer, gql } = require('apollo-server')

const Movies = [
  {
    id: 1,
    name: 'Sharkando',
    year: 2013
  },
  {
    id: 2,
    name: 'The Room',
    year: 2003
  }
]

const typeDefs = gql`
  type Movie {
    # The id of the movie
    id: ID
    # Name of the movie
    name: String
    year: Int
  }

  type Query {
    allMovies: [Movie]
    movie(id: ID): Movie
  }
`

const resolvers = {
  Query: {
    allMovies: () => Movies,
    movie: (_, { id }) => {
      return Movies.find(movie => movie.id === parseInt(id, 10))
    }
  },
}


const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(data => console.log(`server started at port ${data.port}`))

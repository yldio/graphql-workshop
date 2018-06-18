const axios = require('axios')
const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
  `postgres://${process.env.USERNAME}:${
    process.env.PASSWORD
  }@ec2-23-23-247-245.compute-1.amazonaws.com:5432/${process.env.DB}`,
  {
    ssl: true,
    dialectOptions: {
      ssl: true
    }
  }
)

const Framework = sequelize.define('frameworks', {
  name: {
    type: Sequelize.STRING
  },
  git: {
    type: Sequelize.STRING
  },
  stars: { type: Sequelize.INTEGER, defaultValue: 0 }
})
module.exports = {
  Query: {
    frameworks: async () => {
      await Framework.sync()
      try {
        const frameworks = await Framework.findAll()

        return frameworks
      } catch (e) {
        throw new Error(e)
      }
    }
  },
  Mutation: {
    addFramework: async (_, { name, git }) => {
      await Framework.sync()
      try {
        const url = git.split('https://github.com/')[1]
        const stars = await axios(`https://api.github.com/repos/${url}`)

        const framework = Framework.create({
          name,
          git,
          stars: stars.data.stargazers_count
        })

        return framework
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}

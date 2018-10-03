const axios = require("axios");
const Sequelize = require("sequelize");
require("dotenv").config({ path: "../.env" });

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${
    process.env.DB_HOST
  }:5432/${process.env.DB}`,
  {
    ssl: true,
    dialectOptions: {
      ssl: true
    }
  }
);

const Framework = sequelize.define("frameworks", {
  name: {
    type: Sequelize.STRING
  },
  git: {
    type: Sequelize.STRING
  },
  stars: { type: Sequelize.INTEGER, defaultValue: 0 },
  description: { type: Sequelize.STRING, defaultValue: "" },
  avatar: { type: Sequelize.STRING, defaultValue: "" }
});

// Framework.sync({ force: true });
//Framework.sync();

module.exports = {
  Query: {
    frameworks: () => Framework.findAll()
  },
  Mutation: {
    addFramework: async (_, { name, git }) => {
      try {
        const url = git.split("https://github.com/")[1];
        const gh = await axios(`https://api.github.com/repos/${url}`);

        const framework = await Framework.create({
          name,
          git,
          stars: gh.data.stargazers_count,
          description: gh.data.description,
          avatar: gh.data.owner.avatar_url
        });

        return framework;
      } catch (e) {
        throw new Error(e);
      }
    }
  }
};

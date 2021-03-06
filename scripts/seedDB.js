const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mealprepdb");

const userSeed = [
  {
    email: "libby.duggan@gmail.com",
    favorites: [],
    userPreference: ["veg", "keto"],
    weeklymenu: {
      monday: {
        breakfast: {
          uri:
            "http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f03bc",
          calories: "584",
          protein: "23",
          fat: "5",
          carb: "46",
          label: "potato",
          url: "http://www.simplyrecipes.com/recipes/homemade_potato_bread/",
          time: "36",
          ingredients: ["banana", "apple"],
          image:
            "https://www.edamam.com/web-img/d9e/d9eeea65936abc325933c38a400ea6a6.jpg"
        },
        lunch: {
          uri:
            "http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f04bc",
          calories: "584",
          protein: "23",
          fat: "5",
          carb: "46",
          label: "protein",
          url: "http://www.simplyrecipes.com/recipes/homemade_potato_bread/",
          time: "28",
          ingredients: ["beans", "tomatos"],
          image:
            "https://www.edamam.com/web-img/d9e/d9eeea65936abc325933c38a400ea6a6.jpg"
        },
        dinner: {
          uri:
            "http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f05bc",
          calories: "584",
          protein: "23",
          fat: "5",
          carb: "46",
          label: "pepperoni",
          url: "http://www.simplyrecipes.com/recipes/homemade_potato_bread/",
          time: "59",
          ingredients: ["cheese", "milk"],
          image:
            "https://www.edamam.com/web-img/d9e/d9eeea65936abc325933c38a400ea6a6.jpg"
        }
      },
      tuesday: {
        breakfast: {
          uri:
            "http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f06bc",
          calories: "584",
          protein: "23",
          fat: "5",
          carb: "46",
          label: "pizza",
          url: "http://www.simplyrecipes.com/recipes/homemade_potato_bread/",
          time: "78",
          ingredients: ["sugar", "chips"],
          image:
            "https://www.edamam.com/web-img/d9e/d9eeea65936abc325933c38a400ea6a6.jpg"
        },
        lunch: {
          uri:
            "http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f07bc",
          calories: "584",
          protein: "23",
          fat: "5",
          carb: "46",
          label: "meshed potato",
          url: "http://www.simplyrecipes.com/recipes/homemade_potato_bread/",
          time: "34",
          ingredients: ["jam", "sugar"],
          image:
            "https://www.edamam.com/web-img/d9e/d9eeea65936abc325933c38a400ea6a6.jpg"
        },
        dinner: {
          uri:
            "http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f08bc",
          calories: "584",
          protein: "23",
          fat: "5",
          carb: "46",
          label: "pie",
          url: "http://www.simplyrecipes.com/recipes/homemade_potato_bread/",
          time: "12",
          ingredients: ["cream", "lettuce"],
          image:
            "https://www.edamam.com/web-img/d9e/d9eeea65936abc325933c38a400ea6a6.jpg"
        }
      }
    },
    date: new Date(Date.now())
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

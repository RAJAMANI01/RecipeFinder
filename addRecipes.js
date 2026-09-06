const mongoose=require("mongoose");
const dotenv=require("dotenv");
const Recipe=require("./models/Recipe");

dotenv.config();

const recipes=[
{
name:"Creamy Alfredo Pasta",
description:"Creamy Italian pasta with garlic, parmesan and tender chicken.",
ingredient:"pasta chicken cream garlic",
diet:"Non-Vegetarian",
cuisine:"Italian",
meal:"Dinner",
time:"30 min",
rating:4.9,
emoji:"🍝",
ingredients:["200g pasta","150g chicken","1 cup cream","3 cloves garlic","50g parmesan","Salt and pepper"],
steps:["Boil pasta until soft.","Cook chicken with garlic.","Add cream and parmesan.","Mix pasta with the sauce.","Serve hot."]
},
{
name:"Paneer Butter Masala",
description:"Rich and creamy Indian paneer curry cooked in tomato gravy.",
ingredient:"paneer tomato butter cream",
diet:"Vegetarian",
cuisine:"Indian",
meal:"Dinner",
time:"35 min",
rating:4.8,
emoji:"🍛",
ingredients:["200g paneer","3 tomatoes","2 tbsp butter","1/2 cup cream","Garam masala","Salt"],
steps:["Prepare tomato puree.","Heat butter and cook spices.","Add tomato puree.","Add paneer and cream.","Cook for 10 minutes and serve."]
},
{
name:"Veggie Burrito Bowl",
description:"Fresh Mexican-style bowl packed with rice, beans and vegetables.",
ingredient:"rice beans corn avocado tomato",
diet:"Vegan",
cuisine:"Mexican",
meal:"Lunch",
time:"25 min",
rating:4.7,
emoji:"🥗",
ingredients:["1 cup rice","1/2 cup beans","1/2 cup corn","1 avocado","Tomato","Lime"],
steps:["Cook the rice.","Prepare beans and corn.","Slice avocado and tomato.","Place everything in a bowl.","Add lime juice and serve."]
},
{
name:"Chicken Fried Rice",
description:"Flavorful fried rice with chicken, vegetables and soy sauce.",
ingredient:"rice chicken egg vegetables soy",
diet:"Non-Vegetarian",
cuisine:"Chinese",
meal:"Lunch",
time:"25 min",
rating:4.8,
emoji:"🍚",
ingredients:["2 cups cooked rice","150g chicken","1 egg","Mixed vegetables","2 tbsp soy sauce"],
steps:["Cook chicken pieces.","Add vegetables and egg.","Add cooked rice.","Pour soy sauce.","Stir fry for 5 minutes."]
},
{
name:"Classic Pancakes",
description:"Soft and fluffy pancakes perfect for a delicious breakfast.",
ingredient:"flour milk egg butter sugar",
diet:"Vegetarian",
cuisine:"American",
meal:"Breakfast",
time:"20 min",
rating:4.6,
emoji:"🥞",
ingredients:["1 cup flour","1 cup milk","1 egg","2 tbsp sugar","1 tbsp butter","1 tsp baking powder"],
steps:["Mix flour, sugar and baking powder.","Add milk and egg.","Mix until smooth.","Cook pancakes on a hot pan.","Serve with butter and syrup."]
},
{
name:"Margherita Pizza",
description:"Classic Italian pizza topped with tomato, mozzarella and basil.",
ingredient:"pizza tomato mozzarella basil cheese",
diet:"Vegetarian",
cuisine:"Italian",
meal:"Dinner",
time:"40 min",
rating:4.9,
emoji:"🍕",
ingredients:["Pizza base","Tomato sauce","Mozzarella","Fresh basil","Olive oil"],
steps:["Spread tomato sauce on the base.","Add mozzarella.","Add fresh basil.","Bake until cheese melts.","Slice and serve."]
},
{
name:"Masala Dosa",
description:"Crispy South Indian dosa filled with spicy potato masala.",
ingredient:"rice potato dosa lentil masala",
diet:"Vegan",
cuisine:"Indian",
meal:"Breakfast",
time:"40 min",
rating:4.8,
emoji:"🥞",
ingredients:["Dosa batter","3 potatoes","Onion","Green chilli","Mustard seeds","Curry leaves"],
steps:["Prepare potato masala.","Heat a dosa pan.","Spread dosa batter thinly.","Add potato filling.","Fold and serve with chutney."]
},
{
name:"Chocolate Brownie",
description:"Rich and fudgy chocolate brownies for a sweet treat.",
ingredient:"chocolate cocoa flour butter sugar",
diet:"Vegetarian",
cuisine:"American",
meal:"Dessert",
time:"35 min",
rating:4.9,
emoji:"🍫",
ingredients:["Dark chocolate","Butter","Sugar","Flour","Cocoa powder","2 eggs"],
steps:["Melt chocolate and butter.","Mix sugar and eggs.","Add flour and cocoa.","Pour into baking tray.","Bake until fudgy."]
},
{
name:"Guacamole Tacos",
description:"Fresh tacos filled with creamy guacamole and vegetables.",
ingredient:"avocado corn tortilla tomato lime",
diet:"Vegan",
cuisine:"Mexican",
meal:"Lunch",
time:"20 min",
rating:4.7,
emoji:"🌮",
ingredients:["Corn tortillas","2 avocados","Tomato","Onion","Lime","Coriander"],
steps:["Mash the avocados.","Mix with tomato and onion.","Add lime juice.","Warm tortillas.","Fill tortillas and serve."]
}
];

mongoose.connect(process.env.MONGO_URI)
.then(async()=>{
await Recipe.deleteMany();
await Recipe.insertMany(recipes);
console.log("Recipes added successfully");
process.exit();
})
.catch(error=>{
console.log(error);
process.exit(1);
});
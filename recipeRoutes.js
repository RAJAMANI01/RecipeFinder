const express=require("express");
const Recipe=require("../models/Recipe");

const router=express.Router();

router.get("/",async(req,res)=>{
try{
const {search,diet,cuisine,meal}=req.query;
let filter={};

if(search){
filter.$or=[
{name:{$regex:search,$options:"i"}},
{ingredient:{$regex:search,$options:"i"}},
{description:{$regex:search,$options:"i"}}
];
}

if(diet&&diet!=="all") filter.diet=diet;
if(cuisine&&cuisine!=="all") filter.cuisine=cuisine;
if(meal&&meal!=="all") filter.meal=meal;

const recipes=await Recipe.find(filter);
res.json(recipes);
}catch(error){
res.status(500).json({message:error.message});
}
});

router.get("/:id",async(req,res)=>{
try{
const recipe=await Recipe.findById(req.params.id);
if(!recipe)return res.status(404).json({message:"Recipe not found"});
res.json(recipe);
}catch(error){
res.status(500).json({message:error.message});
}
});

router.post("/",async(req,res)=>{
try{
const recipe=new Recipe(req.body);
const savedRecipe=await recipe.save();
res.status(201).json(savedRecipe);
}catch(error){
res.status(400).json({message:error.message});
}
});

router.delete("/:id",async(req,res)=>{
try{
await Recipe.findByIdAndDelete(req.params.id);
res.json({message:"Recipe deleted"});
}catch(error){
res.status(500).json({message:error.message});
}
});

module.exports=router;
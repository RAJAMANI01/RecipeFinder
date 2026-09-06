const mongoose=require("mongoose");

const recipeSchema=new mongoose.Schema({
name:{type:String,required:true},
description:{type:String,required:true},
ingredient:{type:String,required:true},
diet:{type:String,required:true},
cuisine:{type:String,required:true},
meal:{type:String,required:true},
time:{type:String,required:true},
rating:{type:Number,default:4.5},
emoji:{type:String,default:"🍴"},
ingredients:[String],
steps:[String]
});

module.exports=mongoose.model("Recipe",recipeSchema);
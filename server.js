const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const dotenv=require("dotenv");
const dns=require("dns");

dotenv.config();

dns.setDefaultResultOrder("ipv4first");

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
console.log("MongoDB connected successfully");
})
.catch(error=>{
console.log("MongoDB connection error:",error);
});

const recipeRoutes=require("./routes/recipeRoutes");
app.use("/api/recipes",recipeRoutes);

app.get("/",(req,res)=>{
res.send("Recipe Finder API is running");
});

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
console.log(`Server running on http://localhost:${PORT}`);
});
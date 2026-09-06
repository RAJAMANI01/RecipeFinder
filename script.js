const API_URL="http://localhost:5000/api/recipes";

let recipes=[];

async function loadRecipes(){
try{
const search=document.getElementById("searchInput").value;
const diet=document.getElementById("dietFilter").value;
const cuisine=document.getElementById("cuisineFilter").value;
const meal=document.getElementById("mealFilter").value;

const params=new URLSearchParams();

if(search)params.append("search",search);
if(diet!=="all")params.append("diet",diet);
if(cuisine!=="all")params.append("cuisine",cuisine);
if(meal!=="all")params.append("meal",meal);

const response=await fetch(`${API_URL}?${params.toString()}`);
recipes=await response.json();

displayRecipes(recipes);
}catch(error){
console.log(error);
document.getElementById("recipeContainer").innerHTML='<div class="empty"><h2>⚠️ Server not connected</h2><p>Start the backend server and try again.</p></div>';
}
}

function displayRecipes(data){
const container=document.getElementById("recipeContainer");

document.getElementById("recipeCount").textContent=data.length+" recipes";

if(data.length===0){
container.innerHTML='<div class="empty"><h2>😕 No recipes found</h2><p>Try another ingredient or filter.</p></div>';
return;
}

container.innerHTML=data.map(recipe=>`
<div class="recipe-card">
<div class="recipe-image">${recipe.emoji}</div>
<div class="recipe-info">
<h3>${recipe.name}</h3>
<p>${recipe.description}</p>
<div class="tags">
<span class="tag">${recipe.cuisine}</span>
<span class="tag">${recipe.diet}</span>
<span class="tag">${recipe.time}</span>
</div>
<div class="card-bottom">
<span>⭐ ${recipe.rating}</span>
<button class="view-btn" onclick="showRecipe('${recipe._id}')">View Recipe</button>
<span class="favorite" onclick="toggleFavorite(this)">♡</span>
</div>
</div>
</div>`).join("");
}

async function showRecipe(id){
const response=await fetch(`${API_URL}/${id}`);
const recipe=await response.json();

document.getElementById("modalContent").innerHTML=`
<div class="modal-emoji">${recipe.emoji}</div>
<h2>${recipe.name}</h2>
<p>${recipe.description}</p>
<p><strong>⭐ ${recipe.rating}</strong> | ⏱ ${recipe.time} | 🌎 ${recipe.cuisine}</p>
<h3>Ingredients</h3>
<ul>${recipe.ingredients.map(item=>`<li>${item}</li>`).join("")}</ul>
<h3>Preparation</h3>
<ol>${recipe.steps.map(step=>`<li>${step}</li>`).join("")}</ol>`;

document.getElementById("modal").style.display="flex";
}

function toggleFavorite(element){
element.textContent=element.textContent==="♡"?"❤️":"♡";
}

function clearFilters(){
document.getElementById("searchInput").value="";
document.getElementById("dietFilter").value="all";
document.getElementById("cuisineFilter").value="all";
document.getElementById("mealFilter").value="all";
loadRecipes();
}

document.getElementById("searchInput").addEventListener("keyup",function(event){
if(event.key==="Enter")loadRecipes();
});

function closeModal(){
document.getElementById("modal").style.display="none";
}

window.onclick=function(event){
if(event.target===document.getElementById("modal"))closeModal();
};

loadRecipes();
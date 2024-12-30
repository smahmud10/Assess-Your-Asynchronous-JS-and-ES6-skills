// Fetch All Pet Categories
const allPetCategory = async() =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
    const data = await response.json();
    petBtn(data.categories);
}
const categoryId = async () =>{
   const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/dog`)
   const data = await response.json();
   console.log(data.data);
}
categoryId()

const petBtn = (buttons) => {
   document.getElementById("spinner").style.display = "none"
   const btnContainer = document.getElementById('pet-btn');
btnContainer.innerHTML = '';
// console.log(buttons);
buttons.map((button) =>{
// console.log(button);
const { category_icon, category } = button;
// console.log(category_icon);
   const createButton = document.createElement('div')
createButton.innerHTML = `
 <button onclick="clickSpiner('${category}')" class="flex items-center justify-center gap-2 p-2 rounded-3xl border bg-stone-100  border-green-300 w-28">
                  <img src="${category_icon}" alt="Cat" class="w-6 h-6" />
                  <span class="font-semibold">${category}</span>
                </button>
`;
btnContainer.append(createButton)
});
}




const clickSpiner = () => {

   document.getElementById("spinner").style.display = "block"


   setTimeout(() => {
      allPetCategory();
   }, 2000);
}

// Fetch All Pets
const allPets = async () =>{
   const response = await fetch (`https://openapi.programming-hero.com/api/peddy/pets`)
   const data = await response.json();
   loadAllPets(data.pets);

}
const loadAllPets = (allPets) =>{
allPets.map((pet) => {

})
}
allPets()

allPetCategory()

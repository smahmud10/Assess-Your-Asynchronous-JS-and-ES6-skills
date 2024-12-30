// Fetch All Pet Categories
const allPetCategory = async() =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
    const data = await response.json();
    petBtn(data.categories);
}
// Fetch All Pets
const allPets = async () =>{
   const response = await fetch (`https://openapi.programming-hero.com/api/peddy/pets`)
   const data = await response.json();
   console.log(data.pets);

}

const petBtn = (buttons) => {
   const btnContainer = document.getElementById('pet-btn');
// console.log(buttons);
buttons.map((button) =>{
// console.log(button);
const { category_icon, category } = button;
// console.log(category_icon);
   const createButton = document.createElement('div')
createButton.innerHTML = `
 <button class="flex items-center justify-center gap-2 p-2 rounded-3xl border bg-stone-100  border-green-300 w-28">
                  <img src="${category_icon}" alt="Cat" class="w-6 h-6" />
                  <span class="font-semibold">${category}</span>
                </button>
`;
btnContainer.append(createButton)
});
}


allPetCategory()
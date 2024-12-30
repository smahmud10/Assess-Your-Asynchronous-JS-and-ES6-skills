// Fetch All Pet Categories
const allPetCategory = async() =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
    const data = await response.json();
    petBtn(data.categories);
}
const categoryId = async () =>{
   const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/dog`)
   const data = await response.json();
   // console.log(data.data);
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
   displayLoadAllPets(data.pets);

}
const displayLoadAllPets = (allPets) =>{
   const cardContainer = document.getElementById("cardContainer");
allPets.map((pet) => {
console.log(pet);
const { pet_name, breed, birth, gender, price, image, petId,vaccinated_status,date_of_birth, pet_details} =pet
const card = document.createElement('div')
card.innerHTML=`
     <div class="card border-2 border-gray-200 rounded-lg shadow-md ">
                    <figure><img src="${image}" alt="Mister Tartosh" class="rounded-t-lg"></figure>
                <div class="p-4">
                      <h3 class="font-bold">${pet_name}</h3>
                      <p><span class="font-semibold">Breed: ${breed || 'N/A'}</p>
                      <p><span class="font-semibold">Birth: ${birth || 'N/A'} </p>
                      <p><span class="font-semibold">Gender:</span> ${gender || 'N/A'}</p>
                      <p><span class="font-semibold">Price:</span> ${price || 'N/A'}</p>
                   <div class="flex justify-between mt-4">
                            <button class="likeBtn btn bg-gray-100 text-gray-700 rounded-lg px-4 py-2">
                            Like
                            <button>
                            <button class="btn bg-gray-100 text-gray-700 rounded-lg px-4 py-2">Adopt</button>
                            <button onclick="modalDetails('${pet.petId}')" class=" btn bg-teal-100 text-teal-700 rounded-lg px-4 py-2">Deatils</button>
                   </div>
               </div>
        </div>
`
cardContainer.append(card)


const likeBtn = card.querySelector('.likeBtn');
console.log(likeBtn);
likeBtn.addEventListener('click', () => {
    const likedPetContainer = document.getElementById('likedPetContainer');

    const likedPet = document.createElement('img');
    likedPet.src = image;
    likedPet.alt = `${pet_name}`;
    likedPet.classList.add('w-16', 'h-16', 'shadow-md', 'rounded-md');
    likedPetContainer.appendChild(likedPet);
});





})



}
allPets()

allPetCategory()

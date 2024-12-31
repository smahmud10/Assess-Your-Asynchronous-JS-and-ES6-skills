// Fetch All Pet Categories
const allPetCategory = async() =>{

    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/categories/`);
    const data = await response.json();
    petBtn(data.categories);
}
const categoryId = async (id) =>{
   const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
   const data = await response.json();
   displayLoadAllPets(data.data);
   console.log(data.data);
}



const petBtn = (buttons) => {
//    document.getElementById("spinner").style.display = "none"
   const btnContainer = document.getElementById('pet-btn');
btnContainer.innerHTML = '';
// console.log(buttons);
buttons.map((button) =>{
// console.log(button);
const { category_icon, category, } = button;
// console.log(category_icon);
   const createButton = document.createElement('div')
createButton.innerHTML = `
 <button  onclick="categoryId('${category}')" id= "btn" class="flex items-center justify-center gap-2 p-2 rounded-3xl border bg-stone-100  border-green-300 w-28">
                  <img src="${category_icon}" alt="Cat" class="w-6 h-6" />
                  <span class="font-semibold">${category}</span>
                </button>
`;
btnContainer.append(createButton)
});
}





// const loadSpin = document.getElementById("btn")
// loadSpin.addEventListener('click', () => {

//     document.getElementById("spinner").style.display = "block"

//        setTimeout(() => {
//         allPetCategory(id);
//         }, 2000);

// })

// const clickSpiner = () => {

//    document.getElementById("spinner").style.display = "block"

//    setTimeout(() => {
//     allPetCategory(id);
//    }, 2000);
// }


// Fetch All Pets
const allPets = async () =>{
   const response = await fetch (`https://openapi.programming-hero.com/api/peddy/pets`)
   const data = await response.json();
   displayLoadAllPets(data.pets.slice(0,8));

}
const displayLoadAllPets = (allPets) =>{
   const cardContainer = document.getElementById("cardContainer");
   cardContainer.innerHTML = " ";

    if (allPets.length == 0){
            cardContainer.classList.remove("grid");
            cardContainer.innerHTML = `
            <div class ="min-[300px] flex flex-col gap-5 justify-center items-center pb-40 " >
                <img src="/images/Icon.png" alt="">
                <h2 class =" text-xl text-center font-bold" >
                No content Here in this Categoies
                </h2>
            </div>
            `;
            return;
        }
        else{
            cardContainer.classList.add("grid")
        }


allPets.map((pet) => {
// console.log(pet);
const { pet_name, breed, gender, price, image, petId,vaccinated_status,date_of_birth, category,pet_details} =pet;
const card = document.createElement('div')
card.innerHTML=`
     <div class="card border-2 border-gray-200 rounded-lg shadow-md ">
                    <figure><img src="${image}" alt="Mister Tartosh" class="rounded-t-lg"></figure>
                <div class="p-4">
                      <h3 class="font-bold">${pet_name}</h3>
                      <h3 class="font-bold">${category}</h3>
                      <p><span class="font-semibold">Breed: ${breed || 'N/A'}</p>
                      <p><span class="font-semibold">petId: ${petId || 'N/A'}</p>
                      <p><span class="font-semibold">Birth: ${date_of_birth || 'N/A'} </p>
                      <p><span class="font-semibold">Gender:</span> ${gender || 'N/A'}</p>
                      <p><span class="font-semibold">Price:</span>$${price || 'N/A'}</p>
                   <div class="flex justify-between mt-4">
                            <button class="likeBtn btn bg-gray-100 text-gray-700 rounded-lg px-4 py-2">
                            Like
                            <button>
                            <button class="btn bg-gray-100 text-gray-700 rounded-lg px-4 py-2">Adopt</button>
                            <button onclick="Details('${image}','${petId}', '${pet_name}', '${breed}', '${gender}', '${vaccinated_status}', '${date_of_birth}', '${price}', '${pet_details.replace(/'/g, "\\'")}')" class=" btn bg-teal-100 text-teal-700 rounded-lg px-4 py-2">Deatils</button>
                   </div>
               </div>
        </div>
`
cardContainer.append(card)

// button click

const likeBtn = card.querySelector('.likeBtn');
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


//image, petId, pet_name, breed, gender, vaccinated_status, date_of_birth, price, pet_details
const Details = (image, petId, pet_name, breed, gender, vaccinated_status, date_of_birth,price, pet_details,) => {
   const box = document.getElementById('box');
   box.innerHTML = `
   <img class="w-full" src="${image}" alt="${pet_name}">
   <p class="mt-5 text-2xl font-bold mb-4">${petId}</p>
       <p class="mt-5 text-2xl font-bold mb-4">${pet_name}</p>
       <div class="flex gap-9 mb-5">
           <div>
               <p><i class="fa-solid fa-bread-slice"></i> Breed: ${breed || 'N/A'}</p>
               <p><i class="fa-solid fa-mercury"></i> Gender: ${gender || 'N/A'}</p>
               <p><i class="fa-solid fa-shield-virus"></i> Vaccinated Status: ${vaccinated_status || 'N/A'}</p>
           </div>
           <div>
               <p><i class="fa-solid fa-cake-candles"></i> Birth: ${date_of_birth || 'N/A'}</p>
               <p><i class="fa-solid fa-dollar-sign"></i> Price: ${price || 'N/A'}$</p>
           </div>
       </div>
       <div class="divider mb-5"></div>
       <p class="mb-5 font-bold">Detailed Information</p>
       <p>${pet_details}</p>
       <div class="modal-action">
           <form method="dialog" class="w-full">
               <div>
                   <button class="btn w-full text-[#0E7A81] bg-[#0E7A811A]">Cancel</button>
               </div>
           </form>
       </div>
   `;

   document.getElementById('mymodal').showModal();
}
// Details();
allPets();

allPetCategory()

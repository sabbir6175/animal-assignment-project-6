console.log('show all data');

// create loadCategories use the button 
const loadCategoriesBtn = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then((res) => res.json())
        .then((data)=> displayCategories(data.categories))
        .catch((error)=> console.error(error))
}

// click button show category

// {
//     "id": 1,
//     "category": "Cat",
//     "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
//   }
// create displayCategories show button browser

const displayCategories =(categories) =>{
    const categoriesBtn = document.getElementById('categories')
    // console.log(data);
    categories.forEach((items)=> {
        console.log(items);
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
            <button class="btn btn-lg w-60 h-[78px]  border-2 border-gray-200 hover:rounded-full hover:bg-[#6cb2b7d5]">
             <img src="${items.category_icon}" alt="Category Icon" class="category-icon" /> 
             <span class="text-xl md:text-3xl">${items.category}</span>
            </button>
        `
        
        categoriesBtn.append(buttonContainer)
    })
}
// card section load card 
const loadCard = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then((res) => res.json())
        .then((data)=> displayCard(data.pets))
        .catch((error)=> console.error(error))
}

// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }


// card section display show
const displayCard = (pets) => {
    const cardLeft = document.getElementById('card-left')
    pets.forEach((pet) => {
        console.log(pet);

    // card show data form api
        const card = document.createElement('div')
        card.classList= 'card p-5 border-2 border-gray-200'
        card.innerHTML = `
         <figure class="h-[200px]">
            <img
            src=${pet.image}
            class="w-full h-full object-cover"
            alt="Shoes"
            class="rounded-xl" />
        </figure>
        <div class="card-body p-0 mt-3">
             <div>
                <h1 class="text-xl font-black mb-4">${pet.pet_name}</h1>
                <div class="flex gap-2 mb-2">
                    <img src="images/Frame1.png" alt="">
                    <span>breed: ${ pet.breed ? pet.breed : "Normal Breed"}</span>
                </div>
                <div class="flex gap-2 mb-2">
                    <img src="images/Frame2.png" alt="">
                    <span>Birth: ${pet.date_of_birth ? pet.date_of_birth : "Not available"}</span>
                </div>
                <div class="flex gap-2 mb-2">
                    <img src="images/Frame3.png" alt="">
                    <span>Gender: ${pet.gender ? pet.gender : "Not mentioned"}</span>
                </div>
                <div class="flex gap-2 mb-2">
                    <img src="images/Frame4.png" alt="">
                    <span>Price: ${pet.price ? pet.price : "Not available"}$</span>
                </div>
                  <div class="divider"></div>
                <div class="flex justify-between gap-2">
                    <button onclick="ClickShowImage('${pet.image}')" class="btn"><img src="images/like.png" alt=""></button>
                    <button class="btn text-[#0E7A81] text-lg font-bold">Adopt</button>
                    <button class="btn text-[#0E7A81] text-lg font-bold">Details</button>
                </div>
            </div>

        </div>
        
        `
        cardLeft.appendChild(card)
    })
}
 // like button a click korle image ta right side a show korbe 
const ClickShowImage = (image) => {
    const cardRight = document.getElementById('card-right');
    const cardRightBtn = document.createElement('div');
    cardRightBtn.innerHTML = `
        <figure>
            <img src="${image}" alt="Liked Pet Image" class="w-full h-[130px] rounded-xl" />
        </figure>
    `;
    cardRight.appendChild(cardRightBtn)
};


loadCategoriesBtn()
loadCard()


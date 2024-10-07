console.log('show all data');

// create loadCategories use the button 
const loadCategoriesBtn = () => {
    // 3 number api fetch
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then((res) => res.json())
        .then((data)=> displayCategories(data.categories))
        .catch((error)=> console.error(error))
}
// remove active button 
const removeActiveBtn = () =>{
    const button = document.getElementsByClassName('category-btn')
    // console.log(button);
    for(const btn of button){
        btn.classList.remove("active")
    }
}

//upper four button click active and remove
const clickButtonShow = (id) => {
    // alert(id)
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
        .then((res) => res.json())
        .then((data) => {
            // button active remove
                removeActiveBtn()
            // button active
            const activeBtn= document.getElementById(`btn-${id}`)
            activeBtn.classList.add("active")
            // console.log(activeBtn);
            displayCard(data.data)
        })
        .catch((error)=> console.error(error))
}

// create displayCategories show button browser

const displayCategories =(categories) =>{
    const categoriesBtn = document.getElementById('categories')
    // console.log(data);
    categories.forEach((items)=> {
        // console.log(items);
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
            <button id="btn-${items.category}" onclick="clickButtonShow('${items.category}')" class="btn btn-lg w-60 h-[78px]  border-2 border-gray-200  category-btn">
             <img src="${items.category_icon}" alt="Category Icon" class="category-icon" /> 
             <span class="text-xl md:text-3xl">${items.category}</span>
            </button>
        `
        categoriesBtn.append(buttonContainer)
    })
}
// adobe button er jonno



// details button er jonno
const detailsDataShow = async (id) =>{
        console.log(id);
        const fetchUrl = (`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        const res = await fetch(fetchUrl)
        const data = await res.json();
        detailsDisplay(data.petData);
}
const detailsDisplay = (petData) =>{
    console.log(petData);
    const modalContainer = document.getElementById("modal-content")
    modalContainer.innerHTML = `
         <img class ="w-full rounded-lg object-cover mb-5" src="${petData.image}" alt="">
            <h1 class="text-xl font-black mb-4">${petData.pet_name}</h1>
         <div class="flex gap-10 mb-5">
            <div class="">
                <div class="flex gap-2 mb-2">
                    <img class="w-4" src="images/Frame1.png" alt="">
                    <span>breed: ${ petData.breed ? petData.breed : "Normal Breed"}</span>
                </div>
                 <div class="flex gap-2 mb-2">
                    <img src="images/Frame3.png" alt="">
                    <span>Gender: ${petData.gender ? petData.gender : "Not mentioned"}</span>
                </div>
                <div class="flex gap-2 mb-2">
                    <img src="images/Frame3.png" alt="">
                    <span>vaccinated_status: ${petData.vaccinated_status}</span>
                </div>
            </div>
             <div class="">
                <div class="flex gap-2 mb-2">
                    <img class="w-4" src="images/Frame2.png" alt="">
                    <span>Birth: ${petData.date_of_birth ? petData.date_of_birth : "Not available"}</span>
                </div>
                <div class="flex gap-2 mb-2">
                    <img " src="images/Frame4.png" alt="">
                    <span>Price: ${petData.price ? petData.price : "Not available"}$</span>
                </div>
            </div>
         </div>
          <div>
             <h1 class="text-lg font-bold mb-3">Details Information</h1>
             <span class="text-base font-normal"> ${petData.pet_details}</span>
          </div>


    
    `
    document.getElementById("customModal").showModal();
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

// card section load card 
const loadCard = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then((res) => res.json())
        .then((data)=> displayCard(data.pets))
        .catch((error)=> console.error(error))
}
// card section display show
const displayCard = (pets) => {
    const cardLeft = document.getElementById('card-left')
   cardLeft.innerHTML = "";
    //jodi kono data na thake tahole akta content show korbe  
    if(pets.length == 0){
        cardLeft.classList.remove('grid');
        cardLeft.innerHTML = `
         <div class="min-h-72 flex flex-col justify-center items-center bg-[#13131308] rounded-lg py-20" >
                <img src="images/error.webp" alt="">
                <h2 class=" text-center text-3xl my-4 font-bold">No Information Available</h2>
                  <p class =" text-center text-base font-normal text-[#131313B3]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at </br> 
        its layout. The point of using Lorem Ipsum is that it has a.</p>
        </div>
        `
    }else{
        cardLeft.classList.add('grid');
    }
    pets.forEach((pet) => {
        // console.log(pet);

    // card show data form api
        const card = document.createElement('div')
        card.classList= 'card p-5 border-2 border-gray-200'
        card.innerHTML = `
         <figure class="h-[200px]">
            <img src=${pet.image} class="w-full h-full object-cover" alt="Shoes" class="rounded-xl" />
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
                    <button onclick="detailsDataShow('${pet.petId}')" class="btn text-[#0E7A81] text-lg font-bold">Details</button>
                </div>
            </div>

        </div>
        
        `
        cardLeft.appendChild(card)
    })
}
 //uporer function a akta button a onclick add kora hoiche jokhon like button a click korbe tokhon image ta right side a show korbe 
const ClickShowImage = (image) => {
    const cardRight = document.getElementById('card-right');
    const cardRightBtn = document.createElement('div');
    cardRightBtn.innerHTML = `
        <figure>
            <img  src="${image}" alt="Liked Pet Image" class="w-full h-[130px] rounded-xl border-2 p-2" />
        </figure>
    `;
    cardRight.appendChild(cardRightBtn)
};


loadCategoriesBtn()
loadCard()


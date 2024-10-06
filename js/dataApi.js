console.log('show all data');

// create loadCategories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then((res) => res.json())
        .then((data)=> displayCategories(data.categories))
        .catch((error)=> console.error(error))
}

// {
//     "id": 1,
//     "category": "Cat",
//     "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
//   }
// create displayCategories
const displayCategories =(categories) =>{
    const categoriesBtn = document.getElementById('categories')
    // console.log(data);
    categories.forEach((items)=> {
        console.log(items);
        const button = document.createElement('button')
        button.classList ="btn btn-lg border-2 hover:rounded-full hover:bg-[#6cb2b7d5] text-3xl w-[15%] border-1 border-gray-200 "
        //Set the icon url 
        const img = document.createElement('img');
        img.src = items.category_icon; 
        img.alt = items.category; 
        img.style.width = '40px';
        img.style.height = '40px'; 
        
        // Append the icon and text to the button
        button.appendChild(img);
        button.appendChild(document.createTextNode(items.category));
        
        categoriesBtn.append(button)
    })
}
loadCategories()
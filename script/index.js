// Create loadAllPets function
const loadAllPets = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pets`
  );
  const data = await response.json();
  displayAllPets(data.pets);
};

// Active Btn function 

const loadCategoryPets = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
        const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add("active");
        displayAllPets(data.data);
    })
    .catch((error) => console.log(error));
};


const loadDetails = async(petId) => {
    const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
    const res = await fetch(uri);
    const data = await res.json();
    displayDetails(data.petData);
};

const displayDetails = (pet) => {
    console.log(pet);
    const detailContainer = document.getElementById("modal-content");

    detailContainer.innerHTML = `
    
    <img src=${pet.image} />
    <h2 class="card-title font-bold text-2xl mt-4 mb-4">${pet.pet_name}</h2>
    <div class="flex">
        <h2 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
</svg> Breed: ${pet.breed}</h2>
        <h2 class="card-title pl-12"><i class="fa-regular fa-calendar"></i> Birth: ${pet.date_of_birth}</h2>
    </div>
    <div class="flex">
    <h2 class="card-title"><i class="fa-solid fa-mercury"></i> Gender: ${pet.gender?pet.gender:"Gender not specified"}</h2>
    <h2 class="card-title pl-24"><img src="https://img.icons8.com/material/24/us-dollar--v1.png"/>Price:${pet.price}</h2>
    </div>
    <h2 class="card-title"><i class="fa-solid fa-mercury"></i> Vaccinated status: ${pet.vaccinated_status?pet.vaccinated_status:"vaccinated not specified"}</h2>
    <hr class="mt-4 mb-4"/>
    <div>
    <p class="font-bold text-lg pb-2">Details Information</p>
    ${pet.pet_details}
    </div>
    `;
     
    document.getElementById("customModal").showModal();
};


// create DisplayCategories function
const displayAllPets = (pets) => {
  const allPetsContainer = document.getElementById("all-pets-show");
  allPetsContainer.innerHTML = "";

  if(pets.length == 0) {
    allPetsContainer.innerHTML = `
    <div class="bg-[#13131308] rounded-3xl space-36 p-6">
    <img class="pl-48" src="./images/error.webp"/>
    <p class="font-bold text-3xl py-2 pl-20">No Information Available</p>
    <p class="text-black">Currently, no information is available for this section. Please check back later or contact support for further assistance. We're here to help you with any questions or inquiries you may have.</p>
    
    </div>
    `;
    return;
  }

  pets.forEach((pet) => {
    const card = document.createElement("div");
    card.classList = "border mb-5 w-4/5";
    card.innerHTML = `
  <figure>
    <img class="mt-8 px-6"
      src=${pet.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${pet.pet_name}</h2>
        <h2 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
</svg> Breed: ${pet.breed?pet.breed:"breed is not available"}</h2>
    <h2 class="card-title"><i class="fa-regular fa-calendar"></i> Birth: ${pet.date_of_birth?pet.date_of_birth:"date is not available"}</h2>
    <h2 class="card-title"><i class="fa-solid fa-mercury"></i> Gender: ${pet.gender?pet.gender:"Gender not specified"}</h2>
    <h2 class="card-title"><img src="https://img.icons8.com/material/24/us-dollar--v1.png"/>Price :  ${pet.price?pet.price:"Not available"}</h2>

    <hr class="mt-3 mb-3"/>
    
    <div class="card-actions flex justify-evenly">
      <button class="btn text-xl"><i class="fa-regular fa-thumbs-up"></i></button>
      <button onclick="likeButton" class="btn text-primary font-bold text-lg">Adopt</button>
      <button onclick="loadDetails(${pet.petId})" class="btn text-primary font-bold text-lg">Details</button>
    </div>
  </div>
</div>
     `;
    allPetsContainer.appendChild(card);
  });
};


// like button function 
const likeButton = () => {
    console.log("like button clicked");

    const likeContainer = document.getElementById('like-cards');
    const likeCard = document.createElement('div');

    likeCard.innerHTML = `
    <div class="p-1">
        <img src="./images/pet.webp"/>
        </div>
    `;
    likeContainer.append(likeCard);
};


//   Create loadPetsCategory function
const loadPetsCategory = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/categories`
  );
  const data = await res.json();
  displayPetsCategory(data.categories);
};



// Create DisplayPetsCategory function
const displayPetsCategory = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
    // create a button

    const buttonContainer = document.createElement("div");
    buttonContainer.classList =
      "btn btn btn-lg py-10 rounded-2xl my-6 mx-6 p-6 flex justify-center items-center";
    buttonContainer.innerHTML = `
                <button id="btn-${item.category}" onclick="loadCategoryPets('${item.category}')" class="flex gap-5 justify-center items-center -mt-6 category-btn">
                ${item.category}
                <img class="" src="${item.category_icon}"/>
                </button>
                `;

    // add button to Category container
    categoryContainer.appendChild(buttonContainer);
  });
};




loadAllPets();

loadPetsCategory();

let city = {
  data: [
    {
      carName: "THE 2 Gran Coupé stating from $46,195",
      category: "2",
      image: "images/the_2_gran_coupe.jpg",
    },
    {
      carName: "THE 2 Coupé stating from $36,350",
      category: "2",
      image: "images/the_2_coupe_g42_thumbnail (1).jpg",
    },

    {
      carName: "THE NEW 3 stating from $42,950",
      category: "3",
      price: "40",
      image: "images/homepage_jump_cycle.jpg",
    },

    {
      carName: "THE 4 GRAN Coupé stating from $56,185",
      category: "4",
      image: "images/the_4_grand_coupe.jpg",
    },
    {
      carName: "THE 4 Coupé stating from $56,700",
      category: "4",
      image: "images/the_4_coupe.jpg",
    },
    {
      carName: "THE 4 CONVERTIBLE stating from $55,500",
      category: "4",
      image: "images/the_4_convertible.jpg",
    },
    {
      carName: "THE 5 stating from $54,200 ",
      category: "5",
      image: "images/the_5.png",
    },
    {
      carName: "THE NEW 7 stating from $93,300",
      category: "7",
      image: "images/the_new_7.jpg",
    },
    {
      carName: "THE 8 GRAN Coupé stating from $99,900",
      category: "8",
      image: "images/8_gran_coupe_jump_cycle.jpg",
    },
    {
      carName: "THE X6 stating from $70,100",
      category: "x",
      image: "images/x6.jpg",
    },
    {
      carName: "THE NEW x5 stating from $61,600,",
      category: "x",
      image: "images/x5.jpg",
    },
    {
      carName: "THE Z4 stating from $63,700",
      category: "z",
      image: "images/z4.jpg",
    },
    {
      carName: "THE XM stating from $159,000",
      category: "m",
      image: "images/xm.jpg",
    },
  ],
};
for (let i of city.data) {
  //create card
  let card = document.createElement("div");
  //card shoud have category and shoud stay hidden  initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgcontiner = document.createElement("div");
  imgcontiner.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgcontiner.appendChild(image);
  card.appendChild(imgcontiner);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //city name
  let name = document.createElement("h4");
  container.classList.add("city-name");
  name.innerText = i.carName.toUpperCase();
  container.appendChild(name);

  card.appendChild(container);
  document.getElementById("citys").appendChild(card);
} //end for loop
//parameter passed from button (parameter same as catogory)
function filterCity(value) {
  //button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innertext
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((elements) => {
    //display all cards on "all" button click
    if (value == "all") {
      elements.classList.remove("hide");
    } else {
      //check if element contains category class
      if (elements.classList.contains(value)) {
        //display element based on category
        elements.classList.remove("hide");
      } else {
        //hide other elements
        elements.classList.add("hide");
      }
    }
  });
} //end function

//search button click
document.getElementById("search").addEventListener("click", () => {
  //initialization
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".city-name");
  let cards = document.querySelectorAll(".card");

  //loop through all element
  elements.forEach((elements, index) => {
    //check if text include the search value
    if (elements.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
}); //end search click

//initially display all city
window.onload = () => {
  filterCity("all");
};

const vehicleList = document.querySelector(".vehicle-list");
const wishlistSection = document.querySelector(".wishlist-list");
const bookedSection = document.querySelector(".booked-list");

const vehicles = [
        {
          name: "Maruti Swift 2015",
          price: "₹2.5 Lakhs",
          image: "images/Maruti-Swift-2015.jpg",
          description: "Well-maintained petrol variant with good mileage.",
        },
        {
          name: "Hero Splendor 2017",
          price: "₹35,000",
          image: "images/hero splender 2017.jpg",
          description: "Single owner. Recently serviced.",
        },
        {
          name: "Hyundai i10 2014",
          price: "₹2.2 Lakhs",
          image: "images/hyndai i10 2014.jpg",
          description: "Petrol variant, low maintenance, good condition.",
        },
        {
          name: "Honda Activa 2016",
          price: "₹40,000",
          image: "images/honda activa 2016.jpg",
          description: "Scooter with excellent mileage and condition.",
        },
        {
          name: "Tata Nano 2013",
          price: "₹1.5 Lakhs",
          image: "images/tata nano 2013.png",
          description: "Compact city car, ideal for small families.",
        },
        {
          name: "Bajaj Pulsar 150 2015",
          price: "₹48,000",
          image: "images/bajaj-pulsar 2017.jpg",
          description: "Powerful and reliable, recent battery replacement.",
        },
        {
          name: "Ford Figo 2012",
          price: "₹1.8 Lakhs",
          image: "images/FORD-Figo-2012.jpg",
          description: "Diesel engine with excellent fuel economy.",
        },
        {
          name: "Suzuki Access 125 2018",
          price: "₹50,000",
          image: "images/Suzuki-Access-125-SE-CBS_Mettalic-Sonic-Silver.jpg",
          description: "Great condition with insurance up to 2026.",
        },
        {
          name: "Mahindra Bolero 2011",
          price: "₹3.5 Lakhs",
          image:"images/mahindra-bolero 2011.jpg",
          description: "Rugged SUV, ideal for rural and urban use.",
        },
        {
          name: "TVS Apache RTR 160 2016",
          price: "₹45,000",
          image:"images/TVS Apache RTR 160 2016.jpg",
          description: "Stylish and well-maintained sports bike.",
        },
        {
          name: "Renault Kwid 2017",
          price: "₹2.7 Lakhs",
          image: "images/Renault-Kwid-2017.jpg",
          description: "Compact hatchback with touchscreen and AC.",
        },
        {
          name: "Royal Enfield Classic 350 2014",
          price: "₹85,000",
          image: "images/Royal-Enfield-Classic-350.jpg",
          description: "Iconic ride, recently serviced, excellent sound.",
        },
        {
          name: "Mahindra XUV500 2012",
          price: "₹6.0 Lakhs",
          image: "images/xuv-500-2012-prod-var.jpg",
          description: "7-seater SUV, powerful engine, spacious interior.",
        },
        {
          name: "Toyota Fortuner 2015",
          price: "₹14.5 Lakhs",
          image: "images/toyota fortuner 2015.jpg",
          description: "Luxury SUV with excellent off-road capabilities.",
        },
        {
          name: "Honda City 2014",
          price: "₹6.5 Lakhs",
          image:"images/honda city 2014.jpg",
          description: "Reliable and fuel-efficient sedan.",
        },
        {
          name: "BMW X1 2013",
          price: "₹12.5 Lakhs",
          image: "images/bmw x1 2013.jpg",
          description: "Luxury crossover with excellent performance.",
        },
      ];

function loadVehicles() {
  const vehicles = document.getElementById("vehicles");
  if (!vehicles) return; // Run only on vehicles.html

  grid.innerHTML = "";
  vehicles.forEach(v => {
    const card = document.createElement("div");
    card.className = "vehicle-card";
    card.innerHTML = `
      <img src="${v.image}" alt="${v.name}">
      <h3>${v.name}</h3>
      <p>${v.price}</p>
      <button onclick="bookVehicle(${v.id})">Book Now</button>
      <button onclick="addToWishlist(${v.id})">Add to Wishlist</button>
    `;
    grid.appendChild(card);
  });
}

// Book Vehicle
function bookVehicle(id) {
  let booked = JSON.parse(localStorage.getItem("bookedVehicles")) || [];
  if (booked.some(v => v.id === id)) {
    alert("Already booked!");
    return;
  }
  const vehicle = vehicles.find(v => v.id === id);
  booked.push(vehicle);
  localStorage.setItem("bookedVehicles", JSON.stringify(booked));
  alert("Vehicle booked successfully!");
}

// Add to Wishlist
function addToWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem("wishlistVehicles")) || [];
  if (wishlist.some(v => v.id === id)) {
    alert("Already in wishlist!");
    return;
  }
  const vehicle = vehicles.find(v => v.id === id);
  wishlist.push(vehicle);
  localStorage.setItem("wishlistVehicles", JSON.stringify(wishlist));
  alert("Added to wishlist!");
}

// Show booked vehicles in booked.html
function loadBooked() {
  const grid = document.getElementById("bookedGrid");
  if (!grid) return;

  let booked = JSON.parse(localStorage.getItem("bookedVehicles")) || [];
  grid.innerHTML = booked.length === 0 ? "<p>No booked vehicles yet.</p>" : "";

  booked.forEach(v => {
    const card = document.createElement("div");
    card.className = "vehicle-card";
    card.innerHTML = `
      <img src="${v.image}" alt="${v.name}">
      <h3>${v.name}</h3>
      <p>${v.price}</p>
      <button onclick="removeBooked(${v.id})">Remove</button>
    `;
    grid.appendChild(card);
  });
}

function removeBooked(id) {
  let booked = JSON.parse(localStorage.getItem("bookedVehicles")) || [];
  booked = booked.filter(v => v.id !== id);
  localStorage.setItem("bookedVehicles", JSON.stringify(booked));
  loadBooked();
}

// Show wishlist vehicles in wishlist.html
function loadWishlist() {
  const grid = document.getElementById("wishlistGrid");
  if (!grid) return;

  let wishlist = JSON.parse(localStorage.getItem("wishlistVehicles")) || [];
  grid.innerHTML = wishlist.length === 0 ? "<p>No wishlist vehicles yet.</p>" : "";

  wishlist.forEach(v => {
    const card = document.createElement("div");
    card.className = "vehicle-card";
    card.innerHTML = `
      <img src="${v.image}" alt="${v.name}">
      <h3>${v.name}</h3>
      <p>${v.price}</p>
      <button onclick="removeWishlist(${v.id})">Remove</button>
    `;
    grid.appendChild(card);
  });
}

function removeWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem("wishlistVehicles")) || [];
  wishlist = wishlist.filter(v => v.id !== id);
  localStorage.setItem("wishlistVehicles", JSON.stringify(wishlist));
  loadWishlist();
}

// Auto-run when page loads
window.onload = function () {
  loadVehicles();
  loadBooked();
  loadWishlist();
};

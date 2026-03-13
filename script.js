
const hikes = [

{
name:"Edgewood Trail Loop",
distance:3.3,
elevation:587,
lat:37.469,
lng:-122.292,
food:["Falafel Tazah","Mazra Mediterranean"],
activities:["Filoli Gardens","Pulgas Water Temple"]
},

{
name:"Long Ridge Loop",
distance:4.2,
elevation:652,
lat:37.321,
lng:-122.214,
food:["Zareens","Alice's Restaurant"],
activities:["Skyline Scenic Drive"]
},

{
name:"Arrowhead Loop",
distance:3.9,
elevation:620,
lat:37.209,
lng:-121.755,
food:["Halal Gyro Express"],
activities:["Coyote Valley farms"]
},

{
name:"Fall Creek Lime Kilns",
distance:3.4,
elevation:511,
lat:37.041,
lng:-122.064,
food:["Falafel of Santa Cruz"],
activities:["Roaring Camp Train"]
},

{
name:"Cowell Highlights Loop",
distance:4.4,
elevation:682,
lat:37.041,
lng:-122.065,
food:["Zameen"],
activities:["Big Tree Grove"]
},

{
name:"Monte Toyon Loop",
distance:4.0,
elevation:603,
lat:36.975,
lng:-121.9,
food:["Falafel Hut"],
activities:["Capitola Village"]
},

{
name:"High Meadow Loop",
distance:4.6,
elevation:616,
lat:37.333,
lng:-122.087,
food:["DishDash"],
activities:["Deer Hollow Farm"]
},

{
name:"Arastradero Loop",
distance:4.4,
elevation:597,
lat:37.391,
lng:-122.201,
food:["Falafel Stop"],
activities:["Stanford Dish"]
},

{
name:"Saratoga Gap Loop",
distance:4.5,
elevation:636,
lat:37.266,
lng:-122.112,
food:["Sue's Cafe"],
activities:["Hakone Gardens"]
},

{
name:"Lands End Trail",
distance:3.4,
elevation:547,
lat:37.780,
lng:-122.513,
food:["Pakwan"],
activities:["Sutro Baths"]
},

{
name:"Wildcat Gorge Loop",
distance:3.4,
elevation:511,
lat:37.897,
lng:-122.241,
food:["Zareens Berkeley"],
activities:["Tilden Steam Train"]
},

{
name:"Redwood Regional Loop",
distance:3.9,
elevation:554,
lat:37.805,
lng:-122.159,
food:["Shawarmaji"],
activities:["Chabot Space Center"]
},

{
name:"Frog Lake Loop",
distance:4.5,
elevation:698,
lat:37.183,
lng:-121.541,
food:["Morgan Hill restaurants"],
activities:["Henry Coe views"]
},

{
name:"Almaden Mine Hill Loop",
distance:4.5,
elevation:623,
lat:37.178,
lng:-121.847,
food:["Mint & Basil"],
activities:["New Almaden museum"]
},

{
name:"Los Gatos Creek Loop",
distance:4.0,
elevation:521,
lat:37.233,
lng:-121.962,
food:["Los Gatos cafes"],
activities:["Vasona Lake"]
},

{
name:"Wunderlich Park Loop",
distance:3.2,
elevation:679,
lat:37.433,
lng:-122.289,
food:["Redwood City eateries"],
activities:["Historic estates"]
},

{
name:"Reinhardt Redwood Loop",
distance:3.7,
elevation:580,
lat:37.799,
lng:-122.166,
food:["Oakland restaurants"],
activities:["Redwood groves"]
},

{
name:"Stream & Fern Loop",
distance:3.9,
elevation:554,
lat:37.804,
lng:-122.162,
food:["Oakland cafes"],
activities:["Redwood forests"]
},

{
name:"Chamise Toyon Loop",
distance:3.9,
elevation:649,
lat:37.372,
lng:-122.163,
food:["Palo Alto cafes"],
activities:["Foothills Lake"]
},

{
name:"Bear Gulch Loop",
distance:3.2,
elevation:679,
lat:37.379,
lng:-122.275,
food:["Redwood City"],
activities:["Sam McDonald park"]
},

{
name:"Russian Ridge Loop",
distance:4.0,
elevation:650,
lat:37.321,
lng:-122.247,
food:["Alice's Restaurant"],
activities:["Skyline viewpoints"]
},

{
name:"Tennessee Valley Loop",
distance:3.4,
elevation:550,
lat:37.861,
lng:-122.536,
food:["Halal Guys SF"],
activities:["Marin Headlands"]
},

{
name:"Mount Tam Cataract Loop",
distance:4.3,
elevation:670,
lat:37.923,
lng:-122.596,
food:["Mill Valley eateries"],
activities:["Mount Tam waterfalls"]
},

{
name:"Point Lobos Cypress Grove",
distance:3.5,
elevation:500,
lat:36.520,
lng:-121.941,
food:["Carmel seafood"],
activities:["Sea lions"]
}

];

let map = L.map('map').setView([37.3,-122.1],8);

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

const container = document.getElementById("hikes");

let completed = JSON.parse(localStorage.getItem("done")) || [];

function render(){

container.innerHTML="";

let miles=0;
let elevation=0;

hikes.forEach((h,i)=>{

let done = completed.includes(i);

if(done){
miles+=h.distance;
elevation+=h.elevation;
}

L.marker([h.lat,h.lng]).addTo(map)
.bindPopup(h.name);

let card=document.createElement("div");

card.className="card";

card.innerHTML=`

<h3>${h.name}</h3>

<p>${h.distance} miles • ${h.elevation} ft</p>

<label>
<input type="checkbox"
${done?"checked":""}
onchange="toggle(${i})">
Completed
</label>

<div class="details">

<p><b>Food</b>: ${h.food.join(", ")}</p>

<p><b>Activities</b>: ${h.activities.join(", ")}</p>

</div>

<input type="file" class="photo">

`;

container.appendChild(card);

});

document.getElementById("completed").innerText=completed.length;

document.getElementById("miles").innerText=miles.toFixed(1);

document.getElementById("elevation").innerText=elevation;

}

function toggle(i){

if(completed.includes(i))
completed=completed.filter(x=>x!=i);
else
completed.push(i);

localStorage.setItem("done",JSON.stringify(completed));

render();

}

function surpriseHike(){

let available=hikes.filter((h,i)=>!completed.includes(i));

let random=available[Math.floor(Math.random()*available.length)];

alert("🎲 Surprise Hike: "+random.name);

}

render();


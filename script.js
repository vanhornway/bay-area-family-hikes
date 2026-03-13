
const hikes = {

spring:[

{
name:"Edgewood Trail Loop",
distance:"3.3 mi",
elevation:"587 ft",

alltrails:"https://www.alltrails.com/trail/us/california/edgewood-trail-loop",

map:"https://maps.google.com/?q=Edgewood+Park+Redwood+City",

food:[
["Falafel Tazah","https://maps.google.com/?q=Falafel+Tazah+Redwood+City"],
["Mazra Mediterranean","https://maps.google.com/?q=Mazra+Mediterranean"]
],

activities:[
["Filoli Gardens","https://maps.google.com/?q=Filoli+Gardens"],
["Pulgas Water Temple","https://maps.google.com/?q=Pulgas+Water+Temple"]
]

},

{
name:"Russian Ridge Loop",
distance:"4 mi",
elevation:"650 ft",

alltrails:"https://www.alltrails.com/trail/us/california/russian-ridge-open-space-preserve",

map:"https://maps.google.com/?q=Russian+Ridge+Open+Space"
}

],

summer:[

{
name:"Fall Creek Lime Kilns",
distance:"3.4 mi",
elevation:"511 ft",

alltrails:"https://www.alltrails.com/trail/us/california/fall-creek-to-lime-kilns-trail",

map:"https://maps.google.com/?q=Fall+Creek+Trail+Henry+Cowell",

food:[
["Falafel of Santa Cruz","https://maps.google.com/?q=Falafel+Santa+Cruz"],
["Zameen","https://maps.google.com/?q=Zameen+Mediterranean+Santa+Cruz"]
],

activities:[
["Roaring Camp Railroad","https://maps.google.com/?q=Roaring+Camp+Railroad"],
["Santa Cruz Boardwalk","https://maps.google.com/?q=Santa+Cruz+Boardwalk"]
]

},

{
name:"Nisene Marks – Aptos Creek",
distance:"4 mi",
elevation:"600 ft",

alltrails:"https://www.alltrails.com/trail/us/california/monte-toyon-vista-loop-via-aptos-rancho-trail",

map:"https://maps.google.com/?q=Nisene+Marks+State+Park"
}

],

fall:[

{
name:"Rancho San Antonio High Meadow",
distance:"4.6 mi",
elevation:"616 ft",

alltrails:"https://www.alltrails.com/trail/us/california/high-meadow-loop-via-lower-meadow-trail",

map:"https://maps.google.com/?q=Rancho+San+Antonio+Open+Space",

food:[
["DishDash Sunnyvale","https://maps.google.com/?q=DishDash+Sunnyvale"],
["Zareens","https://maps.google.com/?q=Zareens+Palo+Alto"]
],

activities:[
["Deer Hollow Farm","https://maps.google.com/?q=Deer+Hollow+Farm"]
]

},

{
name:"Arastradero Preserve Loop",
distance:"4.4 mi",
elevation:"597 ft",

alltrails:"https://www.alltrails.com/trail/us/california/ohlone-trail-to-arastradero-creek-trail",

map:"https://maps.google.com/?q=Arastradero+Preserve"
}

],

winter:[

{
name:"Lands End Trail",
distance:"3.4 mi",
elevation:"547 ft",

alltrails:"https://www.alltrails.com/trail/us/california/lands-end-trail",

map:"https://maps.google.com/?q=Lands+End+Trail",

food:[
["Pakwan SF","https://maps.google.com/?q=Pakwan+San+Francisco"]
],

activities:[
["Sutro Baths","https://maps.google.com/?q=Sutro+Baths"],
["Legion of Honor","https://maps.google.com/?q=Legion+of+Honor+Museum"]
]

},

{
name:"Wildcat Gorge Loop – Tilden",
distance:"3.4 mi",
elevation:"511 ft",

alltrails:"https://www.alltrails.com/trail/us/california/wildcat-gorge-meadows-canyon-and-curran-trail",

map:"https://maps.google.com/?q=Tilden+Regional+Park"
}

]

};


function build(){

const app=document.getElementById("app");

Object.keys(hikes).forEach(season=>{

const section=document.createElement("div");

section.className="season "+season;

section.innerHTML=`<h2>${season.toUpperCase()}</h2>`;

hikes[season].forEach(h=>{

let food="";
let acts="";

if(h.food)
h.food.forEach(f=>food+=`<a href="${f[1]}" target="_blank">${f[0]}</a>`);

if(h.activities)
h.activities.forEach(a=>acts+=`<a href="${a[1]}" target="_blank">${a[0]}</a>`);

section.innerHTML+=`

<div class="card">

<h3>${h.name}</h3>

<p>${h.distance} • ${h.elevation}</p>

<div class="links">

<a href="${h.alltrails}" target="_blank">AllTrails</a>

<a href="${h.map}" target="_blank">Google Maps (Trailhead)</a>

</div>

<div class="details">

<b>Food</b>
${food}

<b>Activities</b>
${acts}

</div>

</div>

`;

});

app.appendChild(section);

});

}

build();

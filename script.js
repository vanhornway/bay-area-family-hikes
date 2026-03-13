const hikes = {
  spring: [
    {
      name: "Edgewood Trail Loop",
      distance: "3.3 mi",
      elevation: "587 ft",
      coords: [37.465, -122.285],
      alltrails: "https://www.alltrails.com/trail/us/california/edgewood-trail-loop",
      map: "https://maps.google.com/?q=Edgewood+Park+Redwood+City",
      food: [
        ["Falafel Tazah", "https://maps.google.com/?q=Falafel+Tazah+Redwood+City"],
        ["Mazra Mediterranean", "https://maps.google.com/?q=Mazra+Mediterranean+Redwood+City"]
      ],
      activities: [
        ["Filoli Gardens", "https://maps.google.com/?q=Filoli+Historic+House+and+Garden"],
        ["Pulgas Water Temple", "https://maps.google.com/?q=Pulgas+Water+Temple"]
      ]
    },
    {
      name: "Russian Ridge Ridge Trail Loop",
      distance: "3.9 mi",
      elevation: "600 ft",
      coords: [37.325, -122.205],
      alltrails: "https://www.alltrails.com/trail/us/california/ridge-trail-at-russian-ridge-open-space",
      map: "https://maps.google.com/?q=Russian+Ridge+Open+Space+Preserve",
      food: [
        ["Alice's Restaurant", "https://maps.google.com/?q=Alices+Restaurant+Woodside"],
        ["Skywood Trading Post", "https://maps.google.com/?q=Skywood+Trading+Post"]
      ],
      activities: [
        ["Windy Hill Preserve", "https://maps.google.com/?q=Windy+Hill+Open+Space"],
        ["Skyline Boulevard Scenic Drive", "https://maps.google.com/?q=Skyline+Boulevard"]
      ]
    },
    {
      name: "Alambique Bear Gulch Redwood Loop",
      distance: "3.2 mi",
      elevation: "679 ft",
      coords: [37.425, -122.255],
      alltrails: "https://www.alltrails.com/trail/us/california/alambique-redwood-and-bear-gulch-loop",
      map: "https://maps.google.com/?q=Wunderlich+County+Park",
      food: [
        ["Backhaus Bakery", "https://maps.google.com/?q=Backhaus+Bakery+San+Mateo"],
        ["Falafel Stop", "https://maps.google.com/?q=Falafel+Stop+Sunnyvale"]
      ],
      activities: [
        ["Huddart Park", "https://maps.google.com/?q=Huddart+Park"],
        ["Pulgas Water Temple", "https://maps.google.com/?q=Pulgas+Water+Temple"]
      ]
    },
    {
      name: "Arastradero Creek Loop",
      distance: "4.4 mi",
      elevation: "597 ft",
      coords: [37.385, -122.175],
      alltrails: "https://www.alltrails.com/trail/us/california/ohlone-trail-to-arastradero-creek-trail",
      map: "https://maps.google.com/?q=Arastradero+Preserve",
      food: [
        ["Zareens Palo Alto", "https://maps.google.com/?q=Zareens+Palo+Alto"],
        ["Orens Hummus", "https://maps.google.com/?q=Orens+Hummus+Palo+Alto"]
      ],
      activities: [
        ["Stanford Dish", "https://maps.google.com/?q=Stanford+Dish"],
        ["Cantor Arts Center", "https://maps.google.com/?q=Cantor+Arts+Center"]
      ]
    },
    {
      name: "Arrowhead Loop Coyote Valley",
      distance: "3.9 mi",
      elevation: "620 ft",
      coords: [37.175, -121.735],
      alltrails: "https://www.alltrails.com/trail/us/california/arrowhead-loop-trail--2",
      map: "https://maps.google.com/?q=Coyote+Valley+Open+Space+Preserve",
      food: [
        ["Halal Gyro Express", "https://maps.google.com/?q=Halal+Gyro+Express+Morgan+Hill"],
        ["Craft Roots Vegan", "https://maps.google.com/?q=Craft+Roots+Morgan+Hill"]
      ],
      activities: [
        ["Coyote Valley Farms", "https://maps.google.com/?q=Coyote+Valley+Farm"],
        ["Uvas Canyon Scenic Drive", "https://maps.google.com/?q=Uvas+Canyon+County+Park"]
      ]
    },
    {
      name: "Chamise Toyon Fern Loop",
      distance: "3.9 mi",
      elevation: "649 ft",
      coords: [37.355, -122.185],
      alltrails: "https://www.alltrails.com/trail/us/california/chamise-toyon-and-fern-loop",
      map: "https://maps.google.com/?q=Foothills+Nature+Preserve",
      food: [
        ["DishDash Sunnyvale", "https://maps.google.com/?q=DishDash+Sunnyvale"],
        ["Falafel Stop Sunnyvale", "https://maps.google.com/?q=Falafel+Stop+Sunnyvale"]
      ],
      activities: [
        ["Foothills Lake", "https://maps.google.com/?q=Foothills+Lake"],
        ["Downtown Los Altos", "https://maps.google.com/?q=Los+Altos+Downtown"]
      ]
    }
  ],
  summer: [
    {
      name: "Fall Creek Lime Kilns Trail",
      distance: "3.4 mi",
      elevation: "511 ft",
      coords: [37.055, -122.085],
      alltrails: "https://www.alltrails.com/trail/us/california/fall-creek-to-lime-kilns-trail",
      map: "https://maps.google.com/?q=Fall+Creek+Trail+Henry+Cowell",
      food: [
        ["Falafel Santa Cruz", "https://maps.google.com/?q=Falafel+of+Santa+Cruz"],
        ["Zameen Mediterranean", "https://maps.google.com/?q=Zameen+Mediterranean+Felton"]
      ],
      activities: [
        ["Roaring Camp Railroad", "https://maps.google.com/?q=Roaring+Camp+Railroad"],
        ["Santa Cruz Boardwalk", "https://maps.google.com/?q=Santa+Cruz+Boardwalk"]
      ]
    },
    {
      name: "Redwood Grove Loop Henry Cowell",
      distance: "3 mi",
      elevation: "500 ft",
      coords: [37.045, -122.065],
      alltrails: "https://www.alltrails.com/trail/us/california/redwood-grove-loop-trail",
      map: "https://maps.google.com/?q=Henry+Cowell+Redwoods+State+Park",
      food: [
        ["Zameen Felton", "https://maps.google.com/?q=Zameen+Felton"],
        ["Pretty Good Advice Vegan", "https://maps.google.com/?q=Pretty+Good+Advice+Santa+Cruz"]
      ],
      activities: [
        ["Felton Covered Bridge", "https://maps.google.com/?q=Felton+Covered+Bridge"],
        ["Santa Cruz Roasting Company", "https://maps.google.com/?q=Santa+Cruz+Roasting+Company"]
      ]
    },
    {
      name: "Aptos Creek Fire Road Loop",
      distance: "4 mi",
      elevation: "600 ft",
      coords: [37.015, -121.915],
      alltrails: "https://www.alltrails.com/trail/us/california/aptos-creek-fire-road",
      map: "https://maps.google.com/?q=Forest+of+Nisene+Marks+State+Park",
      food: [
        ["Zameen Aptos", "https://maps.google.com/?q=Zameen+Aptos"],
        ["Falafel Hut Aptos", "https://maps.google.com/?q=Falafel+Hut+Aptos"]
      ],
      activities: [
        ["Capitola Village", "https://maps.google.com/?q=Capitola+Village"],
        ["Seacliff State Beach", "https://maps.google.com/?q=Seacliff+State+Beach"]
      ]
    },
    {
      name: "Stream Trail Loop Redwood Regional",
      distance: "3.9 mi",
      elevation: "550 ft",
      coords: [37.815, -122.165],
      alltrails: "https://www.alltrails.com/trail/us/california/stream-trail-loop",
      map: "https://maps.google.com/?q=Redwood+Regional+Park",
      food: [
        ["Shawarmaji Oakland", "https://maps.google.com/?q=Shawarmaji+Oakland"],
        ["Pomella Mediterranean", "https://maps.google.com/?q=Pomella+Oakland"]
      ],
      activities: [
        ["Chabot Space Center", "https://maps.google.com/?q=Chabot+Space+Center"],
        ["Oakland Zoo", "https://maps.google.com/?q=Oakland+Zoo"]
      ]
    },
    {
      name: "Long Ridge Loop",
      distance: "4.2 mi",
      elevation: "652 ft",
      coords: [37.285, -122.155],
      alltrails: "https://www.alltrails.com/trail/us/california/long-ridge-loop",
      map: "https://maps.google.com/?q=Long+Ridge+Open+Space+Preserve",
      food: [
        ["Alices Restaurant", "https://maps.google.com/?q=Alices+Restaurant+Woodside"],
        ["Skywood Trading Post", "https://maps.google.com/?q=Skywood+Trading+Post"]
      ],
      activities: [
        ["Russian Ridge Preserve", "https://maps.google.com/?q=Russian+Ridge+Open+Space"],
        ["Skyline Scenic Drive", "https://maps.google.com/?q=Skyline+Boulevard"]
      ]
    },
    {
      name: "Summit Rock Loop Sanborn",
      distance: "4 mi",
      elevation: "600 ft",
      coords: [37.235, -122.065],
      alltrails: "https://www.alltrails.com/trail/us/california/summit-rock-loop",
      map: "https://maps.google.com/?q=Sanborn+County+Park",
      food: [
        ["Sues Gallery Cafe", "https://maps.google.com/?q=Sues+Gallery+Cafe+Saratoga"],
        ["Sushi Kuni Saratoga", "https://maps.google.com/?q=Sushi+Kuni+Saratoga"]
      ],
      activities: [
        ["Hakone Gardens", "https://maps.google.com/?q=Hakone+Gardens"],
        ["Downtown Saratoga", "https://maps.google.com/?q=Saratoga+Downtown"]
      ]
    }
  ],
  fall: [
    {
      name: "High Meadow Loop Rancho San Antonio",
      distance: "4.6 mi",
      elevation: "616 ft",
      coords: [37.335, -122.085],
      alltrails: "https://www.alltrails.com/trail/us/california/high-meadow-loop-via-lower-meadow-trail",
      map: "https://maps.google.com/?q=Rancho+San+Antonio+Open+Space+Preserve",
      food: [
        ["DishDash Sunnyvale", "https://maps.google.com/?q=DishDash+Sunnyvale"],
        ["Zareens Mountain View", "https://maps.google.com/?q=Zareens+Mountain+View"]
      ],
      activities: [
        ["Deer Hollow Farm", "https://maps.google.com/?q=Deer+Hollow+Farm"],
        ["Apple Park Visitor Center", "https://maps.google.com/?q=Apple+Park+Visitor+Center"]
      ]
    },
    {
      name: "Saratoga Gap Achistaca Loop",
      distance: "4.5 mi",
      elevation: "636 ft",
      coords: [37.255, -122.125],
      alltrails: "https://www.alltrails.com/trail/us/california/saratoga-gap-trail-to-achistaca-trail-loop",
      map: "https://maps.google.com/?q=Saratoga+Gap+Open+Space+Preserve",
      food: [
        ["Sues Gallery Cafe", "https://maps.google.com/?q=Sues+Gallery+Cafe"],
        ["Falafel Stop", "https://maps.google.com/?q=Falafel+Stop+Sunnyvale"]
      ],
      activities: [
        ["Hakone Gardens", "https://maps.google.com/?q=Hakone+Gardens"],
        ["Mountain Winery Overlook", "https://maps.google.com/?q=Mountain+Winery+Saratoga"]
      ]
    },
    {
      name: "Jones Trail Loop St Josephs Hill",
      distance: "4 mi",
      elevation: "520 ft",
      coords: [37.225, -121.975],
      alltrails: "https://www.alltrails.com/trail/us/california/jones-trail-loop",
      map: "https://maps.google.com/?q=St+Josephs+Hill+Open+Space+Preserve",
      food: [
        ["Los Gatos Cafe", "https://maps.google.com/?q=Los+Gatos+Cafe"],
        ["Hummus Mediterranean Kitchen", "https://maps.google.com/?q=Hummus+Mediterranean+Kitchen"]
      ],
      activities: [
        ["Vasona Lake Park", "https://maps.google.com/?q=Vasona+Lake+Park"],
        ["Downtown Los Gatos", "https://maps.google.com/?q=Downtown+Los+Gatos"]
      ]
    },
    {
      name: "Hacienda Trail Loop Almaden",
      distance: "3.6 mi",
      elevation: "692 ft",
      coords: [37.175, -121.825],
      alltrails: "https://www.alltrails.com/trail/us/california/hacienda-trail-loop",
      map: "https://maps.google.com/?q=Almaden+Quicksilver+County+Park",
      food: [
        ["Falafel Drive In", "https://maps.google.com/?q=Falafel+Drive+In"],
        ["Mint and Basil", "https://maps.google.com/?q=Mint+and+Basil+San+Jose"]
      ],
      activities: [
        ["New Almaden Mining Museum", "https://maps.google.com/?q=New+Almaden+Museum"],
        ["Almaden Lake Park", "https://maps.google.com/?q=Almaden+Lake+Park"]
      ]
    },
    {
      name: "Frog Lake Loop Henry Coe",
      distance: "4.5 mi",
      elevation: "698 ft",
      coords: [37.185, -121.545],
      alltrails: "https://www.alltrails.com/trail/us/california/frog-lake-loop-trail",
      map: "https://maps.google.com/?q=Henry+W+Coe+State+Park",
      food: [
        ["Halal Gyro Express", "https://maps.google.com/?q=Halal+Gyro+Express+Morgan+Hill"],
        ["Trail Dust BBQ", "https://maps.google.com/?q=Trail+Dust+BBQ+Morgan+Hill"]
      ],
      activities: [
        ["Morgan Hill Downtown", "https://maps.google.com/?q=Morgan+Hill+Downtown"],
        ["Anderson Lake Park", "https://maps.google.com/?q=Anderson+Lake+Park"]
      ]
    },
    {
      name: "Monte Bello Preserve Loop",
      distance: "4 mi",
      elevation: "650 ft",
      coords: [37.325, -122.175],
      alltrails: "https://www.alltrails.com/trail/us/california/monte-bello-open-space-preserve-loop",
      map: "https://maps.google.com/?q=Monte+Bello+Open+Space+Preserve",
      food: [
        ["Zareens Palo Alto", "https://maps.google.com/?q=Zareens+Palo+Alto"],
        ["Orens Hummus", "https://maps.google.com/?q=Orens+Hummus"]
      ],
      activities: [
        ["Stanford Dish", "https://maps.google.com/?q=Stanford+Dish"],
        ["Cantor Arts Center", "https://maps.google.com/?q=Cantor+Arts+Center"]
      ]
    }
  ],
  winter: [
    {
      name: "Lands End Trail",
      distance: "3.4 mi",
      elevation: "547 ft",
      coords: [37.785, -122.505],
      alltrails: "https://www.alltrails.com/trail/us/california/lands-end-trail",
      map: "https://maps.google.com/?q=Lands+End+Trail",
      food: [
        ["Pakwan SF", "https://maps.google.com/?q=Pakwan+San+Francisco"]
      ],
      activities: [
        ["Sutro Baths", "https://maps.google.com/?q=Sutro+Baths"],
        ["Legion of Honor", "https://maps.google.com/?q=Legion+of+Honor"]
      ]
    },
    {
      name: "Wildcat Gorge Loop Tilden",
      distance: "3.4 mi",
      elevation: "511 ft",
      coords: [37.895, -122.245],
      alltrails: "https://www.alltrails.com/trail/us/california/wildcat-gorge-meadows-canyon-and-curran-trail",
      map: "https://maps.google.com/?q=Tilden+Regional+Park",
      food: [
        ["Zareens Berkeley", "https://maps.google.com/?q=Zareens+Berkeley"],
        ["Cheeseboard Pizza", "https://maps.google.com/?q=Cheeseboard+Pizza"]
      ],
      activities: [
        ["Tilden Steam Train", "https://maps.google.com/?q=Tilden+Steam+Train"],
        ["UC Berkeley Campus", "https://maps.google.com/?q=UC+Berkeley"]
      ]
    },
    {
      name: "Round Top Volcanic Skyline Loop",
      distance: "3.4 mi",
      elevation: "554 ft",
      coords: [37.845, -122.195],
      alltrails: "https://www.alltrails.com/trail/us/california/round-top-volcanic-and-skyline-trail-loop",
      map: "https://maps.google.com/?q=Sibley+Volcanic+Regional+Preserve",
      food: [
        ["Shawarmaji Oakland", "https://maps.google.com/?q=Shawarmaji+Oakland"],
        ["Pomella Mediterranean", "https://maps.google.com/?q=Pomella+Oakland"]
      ],
      activities: [
        ["Chabot Space Center", "https://maps.google.com/?q=Chabot+Space+Center"],
        ["Oakland Zoo", "https://maps.google.com/?q=Oakland+Zoo"]
      ]
    },
    {
      name: "Tennessee Valley Trail",
      distance: "3.4 mi",
      elevation: "550 ft",
      coords: [37.865, -122.535],
      alltrails: "https://www.alltrails.com/trail/us/california/tennessee-valley-trail",
      map: "https://maps.google.com/?q=Tennessee+Valley+Trailhead",
      food: [
        ["Falafel Hut Mill Valley", "https://maps.google.com/?q=Falafel+Hut+Mill+Valley"],
        ["Sol Food", "https://maps.google.com/?q=Sol+Food+Mill+Valley"]
      ],
      activities: [
        ["Marin Headlands", "https://maps.google.com/?q=Marin+Headlands"],
        ["Golden Gate Viewpoint", "https://maps.google.com/?q=Golden+Gate+Bridge+Viewpoint"]
      ]
    },
    {
      name: "Cataract Falls Loop",
      distance: "4.3 mi",
      elevation: "670 ft",
      coords: [37.915, -122.615],
      alltrails: "https://www.alltrails.com/trail/us/california/cataract-falls-trail",
      map: "https://maps.google.com/?q=Cataract+Falls+Mount+Tam",
      food: [
        ["Falafel Hut", "https://maps.google.com/?q=Falafel+Hut+Mill+Valley"],
        ["Good Earth Market", "https://maps.google.com/?q=Good+Earth+Natural+Foods"]
      ],
      activities: [
        ["Mount Tam Scenic Drive", "https://maps.google.com/?q=Mount+Tamalpais+Scenic+Drive"],
        ["Muir Woods", "https://maps.google.com/?q=Muir+Woods+National+Monument"]
      ]
    },
    {
      name: "Cypress Grove Trail Point Lobos",
      distance: "3.5 mi",
      elevation: "500 ft",
      coords: [36.515, -121.945],
      alltrails: "https://www.alltrails.com/trail/us/california/cypress-grove-trail",
      map: "https://maps.google.com/?q=Point+Lobos+State+Reserve",
      food: [
        ["Dametra Cafe Carmel", "https://maps.google.com/?q=Dametra+Cafe+Carmel"],
        ["Mediterranean Cafe Carmel", "https://maps.google.com/?q=Mediterranean+Cafe+Carmel"]
      ],
      activities: [
        ["Carmel by the Sea", "https://maps.google.com/?q=Carmel+by+the+Sea"],
        ["17 Mile Drive", "https://maps.google.com/?q=17+Mile+Drive"]
      ]
    }
  ]
};

let map;

function initMap() {
  map = L.map('hike-map').setView([37.5, -122.1], 9);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  Object.values(hikes).flat().forEach(h => {
    if (h.coords) {
      const marker = L.marker(h.coords).addTo(map);
      const popupContent = `
        <div class="map-popup-content">
          <span class="map-popup-title">${h.name}</span>
          <a href="#${h.name.toLowerCase().replace(/\s+/g, '-')}" class="map-popup-btn" onclick="scrollToHike('${h.name}')">View Details</a>
        </div>
      `;
      marker.bindPopup(popupContent);
    }
  });
}

function scrollToHike(name) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(c => {
    c.classList.remove("highlight-card");
    if (c.dataset.name === name.toLowerCase()) {
      c.scrollIntoView({ behavior: "smooth", block: "center" });
      c.classList.add("highlight-card");
    }
  });
}

function build() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  Object.keys(hikes).forEach(season => {
    const section = document.createElement("section");
    section.id = season;
    section.className = `season-section ${season}`;
    
    const seasonIcons = {
      spring: "🌸",
      summer: "☀️",
      fall: "🍂",
      winter: "❄️"
    };

    section.innerHTML = `<h2 class="season-title">${seasonIcons[season]} ${season.toUpperCase()}</h2>`;
    
    const grid = document.createElement("div");
    grid.className = "hike-grid";

    hikes[season].forEach(h => {
      const card = document.createElement("div");
      card.className = "card";
      card.dataset.name = h.name.toLowerCase();
      card.id = h.name.toLowerCase().replace(/\s+/g, '-');

      let foodHtml = h.food.map(f => `
        <a href="${f[1]}" target="_blank" class="item-link">
          <span class="item-icon">🥙</span>
          ${f[0]}
        </a>
      `).join("");

      let actsHtml = h.activities.map(a => `
        <a href="${a[1]}" target="_blank" class="item-link">
          <span class="item-icon">🎡</span>
          ${a[0]}
        </a>
      `).join("");

      card.innerHTML = `
        <div class="card-header">
          <h3 class="hike-name">${h.name}</h3>
          <div class="hike-meta">
            <span class="meta-item">📏 ${h.distance}</span>
            <span class="meta-item">⛰️ ${h.elevation}</span>
          </div>
        </div>
        
        <div class="card-links">
          <a href="${h.alltrails}" target="_blank" class="link-btn">
            <span>🌲 AllTrails</span>
          </a>
          <a href="${h.map}" target="_blank" class="link-btn">
            <span>📍 Trailhead</span>
          </a>
        </div>

        <div class="card-section">
          <span class="section-label">Post-Hike Food</span>
          <div class="item-list">${foodHtml}</div>
        </div>

        <div class="card-section">
          <span class="section-label">Nearby Activities</span>
          <div class="item-list">${actsHtml}</div>
        </div>
      `;
      
      grid.appendChild(card);
    });

    section.appendChild(grid);
    app.appendChild(section);
  });

  initNav();
  initMap();
}

function initNav() {
  const links = document.querySelectorAll(".season-link");
  const sections = document.querySelectorAll(".season-section");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
}

function randomHike() {
  let all = [];
  Object.values(hikes).forEach(s => all = all.concat(s));
  const pick = all[Math.floor(Math.random() * all.length)];
  scrollToHike(pick.name);
}

document.getElementById("random-hike-btn").onclick = randomHike;

build();

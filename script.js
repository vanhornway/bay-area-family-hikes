const hikes = {
  spring: [
    {
      name: "Edgewood Trail Loop",
      distance: "3.3 mi",
      elevation: "587 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/edgewood-trail-loop",
      map: "https://maps.google.com/?q=Edgewood+Park+Redwood+City",
      food: [
        ["Falafel Tazah", "https://maps.google.com/?q=Falafel+Tazah+Redwood+City"],
        ["Mazra Mediterranean", "https://maps.google.com/?q=Mazra+Mediterranean"]
      ],
      activities: [
        ["Filoli Gardens", "https://maps.google.com/?q=Filoli+Gardens"],
        ["Pulgas Water Temple", "https://maps.google.com/?q=Pulgas+Water+Temple"]
      ]
    },
    {
      name: "Russian Ridge Loop",
      distance: "4 mi",
      elevation: "650 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/russian-ridge-open-space-preserve",
      map: "https://maps.google.com/?q=Russian+Ridge+Open+Space",
      food: [
        ["Alice's Restaurant", "https://maps.google.com/?q=Alices+Restaurant+Woodside"],
        ["Skywood Trading Post", "https://maps.google.com/?q=Skywood+Trading+Post"]
      ],
      activities: [
        ["Skyline Boulevard Scenic Drive", "https://maps.google.com/?q=Skyline+Boulevard"],
        ["Windy Hill Preserve", "https://maps.google.com/?q=Windy+Hill+Open+Space"]
      ]
    },
    {
      name: "Wunderlich Park Loop",
      distance: "3.2 mi",
      elevation: "679 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/alambique-redwood-and-bear-gulch-loop",
      map: "https://maps.google.com/?q=Wunderlich+County+Park",
      food: [
        ["Backhaus Bakery", "https://maps.google.com/?q=Backhaus+Bakery"],
        ["Falafel Stop", "https://maps.google.com/?q=Falafel+Stop+Sunnyvale"]
      ],
      activities: [
        ["Huddart Park", "https://maps.google.com/?q=Huddart+Park"],
        ["Pulgas Water Temple", "https://maps.google.com/?q=Pulgas+Water+Temple"]
      ]
    },
    {
      name: "Arastradero Preserve Loop",
      distance: "4.4 mi",
      elevation: "597 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/ohlone-trail-to-arastradero-creek-trail",
      map: "https://maps.google.com/?q=Arastradero+Preserve",
      food: [
        ["Zareens Palo Alto", "https://maps.google.com/?q=Zareens+Palo+Alto"],
        ["Oren's Hummus", "https://maps.google.com/?q=Orens+Hummus"]
      ],
      activities: [
        ["Stanford Dish", "https://maps.google.com/?q=Stanford+Dish"],
        ["Cantor Arts Center", "https://maps.google.com/?q=Cantor+Arts+Center"]
      ]
    },
    {
      name: "Coyote Valley Loop",
      distance: "3.9 mi",
      elevation: "620 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/arrowhead-loop-trail--2",
      map: "https://maps.google.com/?q=Coyote+Valley+Open+Space+Preserve",
      food: [
        ["Halal Gyro Express", "https://maps.google.com/?q=Halal+Gyro+Express+Morgan+Hill"],
        ["Craft Roots Vegan", "https://maps.google.com/?q=Craft+Roots+Morgan+Hill"]
      ],
      activities: [
        ["Coyote Valley Farms", "https://maps.google.com/?q=Coyote+Valley+Farm"],
        ["Uvas Canyon Scenic Drive", "https://maps.google.com/?q=Uvas+Canyon"]
      ]
    },
    {
      name: "Foothills Preserve Loop",
      distance: "3.9 mi",
      elevation: "649 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/chamise-toyon-and-fern-loop",
      map: "https://maps.google.com/?q=Foothills+Nature+Preserve",
      food: [
        ["DishDash Sunnyvale", "https://maps.google.com/?q=DishDash+Sunnyvale"],
        ["Falafel Stop Sunnyvale", "https://maps.google.com/?q=Falafel+Stop"]
      ],
      activities: [
        ["Foothills Lake", "https://maps.google.com/?q=Foothills+Lake"],
        ["Downtown Los Altos", "https://maps.google.com/?q=Los+Altos+Downtown"]
      ]
    }
  ],
  summer: [
    {
      name: "Fall Creek Lime Kilns",
      distance: "3.4 mi",
      elevation: "511 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/fall-creek-to-lime-kilns-trail",
      map: "https://maps.google.com/?q=Fall+Creek+Trail+Henry+Cowell",
      food: [
        ["Falafel Santa Cruz", "https://maps.google.com/?q=Falafel+Santa+Cruz"],
        ["Zameen Mediterranean", "https://maps.google.com/?q=Zameen+Santa+Cruz"]
      ],
      activities: [
        ["Roaring Camp Railroad", "https://maps.google.com/?q=Roaring+Camp+Railroad"],
        ["Santa Cruz Boardwalk", "https://maps.google.com/?q=Santa+Cruz+Boardwalk"]
      ]
    },
    {
      name: "Henry Cowell Redwoods Loop",
      distance: "4.4 mi",
      elevation: "682 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/redwood-grove-loop-trail-and-cowell-highlights-loop",
      map: "https://maps.google.com/?q=Henry+Cowell+Redwoods+State+Park",
      food: [
        ["Zameen Felton", "https://maps.google.com/?q=Zameen+Felton"],
        ["Pretty Good Advice Vegan", "https://maps.google.com/?q=Pretty+Good+Advice"]
      ],
      activities: [
        ["Felton Covered Bridge", "https://maps.google.com/?q=Felton+Covered+Bridge"],
        ["Santa Cruz Mountains Roasting", "https://maps.google.com/?q=Santa+Cruz+Mountains+Roasting"]
      ]
    },
    {
      name: "Nisene Marks Loop",
      distance: "4 mi",
      elevation: "603 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/monte-toyon-vista-loop-via-aptos-rancho-trail",
      map: "https://maps.google.com/?q=Nisene+Marks+State+Park",
      food: [
        ["Zameen Aptos", "https://maps.google.com/?q=Zameen+Aptos"],
        ["Falafel Hut Aptos", "https://maps.google.com/?q=Falafel+Hut+Aptos"]
      ],
      activities: [
        ["Capitola Village", "https://maps.google.com/?q=Capitola+Village"],
        ["Seacliff Beach", "https://maps.google.com/?q=Seacliff+State+Beach"]
      ]
    },
    {
      name: "Redwood Regional Stream Trail",
      distance: "3.9 mi",
      elevation: "554 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/redwood-regional-park--6",
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
      alltrails: "https://www.alltrails.com/trail/us/california/long-ridge-loop",
      map: "https://maps.google.com/?q=Long+Ridge+Open+Space",
      food: [
        ["Alice's Restaurant", "https://maps.google.com/?q=Alices+Restaurant+Woodside"],
        ["Skywood Trading Post", "https://maps.google.com/?q=Skywood+Trading+Post"]
      ],
      activities: [
        ["Russian Ridge Preserve", "https://maps.google.com/?q=Russian+Ridge+Open+Space"],
        ["Skyline Scenic Drive", "https://maps.google.com/?q=Skyline+Boulevard"]
      ]
    },
    {
      name: "Sanborn Summit Rock",
      distance: "4 mi",
      elevation: "600 ft",
      alltrails: "https://www.alltrails.com/parks/us/california/sanborn-county-park",
      map: "https://maps.google.com/?q=Sanborn+County+Park",
      food: [
        ["Sues Gallery Cafe Saratoga", "https://maps.google.com/?q=Sues+Gallery+Cafe+Saratoga"],
        ["Sushi Kuni Saratoga", "https://maps.google.com/?q=Sushi+Kuni"]
      ],
      activities: [
        ["Hakone Gardens", "https://maps.google.com/?q=Hakone+Gardens"],
        ["Downtown Saratoga", "https://maps.google.com/?q=Saratoga+Downtown"]
      ]
    }
  ],
  fall: [
    {
      name: "Rancho San Antonio Loop",
      distance: "4.6 mi",
      elevation: "616 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/high-meadow-loop-via-lower-meadow-trail",
      map: "https://maps.google.com/?q=Rancho+San+Antonio+Open+Space",
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
      name: "Saratoga Gap Loop",
      distance: "4.5 mi",
      elevation: "636 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/saratoga-gap-trail-to-achistaca-trail-loop",
      map: "https://maps.google.com/?q=Saratoga+Gap+Open+Space",
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
      name: "Los Gatos Creek Loop",
      distance: "4 mi",
      elevation: "521 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/los-gatos-creek-trail-to-jones-trail-loop",
      map: "https://maps.google.com/?q=St+Josephs+Hill+Open+Space",
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
      name: "Almaden Quicksilver Loop",
      distance: "3.6 mi",
      elevation: "692 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/hacienda-randol-and-buena-vista-trail-loop",
      map: "https://maps.google.com/?q=Almaden+Quicksilver+County+Park",
      food: [
        ["Falafel Drive In", "https://maps.google.com/?q=Falafel+Drive+In"],
        ["Mint and Basil", "https://maps.google.com/?q=Mint+and+Basil"]
      ],
      activities: [
        ["New Almaden Mining Museum", "https://maps.google.com/?q=New+Almaden+Museum"],
        ["Almaden Lake Park", "https://maps.google.com/?q=Almaden+Lake+Park"]
      ]
    },
    {
      name: "Henry Coe Frog Lake",
      distance: "4.5 mi",
      elevation: "698 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/frog-lake-loop-trail",
      map: "https://maps.google.com/?q=Henry+Coe+State+Park",
      food: [
        ["Halal Gyro Express", "https://maps.google.com/?q=Halal+Gyro+Express"],
        ["Trail Dust BBQ", "https://maps.google.com/?q=Trail+Dust+BBQ"]
      ],
      activities: [
        ["Morgan Hill Downtown", "https://maps.google.com/?q=Morgan+Hill+Downtown"],
        ["Anderson Lake Park", "https://maps.google.com/?q=Anderson+Lake+Park"]
      ]
    },
    {
      name: "Monte Bello Preserve",
      distance: "4 mi",
      elevation: "650 ft",
      alltrails: "https://www.alltrails.com/parks/us/california/monte-bello-open-space-preserve",
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
      alltrails: "https://www.alltrails.com/trail/us/california/lands-end-trail",
      map: "https://maps.google.com/?q=Lands+End+Trail",
      food: [
        ["Pakwan SF", "https://maps.google.com/?q=Pakwan+San+Francisco"],
        ["Halal Guys SF", "https://maps.google.com/?q=Halal+Guys+San+Francisco"]
      ],
      activities: [
        ["Sutro Baths", "https://maps.google.com/?q=Sutro+Baths"],
        ["Legion of Honor", "https://maps.google.com/?q=Legion+of+Honor"]
      ]
    },
    {
      name: "Tilden Wildcat Gorge",
      distance: "3.4 mi",
      elevation: "511 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/wildcat-gorge-trail",
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
      name: "Tennessee Valley Trail",
      distance: "3.4 mi",
      elevation: "550 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/tennessee-valley-trail",
      map: "https://maps.google.com/?q=Tennessee+Valley+Trailhead",
      food: [
        ["Falafel Hut Mill Valley", "https://maps.google.com/?q=Falafel+Hut+Mill+Valley"],
        ["Sol Food Mill Valley", "https://maps.google.com/?q=Sol+Food"]
      ],
      activities: [
        ["Marin Headlands", "https://maps.google.com/?q=Marin+Headlands"],
        ["Golden Gate Viewpoint", "https://maps.google.com/?q=Golden+Gate+Viewpoint"]
      ]
    },
    {
      name: "Mount Tam Cataract Falls",
      distance: "4.3 mi",
      elevation: "670 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/cataract-falls-trail",
      map: "https://maps.google.com/?q=Cataract+Falls+Mount+Tam",
      food: [
        ["Falafel Hut", "https://maps.google.com/?q=Falafel+Hut+Mill+Valley"],
        ["Good Earth Market", "https://maps.google.com/?q=Good+Earth+Market"]
      ],
      activities: [
        ["Mount Tam Scenic Drive", "https://maps.google.com/?q=Mount+Tam+Scenic+Drive"],
        ["Muir Woods", "https://maps.google.com/?q=Muir+Woods"]
      ]
    },
    {
      name: "Point Lobos Loop",
      distance: "3.5 mi",
      elevation: "500 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/cypress-grove-trail",
      map: "https://maps.google.com/?q=Point+Lobos+State+Reserve",
      food: [
        ["Dametra Cafe Carmel", "https://maps.google.com/?q=Dametra+Cafe"],
        ["Mediterranean Cafe Carmel", "https://maps.google.com/?q=Mediterranean+Cafe+Carmel"]
      ],
      activities: [
        ["Carmel by the Sea", "https://maps.google.com/?q=Carmel+by+the+Sea"],
        ["17 Mile Drive", "https://maps.google.com/?q=17+Mile+Drive"]
      ]
    },
    {
      name: "Coyote Hills Bay View",
      distance: "3.2 mi",
      elevation: "250 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/bayview-and-meadowlark-trail-loop",
      map: "https://maps.google.com/?q=Coyote+Hills+Regional+Park",
      food: [
        ["De Afghanan Fremont", "https://maps.google.com/?q=De+Afghanan+Fremont"],
        ["Zingster's Halal", "https://maps.google.com/?q=Zingsters+Fremont"]
      ],
      activities: [
        ["Don Edwards Wildlife Refuge", "https://maps.google.com/?q=Don+Edwards+Wildlife+Refuge"],
        ["Dumbarton Bridge Scenic Drive", "https://maps.google.com/?q=Dumbarton+Bridge"]
      ]
    },
    {
      name: "Sibley Volcanic Loop",
      distance: "3.5 mi",
      elevation: "593 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/round-top-and-volcanic-trail-loop",
      map: "https://maps.google.com/?q=Sibley+Volcanic+Regional+Preserve",
      food: [
        ["Maya Halal Taqueria", "https://maps.google.com/?q=Maya+Halal+Taqueria+Oakland"],
        ["Shawarmaji Oakland", "https://maps.google.com/?q=Shawarmaji+Oakland"]
      ],
      activities: [
        ["Sibley Labyrinths", "https://maps.google.com/?q=Sibley+Labyrinth"],
        ["Skyline Boulevard", "https://maps.google.com/?q=Skyline+Boulevard+Oakland"]
      ]
    },
    {
      name: "Joaquin Miller Big Trees",
      distance: "4.6 mi",
      elevation: "950 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/sequoia-bayview-and-big-trees-loop",
      map: "https://maps.google.com/?q=Joaquin+Miller+Park",
      food: [
        ["Kamdesh Afghan Cuisine", "https://maps.google.com/?q=Kamdesh+Afghan+Cuisine+Oakland"],
        ["Pomella Mediterranean", "https://maps.google.com/?q=Pomella+Oakland"]
      ],
      activities: [
        ["Chabot Space Center", "https://maps.google.com/?q=Chabot+Space+Center"],
        ["Woodminster Amphitheater", "https://maps.google.com/?q=Woodminster+Amphitheater"]
      ]
    },
    {
      name: "Mori Point Loop",
      distance: "2.5 mi",
      elevation: "396 ft",
      alltrails: "https://www.alltrails.com/trail/us/california/mori-point-loop-trail",
      map: "https://maps.google.com/?q=Mori+Point+Pacifica",
      food: [
        ["Lovey's Tea Shoppe", "https://maps.google.com/?q=Loveys+Tea+Shoppe+Pacifica"],
        ["Hummus Mediterranean", "https://maps.google.com/?q=Hummus+Mediterranean+Kitchen+San+Mateo"]
      ],
      activities: [
        ["Pacifica Pier", "https://maps.google.com/?q=Pacifica+Pier"],
        ["Rockaway Beach", "https://maps.google.com/?q=Rockaway+Beach+Pacifica"]
      ]
    }
  ]
};

function build() {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Clear loading state

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

  // Initialize navigation highlighting
  initNav();
}

function initNav() {
  const links = document.querySelectorAll(".season-link");
  const sections = document.querySelectorAll(".season-section");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
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
  const cards = document.querySelectorAll(".card");
  
  cards.forEach(c => {
    c.classList.remove("highlight-card");
    if (c.dataset.name === pick.name.toLowerCase()) {
      c.scrollIntoView({ behavior: "smooth", block: "center" });
      c.classList.add("highlight-card");
    }
  });
}

document.getElementById("random-hike-btn").onclick = randomHike;

// Build the app
build();

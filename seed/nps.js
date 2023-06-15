const db = require('../db')
const { NPs } = require('../models')

db.on('error', err => logError(err))

const seedNPs = async() => {
    const nps =[
      {
        "name": "Capitol Reef",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/40/Cassidy_Arch%2C_Capitol_Reef_National_Park.JPG",
        "state": "Utah",
        "latLng": "38.20°N 111.17°W",
        "establishDate": "December 18, 1971",
        "topic": "Mountain",
        "area": 979,
        "visitors": 1227608,
        "description": "The park's Waterpocket Fold is a 100-mile (160 km) monocline that exhibits the earth's diverse geologic layers. Other natural features include monoliths, eroded buttes, and sandstone domes, including one shaped like the United States Capitol."
      },
      {
        "name": "Channel Islands",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/82/Santa_Cruz_Island_CA_DSC_4323_ad.JPG",
        "state": "California",
        "latLng": "34.01°N 119.42°W",
        "establishDate": "March 5, 1980",
        "topic": "Island",
        "area": 1009.9,
        "visitors": 323245,
        "description": "Five of the eight Channel Islands are protected, with half of the park's area underwater. The islands have a unique Mediterranean ecosystem originally settled by the Chumash people. They are home to over 2,000 species of land plants and animals, 145 endemic to them, including the island fox. Ferry services offer transportation to the islands from the mainland."
      },
      {
        "name": "Death Valley",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Isolated_Desert.jpg",
        "state": "Nevada",
        "latLng": "36.24°N 116.82°W",
        "establishDate": "October 31, 1994",
        "topic": "Desert",
        "area": 13793.3,
        "visitors": 1128862,
        "description": "Death Valley is the hottest, lowest, and driest place in the United States, with daytime temperatures that have exceeded 130 °F (54 °C). The park protects Badwater Basin and its vast salt flats at the lowest elevation in North America, −282 ft (−86 m), This geologic graben also protects numerous canyons, badlands, sand dunes, mountain ranges, historic mines, springs, and more than 1,000 species of plants that grow."
      },
      {
        "name": "Glacier",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/51/Mountain_Goat_at_Hidden_Lake.jpg",
        "state": "Montana",
        "latLng": "48.80°N 114.00°W",
        "establishDate": "May 11, 1910",
        "topic": "Glacier",
        "area": 4100,
        "visitors": 2908458,
        "description": "The U.S. half of Waterton-Glacier International Peace Park, this park includes 26 rapidly receding glaciers and 130 named lakes surrounded by Rocky Mountain peaks. Historic hotels and the landmark Going-to-the-Sun Road accommodate visitors. The local mountains, formed by an overthrust, expose Paleozoic fossils including trilobites, mollusks, giant ferns and dinosaurs. The park is also home to Triple Divide Peak, which forms the boundary between the watersheds of the Atlantic, Pacific, and Arctic Oceans."
      },
      {
        "name": "Grand Canyon",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f9/USA_09847_Grand_Canyon_Luca_Galuzzi_2007.jpg",
        "state": "Arizona",
        "latLng": "36.06°N 112.14°W",
        "establishDate": "February 26, 1919",
        "topic": "Rock Landscape",
        "area": 4862.9,
        "visitors": 4732101,
        "description": "The Grand Canyon, carved by the mighty Colorado River, is 277 miles (446 km) long, up to 1 mile (1.6 km) deep, and up to 15 miles (24 km) wide. Millions of years of erosion have resulted in a massive three-tiered canyon, exposing the multicolored layers of the Colorado Plateau in mesas and canyon walls, visible from trails that descend into the canyon from the north and south rims."
      },
      {
        "name": "Grand Teton",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Cathedral_Group_GTNP1.jpg",
        "state": "Wyoming",
        "latLng": "43.73°N 110.80°W",
        "establishDate": "February 26, 1929",
        "topic": "Mountain",
        "area": 1254.7,
        "visitors": 2806223,
        "description": "Grand Teton is the tallest mountain in the scenic Teton Range. The park's historic Jackson Hole and reflective piedmont lakes teem with endemic wildlife, with a backdrop of craggy mountains that rise abruptly from the sage-covered valley below."
      },
      {
        "name": "Great Sand Dunes",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/74/Sun_and_Shadow_Patterns_on_Dunes_%2828471118064%29.jpg",
        "state": "Colorado",
        "latLng": "37.73°N 105.51°W",
        "establishDate": "September 24, 2004",
        "topic": "Desert",
        "area": 434.4,
        "visitors": 493428,
        "description": "The tallest sand dunes in North America, up to 750 feet (230 m) tall, were formed by deposits of the ancient Rio Grande in the San Luis Valley. Abutting a variety of grasslands, shrublands, and wetlands, the park also features alpine lakes, six 13,000-foot mountains, and old-growth forests."
      },
      {
        "name": "Isle Royale",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/7c/IsleRoyalePlane.jpg",
        "state": "Michigan",
        "latLng": "48.10°N 88.55°W",
        "establishDate": "April 3, 1940",
        "topic": "Island",
        "area": 2314,
        "visitors": 25454,
        "description": "The largest island in Lake Superior is a place of isolation and wilderness. Along with its many shipwrecks, waterways, and hiking trails, the park also includes over 400 smaller islands within 4.5 miles (7.2 km) of its shores. There are only 20 mammal species on the island, though the relationship between its wolf and moose populations is especially unique."
      },
      {
        "name": "Joshua Tree",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Joshua_Tree_-_Rock_formation_in_Real_Hidden_Valley_1.jpg",
        "state": "California",
        "latLng": "33.79°N 115.90°W",
        "establishDate": "October 31, 1994",
        "topic": "Desert",
        "area": 3217.9,
        "visitors": 3058294,
        "description": "Covering large areas of the Colorado and Mojave Deserts and the Little San Bernardino Mountains, this desert landscape is populated by vast stands of Joshua trees. Large changes in elevation reveal various contrasting environments including bleached sand dunes, dry lakes, rugged mountains, and maze-like clusters of monzogranite monoliths."
      },
      {
        "name": "Sequoia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Giant_sequoias_in_Sequoia_National_Park_2013.jpg",
        "state": "California",
        "latLng": "36.43°N 118.68°W",
        "establishDate": "September 25, 1890",
        "topic": "Forest",
        "area": 1635.2,
        "visitors": 1153198,
        "description": "This park protects the Giant Forest, which boasts some of the world's largest trees, the General Sherman being the largest measured tree in the park. Other features include over 240 caves, a long segment of the Sierra Nevada including the tallest mountain in the contiguous United States, and Moro Rock, a large granite dome."
      },
      {
        "name": "Yellowstone",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/89/Grand_Prismatic_Spring_2013.jpg",
        "state": "Wyoming",
        "latLng": "44.60°N 110.50°W",
        "establishDate": "March 1, 1872",
        "topic": "Rock Landscape",
        "area": 8983.2,
        "visitors": 3290242,
        "description": "Situated on the Yellowstone Caldera, the park has an expansive network of geothermal areas including boiling mud pots, vividly colored hot springs such as Grand Prismatic Spring, and regularly erupting geysers, the best-known being Old Faithful. The yellow-hued Grand Canyon of the Yellowstone River contains several high waterfalls, and four mountain ranges traverse the park. More than 60 mammal species including timber wolves, grizzly bears, black bears, lynxes, bison, and elk make this park one of the best wildlife viewing spots in the country."
      },
      {
        "name": "Yosemite",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg",
        "state": "California",
        "latLng": "37.83°N 119.50°W",
        "establishDate": "October 1, 1890",
        "topic": "Rock Landscape",
        "area": 3082.7,
        "visitors": 3667550,
        "description": "Yosemite features sheer granite cliffs, exceptionally tall waterfalls, and old-growth forests at a unique intersection of geology and hydrology. Half Dome and El Capitan rise from the park's centerpiece, the glacier-carved Yosemite Valley, and from its vertical walls drop Yosemite Falls, one of North America's tallest waterfalls at 2,425 feet (739 m) high. Three giant sequoia groves, along with a pristine wilderness in the heart of the Sierra Nevada, are home to a wide variety of rare plant and animal species."
      },
      {
        "name": "Zion",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Angels_Landing.jpg",
        "state": "Utah",
        "latLng": "37.30°N 113.05°W",
        "establishDate": "November 19, 1919",
        "topic": "Rock Landscape",
        "area": 595.9,
        "visitors": 4692417,
        "description": "Located at the junction of the Colorado Plateau, Great Basin, and Mojave Desert, this park contains sandstone features such as mesas, rock towers, and canyons, including the Virgin River Narrows. The various sandstone formations and the forks of the Virgin River create a wilderness divided into four ecosystems: desert, riparian, woodland, and coniferous forest."
      }
    ]
    await NPs.insertMany(nps)
    console.log('successfully insert NPs')
}

const run = async() => {
    await seedNPs();
    db.close()
}

run()
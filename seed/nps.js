const db = require('../db')
const { NPs } = require('../models')

db.on('error', err => logError(err))

const seedNPs = async() => {
    const nps = [
        {
          "name": "Acadia",
          "image": "https://en.wikipedia.org/wiki/File:Bass_Harbor_Head_Light_Station_2016.jpg",
          "state": "Maine",
          "latLng": "44.35°N 68.21°W",
          "establishDate": "February 26, 1919",
          "area": 198.6,
          "visitors": 3970260,
          "description": "Covering most of Mount Desert Island and other coastal islands, Acadia features the tallest mountain on the Atlantic coast of the United States, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats."
        },
        {
          "name": "Death Valley",
          "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Isolated_Desert.jpg",
          "state": "Nevada",
          "latLng": "36.24°N 116.82°W",
          "establishDate": "October 31, 1994",
          "area": 13793.3,
          "visitors": 1128862,
          "description": "Death Valley is the hottest, lowest, and driest place in the United States, with daytime temperatures that have exceeded 130 °F (54 °C). The park protects Badwater Basin and its vast salt flats at the lowest elevation in North America, −282 ft (−86 m), This geologic graben also protects numerous canyons, badlands, sand dunes, mountain ranges, historic mines, springs, and more than 1,000 species of plants that grow."
        },
        {
          "name": "Denali",
          "image": "https://upload.wikimedia.org/wikipedia/commons/9/91/Wonder_Lake_and_Denali.jpg",
          "state": "Alaska",
          "latLng": "63.33°N 150.50°W",
          "establishDate": "February 26, 1917",
          "area": 19185.8,
          "visitors": 427562,
          "description": "Centered on Denali, the tallest and most prominent mountain in North America, the park is serviced by a single road leading to Wonder Lake, most of which can only be accessed via scheduled tour buses. Denali and other peaks of the Alaska Range are covered with long glaciers and boreal forest. Wildlife includes grizzly bears, Dall sheep, moose, caribou, and wolves."
        },
        {
          "name": "Everglades",
          "image": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Pinelands_Sunrise_%281%29_NPSPhoto%2C_Sarah_Zenner_%289255147763%29.jpg",
          "state": "Florida",
          "latLng": "25.32°N 80.93°W",
          "establishDate": "May 30, 1934",
          "area": 6106.5,
          "visitors": 1155193,
          "description": "The Everglades are the largest tropical wilderness in the United States. This mangrove and tropical rainforest ecosystem and marine estuary is home to 36 protected species, including the Florida panther, American crocodile, and West Indian manatee. Some areas have been drained and developed; restoration projects aim to restore the ecology."
        },
        {
          "name": "Gates of the Arctic",
          "image": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Remote_river_in_Gates_of_the_Arctic_%2816524035298%29.jpg",
          "state": "Alaska",
          "latLng": "67.78°N 153.30°W",
          "establishDate": "December 2, 1980",
          "area": 30448.1,
          "visitors": 9457,
          "description": "The country's northernmost park protects an expanse of pure wilderness in Alaska's Brooks Range and has no park facilities. The land is home to Alaska Natives who have relied on the land and caribou for 11,000 years."
        },
        {
          "name": "Glacier",
          "image": "https://upload.wikimedia.org/wikipedia/commons/5/51/Mountain_Goat_at_Hidden_Lake.jpg",
          "state": "Montana",
          "latLng": "48.80°N 114.00°W",
          "establishDate": "May 11, 1910",
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
          "area": 1254.7,
          "visitors": 2806223,
          "description": "Grand Teton is the tallest mountain in the scenic Teton Range. The park's historic Jackson Hole and reflective piedmont lakes teem with endemic wildlife, with a backdrop of craggy mountains that rise abruptly from the sage-covered valley below."
        },
        {
          "name": "Indiana Dunes",
          "image": "https://upload.wikimedia.org/wikipedia/commons/7/7c/2010-11-26_3060x2040_portage_indiana_dunes.jpg",
          "state": "Indiana",
          "latLng": "41.6533°N 87.0524°W",
          "establishDate": "February 15, 2019",
          "area": 62.1,
          "visitors": 2834180,
          "description": "Previously designated a national lakeshore, parts of this 20-mile (32 km) stretch of the southern shore of Lake Michigan have sandy beaches and tall dunes. The park includes grassy prairies, peat bogs, and marsh wetlands home to over 2,000 species."
        },
        {
          "name": "Isle Royale",
          "image": "https://upload.wikimedia.org/wikipedia/commons/7/7c/IsleRoyalePlane.jpg",
          "state": "Michigan",
          "latLng": "48.10°N 88.55°W",
          "establishDate": "April 3, 1940",
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
          "area": 3217.9,
          "visitors": 3058294,
          "description": "Covering large areas of the Colorado and Mojave Deserts and the Little San Bernardino Mountains, this desert landscape is populated by vast stands of Joshua trees. Large changes in elevation reveal various contrasting environments including bleached sand dunes, dry lakes, rugged mountains, and maze-like clusters of monzogranite monoliths."
        },
        {
          "name": "Yellowstone",
          "image": "https://en.wikipedia.org/w/index.php?title=List_of_national_parks_of_the_United_States&oldid=1158897368#/media/File:Grand_Prismatic_Spring_2013.jpg",
          "state": "Wyoming",
          "latLng": "44.60°N 110.50°W",
          "establishDate": "March 1, 1872",
          "area": 8983.2,
          "visitors": 3290242,
          "description": "Situated on the Yellowstone Caldera, the park has an expansive network of geothermal areas including boiling mud pots, vividly colored hot springs such as Grand Prismatic Spring, and regularly erupting geysers, the best-known being Old Faithful. The yellow-hued Grand Canyon of the Yellowstone River contains several high waterfalls, and four mountain ranges traverse the park. More than 60 mammal species including timber wolves, grizzly bears, black bears, lynxes, bison, and elk make this park one of the best wildlife viewing spots in the country."
        },
        {
          "name": "Yosemite",
          "image": "https://en.wikipedia.org/w/index.php?title=List_of_national_parks_of_the_United_States&oldid=1158897368#/media/File:Half_Dome_from_Glacier_Point,_Yosemite_NP_-_Diliff.jpg",
          "state": "California",
          "latLng": "37.83°N 119.50°W",
          "establishDate": "October 1, 1890",
          "area": 3082.7,
          "visitors": 3667550,
          "description": "Yosemite features sheer granite cliffs, exceptionally tall waterfalls, and old-growth forests at a unique intersection of geology and hydrology. Half Dome and El Capitan rise from the park's centerpiece, the glacier-carved Yosemite Valley, and from its vertical walls drop Yosemite Falls, one of North America's tallest waterfalls at 2,425 feet (739 m) high. Three giant sequoia groves, along with a pristine wilderness in the heart of the Sierra Nevada, are home to a wide variety of rare plant and animal species."
        },
        {
          "name": "Zion",
          "image": "https://en.wikipedia.org/w/index.php?title=List_of_national_parks_of_the_United_States&oldid=1158897368#/media/File:Angels_Landing.jpg",
          "state": "Utah",
          "latLng": "37.30°N 113.05°W",
          "establishDate": "November 19, 1919",
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
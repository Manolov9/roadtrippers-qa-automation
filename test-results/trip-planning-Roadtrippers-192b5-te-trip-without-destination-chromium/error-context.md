# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: trip-planning.spec.ts >> Roadtrippers Trip Planning Flow >> Negative Scenario: Attempt to create trip without destination
- Location: tests/trip-planning.spec.ts:91:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('.search_input_to_error').first()
Expected: visible
Received: hidden
Timeout:  30000ms

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('.search_input_to_error').first()
    17 × locator resolved to <div class="autocomplete_error search_input_to_error">Valid location required</div>
       - unexpected value "hidden"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - link "Roadtrippers Logo" [ref=e5] [cursor=pointer]:
          - /url: https://roadtrippers.com
          - img "Roadtrippers Logo" [ref=e6]
        - navigation [ref=e17]:
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Memberships" [ref=e21] [cursor=pointer]:
                - /url: https://roadtrippers.com/membership/
            - listitem [ref=e22]:
              - link "For RVers" [ref=e23] [cursor=pointer]:
                - /url: https://roadtrippers.com/rv/
            - listitem [ref=e24]:
              - link "Plan Your Trip" [ref=e25] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com
            - listitem [ref=e26]:
              - link "Campendium" [ref=e27] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/?lng=-106.77766&lat=41.11498&z=3.30945&a4=p!CAMP
            - listitem [ref=e28]:
              - link "Magazine" [ref=e29] [cursor=pointer]:
                - /url: https://roadtrippers.com/magazine/
      - generic [ref=e30]:
        - link "Log In" [ref=e31] [cursor=pointer]:
          - /url: javascript:void(0);
        - link "Sign Up" [ref=e32] [cursor=pointer]:
          - /url: javascript:void(0);
        - link:
          - /url: javascript:void(0);
  - generic [ref=e33]:
    - main [ref=e34]:
      - generic [ref=e35]:
        - generic [ref=e36]:
          - img [ref=e38]
          - img [ref=e41]
          - img [ref=e44]
          - img [ref=e47]
        - generic [ref=e49]:
          - generic [ref=e50]:
            - generic [ref=e51]:
              - heading "Take unforgettable road trips" [level=1] [ref=e52]
              - paragraph [ref=e53]: The road trip planner that knows where you actually want to go.
            - generic [ref=e54]:
              - generic [ref=e55]:
                - generic [ref=e59]:
                  - generic [ref=e61]:
                    - generic [ref=e63] [cursor=pointer]:
                      - generic [ref=e64]: Plan on your own
                      - text: Explore and discover stops by yourself
                    - radio "Plan on your own Explore and discover stops by yourself" [checked] [ref=e66]
                  - generic [ref=e68]:
                    - generic [ref=e70] [cursor=pointer]:
                      - generic [ref=e71]:
                        - text: Plan with
                        - generic [ref=e72]: autopilot
                      - text: Powered by 42 million real trips
                    - radio "Plan with autopilot Powered by 42 million real trips" [ref=e74]
                - generic [ref=e76]:
                  - generic [ref=e78]:
                    - generic [ref=e80]:
                      - generic: Starting Point
                      - textbox [ref=e81]: Sofia, Bulgaria
                      - generic [ref=e82]: Valid location required
                      - generic:
                        - list
                        - list
                    - generic [ref=e84]:
                      - generic: Destination
                      - textbox [active] [ref=e85]
                  - button "Go" [ref=e87] [cursor=pointer]
              - paragraph [ref=e91]:
                - text: Not sure where to go?
                - link "Explore the map" [ref=e92] [cursor=pointer]:
                  - /url: https://maps.roadtrippers.com
                  - text: Explore the map
                  - img [ref=e94]
          - generic [ref=e97]:
            - img [ref=e99]
            - img "tevin-trinh-qRd3_-IVM38-unsplash 1" [ref=e102]
      - generic [ref=e104]:
        - img [ref=e106]
        - generic [ref=e107]:
          - heading "Plan, discover, and collaborate" [level=2] [ref=e109]
          - generic [ref=e111]:
            - generic [ref=e112]:
              - img "Roadtrippers Southwest Map" [ref=e113]
              - generic:
                - img [ref=e115]
                - img [ref=e118]
                - img [ref=e121]
                - generic [ref=e123]: "41"
                - generic: "42"
                - generic: "43"
            - generic:
              - img "Trip Collaboration Demo"
            - generic:
              - img "Autopilot Options Demo"
            - generic [ref=e124]:
              - generic [ref=e125]:
                - generic [ref=e126]: "41"
                - img "Arches National Park POI Card" [ref=e128]
              - generic [ref=e129]:
                - generic: "42"
                - img "Great Sand Dunes National Park POI Card" [ref=e131]
              - generic:
                - generic: "43"
                - generic:
                  - img "Bishop Castle POI Card"
      - generic [ref=e135]:
        - heading "Headlights on us" [level=4] [ref=e137]
        - img [ref=e139]
        - img [ref=e141]
        - img [ref=e143]
        - img [ref=e145]
      - generic [ref=e146]:
        - generic [ref=e147]: Advertisement
        - generic [ref=e148]:
          - generic:
            - link "Remove Ads":
              - /url: https://maps.roadtrippers.com/plus
              - button "Remove Ads" [ref=e149] [cursor=pointer]
      - generic [ref=e150]:
        - generic [ref=e151]:
          - heading "Choose the right plan for you and try it free for 7 days" [level=2] [ref=e152]
          - paragraph [ref=e153]: All plans include access to curated road trip guides, Extraordinary Places, and 5 million points of interest.
        - generic [ref=e156]:
          - generic [ref=e158]:
            - generic [ref=e159]: "Features:"
            - generic [ref=e160]: Free
            - generic [ref=e161]: + Basic
            - generic [ref=e162]: + Pro
            - generic [ref=e163]: + Premium
          - generic [ref=e164]:
            - generic [ref=e165]:
              - generic [ref=e166]: Saved trips
              - generic [ref=e167]: "1"
              - generic [ref=e168]: "3"
              - generic [ref=e169]: "5"
              - generic [ref=e170]: ∞
            - generic [ref=e171]:
              - generic [ref=e172]: Stops per trip
              - generic [ref=e173]: "3"
              - generic [ref=e174]: "20"
              - generic [ref=e175]: "50"
              - generic [ref=e176]: "150"
            - generic [ref=e177]:
              - generic [ref=e178]: Custom map styles
              - generic [ref=e179]: —
            - generic [ref=e186]:
              - generic [ref=e187]: Trip export
              - generic [ref=e188]: —
            - generic [ref=e195]:
              - generic [ref=e196]: Ad free
              - generic [ref=e197]: —
              - generic [ref=e198]: —
            - generic [ref=e203]:
              - generic [ref=e204]: Trip collaboration
              - generic [ref=e205]: —
              - generic [ref=e206]: —
            - generic [ref=e211]:
              - generic [ref=e212]: Navigation
              - generic [ref=e213]: —
              - generic [ref=e214]: —
            - generic [ref=e219]:
              - generic [ref=e220]: RV GPS
              - generic [ref=e221]: —
              - generic [ref=e222]: —
              - generic [ref=e223]: —
            - generic [ref=e226]:
              - generic [ref=e227]: Overnight RV parking
              - generic [ref=e228]: —
              - generic [ref=e229]: —
              - generic [ref=e230]: —
            - generic [ref=e233]:
              - generic [ref=e234]: Member deals
              - generic [ref=e235]: —
              - generic [ref=e236]: —
              - generic [ref=e237]: —
            - generic [ref=e240]:
              - generic [ref=e241]: Live traffic
              - generic [ref=e242]: —
              - generic [ref=e243]: —
              - generic [ref=e244]: —
            - generic [ref=e247]:
              - generic [ref=e248]: Offline maps
              - generic [ref=e249]: —
              - generic [ref=e250]: —
              - generic [ref=e251]: —
            - generic [ref=e254]:
              - generic [ref=e255]: Membership
              - generic [ref=e256]: $0/yr
              - generic [ref=e257]: $35.99/yr
              - generic [ref=e258]: $49.99/yr
              - generic [ref=e259]: $59.99/yr
          - generic [ref=e261]:
            - link "Sign up" [ref=e264] [cursor=pointer]:
              - /url: javascript:void(0);
            - link "Try it for free" [ref=e266] [cursor=pointer]:
              - /url: "#basic"
            - link "Try it for free" [ref=e268] [cursor=pointer]:
              - /url: "#pro"
            - link "Try it for free" [ref=e270] [cursor=pointer]:
              - /url: "#premium"
      - generic [ref=e271]:
        - generic [ref=e273]:
          - img "star" [ref=e276]
          - generic [ref=e277]:
            - heading "Places we find extraordinary" [level=2] [ref=e278]
            - paragraph [ref=e279]: Look for the colorful icons on our map to locate our favorite places.
          - img "star" [ref=e282]
        - generic [ref=e285]:
          - link [ref=e289] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/ak/nature/denali-national-park-and-preserve-anchorage-ak
            - img [ref=e291]
            - generic [ref=e292]:
              - img [ref=e295]
              - generic [ref=e327]:
                - heading [level=5] [ref=e328]: Denali National Park and Preserve
                - paragraph [ref=e333]: Alaska
          - link [ref=e337] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/luray-va/attractions/luray-caverns
            - img [ref=e339]
            - generic [ref=e340]:
              - img [ref=e343]
              - generic [ref=e365]:
                - heading [level=5] [ref=e366]: Luray Caverns
                - paragraph [ref=e371]: Luray, Virginia
          - link [ref=e375] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/san-francisco-ca/points-of-interest/yoda-fountain-san-francisco
            - img [ref=e377]
            - generic [ref=e378]:
              - img [ref=e381]
              - generic [ref=e400]:
                - heading [level=5] [ref=e401]: Yoda Fountain
                - paragraph [ref=e406]: San Francisco, California
          - link [ref=e410] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/alexandria-bay-ny/nature/boldt-castle
            - img [ref=e412]
            - generic [ref=e413]:
              - img [ref=e416]
              - generic [ref=e451]:
                - heading [level=5] [ref=e452]: Boldt Castle
                - paragraph [ref=e457]: Alexandria Bay, New York
          - link [ref=e461] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/cabazon-ca/attractions/cabazon-dinosaurs
            - img [ref=e463]
            - generic [ref=e464]:
              - img [ref=e467]
              - generic [ref=e485]:
                - heading [level=5] [ref=e486]: Cabazon Dinosaurs
                - paragraph [ref=e491]: Cabazon, California
          - link [ref=e495] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/moab-ut/nature/arches-national-park
            - img [ref=e497]
            - generic [ref=e498]:
              - img [ref=e501]
              - generic [ref=e508]:
                - heading [level=5] [ref=e509]: Arches National Park
                - paragraph [ref=e514]: Moab, Utah
          - link [ref=e518] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/amarillo-tx/attractions/cadillac-ranch
            - img [ref=e520]
            - generic [ref=e521]:
              - img [ref=e524]
              - generic [ref=e557]:
                - heading [level=5] [ref=e558]: Cadillac Ranch
                - paragraph [ref=e563]: Amarillo, Texas
          - link "Scandinavian Heritage Park" [ref=e567] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/minot-nd/nature/scandinavian-heritage-park
            - img "Scandinavian Heritage Park" [ref=e569]
            - generic [ref=e570]:
              - img [ref=e573]
              - generic [ref=e600]:
                - heading "Scandinavian Heritage Park" [level=5] [ref=e601]
                - paragraph [ref=e606]: Minot, North Dakota
          - link "Assateague Island National Seashore" [ref=e610] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/berlin-md/nature/assateague-island-national-seashore-berlin-md--2
            - img "Assateague Island National Seashore" [ref=e612]
            - generic [ref=e613]:
              - img [ref=e616]
              - generic [ref=e671]:
                - heading "Assateague Island National Seashore" [level=5] [ref=e672]
                - paragraph [ref=e677]: Berlin, Maryland
          - link "Fallingwater" [ref=e681] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/mill-run-pa/attractions/fallingwater
            - img "Fallingwater" [ref=e683]
            - generic [ref=e684]:
              - img [ref=e687]
              - generic [ref=e718]:
                - heading "Fallingwater" [level=5] [ref=e719]
                - paragraph [ref=e724]: Mill Run, Pennsylvania
          - link "Blue Whale of Catoosa" [ref=e728] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/catoosa-ok/attractions/blue-whale-of-catoosa
            - img "Blue Whale of Catoosa" [ref=e730]
            - generic [ref=e731]:
              - img [ref=e734]
              - generic [ref=e751]:
                - heading "Blue Whale of Catoosa" [level=5] [ref=e752]
                - paragraph [ref=e757]: Catoosa, Oklahoma
          - link [ref=e761] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/ak/nature/denali-national-park-and-preserve-anchorage-ak
            - img [ref=e763]
            - generic [ref=e764]:
              - img [ref=e767]
              - generic [ref=e799]:
                - heading [level=5] [ref=e800]: Denali National Park and Preserve
                - paragraph [ref=e805]: Alaska
          - link [ref=e809] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/luray-va/attractions/luray-caverns
            - img [ref=e811]
            - generic [ref=e812]:
              - img [ref=e815]
              - generic [ref=e837]:
                - heading [level=5] [ref=e838]: Luray Caverns
                - paragraph [ref=e843]: Luray, Virginia
          - link [ref=e847] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/san-francisco-ca/points-of-interest/yoda-fountain-san-francisco
            - img [ref=e849]
            - generic [ref=e850]:
              - img [ref=e853]
              - generic [ref=e872]:
                - heading [level=5] [ref=e873]: Yoda Fountain
                - paragraph [ref=e878]: San Francisco, California
          - link [ref=e882] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/alexandria-bay-ny/nature/boldt-castle
            - img [ref=e884]
            - generic [ref=e885]:
              - img [ref=e888]
              - generic [ref=e923]:
                - heading [level=5] [ref=e924]: Boldt Castle
                - paragraph [ref=e929]: Alexandria Bay, New York
          - link [ref=e933] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/cabazon-ca/attractions/cabazon-dinosaurs
            - img [ref=e935]
            - generic [ref=e936]:
              - img [ref=e939]
              - generic [ref=e957]:
                - heading [level=5] [ref=e958]: Cabazon Dinosaurs
                - paragraph [ref=e963]: Cabazon, California
          - link [ref=e967] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/moab-ut/nature/arches-national-park
            - img [ref=e969]
            - generic [ref=e970]:
              - img [ref=e973]
              - generic [ref=e980]:
                - heading [level=5] [ref=e981]: Arches National Park
                - paragraph [ref=e986]: Moab, Utah
          - link [ref=e990] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/amarillo-tx/attractions/cadillac-ranch
            - img [ref=e992]
            - generic [ref=e993]:
              - img [ref=e996]
              - generic [ref=e1029]:
                - heading [level=5] [ref=e1030]: Cadillac Ranch
                - paragraph [ref=e1035]: Amarillo, Texas
          - link [ref=e1039] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/minot-nd/nature/scandinavian-heritage-park
            - img [ref=e1041]
            - generic [ref=e1042]:
              - img [ref=e1045]
              - generic [ref=e1072]:
                - heading [level=5] [ref=e1073]: Scandinavian Heritage Park
                - paragraph [ref=e1078]: Minot, North Dakota
          - link [ref=e1082] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/berlin-md/nature/assateague-island-national-seashore-berlin-md--2
            - img [ref=e1084]
            - generic [ref=e1085]:
              - img [ref=e1088]
              - generic [ref=e1143]:
                - heading [level=5] [ref=e1144]: Assateague Island National Seashore
                - paragraph [ref=e1149]: Berlin, Maryland
          - link [ref=e1153] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/mill-run-pa/attractions/fallingwater
            - img [ref=e1155]
            - generic [ref=e1156]:
              - img [ref=e1159]
              - generic [ref=e1190]:
                - heading [level=5] [ref=e1191]: Fallingwater
                - paragraph [ref=e1196]: Mill Run, Pennsylvania
          - link [ref=e1200] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/catoosa-ok/attractions/blue-whale-of-catoosa
            - img [ref=e1202]
            - generic [ref=e1203]:
              - img [ref=e1206]
              - generic [ref=e1223]:
                - heading [level=5] [ref=e1224]: Blue Whale of Catoosa
                - paragraph [ref=e1229]: Catoosa, Oklahoma
          - link [ref=e1233] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/ak/nature/denali-national-park-and-preserve-anchorage-ak
            - img [ref=e1235]
            - generic [ref=e1236]:
              - img [ref=e1239]
              - generic [ref=e1271]:
                - heading [level=5] [ref=e1272]: Denali National Park and Preserve
                - paragraph [ref=e1277]: Alaska
          - link [ref=e1281] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/luray-va/attractions/luray-caverns
            - img [ref=e1283]
            - generic [ref=e1284]:
              - img [ref=e1287]
              - generic [ref=e1309]:
                - heading [level=5] [ref=e1310]: Luray Caverns
                - paragraph [ref=e1315]: Luray, Virginia
          - link [ref=e1319] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/san-francisco-ca/points-of-interest/yoda-fountain-san-francisco
            - img [ref=e1321]
            - generic [ref=e1322]:
              - img [ref=e1325]
              - generic [ref=e1344]:
                - heading [level=5] [ref=e1345]: Yoda Fountain
                - paragraph [ref=e1350]: San Francisco, California
          - link [ref=e1354] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/alexandria-bay-ny/nature/boldt-castle
            - img [ref=e1356]
            - generic [ref=e1357]:
              - img [ref=e1360]
              - generic [ref=e1395]:
                - heading [level=5] [ref=e1396]: Boldt Castle
                - paragraph [ref=e1401]: Alexandria Bay, New York
          - link [ref=e1405] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/cabazon-ca/attractions/cabazon-dinosaurs
            - img [ref=e1407]
            - generic [ref=e1408]:
              - img [ref=e1411]
              - generic [ref=e1429]:
                - heading [level=5] [ref=e1430]: Cabazon Dinosaurs
                - paragraph [ref=e1435]: Cabazon, California
        - link "Explore All Extraordinary Places" [ref=e1439] [cursor=pointer]:
          - /url: https://roadtrippers.com/extraordinary-places/
      - generic [ref=e1440]:
        - heading "See what roadtrippers are finding" [level=2] [ref=e1444]
        - generic [ref=e1451]:
          - generic [ref=e1455]:
            - heading "Visit the POI Page" [level=4] [ref=e1457]:
              - link "Visit the POI Page" [ref=e1458] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/ca/ab/points-of-interest/worlds-largest-beaver-ab--0?lng=-119.42318&lat=55.20407&z=12.36861
                - text: World's Largest Beaver, AB
            - img "World's Largest Beaver" [ref=e1460]
            - generic [ref=e1461]:
              - img "drandk" [ref=e1462]
              - generic [ref=e1463]: DaveRandy & Kathy
          - generic [ref=e1467]:
            - heading "Visit the POI Page" [level=4] [ref=e1469]:
              - link "Visit the POI Page" [ref=e1470] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/waskom-tx/points-of-interest/big-books-apple-ruler-pencil-waskom-tx--0?lng=-119.42318&lat=55.20407&z=12.36861
                - text: Big Books, Apple, Ruler, Pencil, TX
            - img "Big Books, Apple, Ruler, Pencil" [ref=e1472]
            - generic [ref=e1473]:
              - img "bray" [ref=e1474]
              - generic [ref=e1475]: James_Bray
          - generic [ref=e1479]:
            - heading "Visit the POI Page" [level=4] [ref=e1481]:
              - link "Visit the POI Page" [ref=e1482] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/clayton-nm/points-of-interest/dinosaur-statues-clayton-nm--0?lng=-94.06000&lat=32.47925&z=12.75718
                - text: Dinosaur Statues, NM
            - img "Dinosaur Statues" [ref=e1484]
            - generic [ref=e1485]:
              - img "roadtripper" [ref=e1486]
              - generic [ref=e1487]: roadtripper4011181
          - generic [ref=e1491]:
            - heading [level=4] [ref=e1493]:
              - link [ref=e1494] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/brownsville-tn/attractions/billy-tripps-mindfield?lng=-89.26229&lat=35.59397&z=12.87953
                - text: Billy Tripps MindField, TN
            - img [ref=e1496]
            - generic [ref=e1497]:
              - img [ref=e1498]
              - generic [ref=e1499]: delorescook
          - generic [ref=e1503]:
            - heading [level=4] [ref=e1505]:
              - link [ref=e1506] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/joshua-tree-ca/points-of-interest/big-josh-cowboy-muffler-man-joshua-tree-ca--0?lng=-89.26229&lat=35.59397&z=12.87953
                - text: "Big Josh: Cowboy Muffler Man, CA"
            - img [ref=e1508]
            - generic [ref=e1509]:
              - img [ref=e1510]
              - generic [ref=e1511]: Steph
          - generic [ref=e1515]:
            - heading [level=4] [ref=e1517]:
              - link [ref=e1518] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/staunton-va/points-of-interest/giant-watering-can-and-flower-pots-staunton-va--0?lng=-116.31213&lat=34.13486&z=12.90513
                - text: Giant Watering Can and Flower Pots, VA
            - img [ref=e1520]
            - generic [ref=e1521]:
              - img [ref=e1522]
              - generic [ref=e1523]: Natecove
          - generic [ref=e1527]:
            - heading [level=4] [ref=e1529]:
              - link [ref=e1530] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/benson-az/attractions/the-thing?lng=-110.05040&lat=32.08084&z=12.93886
                - text: The Thing?, AZ
            - img [ref=e1532]
            - generic [ref=e1533]:
              - img [ref=e1534]
              - generic [ref=e1535]: Dave Miller
          - generic [ref=e1539]:
            - heading [level=4] [ref=e1541]:
              - link [ref=e1542] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/plover-wi/points-of-interest/worlds-largest-potato-masher-plover-wi--0?lng=-89.52988&lat=44.44382&z=11.06151
                - text: World's Largest Potato Masher, WI
            - img [ref=e1544]
            - generic [ref=e1545]:
              - img [ref=e1546]
              - generic [ref=e1547]: roadtripper747946
          - generic [ref=e1551]:
            - heading [level=4] [ref=e1553]:
              - link [ref=e1554] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/amarillo-tx/points-of-interest/the-ozymandias-legs?lng=-101.90940&lat=35.10180&z=12.88832
                - text: The Ozymandias Legs, TX
            - img [ref=e1556]
            - generic [ref=e1557]:
              - img [ref=e1558]
              - generic [ref=e1559]: Dave Miller
          - generic [ref=e1563]:
            - heading [level=4] [ref=e1565]:
              - link [ref=e1566] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/alamogordo-nm/points-of-interest/worlds-largest-pistachio?lng=-101.90940&lat=35.10180&z=12.88832
                - text: World's Largest Pistachio, NM
            - img [ref=e1568]
            - generic [ref=e1569]:
              - img [ref=e1570]
              - generic [ref=e1571]: Ken & Dana
      - generic [ref=e1572]:
        - heading "Some stories from the road" [level=2] [ref=e1578]
        - generic [ref=e1579]:
          - generic [ref=e1580]:
            - 'img "A Perfect Route 66 Road Trip: Towns, Timeshares, and Timeless Memories" [ref=e1582]'
            - 'heading "A Perfect Route 66 Road Trip: Towns, Timeshares, and Timeless Memories" [level=3] [ref=e1584] [cursor=pointer]':
              - 'link "A Perfect Route 66 Road Trip: Towns, Timeshares, and Timeless Memories" [ref=e1585]':
                - /url: https://roadtrippers.com/magazine/a-perfect-route-66-road-trip-towns-timeshares-and-timeless-memories/
            - paragraph [ref=e1587]:
              - link "rachel-kawate" [ref=e1588] [cursor=pointer]:
                - /url: /magazine/author/rachel-kawate
                - img "rachel-kawate" [ref=e1589]
              - link "Rachel Kawate" [ref=e1590] [cursor=pointer]:
                - /url: /magazine/author/rachel-kawate
            - link "Read article" [ref=e1592] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/a-perfect-route-66-road-trip-towns-timeshares-and-timeless-memories/
            - link [ref=e1593] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/a-perfect-route-66-road-trip-towns-timeshares-and-timeless-memories/
          - generic [ref=e1594]:
            - img "These 20 National Park Service lodges showcase ‘parkitecture’ at its finest" [ref=e1596]
            - heading "These 20 National Park Service lodges showcase ‘parkitecture’ at its finest" [level=3] [ref=e1598] [cursor=pointer]:
              - link "These 20 National Park Service lodges showcase ‘parkitecture’ at its finest" [ref=e1599]:
                - /url: https://roadtrippers.com/magazine/national-park-service-lodges/
            - paragraph [ref=e1601]:
              - link "roadtrippers" [ref=e1602] [cursor=pointer]:
                - /url: /magazine/author/roadtrippers
                - img "roadtrippers" [ref=e1603]
              - link "Roadtrippers" [ref=e1604] [cursor=pointer]:
                - /url: /magazine/author/roadtrippers
            - link "Read article" [ref=e1606] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/national-park-service-lodges/
            - link [ref=e1607] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/national-park-service-lodges/
          - generic [ref=e1608]:
            - 'img "A Better Way to Camp: Why RVC Outdoor Destinations Are Raising the Bar for Outdoor Stays" [ref=e1610]'
            - 'heading "A Better Way to Camp: Why RVC Outdoor Destinations Are Raising the Bar for Outdoor Stays" [level=3] [ref=e1612] [cursor=pointer]':
              - 'link "A Better Way to Camp: Why RVC Outdoor Destinations Are Raising the Bar for Outdoor Stays" [ref=e1613]':
                - /url: https://roadtrippers.com/magazine/a-better-way-to-camp-why-rvc-outdoor-destinations-are-raising-the-bar-for-outdoor-stays/
            - paragraph [ref=e1615]:
              - link "benen-shoquistroadpass-com" [ref=e1616] [cursor=pointer]:
                - /url: /magazine/author/benen-shoquistroadpass-com
                - img "benen-shoquistroadpass-com" [ref=e1617]
              - link "Benen Shoquist" [ref=e1618] [cursor=pointer]:
                - /url: /magazine/author/benen-shoquistroadpass-com
            - link "Read article" [ref=e1620] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/a-better-way-to-camp-why-rvc-outdoor-destinations-are-raising-the-bar-for-outdoor-stays/
            - link [ref=e1621] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/a-better-way-to-camp-why-rvc-outdoor-destinations-are-raising-the-bar-for-outdoor-stays/
      - generic [ref=e1623]:
        - generic [ref=e1624]:
          - link "Famous Routes" [ref=e1626] [cursor=pointer]:
            - /url: javascript:void(0);
          - link "Interstate Exit Guides" [ref=e1628] [cursor=pointer]:
            - /url: javascript:void(0);
          - link "National Parks" [ref=e1630] [cursor=pointer]:
            - /url: javascript:void(0);
        - generic [ref=e1634]:
          - generic [ref=e1637]:
            - link "Route 66" [ref=e1639] [cursor=pointer]:
              - /url: https://roadtrippers.com/the-ultimate-guide-route-66/
            - link "Beartooth Highway" [ref=e1641] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/beartooth-highway/
            - link "Blue Ridge Parkway" [ref=e1643] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/blue-ridge-parkway/
            - link "Kancamagus Highway" [ref=e1645] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/kancamagus-highway/
            - link "Pacific Coast Highway" [ref=e1647] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/pacific-coast-highway/
            - link "Skyline Drive" [ref=e1649] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/skyline-drive/
            - link "Volcanic Legacy Scenic Byway" [ref=e1651] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/volcanic-legacy-scenic-byway/
          - generic [ref=e1654]:
            - link [ref=e1656] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/20461816
              - text: The top things to do on an I-75 road trip
            - link [ref=e1658] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14292259
              - text: The top things to do on an I-10 road trip
            - link [ref=e1660] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14292356
              - text: "Border to Border: Essential road trip stops along I-5"
            - link [ref=e1662] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14292436
              - text: The best attractions along I-15, from California to Montana
            - link [ref=e1664] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14292492
              - text: The top things to do on an I-95 road trip
            - link [ref=e1666] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14405739
              - text: Your road trip guide to every awesome detour off I-70
            - link [ref=e1668] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14599610
              - text: The top things to do on an I-80 road trip
            - link [ref=e1670] [cursor=pointer]:
              - /url: javascript:void(0);
              - text: Show more
          - generic [ref=e1674]:
            - link [ref=e1676] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/acadia-national-park/
              - text: Acadia National Park
            - link [ref=e1678] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/arches-national-park/
              - text: Arches National Park
            - link [ref=e1680] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/badlands-national-park/
              - text: Badlands National Park
            - link [ref=e1682] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/bryce-canyon-national-park/
              - text: Bryce Canyon National Park
            - link [ref=e1684] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/canyonlands-national-park/
              - text: Canyonlands National Park
            - link [ref=e1686] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/crater-lake-national-park/
              - text: Crater Lake National Park
            - link [ref=e1688] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/crater-lake-national-park/
              - text: Crater Lake National Park
            - link [ref=e1690] [cursor=pointer]:
              - /url: javascript:void(0);
              - text: Show more
    - generic:
      - generic:
        - heading "Sign Up for a Free Trial" [level=3]
        - paragraph: Test drive the best features of Roadtrippers Premium for free! Eligible users will get exclusive access to all the tools needed to plan the perfect road trip.
      - generic:
        - paragraph:
          - strong: Create a Roadtrippers account to start your membership.
        - link "Sign up":
          - /url: javascript:void(0)
        - paragraph:
          - strong: Already have a Roadtrippers account?
          - link "Log in":
            - /url: javascript:void(0)
    - contentinfo [ref=e1692]:
      - generic [ref=e1693]:
        - generic:
          - generic [ref=e1695]:
            - paragraph [ref=e1697]:
              - strong [ref=e1698]: Keep exploring with the Roadtrippers mobile apps.
            - paragraph [ref=e1699]: Anything you plan or save automagically syncs with the apps, ready for you when you hit the road!
            - generic [ref=e1700]:
              - link "Download from Apple App Store" [ref=e1701] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/id944060491
                - text: Download from
                - strong [ref=e1702]: Apple App Store
              - link "Download from Google Play Store" [ref=e1703] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.roadtrippers
                - text: Download from
                - strong [ref=e1704]: Google Play Store
          - generic [ref=e1706]:
            - paragraph [ref=e1708]:
              - strong [ref=e1709]: "Connect with us and hit up #roadtrippers"
            - paragraph [ref=e1710]: Tall tales, trip guides, and the weird and wonderful.
            - generic [ref=e1711]:
              - link "Visit our TikTok page" [ref=e1712] [cursor=pointer]:
                - /url: https://www.tiktok.com/@roadtrippershq
                - img "Visit our TikTok page" [ref=e1713]
              - link "Visit our Facebook page" [ref=e1715] [cursor=pointer]:
                - /url: https://facebook.com/roadtrippers
                - img "Visit our Facebook page" [ref=e1716]
              - link "Visit our Instagram page" [ref=e1718] [cursor=pointer]:
                - /url: https://instagram.com/roadtrippers
                - img "Visit our Instagram page" [ref=e1719]
              - link "Visit our Pinterest page" [ref=e1723] [cursor=pointer]:
                - /url: https://pinterest.com/roadtrippers
                - img "Visit our Pinterest page" [ref=e1724]
              - link "Visit our LinkedIn page" [ref=e1726] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/roadtrippers
                - img "Visit our LinkedIn page" [ref=e1727]
              - link "Visit our YouTube page" [ref=e1729] [cursor=pointer]:
                - /url: https://www.youtube.com/c/RoadtrippersHQ
                - img "Visit our YouTube page" [ref=e1730]
        - generic:
          - generic [ref=e1733]:
            - heading "About" [level=6] [ref=e1734]
            - list [ref=e1736]:
              - listitem [ref=e1737]:
                - link "About Us" [ref=e1738] [cursor=pointer]:
                  - /url: https://roadtrippers.com/about/
              - listitem [ref=e1739]:
                - link "Roadtrippers Lending" [ref=e1740] [cursor=pointer]:
                  - /url: https://roadtrippers.com/lending/
              - listitem [ref=e1741]:
                - link "Careers" [ref=e1742] [cursor=pointer]:
                  - /url: https://roadtrippers.com/careers/
              - listitem [ref=e1743]:
                - link "Roadpass Digital" [ref=e1744] [cursor=pointer]:
                  - /url: https://www.roadpass.com/
              - listitem [ref=e1745]:
                - link "Mobile Apps" [ref=e1746] [cursor=pointer]:
                  - /url: https://roadtrippers.com/about/road-trip-apps/
              - listitem [ref=e1747]:
                - link "Support" [ref=e1748] [cursor=pointer]:
                  - /url: https://support.roadtrippers.com
              - listitem [ref=e1749]:
                - link "Contact" [ref=e1750] [cursor=pointer]:
                  - /url: https://roadtrippers.com/contact/
          - generic [ref=e1752]:
            - heading "Business Tools" [level=6] [ref=e1753]
            - list [ref=e1755]:
              - listitem [ref=e1756]:
                - link "Partnerships" [ref=e1757] [cursor=pointer]:
                  - /url: https://roadtrippers.com/partnerships
              - listitem [ref=e1758]:
                - link "Affiliate Program" [ref=e1759] [cursor=pointer]:
                  - /url: https://roadtrippers.com/affiliate/
              - listitem [ref=e1760]:
                - link "Media Center" [ref=e1761] [cursor=pointer]:
                  - /url: https://roadtrippers.com/media-center/
          - generic [ref=e1763]:
            - heading "Get Inspired" [level=6] [ref=e1764]
            - list [ref=e1765]:
              - listitem [ref=e1766]:
                - link "Road trip ideas by state" [ref=e1767] [cursor=pointer]:
                  - /url: https://roadtrippers.com/road-trip-regions/
                  - text: Road trip ideas by state
              - listitem [ref=e1768]:
                - link "National parks" [ref=e1769] [cursor=pointer]:
                  - /url: https://roadtrippers.com/national-park-guides/
                  - text: National parks
              - listitem [ref=e1770]:
                - link "Famous routes" [ref=e1771] [cursor=pointer]:
                  - /url: https://roadtrippers.com/route-guides/
                  - text: Famous routes
              - listitem [ref=e1772]:
                - link "Voices from the Road" [ref=e1773] [cursor=pointer]:
                  - /url: https://roadtrippers.com/voices/
                  - text: Voices from the Road
          - generic [ref=e1775]:
            - heading "The Latest" [level=6] [ref=e1776]
            - list [ref=e1777]:
              - listitem [ref=e1778]:
                - 'link "A Perfect Route 66 Road Trip: Towns, Timeshares, and Timeless Memories" [ref=e1779] [cursor=pointer]':
                  - /url: https://roadtrippers.com/magazine/a-perfect-route-66-road-trip-towns-timeshares-and-timeless-memories/
              - listitem [ref=e1780]:
                - link "These 20 National Park Service lodges showcase ‘parkitecture’ at its finest" [ref=e1781] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/national-park-service-lodges/
              - listitem [ref=e1782]:
                - 'link "A Better Way to Camp: Why RVC Outdoor Destinations Are Raising the Bar for Outdoor Stays" [ref=e1783] [cursor=pointer]':
                  - /url: https://roadtrippers.com/magazine/a-better-way-to-camp-why-rvc-outdoor-destinations-are-raising-the-bar-for-outdoor-stays/
      - generic [ref=e1784]:
        - generic:
          - link "Roadtrippers - Home" [ref=e1786] [cursor=pointer]:
            - /url: https://roadtrippers.com
            - img "Roadtrippers - Home" [ref=e1787]
          - generic [ref=e1797]:
            - list [ref=e1798]:
              - listitem [ref=e1799]:
                - link "Privacy Policy" [ref=e1800] [cursor=pointer]:
                  - /url: https://www.roadpass.com/privacy-policy
              - listitem [ref=e1801]:
                - link "Terms of Service" [ref=e1802] [cursor=pointer]:
                  - /url: https://www.roadpass.com/terms-of-service
              - listitem [ref=e1803]:
                - link "Copyright" [ref=e1804] [cursor=pointer]:
                  - /url: https://forms.gle/Ea2sUNYGtdNfBcCd7
            - paragraph [ref=e1805]: © Roadtrippers, LLC 2026
  - generic [ref=e1807]:
    - generic [ref=e1808]:
      - button "Close main nav" [ref=e1809] [cursor=pointer]:
        - generic [ref=e1810]: Close main nav
      - link [ref=e1811] [cursor=pointer]:
        - /url: https://roadtrippers.com
    - generic [ref=e1813]:
      - navigation [ref=e1814]:
        - list [ref=e1816]:
          - listitem [ref=e1817]:
            - link "Memberships" [ref=e1818] [cursor=pointer]:
              - /url: https://roadtrippers.com/membership/
            - list [ref=e1819]:
              - listitem [ref=e1820]:
                - link "Member Deals" [ref=e1821] [cursor=pointer]:
                  - /url: https://roadtrippers.com/member-deals/
              - listitem [ref=e1822]:
                - link "Roadside Assistance" [ref=e1823] [cursor=pointer]:
                  - /url: https://roadtrippers.com/roadside-assistance/
              - listitem [ref=e1824]:
                - link "Get Roadtrippers" [ref=e1825] [cursor=pointer]:
                  - /url: https://roadtrippers.com/membership/
          - listitem [ref=e1826]:
            - link "For RVers" [ref=e1827] [cursor=pointer]:
              - /url: https://roadtrippers.com/rv/
            - list [ref=e1828]:
              - listitem [ref=e1829]:
                - link "Campground Search and Booking" [ref=e1830] [cursor=pointer]:
                  - /url: https://roadtrippers.com/rv/campground-search-booking/
              - listitem [ref=e1831]:
                - link "Overnight RV Parking" [ref=e1832] [cursor=pointer]:
                  - /url: https://roadtrippers.com/rv/overnight-rv-parking/
              - listitem [ref=e1833]:
                - link "RV GPS" [ref=e1834] [cursor=pointer]:
                  - /url: https://roadtrippers.com/rv/rv-gps/
              - listitem [ref=e1835]:
                - link "RVing Resources" [ref=e1836] [cursor=pointer]:
                  - /url: https://roadtrippers.com/rv/resources/
          - listitem [ref=e1837]:
            - link "Plan Your Trip" [ref=e1838] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com
            - list [ref=e1839]:
              - listitem [ref=e1840]:
                - link "Trip Planner" [ref=e1841] [cursor=pointer]:
                  - /url: https://maps.roadtrippers.com
              - listitem [ref=e1842]:
                - link "Trip Guides" [ref=e1843] [cursor=pointer]:
                  - /url: https://maps.roadtrippers.com/trips
              - listitem [ref=e1844]:
                - link "Forum" [ref=e1845] [cursor=pointer]:
                  - /url: https://forum.roadtrippers.com
          - listitem [ref=e1846]:
            - link "Magazine" [ref=e1847] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/
            - list [ref=e1848]:
              - listitem [ref=e1849]:
                - link "The Ultimate Guide to Route 66" [ref=e1850] [cursor=pointer]:
                  - /url: https://roadtrippers.com/the-ultimate-guide-route-66/
              - listitem [ref=e1851]:
                - link "Destinations and routes" [ref=e1852] [cursor=pointer]:
                  - /url: https://roadtrippers.com/destinations/
              - listitem [ref=e1853]:
                - link "Road Culture" [ref=e1854] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/category/road-culture/
              - listitem [ref=e1855]:
                - link "Community" [ref=e1856] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/category/community/
              - listitem [ref=e1857]:
                - link "Road Trips" [ref=e1858] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/category/road-trips/
              - listitem [ref=e1859]:
                - link "Great Outdoors" [ref=e1860] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/category/great-outdoors/
      - list [ref=e1861]:
        - listitem
        - listitem [ref=e1862]:
          - img [ref=e1864]
          - link "Sign up" [ref=e1872] [cursor=pointer]:
            - /url: "#"
          - link "Log in" [ref=e1873] [cursor=pointer]:
            - /url: "#"
    - generic [ref=e1874]:
      - img "Roadtrippers" [ref=e1875]
      - paragraph [ref=e1876]:
        - text: Plan your journey, find amazing places,
        - text: and take fascinating detours with our app.
      - generic [ref=e1877]:
        - link "Download from Play Store" [ref=e1878] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/details?id=com.roadtrippers
          - text: Download from
          - strong [ref=e1879]: Play Store
        - link "Download from Apple App Store" [ref=e1880] [cursor=pointer]:
          - /url: https://itunes.apple.com/us/app/id944060491
          - text: Download from
          - strong [ref=e1881]: Apple App Store
```

# Test source

```ts
  3   | import { TripPlannerPage } from '../pages/TripPlannerPage';
  4   | import { ItineraryPage } from '../pages/ItineraryPage';
  5   | import * as fs from 'fs';
  6   | import * as path from 'path';
  7   | 
  8   | test.describe('Roadtrippers Trip Planning Flow', () => {
  9   |   let homePage: HomePage;
  10  |   let tripPlannerPage: TripPlannerPage;
  11  |   let itineraryPage: ItineraryPage;
  12  | 
  13  |   test.beforeEach(async ({ page }) => {
  14  |     test.setTimeout(180000);
  15  |     homePage = new HomePage(page);
  16  |     tripPlannerPage = new TripPlannerPage(page);
  17  |     itineraryPage = new ItineraryPage(page);
  18  |     await homePage.navigate();
  19  |     await homePage.acceptCookies();
  20  |     await homePage.removeOverlays();
  21  |   });
  22  | 
  23  |   test.afterEach(async ({ page }, testInfo) => {
  24  |     const video = page.video();
  25  |     if (video) {
  26  |       const videoPath = await video.path();
  27  |       if (testInfo.status !== 'passed') {
  28  |         if (fs.existsSync(videoPath)) {
  29  |           try {
  30  |             fs.unlinkSync(videoPath);
  31  |           } catch (err) {}
  32  |         }
  33  |       } else {
  34  |         const evidenceDir = path.join(process.cwd(), 'evidence');
  35  |         if (!fs.existsSync(evidenceDir)) fs.mkdirSync(evidenceDir, { recursive: true });
  36  |         const newName = `${testInfo.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.mp4`;
  37  |         const newPath = path.join(evidenceDir, newName);
  38  |         
  39  |         await page.context().close();
  40  |         if (fs.existsSync(videoPath)) {
  41  |           fs.renameSync(videoPath, newPath);
  42  |           console.log(`Video saved for passed test: ${newPath}`);
  43  |         }
  44  |       }
  45  |     }
  46  |   });
  47  | 
  48  |   async function fillLocation(page, inputSelector, text) {
  49  |     const input = page.locator(inputSelector).first();
  50  |     await input.click({ force: true });
  51  |     await input.fill('');
  52  |     await input.type(text, { delay: 100 });
  53  |     await page.waitForTimeout(3000);
  54  |     await page.keyboard.press('ArrowDown');
  55  |     await page.waitForTimeout(500);
  56  |     await page.keyboard.press('Enter');
  57  |     await page.waitForTimeout(2000);
  58  |   }
  59  | 
  60  |   test('Happy Path: Create a new trip to Sofia, Bulgaria', async ({ page }) => {
  61  |     await fillLocation(page, '.search_input_from', 'New York, NY');
  62  |     await fillLocation(page, '.search_input_to', 'Sofia, Bulgaria');
  63  | 
  64  |     const goButton = page.locator('.plan_trip_search_button').first();
  65  |     await goButton.click({ force: true });
  66  | 
  67  |     // Fallback if URL doesn't change: try clicking Go again
  68  |     try {
  69  |       await expect(page).toHaveURL(/trip_id=|onboarding/, { timeout: 30000 });
  70  |     } catch (e) {
  71  |       await goButton.click({ force: true });
  72  |       await expect(page).toHaveURL(/trip_id=|onboarding/, { timeout: 30000 });
  73  |     }
  74  |   });
  75  | 
  76  |   test('Edge Case: Trip with same origin and destination', async ({ page }) => {
  77  |     await fillLocation(page, '.search_input_from', 'Sofia, Bulgaria');
  78  |     await fillLocation(page, '.search_input_to', 'Sofia, Bulgaria');
  79  | 
  80  |     const goButton = page.locator('.plan_trip_search_button').first();
  81  |     await goButton.click({ force: true });
  82  | 
  83  |     try {
  84  |       await expect(page).toHaveURL(/trip_id=|onboarding/, { timeout: 30000 });
  85  |     } catch (e) {
  86  |       await goButton.click({ force: true });
  87  |       await expect(page).toHaveURL(/trip_id=|onboarding/, { timeout: 30000 });
  88  |     }
  89  |   });
  90  | 
  91  |   test('Negative Scenario: Attempt to create trip without destination', async ({ page }) => {
  92  |     // Fill origin
  93  |     await fillLocation(page, '.search_input_from', 'Sofia, Bulgaria');
  94  |     
  95  |     // Clear destination
  96  |     const destInput = page.locator('.search_input_to').first();
  97  |     await destInput.click({ force: true });
  98  |     await destInput.fill('');
  99  |     
  100 |     const goButton = page.locator('.plan_trip_search_button').first();
  101 |     await goButton.click({ force: true });
  102 | 
> 103 |     await expect(page.locator('.search_input_to_error').first()).toBeVisible({ timeout: 30000 });
      |                                                                  ^ Error: expect(locator).toBeVisible() failed
  104 |   });
  105 | });
  106 | 
```
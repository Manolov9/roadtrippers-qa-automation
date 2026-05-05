# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: trip-planning.spec.ts >> Roadtrippers Trip Planning Flow >> Happy Path: Create a new trip to Sofia, Bulgaria
- Location: tests/trip-planning.spec.ts:60:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /trip_id=|onboarding/
Received string:  "https://roadtrippers.com/"
Timeout: 30000ms

Call log:
  - Expect "toHaveURL" with timeout 30000ms
    33 × unexpected value "https://roadtrippers.com/"

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
                      - textbox [ref=e81]: New York, NY
                      - generic [ref=e82]: Valid location required
                      - generic [ref=e83]:
                        - list
                        - list [ref=e84]:
                          - listitem [ref=e85] [cursor=pointer]:
                            - generic [ref=e86]:
                              - img [ref=e88]
                              - text: New York City, NY
                          - listitem [ref=e90] [cursor=pointer]:
                            - generic [ref=e91]:
                              - img [ref=e93]
                              - text: New York, USA
                          - listitem [ref=e95] [cursor=pointer]:
                            - generic [ref=e96]:
                              - img [ref=e98]
                              - text: Warwick, New York, NY
                          - listitem [ref=e100] [cursor=pointer]:
                            - generic [ref=e101]:
                              - img [ref=e103]
                              - text: Pittsford, New York, NY
                          - listitem [ref=e105] [cursor=pointer]:
                            - generic [ref=e106]:
                              - img [ref=e108]
                              - text: Montgomery (town), New York, NY
                          - listitem "Statue of Liberty, Liberty Island, New York, NY" [ref=e110] [cursor=pointer]:
                            - generic [ref=e111]: Statue of Liberty, Liberty Island, New York, NY
                          - listitem "Marriott Vacation Club®, New York City, 33 W 37th St, New York, NY" [ref=e113] [cursor=pointer]:
                            - generic [ref=e114]: Marriott Vacation Club®, New York City, 33 W 37th St, New York, NY
                          - listitem "Club Wyndham Midtown 45, 205 E 45th St, New York, NY" [ref=e116] [cursor=pointer]:
                            - generic [ref=e117]: Club Wyndham Midtown 45, 205 E 45th St, New York, NY
                          - listitem "Little Italy Newstand, 591 E 187th St, NY" [ref=e119] [cursor=pointer]:
                            - generic [ref=e120]: Little Italy Newstand, 591 E 187th St, NY
                          - listitem "New York-New York Hotel & Casino, 3790 S Las Vegas Blvd, Las Vegas, NV" [ref=e122] [cursor=pointer]:
                            - generic [ref=e123]: New York-New York Hotel & Casino, 3790 S Las Vegas Blvd, Las Vegas, NV
                    - generic [ref=e126]:
                      - generic: Destination
                      - textbox [active] [ref=e127]: Sofia, Bulgaria
                      - generic [ref=e128]: Valid location required
                      - generic:
                        - list
                  - button "Go" [ref=e130] [cursor=pointer]
              - paragraph [ref=e134]:
                - text: Not sure where to go?
                - link "Explore the map" [ref=e135] [cursor=pointer]:
                  - /url: https://maps.roadtrippers.com
                  - text: Explore the map
                  - img [ref=e137]
          - generic [ref=e140]:
            - img [ref=e142]
            - img "tevin-trinh-qRd3_-IVM38-unsplash 1" [ref=e145]
      - generic [ref=e147]:
        - img [ref=e149]
        - generic [ref=e150]:
          - heading "Plan, discover, and collaborate" [level=2] [ref=e152]
          - generic [ref=e154]:
            - generic [ref=e155]:
              - img "Roadtrippers Southwest Map" [ref=e156]
              - generic:
                - img [ref=e158]
                - img [ref=e161]
                - img [ref=e164]
                - generic: "41"
                - generic: "42"
                - generic: "43"
            - generic:
              - img "Trip Collaboration Demo"
            - generic:
              - img "Autopilot Options Demo"
            - generic:
              - generic:
                - generic: "41"
                - generic:
                  - img "Arches National Park POI Card"
              - generic:
                - generic: "42"
                - generic:
                  - img "Great Sand Dunes National Park POI Card"
              - generic:
                - generic: "43"
                - generic:
                  - img "Bishop Castle POI Card"
      - generic [ref=e169]:
        - heading "Headlights on us" [level=4] [ref=e171]
        - img [ref=e173]
        - img [ref=e175]
        - img [ref=e177]
        - img [ref=e179]
      - generic [ref=e180]:
        - generic [ref=e181]: Advertisement
        - generic [ref=e182]:
          - generic:
            - link "Remove Ads":
              - /url: https://maps.roadtrippers.com/plus
              - button "Remove Ads" [ref=e183] [cursor=pointer]
      - generic [ref=e184]:
        - generic [ref=e185]:
          - heading "Choose the right plan for you and try it free for 7 days" [level=2] [ref=e186]
          - paragraph [ref=e187]: All plans include access to curated road trip guides, Extraordinary Places, and 5 million points of interest.
        - generic [ref=e190]:
          - generic [ref=e192]:
            - generic [ref=e193]: "Features:"
            - generic [ref=e194]: Free
            - generic [ref=e195]: + Basic
            - generic [ref=e196]: + Pro
            - generic [ref=e197]: + Premium
          - generic [ref=e198]:
            - generic [ref=e199]:
              - generic [ref=e200]: Saved trips
              - generic [ref=e201]: "1"
              - generic [ref=e202]: "3"
              - generic [ref=e203]: "5"
              - generic [ref=e204]: ∞
            - generic [ref=e205]:
              - generic [ref=e206]: Stops per trip
              - generic [ref=e207]: "3"
              - generic [ref=e208]: "20"
              - generic [ref=e209]: "50"
              - generic [ref=e210]: "150"
            - generic [ref=e211]:
              - generic [ref=e212]: Custom map styles
              - generic [ref=e213]: —
            - generic [ref=e220]:
              - generic [ref=e221]: Trip export
              - generic [ref=e222]: —
            - generic [ref=e229]:
              - generic [ref=e230]: Ad free
              - generic [ref=e231]: —
              - generic [ref=e232]: —
            - generic [ref=e237]:
              - generic [ref=e238]: Trip collaboration
              - generic [ref=e239]: —
              - generic [ref=e240]: —
            - generic [ref=e245]:
              - generic [ref=e246]: Navigation
              - generic [ref=e247]: —
              - generic [ref=e248]: —
            - generic [ref=e253]:
              - generic [ref=e254]: RV GPS
              - generic [ref=e255]: —
              - generic [ref=e256]: —
              - generic [ref=e257]: —
            - generic [ref=e260]:
              - generic [ref=e261]: Overnight RV parking
              - generic [ref=e262]: —
              - generic [ref=e263]: —
              - generic [ref=e264]: —
            - generic [ref=e267]:
              - generic [ref=e268]: Member deals
              - generic [ref=e269]: —
              - generic [ref=e270]: —
              - generic [ref=e271]: —
            - generic [ref=e274]:
              - generic [ref=e275]: Live traffic
              - generic [ref=e276]: —
              - generic [ref=e277]: —
              - generic [ref=e278]: —
            - generic [ref=e281]:
              - generic [ref=e282]: Offline maps
              - generic [ref=e283]: —
              - generic [ref=e284]: —
              - generic [ref=e285]: —
            - generic [ref=e288]:
              - generic [ref=e289]: Membership
              - generic [ref=e290]: $0/yr
              - generic [ref=e291]: $35.99/yr
              - generic [ref=e292]: $49.99/yr
              - generic [ref=e293]: $59.99/yr
          - generic [ref=e295]:
            - link "Sign up" [ref=e298] [cursor=pointer]:
              - /url: javascript:void(0);
            - link "Try it for free" [ref=e300] [cursor=pointer]:
              - /url: "#basic"
            - link "Try it for free" [ref=e302] [cursor=pointer]:
              - /url: "#pro"
            - link "Try it for free" [ref=e304] [cursor=pointer]:
              - /url: "#premium"
      - generic [ref=e305]:
        - generic [ref=e307]:
          - img "star" [ref=e310]
          - generic [ref=e311]:
            - heading "Places we find extraordinary" [level=2] [ref=e312]
            - paragraph [ref=e313]: Look for the colorful icons on our map to locate our favorite places.
          - img "star" [ref=e316]
        - generic [ref=e319]:
          - link [ref=e323] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/ak/nature/denali-national-park-and-preserve-anchorage-ak
            - img [ref=e325]
            - generic [ref=e326]:
              - img [ref=e329]
              - generic [ref=e361]:
                - heading [level=5] [ref=e362]: Denali National Park and Preserve
                - paragraph [ref=e367]: Alaska
          - link [ref=e371] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/luray-va/attractions/luray-caverns
            - img [ref=e373]
            - generic [ref=e374]:
              - img [ref=e377]
              - generic [ref=e399]:
                - heading [level=5] [ref=e400]: Luray Caverns
                - paragraph [ref=e405]: Luray, Virginia
          - link [ref=e409] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/san-francisco-ca/points-of-interest/yoda-fountain-san-francisco
            - img [ref=e411]
            - generic [ref=e412]:
              - img [ref=e415]
              - generic [ref=e434]:
                - heading [level=5] [ref=e435]: Yoda Fountain
                - paragraph [ref=e440]: San Francisco, California
          - link [ref=e444] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/alexandria-bay-ny/nature/boldt-castle
            - img [ref=e446]
            - generic [ref=e447]:
              - img [ref=e450]
              - generic [ref=e485]:
                - heading [level=5] [ref=e486]: Boldt Castle
                - paragraph [ref=e491]: Alexandria Bay, New York
          - link [ref=e495] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/cabazon-ca/attractions/cabazon-dinosaurs
            - img [ref=e497]
            - generic [ref=e498]:
              - img [ref=e501]
              - generic [ref=e519]:
                - heading [level=5] [ref=e520]: Cabazon Dinosaurs
                - paragraph [ref=e525]: Cabazon, California
          - link [ref=e529] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/moab-ut/nature/arches-national-park
            - img [ref=e531]
            - generic [ref=e532]:
              - img [ref=e535]
              - generic [ref=e542]:
                - heading [level=5] [ref=e543]: Arches National Park
                - paragraph [ref=e548]: Moab, Utah
          - link [ref=e552] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/amarillo-tx/attractions/cadillac-ranch
            - img [ref=e554]
            - generic [ref=e555]:
              - img [ref=e558]
              - generic [ref=e591]:
                - heading [level=5] [ref=e592]: Cadillac Ranch
                - paragraph [ref=e597]: Amarillo, Texas
          - link [ref=e601] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/minot-nd/nature/scandinavian-heritage-park
            - img [ref=e603]
            - generic [ref=e604]:
              - img [ref=e607]
              - generic [ref=e634]:
                - heading [level=5] [ref=e635]: Scandinavian Heritage Park
                - paragraph [ref=e640]: Minot, North Dakota
          - link [ref=e644] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/berlin-md/nature/assateague-island-national-seashore-berlin-md--2
            - img [ref=e646]
            - generic [ref=e647]:
              - img [ref=e650]
              - generic [ref=e705]:
                - heading [level=5] [ref=e706]: Assateague Island National Seashore
                - paragraph [ref=e711]: Berlin, Maryland
          - link "Fallingwater" [ref=e715] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/mill-run-pa/attractions/fallingwater
            - img "Fallingwater" [ref=e717]
            - generic [ref=e718]:
              - img [ref=e721]
              - generic [ref=e752]:
                - heading "Fallingwater" [level=5] [ref=e753]
                - paragraph [ref=e758]: Mill Run, Pennsylvania
          - link "Blue Whale of Catoosa" [ref=e762] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/catoosa-ok/attractions/blue-whale-of-catoosa
            - img "Blue Whale of Catoosa" [ref=e764]
            - generic [ref=e765]:
              - img [ref=e768]
              - generic [ref=e785]:
                - heading "Blue Whale of Catoosa" [level=5] [ref=e786]
                - paragraph [ref=e791]: Catoosa, Oklahoma
          - link "Denali National Park and Preserve" [ref=e795] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/ak/nature/denali-national-park-and-preserve-anchorage-ak
            - img "Denali National Park and Preserve" [ref=e797]
            - generic [ref=e798]:
              - img [ref=e801]
              - generic [ref=e833]:
                - heading "Denali National Park and Preserve" [level=5] [ref=e834]
                - paragraph [ref=e839]: Alaska
          - link "Luray Caverns" [ref=e843] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/luray-va/attractions/luray-caverns
            - img "Luray Caverns" [ref=e845]
            - generic [ref=e846]:
              - img [ref=e849]
              - generic [ref=e871]:
                - heading "Luray Caverns" [level=5] [ref=e872]
                - paragraph [ref=e877]: Luray, Virginia
          - link [ref=e881] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/san-francisco-ca/points-of-interest/yoda-fountain-san-francisco
            - img [ref=e883]
            - generic [ref=e884]:
              - img [ref=e887]
              - generic [ref=e906]:
                - heading [level=5] [ref=e907]: Yoda Fountain
                - paragraph [ref=e912]: San Francisco, California
          - link [ref=e916] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/alexandria-bay-ny/nature/boldt-castle
            - img [ref=e918]
            - generic [ref=e919]:
              - img [ref=e922]
              - generic [ref=e957]:
                - heading [level=5] [ref=e958]: Boldt Castle
                - paragraph [ref=e963]: Alexandria Bay, New York
          - link [ref=e967] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/cabazon-ca/attractions/cabazon-dinosaurs
            - img [ref=e969]
            - generic [ref=e970]:
              - img [ref=e973]
              - generic [ref=e991]:
                - heading [level=5] [ref=e992]: Cabazon Dinosaurs
                - paragraph [ref=e997]: Cabazon, California
          - link [ref=e1001] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/moab-ut/nature/arches-national-park
            - img [ref=e1003]
            - generic [ref=e1004]:
              - img [ref=e1007]
              - generic [ref=e1014]:
                - heading [level=5] [ref=e1015]: Arches National Park
                - paragraph [ref=e1020]: Moab, Utah
          - link [ref=e1024] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/amarillo-tx/attractions/cadillac-ranch
            - img [ref=e1026]
            - generic [ref=e1027]:
              - img [ref=e1030]
              - generic [ref=e1063]:
                - heading [level=5] [ref=e1064]: Cadillac Ranch
                - paragraph [ref=e1069]: Amarillo, Texas
          - link [ref=e1073] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/minot-nd/nature/scandinavian-heritage-park
            - img [ref=e1075]
            - generic [ref=e1076]:
              - img [ref=e1079]
              - generic [ref=e1106]:
                - heading [level=5] [ref=e1107]: Scandinavian Heritage Park
                - paragraph [ref=e1112]: Minot, North Dakota
          - link [ref=e1116] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/berlin-md/nature/assateague-island-national-seashore-berlin-md--2
            - img [ref=e1118]
            - generic [ref=e1119]:
              - img [ref=e1122]
              - generic [ref=e1177]:
                - heading [level=5] [ref=e1178]: Assateague Island National Seashore
                - paragraph [ref=e1183]: Berlin, Maryland
          - link [ref=e1187] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/mill-run-pa/attractions/fallingwater
            - img [ref=e1189]
            - generic [ref=e1190]:
              - img [ref=e1193]
              - generic [ref=e1224]:
                - heading [level=5] [ref=e1225]: Fallingwater
                - paragraph [ref=e1230]: Mill Run, Pennsylvania
          - link [ref=e1234] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/catoosa-ok/attractions/blue-whale-of-catoosa
            - img [ref=e1236]
            - generic [ref=e1237]:
              - img [ref=e1240]
              - generic [ref=e1257]:
                - heading [level=5] [ref=e1258]: Blue Whale of Catoosa
                - paragraph [ref=e1263]: Catoosa, Oklahoma
          - link [ref=e1267] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/ak/nature/denali-national-park-and-preserve-anchorage-ak
            - img [ref=e1269]
            - generic [ref=e1270]:
              - img [ref=e1273]
              - generic [ref=e1305]:
                - heading [level=5] [ref=e1306]: Denali National Park and Preserve
                - paragraph [ref=e1311]: Alaska
          - link [ref=e1315] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/luray-va/attractions/luray-caverns
            - img [ref=e1317]
            - generic [ref=e1318]:
              - img [ref=e1321]
              - generic [ref=e1343]:
                - heading [level=5] [ref=e1344]: Luray Caverns
                - paragraph [ref=e1349]: Luray, Virginia
          - link [ref=e1353] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/san-francisco-ca/points-of-interest/yoda-fountain-san-francisco
            - img [ref=e1355]
            - generic [ref=e1356]:
              - img [ref=e1359]
              - generic [ref=e1378]:
                - heading [level=5] [ref=e1379]: Yoda Fountain
                - paragraph [ref=e1384]: San Francisco, California
          - link [ref=e1388] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/alexandria-bay-ny/nature/boldt-castle
            - img [ref=e1390]
            - generic [ref=e1391]:
              - img [ref=e1394]
              - generic [ref=e1429]:
                - heading [level=5] [ref=e1430]: Boldt Castle
                - paragraph [ref=e1435]: Alexandria Bay, New York
          - link [ref=e1439] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/cabazon-ca/attractions/cabazon-dinosaurs
            - img [ref=e1441]
            - generic [ref=e1442]:
              - img [ref=e1445]
              - generic [ref=e1463]:
                - heading [level=5] [ref=e1464]: Cabazon Dinosaurs
                - paragraph [ref=e1469]: Cabazon, California
        - link "Explore All Extraordinary Places" [ref=e1473] [cursor=pointer]:
          - /url: https://roadtrippers.com/extraordinary-places/
      - generic [ref=e1474]:
        - heading "See what roadtrippers are finding" [level=2] [ref=e1478]
        - generic [ref=e1485]:
          - generic [ref=e1489]:
            - heading "Visit the POI Page" [level=4] [ref=e1491]:
              - link "Visit the POI Page" [ref=e1492] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/ca/ab/points-of-interest/worlds-largest-beaver-ab--0?lng=-119.42318&lat=55.20407&z=12.36861
                - text: World's Largest Beaver, AB
            - img "World's Largest Beaver" [ref=e1494]
            - generic [ref=e1495]:
              - img "drandk" [ref=e1496]
              - generic [ref=e1497]: DaveRandy & Kathy
          - generic [ref=e1501]:
            - heading "Visit the POI Page" [level=4] [ref=e1503]:
              - link "Visit the POI Page" [ref=e1504] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/waskom-tx/points-of-interest/big-books-apple-ruler-pencil-waskom-tx--0?lng=-119.42318&lat=55.20407&z=12.36861
                - text: Big Books, Apple, Ruler, Pencil, TX
            - img "Big Books, Apple, Ruler, Pencil" [ref=e1506]
            - generic [ref=e1507]:
              - img "bray" [ref=e1508]
              - generic [ref=e1509]: James_Bray
          - generic [ref=e1513]:
            - heading "Visit the POI Page" [level=4] [ref=e1515]:
              - link "Visit the POI Page" [ref=e1516] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/clayton-nm/points-of-interest/dinosaur-statues-clayton-nm--0?lng=-94.06000&lat=32.47925&z=12.75718
                - text: Dinosaur Statues, NM
            - img "Dinosaur Statues" [ref=e1518]
            - generic [ref=e1519]:
              - img "roadtripper" [ref=e1520]
              - generic [ref=e1521]: roadtripper4011181
          - generic [ref=e1525]:
            - heading [level=4] [ref=e1527]:
              - link [ref=e1528] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/brownsville-tn/attractions/billy-tripps-mindfield?lng=-89.26229&lat=35.59397&z=12.87953
                - text: Billy Tripps MindField, TN
            - img [ref=e1530]
            - generic [ref=e1531]:
              - img [ref=e1532]
              - generic [ref=e1533]: delorescook
          - generic [ref=e1537]:
            - heading [level=4] [ref=e1539]:
              - link [ref=e1540] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/joshua-tree-ca/points-of-interest/big-josh-cowboy-muffler-man-joshua-tree-ca--0?lng=-89.26229&lat=35.59397&z=12.87953
                - text: "Big Josh: Cowboy Muffler Man, CA"
            - img [ref=e1542]
            - generic [ref=e1543]:
              - img [ref=e1544]
              - generic [ref=e1545]: Steph
          - generic [ref=e1549]:
            - heading [level=4] [ref=e1551]:
              - link [ref=e1552] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/staunton-va/points-of-interest/giant-watering-can-and-flower-pots-staunton-va--0?lng=-116.31213&lat=34.13486&z=12.90513
                - text: Giant Watering Can and Flower Pots, VA
            - img [ref=e1554]
            - generic [ref=e1555]:
              - img [ref=e1556]
              - generic [ref=e1557]: Natecove
          - generic [ref=e1561]:
            - heading [level=4] [ref=e1563]:
              - link [ref=e1564] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/benson-az/attractions/the-thing?lng=-110.05040&lat=32.08084&z=12.93886
                - text: The Thing?, AZ
            - img [ref=e1566]
            - generic [ref=e1567]:
              - img [ref=e1568]
              - generic [ref=e1569]: Dave Miller
          - generic [ref=e1573]:
            - heading [level=4] [ref=e1575]:
              - link [ref=e1576] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/plover-wi/points-of-interest/worlds-largest-potato-masher-plover-wi--0?lng=-89.52988&lat=44.44382&z=11.06151
                - text: World's Largest Potato Masher, WI
            - img [ref=e1578]
            - generic [ref=e1579]:
              - img [ref=e1580]
              - generic [ref=e1581]: roadtripper747946
          - generic [ref=e1585]:
            - heading [level=4] [ref=e1587]:
              - link [ref=e1588] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/amarillo-tx/points-of-interest/the-ozymandias-legs?lng=-101.90940&lat=35.10180&z=12.88832
                - text: The Ozymandias Legs, TX
            - img [ref=e1590]
            - generic [ref=e1591]:
              - img [ref=e1592]
              - generic [ref=e1593]: Dave Miller
          - generic [ref=e1597]:
            - heading [level=4] [ref=e1599]:
              - link [ref=e1600] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/alamogordo-nm/points-of-interest/worlds-largest-pistachio?lng=-101.90940&lat=35.10180&z=12.88832
                - text: World's Largest Pistachio, NM
            - img [ref=e1602]
            - generic [ref=e1603]:
              - img [ref=e1604]
              - generic [ref=e1605]: Ken & Dana
      - generic [ref=e1606]:
        - heading "Some stories from the road" [level=2] [ref=e1612]
        - generic [ref=e1613]:
          - generic [ref=e1614]:
            - 'img "A Perfect Route 66 Road Trip: Towns, Timeshares, and Timeless Memories" [ref=e1616]'
            - 'heading "A Perfect Route 66 Road Trip: Towns, Timeshares, and Timeless Memories" [level=3] [ref=e1618] [cursor=pointer]':
              - 'link "A Perfect Route 66 Road Trip: Towns, Timeshares, and Timeless Memories" [ref=e1619]':
                - /url: https://roadtrippers.com/magazine/a-perfect-route-66-road-trip-towns-timeshares-and-timeless-memories/
            - paragraph [ref=e1621]:
              - link "rachel-kawate" [ref=e1622] [cursor=pointer]:
                - /url: /magazine/author/rachel-kawate
                - img "rachel-kawate" [ref=e1623]
              - link "Rachel Kawate" [ref=e1624] [cursor=pointer]:
                - /url: /magazine/author/rachel-kawate
            - link "Read article" [ref=e1626] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/a-perfect-route-66-road-trip-towns-timeshares-and-timeless-memories/
            - link [ref=e1627] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/a-perfect-route-66-road-trip-towns-timeshares-and-timeless-memories/
          - generic [ref=e1628]:
            - img "These 20 National Park Service lodges showcase ‘parkitecture’ at its finest" [ref=e1630]
            - heading "These 20 National Park Service lodges showcase ‘parkitecture’ at its finest" [level=3] [ref=e1632] [cursor=pointer]:
              - link "These 20 National Park Service lodges showcase ‘parkitecture’ at its finest" [ref=e1633]:
                - /url: https://roadtrippers.com/magazine/national-park-service-lodges/
            - paragraph [ref=e1635]:
              - link "roadtrippers" [ref=e1636] [cursor=pointer]:
                - /url: /magazine/author/roadtrippers
                - img "roadtrippers" [ref=e1637]
              - link "Roadtrippers" [ref=e1638] [cursor=pointer]:
                - /url: /magazine/author/roadtrippers
            - link "Read article" [ref=e1640] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/national-park-service-lodges/
            - link [ref=e1641] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/national-park-service-lodges/
          - generic [ref=e1642]:
            - 'img "A Better Way to Camp: Why RVC Outdoor Destinations Are Raising the Bar for Outdoor Stays" [ref=e1644]'
            - 'heading "A Better Way to Camp: Why RVC Outdoor Destinations Are Raising the Bar for Outdoor Stays" [level=3] [ref=e1646] [cursor=pointer]':
              - 'link "A Better Way to Camp: Why RVC Outdoor Destinations Are Raising the Bar for Outdoor Stays" [ref=e1647]':
                - /url: https://roadtrippers.com/magazine/a-better-way-to-camp-why-rvc-outdoor-destinations-are-raising-the-bar-for-outdoor-stays/
            - paragraph [ref=e1649]:
              - link "benen-shoquistroadpass-com" [ref=e1650] [cursor=pointer]:
                - /url: /magazine/author/benen-shoquistroadpass-com
                - img "benen-shoquistroadpass-com" [ref=e1651]
              - link "Benen Shoquist" [ref=e1652] [cursor=pointer]:
                - /url: /magazine/author/benen-shoquistroadpass-com
            - link "Read article" [ref=e1654] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/a-better-way-to-camp-why-rvc-outdoor-destinations-are-raising-the-bar-for-outdoor-stays/
            - link [ref=e1655] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/a-better-way-to-camp-why-rvc-outdoor-destinations-are-raising-the-bar-for-outdoor-stays/
      - generic [ref=e1657]:
        - generic [ref=e1658]:
          - link "Famous Routes" [ref=e1660] [cursor=pointer]:
            - /url: javascript:void(0);
          - link "Interstate Exit Guides" [ref=e1662] [cursor=pointer]:
            - /url: javascript:void(0);
          - link "National Parks" [ref=e1664] [cursor=pointer]:
            - /url: javascript:void(0);
        - generic [ref=e1668]:
          - generic [ref=e1671]:
            - link "Route 66" [ref=e1673] [cursor=pointer]:
              - /url: https://roadtrippers.com/the-ultimate-guide-route-66/
            - link "Beartooth Highway" [ref=e1675] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/beartooth-highway/
            - link "Blue Ridge Parkway" [ref=e1677] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/blue-ridge-parkway/
            - link "Kancamagus Highway" [ref=e1679] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/kancamagus-highway/
            - link "Pacific Coast Highway" [ref=e1681] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/pacific-coast-highway/
            - link "Skyline Drive" [ref=e1683] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/skyline-drive/
            - link "Volcanic Legacy Scenic Byway" [ref=e1685] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/volcanic-legacy-scenic-byway/
          - generic [ref=e1688]:
            - link [ref=e1690] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/20461816
              - text: The top things to do on an I-75 road trip
            - link [ref=e1692] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14292259
              - text: The top things to do on an I-10 road trip
            - link [ref=e1694] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14292356
              - text: "Border to Border: Essential road trip stops along I-5"
            - link [ref=e1696] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14292436
              - text: The best attractions along I-15, from California to Montana
            - link [ref=e1698] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14292492
              - text: The top things to do on an I-95 road trip
            - link [ref=e1700] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14405739
              - text: Your road trip guide to every awesome detour off I-70
            - link [ref=e1702] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14599610
              - text: The top things to do on an I-80 road trip
            - link [ref=e1704] [cursor=pointer]:
              - /url: javascript:void(0);
              - text: Show more
          - generic [ref=e1708]:
            - link [ref=e1710] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/acadia-national-park/
              - text: Acadia National Park
            - link [ref=e1712] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/arches-national-park/
              - text: Arches National Park
            - link [ref=e1714] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/badlands-national-park/
              - text: Badlands National Park
            - link [ref=e1716] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/bryce-canyon-national-park/
              - text: Bryce Canyon National Park
            - link [ref=e1718] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/canyonlands-national-park/
              - text: Canyonlands National Park
            - link [ref=e1720] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/crater-lake-national-park/
              - text: Crater Lake National Park
            - link [ref=e1722] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/crater-lake-national-park/
              - text: Crater Lake National Park
            - link [ref=e1724] [cursor=pointer]:
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
    - contentinfo [ref=e1726]:
      - generic [ref=e1727]:
        - generic:
          - generic [ref=e1729]:
            - paragraph [ref=e1731]:
              - strong [ref=e1732]: Keep exploring with the Roadtrippers mobile apps.
            - paragraph [ref=e1733]: Anything you plan or save automagically syncs with the apps, ready for you when you hit the road!
            - generic [ref=e1734]:
              - link "Download from Apple App Store" [ref=e1735] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/id944060491
                - text: Download from
                - strong [ref=e1736]: Apple App Store
              - link "Download from Google Play Store" [ref=e1737] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.roadtrippers
                - text: Download from
                - strong [ref=e1738]: Google Play Store
          - generic [ref=e1740]:
            - paragraph [ref=e1742]:
              - strong [ref=e1743]: "Connect with us and hit up #roadtrippers"
            - paragraph [ref=e1744]: Tall tales, trip guides, and the weird and wonderful.
            - generic [ref=e1745]:
              - link "Visit our TikTok page" [ref=e1746] [cursor=pointer]:
                - /url: https://www.tiktok.com/@roadtrippershq
                - img "Visit our TikTok page" [ref=e1747]
              - link "Visit our Facebook page" [ref=e1749] [cursor=pointer]:
                - /url: https://facebook.com/roadtrippers
                - img "Visit our Facebook page" [ref=e1750]
              - link "Visit our Instagram page" [ref=e1752] [cursor=pointer]:
                - /url: https://instagram.com/roadtrippers
                - img "Visit our Instagram page" [ref=e1753]
              - link "Visit our Pinterest page" [ref=e1757] [cursor=pointer]:
                - /url: https://pinterest.com/roadtrippers
                - img "Visit our Pinterest page" [ref=e1758]
              - link "Visit our LinkedIn page" [ref=e1760] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/roadtrippers
                - img "Visit our LinkedIn page" [ref=e1761]
              - link "Visit our YouTube page" [ref=e1763] [cursor=pointer]:
                - /url: https://www.youtube.com/c/RoadtrippersHQ
                - img "Visit our YouTube page" [ref=e1764]
        - generic:
          - generic [ref=e1767]:
            - heading "About" [level=6] [ref=e1768]
            - list [ref=e1770]:
              - listitem [ref=e1771]:
                - link "About Us" [ref=e1772] [cursor=pointer]:
                  - /url: https://roadtrippers.com/about/
              - listitem [ref=e1773]:
                - link "Roadtrippers Lending" [ref=e1774] [cursor=pointer]:
                  - /url: https://roadtrippers.com/lending/
              - listitem [ref=e1775]:
                - link "Careers" [ref=e1776] [cursor=pointer]:
                  - /url: https://roadtrippers.com/careers/
              - listitem [ref=e1777]:
                - link "Roadpass Digital" [ref=e1778] [cursor=pointer]:
                  - /url: https://www.roadpass.com/
              - listitem [ref=e1779]:
                - link "Mobile Apps" [ref=e1780] [cursor=pointer]:
                  - /url: https://roadtrippers.com/about/road-trip-apps/
              - listitem [ref=e1781]:
                - link "Support" [ref=e1782] [cursor=pointer]:
                  - /url: https://support.roadtrippers.com
              - listitem [ref=e1783]:
                - link "Contact" [ref=e1784] [cursor=pointer]:
                  - /url: https://roadtrippers.com/contact/
          - generic [ref=e1786]:
            - heading "Business Tools" [level=6] [ref=e1787]
            - list [ref=e1789]:
              - listitem [ref=e1790]:
                - link "Partnerships" [ref=e1791] [cursor=pointer]:
                  - /url: https://roadtrippers.com/partnerships
              - listitem [ref=e1792]:
                - link "Affiliate Program" [ref=e1793] [cursor=pointer]:
                  - /url: https://roadtrippers.com/affiliate/
              - listitem [ref=e1794]:
                - link "Media Center" [ref=e1795] [cursor=pointer]:
                  - /url: https://roadtrippers.com/media-center/
          - generic [ref=e1797]:
            - heading "Get Inspired" [level=6] [ref=e1798]
            - list [ref=e1799]:
              - listitem [ref=e1800]:
                - link "Road trip ideas by state" [ref=e1801] [cursor=pointer]:
                  - /url: https://roadtrippers.com/road-trip-regions/
                  - text: Road trip ideas by state
              - listitem [ref=e1802]:
                - link "National parks" [ref=e1803] [cursor=pointer]:
                  - /url: https://roadtrippers.com/national-park-guides/
                  - text: National parks
              - listitem [ref=e1804]:
                - link "Famous routes" [ref=e1805] [cursor=pointer]:
                  - /url: https://roadtrippers.com/route-guides/
                  - text: Famous routes
              - listitem [ref=e1806]:
                - link "Voices from the Road" [ref=e1807] [cursor=pointer]:
                  - /url: https://roadtrippers.com/voices/
                  - text: Voices from the Road
          - generic [ref=e1809]:
            - heading "The Latest" [level=6] [ref=e1810]
            - list [ref=e1811]:
              - listitem [ref=e1812]:
                - 'link "A Perfect Route 66 Road Trip: Towns, Timeshares, and Timeless Memories" [ref=e1813] [cursor=pointer]':
                  - /url: https://roadtrippers.com/magazine/a-perfect-route-66-road-trip-towns-timeshares-and-timeless-memories/
              - listitem [ref=e1814]:
                - link "These 20 National Park Service lodges showcase ‘parkitecture’ at its finest" [ref=e1815] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/national-park-service-lodges/
              - listitem [ref=e1816]:
                - 'link "A Better Way to Camp: Why RVC Outdoor Destinations Are Raising the Bar for Outdoor Stays" [ref=e1817] [cursor=pointer]':
                  - /url: https://roadtrippers.com/magazine/a-better-way-to-camp-why-rvc-outdoor-destinations-are-raising-the-bar-for-outdoor-stays/
      - generic [ref=e1818]:
        - generic:
          - link "Roadtrippers - Home" [ref=e1820] [cursor=pointer]:
            - /url: https://roadtrippers.com
            - img "Roadtrippers - Home" [ref=e1821]
          - generic [ref=e1831]:
            - list [ref=e1832]:
              - listitem [ref=e1833]:
                - link "Privacy Policy" [ref=e1834] [cursor=pointer]:
                  - /url: https://www.roadpass.com/privacy-policy
              - listitem [ref=e1835]:
                - link "Terms of Service" [ref=e1836] [cursor=pointer]:
                  - /url: https://www.roadpass.com/terms-of-service
              - listitem [ref=e1837]:
                - link "Copyright" [ref=e1838] [cursor=pointer]:
                  - /url: https://forms.gle/Ea2sUNYGtdNfBcCd7
            - paragraph [ref=e1839]: © Roadtrippers, LLC 2026
  - generic [ref=e1841]:
    - generic [ref=e1842]:
      - button "Close main nav" [ref=e1843] [cursor=pointer]:
        - generic [ref=e1844]: Close main nav
      - link [ref=e1845] [cursor=pointer]:
        - /url: https://roadtrippers.com
    - generic [ref=e1847]:
      - navigation [ref=e1848]:
        - list [ref=e1850]:
          - listitem [ref=e1851]:
            - link "Memberships" [ref=e1852] [cursor=pointer]:
              - /url: https://roadtrippers.com/membership/
            - list [ref=e1853]:
              - listitem [ref=e1854]:
                - link "Member Deals" [ref=e1855] [cursor=pointer]:
                  - /url: https://roadtrippers.com/member-deals/
              - listitem [ref=e1856]:
                - link "Roadside Assistance" [ref=e1857] [cursor=pointer]:
                  - /url: https://roadtrippers.com/roadside-assistance/
              - listitem [ref=e1858]:
                - link "Get Roadtrippers" [ref=e1859] [cursor=pointer]:
                  - /url: https://roadtrippers.com/membership/
          - listitem [ref=e1860]:
            - link "For RVers" [ref=e1861] [cursor=pointer]:
              - /url: https://roadtrippers.com/rv/
            - list [ref=e1862]:
              - listitem [ref=e1863]:
                - link "Campground Search and Booking" [ref=e1864] [cursor=pointer]:
                  - /url: https://roadtrippers.com/rv/campground-search-booking/
              - listitem [ref=e1865]:
                - link "Overnight RV Parking" [ref=e1866] [cursor=pointer]:
                  - /url: https://roadtrippers.com/rv/overnight-rv-parking/
              - listitem [ref=e1867]:
                - link "RV GPS" [ref=e1868] [cursor=pointer]:
                  - /url: https://roadtrippers.com/rv/rv-gps/
              - listitem [ref=e1869]:
                - link "RVing Resources" [ref=e1870] [cursor=pointer]:
                  - /url: https://roadtrippers.com/rv/resources/
          - listitem [ref=e1871]:
            - link "Plan Your Trip" [ref=e1872] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com
            - list [ref=e1873]:
              - listitem [ref=e1874]:
                - link "Trip Planner" [ref=e1875] [cursor=pointer]:
                  - /url: https://maps.roadtrippers.com
              - listitem [ref=e1876]:
                - link "Trip Guides" [ref=e1877] [cursor=pointer]:
                  - /url: https://maps.roadtrippers.com/trips
              - listitem [ref=e1878]:
                - link "Forum" [ref=e1879] [cursor=pointer]:
                  - /url: https://forum.roadtrippers.com
          - listitem [ref=e1880]:
            - link "Magazine" [ref=e1881] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/
            - list [ref=e1882]:
              - listitem [ref=e1883]:
                - link "The Ultimate Guide to Route 66" [ref=e1884] [cursor=pointer]:
                  - /url: https://roadtrippers.com/the-ultimate-guide-route-66/
              - listitem [ref=e1885]:
                - link "Destinations and routes" [ref=e1886] [cursor=pointer]:
                  - /url: https://roadtrippers.com/destinations/
              - listitem [ref=e1887]:
                - link "Road Culture" [ref=e1888] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/category/road-culture/
              - listitem [ref=e1889]:
                - link "Community" [ref=e1890] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/category/community/
              - listitem [ref=e1891]:
                - link "Road Trips" [ref=e1892] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/category/road-trips/
              - listitem [ref=e1893]:
                - link "Great Outdoors" [ref=e1894] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/category/great-outdoors/
      - list [ref=e1895]:
        - listitem
        - listitem [ref=e1896]:
          - img [ref=e1898]
          - link "Sign up" [ref=e1906] [cursor=pointer]:
            - /url: "#"
          - link "Log in" [ref=e1907] [cursor=pointer]:
            - /url: "#"
    - generic [ref=e1908]:
      - img "Roadtrippers" [ref=e1909]
      - paragraph [ref=e1910]:
        - text: Plan your journey, find amazing places,
        - text: and take fascinating detours with our app.
      - generic [ref=e1911]:
        - link "Download from Play Store" [ref=e1912] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/details?id=com.roadtrippers
          - text: Download from
          - strong [ref=e1913]: Play Store
        - link "Download from Apple App Store" [ref=e1914] [cursor=pointer]:
          - /url: https://itunes.apple.com/us/app/id944060491
          - text: Download from
          - strong [ref=e1915]: Apple App Store
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { HomePage } from '../pages/HomePage';
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
> 72  |       await expect(page).toHaveURL(/trip_id=|onboarding/, { timeout: 30000 });
      |                          ^ Error: expect(page).toHaveURL(expected) failed
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
  103 |     await expect(page.locator('.search_input_to_error').first()).toBeVisible({ timeout: 30000 });
  104 |   });
  105 | });
  106 | 
```
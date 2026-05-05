# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: trip-planning.spec.ts >> Roadtrippers Trip Planning Flow >> Edge Case: Trip with same origin and destination
- Location: tests/trip-planning.spec.ts:76:7

# Error details

```
Test timeout of 180000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /trip_id=|onboarding/
Received string:  "https://roadtrippers.com/"

Call log:
  - Expect "toHaveURL" with timeout 30000ms
    23 × unexpected value "https://roadtrippers.com/"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - iframe [active] [ref=e3]:
    - generic [ref=f22e4]:
      - button [ref=f22e6] [cursor=pointer]
      - paragraph [ref=f22e9]:
        - strong [ref=f22e10]: The first 7 days are on us.
        - text: Test drive the best features of Roadtrippers Premium for
        - strong [ref=f22e11]:
          - generic [ref=f22e12]: FREE
        - text: "!"
      - generic [ref=f22e13]:
        - generic [ref=f22e15]:
          - generic [ref=f22e16]: Email
          - textbox "Email" [ref=f22e17]:
            - /placeholder: hello@example.com
        - button "Start Your Free Trial" [ref=f22e19] [cursor=pointer]:
          - strong [ref=f22e20]: Start Your Free Trial
      - paragraph [ref=f22e21]: New memberships only. Terms and conditions apply.
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - link "Roadtrippers Logo" [ref=e7] [cursor=pointer]:
          - /url: https://roadtrippers.com
          - img "Roadtrippers Logo" [ref=e8]
        - navigation [ref=e19]:
          - list [ref=e21]:
            - listitem [ref=e22]:
              - link "Memberships" [ref=e23] [cursor=pointer]:
                - /url: https://roadtrippers.com/membership/
            - listitem [ref=e24]:
              - link "For RVers" [ref=e25] [cursor=pointer]:
                - /url: https://roadtrippers.com/rv/
            - listitem [ref=e26]:
              - link "Plan Your Trip" [ref=e27] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com
            - listitem [ref=e28]:
              - link "Campendium" [ref=e29] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/?lng=-106.77766&lat=41.11498&z=3.30945&a4=p!CAMP
            - listitem [ref=e30]:
              - link "Magazine" [ref=e31] [cursor=pointer]:
                - /url: https://roadtrippers.com/magazine/
      - generic [ref=e32]:
        - link "Log In" [ref=e33] [cursor=pointer]:
          - /url: javascript:void(0);
        - link "Sign Up" [ref=e34] [cursor=pointer]:
          - /url: javascript:void(0);
        - link:
          - /url: javascript:void(0);
  - generic [ref=e35]:
    - main [ref=e36]:
      - generic [ref=e37]:
        - generic [ref=e38]:
          - img [ref=e40]
          - img [ref=e43]
          - img [ref=e46]
          - img [ref=e49]
        - generic [ref=e51]:
          - generic [ref=e52]:
            - generic [ref=e53]:
              - heading "Take unforgettable road trips" [level=1] [ref=e54]
              - paragraph [ref=e55]: The road trip planner that knows where you actually want to go.
            - generic [ref=e56]:
              - generic [ref=e57]:
                - generic [ref=e61]:
                  - generic [ref=e63]:
                    - generic [ref=e65] [cursor=pointer]:
                      - generic [ref=e66]: Plan on your own
                      - text: Explore and discover stops by yourself
                    - radio "Plan on your own Explore and discover stops by yourself" [checked] [ref=e68]
                  - generic [ref=e70]:
                    - generic [ref=e72] [cursor=pointer]:
                      - generic [ref=e73]:
                        - text: Plan with
                        - generic [ref=e74]: autopilot
                      - text: Powered by 42 million real trips
                    - radio "Plan with autopilot Powered by 42 million real trips" [ref=e76]
                - generic [ref=e78]:
                  - generic [ref=e80]:
                    - generic [ref=e82]:
                      - generic: Starting Point
                      - textbox [ref=e83]: Sofia, Bulgaria
                      - generic:
                        - list
                        - list
                    - generic [ref=e85]:
                      - generic: Destination
                      - textbox [ref=e86]: Sofia, Bulgaria
                      - generic:
                        - list
                  - button "Go" [ref=e88] [cursor=pointer]
              - paragraph [ref=e92]:
                - text: Not sure where to go?
                - link "Explore the map" [ref=e93] [cursor=pointer]:
                  - /url: https://maps.roadtrippers.com
                  - text: Explore the map
                  - img [ref=e95]
          - generic [ref=e98]:
            - img [ref=e100]
            - img "tevin-trinh-qRd3_-IVM38-unsplash 1" [ref=e103]
      - generic [ref=e105]:
        - img [ref=e107]
        - generic [ref=e108]:
          - heading "Plan, discover, and collaborate" [level=2] [ref=e110]
          - generic [ref=e112]:
            - generic [ref=e113]:
              - img "Roadtrippers Southwest Map" [ref=e114]
              - generic:
                - img [ref=e116]
                - img [ref=e119]
                - img [ref=e122]
                - generic [ref=e124]: "41"
                - generic [ref=e125]: "42"
                - generic [ref=e126]: "43"
            - generic:
              - img "Trip Collaboration Demo"
            - img "Autopilot Options Demo" [ref=e128]
            - generic [ref=e129]:
              - generic [ref=e130]:
                - generic [ref=e131]: "41"
                - img "Arches National Park POI Card" [ref=e133]
              - generic [ref=e134]:
                - generic [ref=e135]: "42"
                - img "Great Sand Dunes National Park POI Card" [ref=e137]
              - generic [ref=e138]:
                - generic [ref=e139]: "43"
                - img "Bishop Castle POI Card" [ref=e141]
      - generic [ref=e145]:
        - heading "Headlights on us" [level=4] [ref=e147]
        - img [ref=e149]
        - img [ref=e151]
        - img [ref=e153]
        - img [ref=e155]
      - generic [ref=e156]:
        - generic [ref=e157]: Advertisement
        - generic [ref=e158]:
          - generic:
            - link "Remove Ads":
              - /url: https://maps.roadtrippers.com/plus
              - button "Remove Ads" [ref=e159] [cursor=pointer]
      - generic [ref=e160]:
        - generic [ref=e161]:
          - heading "Choose the right plan for you and try it free for 7 days" [level=2] [ref=e162]
          - paragraph [ref=e163]: All plans include access to curated road trip guides, Extraordinary Places, and 5 million points of interest.
        - generic [ref=e166]:
          - generic [ref=e168]:
            - generic [ref=e169]: "Features:"
            - generic [ref=e170]: Free
            - generic [ref=e171]: + Basic
            - generic [ref=e172]: + Pro
            - generic [ref=e173]: + Premium
          - generic [ref=e174]:
            - generic [ref=e175]:
              - generic [ref=e176]: Saved trips
              - generic [ref=e177]: "1"
              - generic [ref=e178]: "3"
              - generic [ref=e179]: "5"
              - generic [ref=e180]: ∞
            - generic [ref=e181]:
              - generic [ref=e182]: Stops per trip
              - generic [ref=e183]: "3"
              - generic [ref=e184]: "20"
              - generic [ref=e185]: "50"
              - generic [ref=e186]: "150"
            - generic [ref=e187]:
              - generic [ref=e188]: Custom map styles
              - generic [ref=e189]: —
            - generic [ref=e196]:
              - generic [ref=e197]: Trip export
              - generic [ref=e198]: —
            - generic [ref=e205]:
              - generic [ref=e206]: Ad free
              - generic [ref=e207]: —
              - generic [ref=e208]: —
            - generic [ref=e213]:
              - generic [ref=e214]: Trip collaboration
              - generic [ref=e215]: —
              - generic [ref=e216]: —
            - generic [ref=e221]:
              - generic [ref=e222]: Navigation
              - generic [ref=e223]: —
              - generic [ref=e224]: —
            - generic [ref=e229]:
              - generic [ref=e230]: RV GPS
              - generic [ref=e231]: —
              - generic [ref=e232]: —
              - generic [ref=e233]: —
            - generic [ref=e236]:
              - generic [ref=e237]: Overnight RV parking
              - generic [ref=e238]: —
              - generic [ref=e239]: —
              - generic [ref=e240]: —
            - generic [ref=e243]:
              - generic [ref=e244]: Member deals
              - generic [ref=e245]: —
              - generic [ref=e246]: —
              - generic [ref=e247]: —
            - generic [ref=e250]:
              - generic [ref=e251]: Live traffic
              - generic [ref=e252]: —
              - generic [ref=e253]: —
              - generic [ref=e254]: —
            - generic [ref=e257]:
              - generic [ref=e258]: Offline maps
              - generic [ref=e259]: —
              - generic [ref=e260]: —
              - generic [ref=e261]: —
            - generic [ref=e264]:
              - generic [ref=e265]: Membership
              - generic [ref=e266]: $0/yr
              - generic [ref=e267]: $35.99/yr
              - generic [ref=e268]: $49.99/yr
              - generic [ref=e269]: $59.99/yr
          - generic [ref=e271]:
            - link "Sign up" [ref=e274] [cursor=pointer]:
              - /url: javascript:void(0);
            - link "Try it for free" [ref=e276] [cursor=pointer]:
              - /url: "#basic"
            - link "Try it for free" [ref=e278] [cursor=pointer]:
              - /url: "#pro"
            - link "Try it for free" [ref=e280] [cursor=pointer]:
              - /url: "#premium"
      - generic [ref=e281]:
        - generic [ref=e283]:
          - img "star" [ref=e286]
          - generic [ref=e287]:
            - heading "Places we find extraordinary" [level=2] [ref=e288]
            - paragraph [ref=e289]: Look for the colorful icons on our map to locate our favorite places.
          - img "star" [ref=e292]
        - generic [ref=e295]:
          - link [ref=e299] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/ak/nature/denali-national-park-and-preserve-anchorage-ak
            - img [ref=e301]
            - generic [ref=e302]:
              - img [ref=e305]
              - generic [ref=e337]:
                - heading [level=5] [ref=e338]: Denali National Park and Preserve
                - paragraph [ref=e343]: Alaska
          - link [ref=e347] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/luray-va/attractions/luray-caverns
            - img [ref=e349]
            - generic [ref=e350]:
              - img [ref=e353]
              - generic [ref=e375]:
                - heading [level=5] [ref=e376]: Luray Caverns
                - paragraph [ref=e381]: Luray, Virginia
          - link [ref=e385] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/san-francisco-ca/points-of-interest/yoda-fountain-san-francisco
            - img [ref=e387]
            - generic [ref=e388]:
              - img [ref=e391]
              - generic [ref=e410]:
                - heading [level=5] [ref=e411]: Yoda Fountain
                - paragraph [ref=e416]: San Francisco, California
          - link [ref=e420] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/alexandria-bay-ny/nature/boldt-castle
            - img [ref=e422]
            - generic [ref=e423]:
              - img [ref=e426]
              - generic [ref=e461]:
                - heading [level=5] [ref=e462]: Boldt Castle
                - paragraph [ref=e467]: Alexandria Bay, New York
          - link [ref=e471] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/cabazon-ca/attractions/cabazon-dinosaurs
            - img [ref=e473]
            - generic [ref=e474]:
              - img [ref=e477]
              - generic [ref=e495]:
                - heading [level=5] [ref=e496]: Cabazon Dinosaurs
                - paragraph [ref=e501]: Cabazon, California
          - link [ref=e505] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/moab-ut/nature/arches-national-park
            - img [ref=e507]
            - generic [ref=e508]:
              - img [ref=e511]
              - generic [ref=e518]:
                - heading [level=5] [ref=e519]: Arches National Park
                - paragraph [ref=e524]: Moab, Utah
          - link [ref=e528] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/amarillo-tx/attractions/cadillac-ranch
            - img [ref=e530]
            - generic [ref=e531]:
              - img [ref=e534]
              - generic [ref=e567]:
                - heading [level=5] [ref=e568]: Cadillac Ranch
                - paragraph [ref=e573]: Amarillo, Texas
          - link [ref=e577] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/minot-nd/nature/scandinavian-heritage-park
            - img [ref=e579]
            - generic [ref=e580]:
              - img [ref=e583]
              - generic [ref=e610]:
                - heading [level=5] [ref=e611]: Scandinavian Heritage Park
                - paragraph [ref=e616]: Minot, North Dakota
          - link [ref=e620] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/berlin-md/nature/assateague-island-national-seashore-berlin-md--2
            - img [ref=e622]
            - generic [ref=e623]:
              - img [ref=e626]
              - generic [ref=e681]:
                - heading [level=5] [ref=e682]: Assateague Island National Seashore
                - paragraph [ref=e687]: Berlin, Maryland
          - link [ref=e691] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/mill-run-pa/attractions/fallingwater
            - img [ref=e693]
            - generic [ref=e694]:
              - img [ref=e697]
              - generic [ref=e728]:
                - heading [level=5] [ref=e729]: Fallingwater
                - paragraph [ref=e734]: Mill Run, Pennsylvania
          - link "Blue Whale of Catoosa" [ref=e738] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/catoosa-ok/attractions/blue-whale-of-catoosa
            - img "Blue Whale of Catoosa" [ref=e740]
            - generic [ref=e741]:
              - img [ref=e744]
              - generic [ref=e761]:
                - heading "Blue Whale of Catoosa" [level=5] [ref=e762]
                - paragraph [ref=e767]: Catoosa, Oklahoma
          - link "Denali National Park and Preserve" [ref=e771] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/ak/nature/denali-national-park-and-preserve-anchorage-ak
            - img "Denali National Park and Preserve" [ref=e773]
            - generic [ref=e774]:
              - img [ref=e777]
              - generic [ref=e809]:
                - heading "Denali National Park and Preserve" [level=5] [ref=e810]
                - paragraph [ref=e815]: Alaska
          - link "Luray Caverns" [ref=e819] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/luray-va/attractions/luray-caverns
            - img "Luray Caverns" [ref=e821]
            - generic [ref=e822]:
              - img [ref=e825]
              - generic [ref=e847]:
                - heading "Luray Caverns" [level=5] [ref=e848]
                - paragraph [ref=e853]: Luray, Virginia
          - link "Yoda Fountain" [ref=e857] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/san-francisco-ca/points-of-interest/yoda-fountain-san-francisco
            - img "Yoda Fountain" [ref=e859]
            - generic [ref=e860]:
              - img [ref=e863]
              - generic [ref=e882]:
                - heading "Yoda Fountain" [level=5] [ref=e883]
                - paragraph [ref=e888]: San Francisco, California
          - link [ref=e892] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/alexandria-bay-ny/nature/boldt-castle
            - img [ref=e894]
            - generic [ref=e895]:
              - img [ref=e898]
              - generic [ref=e933]:
                - heading [level=5] [ref=e934]: Boldt Castle
                - paragraph [ref=e939]: Alexandria Bay, New York
          - link [ref=e943] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/cabazon-ca/attractions/cabazon-dinosaurs
            - img [ref=e945]
            - generic [ref=e946]:
              - img [ref=e949]
              - generic [ref=e967]:
                - heading [level=5] [ref=e968]: Cabazon Dinosaurs
                - paragraph [ref=e973]: Cabazon, California
          - link [ref=e977] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/moab-ut/nature/arches-national-park
            - img [ref=e979]
            - generic [ref=e980]:
              - img [ref=e983]
              - generic [ref=e990]:
                - heading [level=5] [ref=e991]: Arches National Park
                - paragraph [ref=e996]: Moab, Utah
          - link [ref=e1000] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/amarillo-tx/attractions/cadillac-ranch
            - img [ref=e1002]
            - generic [ref=e1003]:
              - img [ref=e1006]
              - generic [ref=e1039]:
                - heading [level=5] [ref=e1040]: Cadillac Ranch
                - paragraph [ref=e1045]: Amarillo, Texas
          - link [ref=e1049] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/minot-nd/nature/scandinavian-heritage-park
            - img [ref=e1051]
            - generic [ref=e1052]:
              - img [ref=e1055]
              - generic [ref=e1082]:
                - heading [level=5] [ref=e1083]: Scandinavian Heritage Park
                - paragraph [ref=e1088]: Minot, North Dakota
          - link [ref=e1092] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/berlin-md/nature/assateague-island-national-seashore-berlin-md--2
            - img [ref=e1094]
            - generic [ref=e1095]:
              - img [ref=e1098]
              - generic [ref=e1153]:
                - heading [level=5] [ref=e1154]: Assateague Island National Seashore
                - paragraph [ref=e1159]: Berlin, Maryland
          - link [ref=e1163] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/mill-run-pa/attractions/fallingwater
            - img [ref=e1165]
            - generic [ref=e1166]:
              - img [ref=e1169]
              - generic [ref=e1200]:
                - heading [level=5] [ref=e1201]: Fallingwater
                - paragraph [ref=e1206]: Mill Run, Pennsylvania
          - link [ref=e1210] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/catoosa-ok/attractions/blue-whale-of-catoosa
            - img [ref=e1212]
            - generic [ref=e1213]:
              - img [ref=e1216]
              - generic [ref=e1233]:
                - heading [level=5] [ref=e1234]: Blue Whale of Catoosa
                - paragraph [ref=e1239]: Catoosa, Oklahoma
          - link [ref=e1243] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/ak/nature/denali-national-park-and-preserve-anchorage-ak
            - img [ref=e1245]
            - generic [ref=e1246]:
              - img [ref=e1249]
              - generic [ref=e1281]:
                - heading [level=5] [ref=e1282]: Denali National Park and Preserve
                - paragraph [ref=e1287]: Alaska
          - link [ref=e1291] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/luray-va/attractions/luray-caverns
            - img [ref=e1293]
            - generic [ref=e1294]:
              - img [ref=e1297]
              - generic [ref=e1319]:
                - heading [level=5] [ref=e1320]: Luray Caverns
                - paragraph [ref=e1325]: Luray, Virginia
          - link [ref=e1329] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/san-francisco-ca/points-of-interest/yoda-fountain-san-francisco
            - img [ref=e1331]
            - generic [ref=e1332]:
              - img [ref=e1335]
              - generic [ref=e1354]:
                - heading [level=5] [ref=e1355]: Yoda Fountain
                - paragraph [ref=e1360]: San Francisco, California
          - link [ref=e1364] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/alexandria-bay-ny/nature/boldt-castle
            - img [ref=e1366]
            - generic [ref=e1367]:
              - img [ref=e1370]
              - generic [ref=e1405]:
                - heading [level=5] [ref=e1406]: Boldt Castle
                - paragraph [ref=e1411]: Alexandria Bay, New York
          - link [ref=e1415] [cursor=pointer]:
            - /url: https://maps.roadtrippers.com/us/cabazon-ca/attractions/cabazon-dinosaurs
            - img [ref=e1417]
            - generic [ref=e1418]:
              - img [ref=e1421]
              - generic [ref=e1439]:
                - heading [level=5] [ref=e1440]: Cabazon Dinosaurs
                - paragraph [ref=e1445]: Cabazon, California
        - link "Explore All Extraordinary Places" [ref=e1449] [cursor=pointer]:
          - /url: https://roadtrippers.com/extraordinary-places/
      - generic [ref=e1450]:
        - heading "See what roadtrippers are finding" [level=2] [ref=e1454]
        - generic [ref=e1461]:
          - generic [ref=e1465]:
            - heading "Visit the POI Page" [level=4] [ref=e1467]:
              - link "Visit the POI Page" [ref=e1468] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/ca/ab/points-of-interest/worlds-largest-beaver-ab--0?lng=-119.42318&lat=55.20407&z=12.36861
                - text: World's Largest Beaver, AB
            - img "World's Largest Beaver" [ref=e1470]
            - generic [ref=e1471]:
              - img "drandk" [ref=e1472]
              - generic [ref=e1473]: DaveRandy & Kathy
          - generic [ref=e1477]:
            - heading "Visit the POI Page" [level=4] [ref=e1479]:
              - link "Visit the POI Page" [ref=e1480] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/waskom-tx/points-of-interest/big-books-apple-ruler-pencil-waskom-tx--0?lng=-119.42318&lat=55.20407&z=12.36861
                - text: Big Books, Apple, Ruler, Pencil, TX
            - img "Big Books, Apple, Ruler, Pencil" [ref=e1482]
            - generic [ref=e1483]:
              - img "bray" [ref=e1484]
              - generic [ref=e1485]: James_Bray
          - generic [ref=e1489]:
            - heading "Visit the POI Page" [level=4] [ref=e1491]:
              - link "Visit the POI Page" [ref=e1492] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/clayton-nm/points-of-interest/dinosaur-statues-clayton-nm--0?lng=-94.06000&lat=32.47925&z=12.75718
                - text: Dinosaur Statues, NM
            - img "Dinosaur Statues" [ref=e1494]
            - generic [ref=e1495]:
              - img "roadtripper" [ref=e1496]
              - generic [ref=e1497]: roadtripper4011181
          - generic [ref=e1501]:
            - heading [level=4] [ref=e1503]:
              - link [ref=e1504] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/brownsville-tn/attractions/billy-tripps-mindfield?lng=-89.26229&lat=35.59397&z=12.87953
                - text: Billy Tripps MindField, TN
            - img [ref=e1506]
            - generic [ref=e1507]:
              - img [ref=e1508]
              - generic [ref=e1509]: delorescook
          - generic [ref=e1513]:
            - heading [level=4] [ref=e1515]:
              - link [ref=e1516] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/joshua-tree-ca/points-of-interest/big-josh-cowboy-muffler-man-joshua-tree-ca--0?lng=-89.26229&lat=35.59397&z=12.87953
                - text: "Big Josh: Cowboy Muffler Man, CA"
            - img [ref=e1518]
            - generic [ref=e1519]:
              - img [ref=e1520]
              - generic [ref=e1521]: Steph
          - generic [ref=e1525]:
            - heading [level=4] [ref=e1527]:
              - link [ref=e1528] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/staunton-va/points-of-interest/giant-watering-can-and-flower-pots-staunton-va--0?lng=-116.31213&lat=34.13486&z=12.90513
                - text: Giant Watering Can and Flower Pots, VA
            - img [ref=e1530]
            - generic [ref=e1531]:
              - img [ref=e1532]
              - generic [ref=e1533]: Natecove
          - generic [ref=e1537]:
            - heading [level=4] [ref=e1539]:
              - link [ref=e1540] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/benson-az/attractions/the-thing?lng=-110.05040&lat=32.08084&z=12.93886
                - text: The Thing?, AZ
            - img [ref=e1542]
            - generic [ref=e1543]:
              - img [ref=e1544]
              - generic [ref=e1545]: Dave Miller
          - generic [ref=e1549]:
            - heading [level=4] [ref=e1551]:
              - link [ref=e1552] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/plover-wi/points-of-interest/worlds-largest-potato-masher-plover-wi--0?lng=-89.52988&lat=44.44382&z=11.06151
                - text: World's Largest Potato Masher, WI
            - img [ref=e1554]
            - generic [ref=e1555]:
              - img [ref=e1556]
              - generic [ref=e1557]: roadtripper747946
          - generic [ref=e1561]:
            - heading [level=4] [ref=e1563]:
              - link [ref=e1564] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/amarillo-tx/points-of-interest/the-ozymandias-legs?lng=-101.90940&lat=35.10180&z=12.88832
                - text: The Ozymandias Legs, TX
            - img [ref=e1566]
            - generic [ref=e1567]:
              - img [ref=e1568]
              - generic [ref=e1569]: Dave Miller
          - generic [ref=e1573]:
            - heading [level=4] [ref=e1575]:
              - link [ref=e1576] [cursor=pointer]:
                - /url: https://maps.roadtrippers.com/us/alamogordo-nm/points-of-interest/worlds-largest-pistachio?lng=-101.90940&lat=35.10180&z=12.88832
                - text: World's Largest Pistachio, NM
            - img [ref=e1578]
            - generic [ref=e1579]:
              - img [ref=e1580]
              - generic [ref=e1581]: Ken & Dana
      - generic [ref=e1582]:
        - heading "Some stories from the road" [level=2] [ref=e1588]
        - generic [ref=e1589]:
          - generic [ref=e1590]:
            - 'img "A Perfect Route 66 Road Trip: Towns, Timeshares, and Timeless Memories" [ref=e1592]'
            - 'heading "A Perfect Route 66 Road Trip: Towns, Timeshares, and Timeless Memories" [level=3] [ref=e1594] [cursor=pointer]':
              - 'link "A Perfect Route 66 Road Trip: Towns, Timeshares, and Timeless Memories" [ref=e1595]':
                - /url: https://roadtrippers.com/magazine/a-perfect-route-66-road-trip-towns-timeshares-and-timeless-memories/
            - paragraph [ref=e1597]:
              - link "rachel-kawate" [ref=e1598] [cursor=pointer]:
                - /url: /magazine/author/rachel-kawate
                - img "rachel-kawate" [ref=e1599]
              - link "Rachel Kawate" [ref=e1600] [cursor=pointer]:
                - /url: /magazine/author/rachel-kawate
            - link "Read article" [ref=e1602] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/a-perfect-route-66-road-trip-towns-timeshares-and-timeless-memories/
            - link [ref=e1603] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/a-perfect-route-66-road-trip-towns-timeshares-and-timeless-memories/
          - generic [ref=e1604]:
            - img "These 20 National Park Service lodges showcase ‘parkitecture’ at its finest" [ref=e1606]
            - heading "These 20 National Park Service lodges showcase ‘parkitecture’ at its finest" [level=3] [ref=e1608] [cursor=pointer]:
              - link "These 20 National Park Service lodges showcase ‘parkitecture’ at its finest" [ref=e1609]:
                - /url: https://roadtrippers.com/magazine/national-park-service-lodges/
            - paragraph [ref=e1611]:
              - link "roadtrippers" [ref=e1612] [cursor=pointer]:
                - /url: /magazine/author/roadtrippers
                - img "roadtrippers" [ref=e1613]
              - link "Roadtrippers" [ref=e1614] [cursor=pointer]:
                - /url: /magazine/author/roadtrippers
            - link "Read article" [ref=e1616] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/national-park-service-lodges/
            - link [ref=e1617] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/national-park-service-lodges/
          - generic [ref=e1618]:
            - 'img "A Better Way to Camp: Why RVC Outdoor Destinations Are Raising the Bar for Outdoor Stays" [ref=e1620]'
            - 'heading "A Better Way to Camp: Why RVC Outdoor Destinations Are Raising the Bar for Outdoor Stays" [level=3] [ref=e1622] [cursor=pointer]':
              - 'link "A Better Way to Camp: Why RVC Outdoor Destinations Are Raising the Bar for Outdoor Stays" [ref=e1623]':
                - /url: https://roadtrippers.com/magazine/a-better-way-to-camp-why-rvc-outdoor-destinations-are-raising-the-bar-for-outdoor-stays/
            - paragraph [ref=e1625]:
              - link "benen-shoquistroadpass-com" [ref=e1626] [cursor=pointer]:
                - /url: /magazine/author/benen-shoquistroadpass-com
                - img "benen-shoquistroadpass-com" [ref=e1627]
              - link "Benen Shoquist" [ref=e1628] [cursor=pointer]:
                - /url: /magazine/author/benen-shoquistroadpass-com
            - link "Read article" [ref=e1630] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/a-better-way-to-camp-why-rvc-outdoor-destinations-are-raising-the-bar-for-outdoor-stays/
            - link [ref=e1631] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/a-better-way-to-camp-why-rvc-outdoor-destinations-are-raising-the-bar-for-outdoor-stays/
      - generic [ref=e1633]:
        - generic [ref=e1634]:
          - link "Famous Routes" [ref=e1636] [cursor=pointer]:
            - /url: javascript:void(0);
          - link "Interstate Exit Guides" [ref=e1638] [cursor=pointer]:
            - /url: javascript:void(0);
          - link "National Parks" [ref=e1640] [cursor=pointer]:
            - /url: javascript:void(0);
        - generic [ref=e1644]:
          - generic [ref=e1647]:
            - link "Route 66" [ref=e1649] [cursor=pointer]:
              - /url: https://roadtrippers.com/the-ultimate-guide-route-66/
            - link "Beartooth Highway" [ref=e1651] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/beartooth-highway/
            - link "Blue Ridge Parkway" [ref=e1653] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/blue-ridge-parkway/
            - link "Kancamagus Highway" [ref=e1655] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/kancamagus-highway/
            - link "Pacific Coast Highway" [ref=e1657] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/pacific-coast-highway/
            - link "Skyline Drive" [ref=e1659] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/skyline-drive/
            - link "Volcanic Legacy Scenic Byway" [ref=e1661] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/volcanic-legacy-scenic-byway/
          - generic [ref=e1664]:
            - link [ref=e1666] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/20461816
              - text: The top things to do on an I-75 road trip
            - link [ref=e1668] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14292259
              - text: The top things to do on an I-10 road trip
            - link [ref=e1670] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14292356
              - text: "Border to Border: Essential road trip stops along I-5"
            - link [ref=e1672] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14292436
              - text: The best attractions along I-15, from California to Montana
            - link [ref=e1674] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14292492
              - text: The top things to do on an I-95 road trip
            - link [ref=e1676] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14405739
              - text: Your road trip guide to every awesome detour off I-70
            - link [ref=e1678] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com/trips/14599610
              - text: The top things to do on an I-80 road trip
            - link [ref=e1680] [cursor=pointer]:
              - /url: javascript:void(0);
              - text: Show more
          - generic [ref=e1684]:
            - link [ref=e1686] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/acadia-national-park/
              - text: Acadia National Park
            - link [ref=e1688] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/arches-national-park/
              - text: Arches National Park
            - link [ref=e1690] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/badlands-national-park/
              - text: Badlands National Park
            - link [ref=e1692] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/bryce-canyon-national-park/
              - text: Bryce Canyon National Park
            - link [ref=e1694] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/canyonlands-national-park/
              - text: Canyonlands National Park
            - link [ref=e1696] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/crater-lake-national-park/
              - text: Crater Lake National Park
            - link [ref=e1698] [cursor=pointer]:
              - /url: https://roadtrippers.com/destinations/crater-lake-national-park/
              - text: Crater Lake National Park
            - link [ref=e1700] [cursor=pointer]:
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
    - contentinfo [ref=e1702]:
      - generic [ref=e1703]:
        - generic:
          - generic [ref=e1705]:
            - paragraph [ref=e1707]:
              - strong [ref=e1708]: Keep exploring with the Roadtrippers mobile apps.
            - paragraph [ref=e1709]: Anything you plan or save automagically syncs with the apps, ready for you when you hit the road!
            - generic [ref=e1710]:
              - link "Download from Apple App Store" [ref=e1711] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/id944060491
                - text: Download from
                - strong [ref=e1712]: Apple App Store
              - link "Download from Google Play Store" [ref=e1713] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.roadtrippers
                - text: Download from
                - strong [ref=e1714]: Google Play Store
          - generic [ref=e1716]:
            - paragraph [ref=e1718]:
              - strong [ref=e1719]: "Connect with us and hit up #roadtrippers"
            - paragraph [ref=e1720]: Tall tales, trip guides, and the weird and wonderful.
            - generic [ref=e1721]:
              - link "Visit our TikTok page" [ref=e1722] [cursor=pointer]:
                - /url: https://www.tiktok.com/@roadtrippershq
                - img "Visit our TikTok page" [ref=e1723]
              - link "Visit our Facebook page" [ref=e1725] [cursor=pointer]:
                - /url: https://facebook.com/roadtrippers
                - img "Visit our Facebook page" [ref=e1726]
              - link "Visit our Instagram page" [ref=e1728] [cursor=pointer]:
                - /url: https://instagram.com/roadtrippers
                - img "Visit our Instagram page" [ref=e1729]
              - link "Visit our Pinterest page" [ref=e1733] [cursor=pointer]:
                - /url: https://pinterest.com/roadtrippers
                - img "Visit our Pinterest page" [ref=e1734]
              - link "Visit our LinkedIn page" [ref=e1736] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/roadtrippers
                - img "Visit our LinkedIn page" [ref=e1737]
              - link "Visit our YouTube page" [ref=e1739] [cursor=pointer]:
                - /url: https://www.youtube.com/c/RoadtrippersHQ
                - img "Visit our YouTube page" [ref=e1740]
        - generic:
          - generic [ref=e1743]:
            - heading "About" [level=6] [ref=e1744]
            - list [ref=e1746]:
              - listitem [ref=e1747]:
                - link "About Us" [ref=e1748] [cursor=pointer]:
                  - /url: https://roadtrippers.com/about/
              - listitem [ref=e1749]:
                - link "Roadtrippers Lending" [ref=e1750] [cursor=pointer]:
                  - /url: https://roadtrippers.com/lending/
              - listitem [ref=e1751]:
                - link "Careers" [ref=e1752] [cursor=pointer]:
                  - /url: https://roadtrippers.com/careers/
              - listitem [ref=e1753]:
                - link "Roadpass Digital" [ref=e1754] [cursor=pointer]:
                  - /url: https://www.roadpass.com/
              - listitem [ref=e1755]:
                - link "Mobile Apps" [ref=e1756] [cursor=pointer]:
                  - /url: https://roadtrippers.com/about/road-trip-apps/
              - listitem [ref=e1757]:
                - link "Support" [ref=e1758] [cursor=pointer]:
                  - /url: https://support.roadtrippers.com
              - listitem [ref=e1759]:
                - link "Contact" [ref=e1760] [cursor=pointer]:
                  - /url: https://roadtrippers.com/contact/
          - generic [ref=e1762]:
            - heading "Business Tools" [level=6] [ref=e1763]
            - list [ref=e1765]:
              - listitem [ref=e1766]:
                - link "Partnerships" [ref=e1767] [cursor=pointer]:
                  - /url: https://roadtrippers.com/partnerships
              - listitem [ref=e1768]:
                - link "Affiliate Program" [ref=e1769] [cursor=pointer]:
                  - /url: https://roadtrippers.com/affiliate/
              - listitem [ref=e1770]:
                - link "Media Center" [ref=e1771] [cursor=pointer]:
                  - /url: https://roadtrippers.com/media-center/
          - generic [ref=e1773]:
            - heading "Get Inspired" [level=6] [ref=e1774]
            - list [ref=e1775]:
              - listitem [ref=e1776]:
                - link "Road trip ideas by state" [ref=e1777] [cursor=pointer]:
                  - /url: https://roadtrippers.com/road-trip-regions/
                  - text: Road trip ideas by state
              - listitem [ref=e1778]:
                - link "National parks" [ref=e1779] [cursor=pointer]:
                  - /url: https://roadtrippers.com/national-park-guides/
                  - text: National parks
              - listitem [ref=e1780]:
                - link "Famous routes" [ref=e1781] [cursor=pointer]:
                  - /url: https://roadtrippers.com/route-guides/
                  - text: Famous routes
              - listitem [ref=e1782]:
                - link "Voices from the Road" [ref=e1783] [cursor=pointer]:
                  - /url: https://roadtrippers.com/voices/
                  - text: Voices from the Road
          - generic [ref=e1785]:
            - heading "The Latest" [level=6] [ref=e1786]
            - list [ref=e1787]:
              - listitem [ref=e1788]:
                - 'link "A Perfect Route 66 Road Trip: Towns, Timeshares, and Timeless Memories" [ref=e1789] [cursor=pointer]':
                  - /url: https://roadtrippers.com/magazine/a-perfect-route-66-road-trip-towns-timeshares-and-timeless-memories/
              - listitem [ref=e1790]:
                - link "These 20 National Park Service lodges showcase ‘parkitecture’ at its finest" [ref=e1791] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/national-park-service-lodges/
              - listitem [ref=e1792]:
                - 'link "A Better Way to Camp: Why RVC Outdoor Destinations Are Raising the Bar for Outdoor Stays" [ref=e1793] [cursor=pointer]':
                  - /url: https://roadtrippers.com/magazine/a-better-way-to-camp-why-rvc-outdoor-destinations-are-raising-the-bar-for-outdoor-stays/
      - generic [ref=e1794]:
        - generic:
          - link "Roadtrippers - Home" [ref=e1796] [cursor=pointer]:
            - /url: https://roadtrippers.com
            - img "Roadtrippers - Home" [ref=e1797]
          - generic [ref=e1807]:
            - list [ref=e1808]:
              - listitem [ref=e1809]:
                - link "Privacy Policy" [ref=e1810] [cursor=pointer]:
                  - /url: https://www.roadpass.com/privacy-policy
              - listitem [ref=e1811]:
                - link "Terms of Service" [ref=e1812] [cursor=pointer]:
                  - /url: https://www.roadpass.com/terms-of-service
              - listitem [ref=e1813]:
                - link "Copyright" [ref=e1814] [cursor=pointer]:
                  - /url: https://forms.gle/Ea2sUNYGtdNfBcCd7
            - paragraph [ref=e1815]: © Roadtrippers, LLC 2026
  - generic [ref=e1817]:
    - generic [ref=e1818]:
      - button "Close main nav" [ref=e1819] [cursor=pointer]:
        - generic [ref=e1820]: Close main nav
      - link [ref=e1821] [cursor=pointer]:
        - /url: https://roadtrippers.com
    - generic [ref=e1823]:
      - navigation [ref=e1824]:
        - list [ref=e1826]:
          - listitem [ref=e1827]:
            - link "Memberships" [ref=e1828] [cursor=pointer]:
              - /url: https://roadtrippers.com/membership/
            - list [ref=e1829]:
              - listitem [ref=e1830]:
                - link "Member Deals" [ref=e1831] [cursor=pointer]:
                  - /url: https://roadtrippers.com/member-deals/
              - listitem [ref=e1832]:
                - link "Roadside Assistance" [ref=e1833] [cursor=pointer]:
                  - /url: https://roadtrippers.com/roadside-assistance/
              - listitem [ref=e1834]:
                - link "Get Roadtrippers" [ref=e1835] [cursor=pointer]:
                  - /url: https://roadtrippers.com/membership/
          - listitem [ref=e1836]:
            - link "For RVers" [ref=e1837] [cursor=pointer]:
              - /url: https://roadtrippers.com/rv/
            - list [ref=e1838]:
              - listitem [ref=e1839]:
                - link "Campground Search and Booking" [ref=e1840] [cursor=pointer]:
                  - /url: https://roadtrippers.com/rv/campground-search-booking/
              - listitem [ref=e1841]:
                - link "Overnight RV Parking" [ref=e1842] [cursor=pointer]:
                  - /url: https://roadtrippers.com/rv/overnight-rv-parking/
              - listitem [ref=e1843]:
                - link "RV GPS" [ref=e1844] [cursor=pointer]:
                  - /url: https://roadtrippers.com/rv/rv-gps/
              - listitem [ref=e1845]:
                - link "RVing Resources" [ref=e1846] [cursor=pointer]:
                  - /url: https://roadtrippers.com/rv/resources/
          - listitem [ref=e1847]:
            - link "Plan Your Trip" [ref=e1848] [cursor=pointer]:
              - /url: https://maps.roadtrippers.com
            - list [ref=e1849]:
              - listitem [ref=e1850]:
                - link "Trip Planner" [ref=e1851] [cursor=pointer]:
                  - /url: https://maps.roadtrippers.com
              - listitem [ref=e1852]:
                - link "Trip Guides" [ref=e1853] [cursor=pointer]:
                  - /url: https://maps.roadtrippers.com/trips
              - listitem [ref=e1854]:
                - link "Forum" [ref=e1855] [cursor=pointer]:
                  - /url: https://forum.roadtrippers.com
          - listitem [ref=e1856]:
            - link "Magazine" [ref=e1857] [cursor=pointer]:
              - /url: https://roadtrippers.com/magazine/
            - list [ref=e1858]:
              - listitem [ref=e1859]:
                - link "The Ultimate Guide to Route 66" [ref=e1860] [cursor=pointer]:
                  - /url: https://roadtrippers.com/the-ultimate-guide-route-66/
              - listitem [ref=e1861]:
                - link "Destinations and routes" [ref=e1862] [cursor=pointer]:
                  - /url: https://roadtrippers.com/destinations/
              - listitem [ref=e1863]:
                - link "Road Culture" [ref=e1864] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/category/road-culture/
              - listitem [ref=e1865]:
                - link "Community" [ref=e1866] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/category/community/
              - listitem [ref=e1867]:
                - link "Road Trips" [ref=e1868] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/category/road-trips/
              - listitem [ref=e1869]:
                - link "Great Outdoors" [ref=e1870] [cursor=pointer]:
                  - /url: https://roadtrippers.com/magazine/category/great-outdoors/
      - list [ref=e1871]:
        - listitem
        - listitem [ref=e1872]:
          - img [ref=e1874]
          - link "Sign up" [ref=e1882] [cursor=pointer]:
            - /url: "#"
          - link "Log in" [ref=e1883] [cursor=pointer]:
            - /url: "#"
    - generic [ref=e1884]:
      - img "Roadtrippers" [ref=e1885]
      - paragraph [ref=e1886]:
        - text: Plan your journey, find amazing places,
        - text: and take fascinating detours with our app.
      - generic [ref=e1887]:
        - link "Download from Play Store" [ref=e1888] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/details?id=com.roadtrippers
          - text: Download from
          - strong [ref=e1889]: Play Store
        - link "Download from Apple App Store" [ref=e1890] [cursor=pointer]:
          - /url: https://itunes.apple.com/us/app/id944060491
          - text: Download from
          - strong [ref=e1891]: Apple App Store
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
> 87  |       await expect(page).toHaveURL(/trip_id=|onboarding/, { timeout: 30000 });
      |                          ^ Error: expect(page).toHaveURL(expected) failed
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
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: trip-planning.spec.ts >> Roadtrippers Trip Planning Flow >> Happy Path: Create a new trip from New York to Sofia, Bulgaria
- Location: tests/trip-planning.spec.ts:52:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /trip_id=|onboarding|itinerary/
Received string:  "https://maps.roadtrippers.com/?lng=-98.35&lat=39.5&z=3.30945"
Timeout: 60000ms

Call log:
  - Expect "toHaveURL" with timeout 60000ms
    63 × unexpected value "https://maps.roadtrippers.com/?lng=-98.35&lat=39.5&z=3.30945"

```

# Page snapshot

```yaml
- generic:
  - generic:
    - generic:
      - generic [ref=e1]:
        - generic [ref=e3]:
          - link "Mapbox" [ref=e5] [cursor=pointer]:
            - /url: http://mapbox.com/about/maps
          - list [ref=e7]:
            - listitem [ref=e8]: © Roadtrippers
            - listitem [ref=e9]:
              - text: •
              - link "© Mapbox" [ref=e10] [cursor=pointer]:
                - /url: https://www.mapbox.com/about/maps/
            - listitem [ref=e11]:
              - text: •
              - link "© OpenStreetMap" [ref=e12] [cursor=pointer]:
                - /url: http://www.openstreetmap.org/about/
            - listitem [ref=e13]:
              - text: •
              - link "Improve this map" [ref=e14] [cursor=pointer]:
                - /url: https://www.mapbox.com/contribute
          - region "Map" [ref=e15]
        - generic:
          - generic:
            - generic:
              - generic:
                - button "Remove ads" [ref=e20] [cursor=pointer]
                - generic:
                  - button [ref=e22] [cursor=pointer]:
                    - img [ref=e24]
                  - button [ref=e26] [cursor=pointer]:
                    - img [ref=e28]
                  - generic [ref=e30]:
                    - button [ref=e31] [cursor=pointer]:
                      - img [ref=e33]
                    - button [ref=e35] [cursor=pointer]:
                      - img [ref=e37]
                - generic [ref=e41]:
                  - banner [ref=e42]:
                    - heading "Explore" [level=2] [ref=e43]
                  - generic [ref=e44]:
                    - button "Start planning your next road trip today" [ref=e46] [cursor=pointer]:
                      - paragraph [ref=e48]: Start planning your next road trip today
                      - img [ref=e49]
                    - generic [ref=e51]:
                      - generic [ref=e52]:
                        - heading "Nearby guides for you" [level=2] [ref=e54]
                        - paragraph [ref=e55]:
                          - link "See all" [ref=e56] [cursor=pointer]:
                            - /url: /trips
                      - generic [ref=e57]:
                        - generic [ref=e59]:
                          - 'link "Gone But Not Forgotten: Former National Parks Gone But Not Forgotten: Former National Parks" [ref=e61] [cursor=pointer]':
                            - /url: /trips/14251975
                            - 'img "Gone But Not Forgotten: Former National Parks" [ref=e63]'
                            - 'heading "Gone But Not Forgotten: Former National Parks" [level=3] [ref=e64]':
                              - generic [ref=e65]: "Gone But Not Forgotten: Former National Parks"
                          - 'link "Canyons, caves, and abandoned Cadillacs: Southwest road trip Canyons, caves, and abandoned Cadillacs: Southwest road trip 1,847 mi" [ref=e67] [cursor=pointer]':
                            - /url: /trips/15631993
                            - 'img "Canyons, caves, and abandoned Cadillacs: Southwest road trip" [ref=e69]'
                            - 'heading "Canyons, caves, and abandoned Cadillacs: Southwest road trip" [level=3] [ref=e70]':
                              - generic [ref=e71]: "Canyons, caves, and abandoned Cadillacs: Southwest road trip"
                            - paragraph [ref=e72]: 1,847 mi
                          - link "The top things to do on an I-40 road trip The top things to do on an I-40 road trip 2,851 mi" [ref=e74] [cursor=pointer]:
                            - /url: /trips/14685149
                            - img "The top things to do on an I-40 road trip" [ref=e76]
                            - heading "The top things to do on an I-40 road trip" [level=3] [ref=e77]:
                              - generic [ref=e78]: The top things to do on an I-40 road trip
                            - paragraph [ref=e79]: 2,851 mi
                          - 'link "Ancient Mysteries: The 6 Coolest Indian Burial Mounds Ancient Mysteries: The 6 Coolest Indian Burial Mounds" [ref=e81] [cursor=pointer]':
                            - /url: /trips/15031463
                            - 'img "Ancient Mysteries: The 6 Coolest Indian Burial Mounds" [ref=e83]'
                            - 'heading "Ancient Mysteries: The 6 Coolest Indian Burial Mounds" [level=3] [ref=e84]':
                              - generic [ref=e85]: "Ancient Mysteries: The 6 Coolest Indian Burial Mounds"
                          - link "The top things to do on a Route 66 road trip The top things to do on a Route 66 road trip 2,316 mi" [ref=e87] [cursor=pointer]:
                            - /url: /trips/10296177
                            - img "The top things to do on a Route 66 road trip" [ref=e89]
                            - heading "The top things to do on a Route 66 road trip" [level=3] [ref=e90]:
                              - generic [ref=e91]: The top things to do on a Route 66 road trip
                            - paragraph [ref=e92]: 2,316 mi
                          - link "Meet America's most enchanting (and hidden) natural escape Meet America's most enchanting (and hidden) natural escape" [ref=e94] [cursor=pointer]:
                            - /url: /trips/17306041
                            - img "Meet America's most enchanting (and hidden) natural escape" [ref=e96]
                            - heading "Meet America's most enchanting (and hidden) natural escape" [level=3] [ref=e97]:
                              - generic [ref=e98]: Meet America's most enchanting (and hidden) natural escape
                          - link "Journey through Texas and Oklahoma to Route 66's midpoint Journey through Texas and Oklahoma to Route 66's midpoint 487 mi" [ref=e100] [cursor=pointer]:
                            - /url: /trips/24974955
                            - img "Journey through Texas and Oklahoma to Route 66's midpoint" [ref=e102]
                            - heading "Journey through Texas and Oklahoma to Route 66's midpoint" [level=3] [ref=e103]:
                              - generic [ref=e104]: Journey through Texas and Oklahoma to Route 66's midpoint
                            - paragraph [ref=e105]: 487 mi
                          - link "These are the best offbeat hidden gems in southeast Oklahoma These are the best offbeat hidden gems in southeast Oklahoma 323 mi" [ref=e107] [cursor=pointer]:
                            - /url: /trips/16216418
                            - img "These are the best offbeat hidden gems in southeast Oklahoma" [ref=e109]
                            - heading "These are the best offbeat hidden gems in southeast Oklahoma" [level=3] [ref=e110]:
                              - generic [ref=e111]: These are the best offbeat hidden gems in southeast Oklahoma
                            - paragraph [ref=e112]: 323 mi
                          - 'link "Need for Speed: A cross-country speedpark-fueled road trip Need for Speed: A cross-country speedpark-fueled road trip 2,741 mi" [ref=e114] [cursor=pointer]':
                            - /url: /trips/14352869
                            - 'img "Need for Speed: A cross-country speedpark-fueled road trip" [ref=e116]'
                            - 'heading "Need for Speed: A cross-country speedpark-fueled road trip" [level=3] [ref=e117]':
                              - generic [ref=e118]: "Need for Speed: A cross-country speedpark-fueled road trip"
                            - paragraph [ref=e119]: 2,741 mi
                          - 'link "Welcome to Choctaw Country: The heartland of enchantment Welcome to Choctaw Country: The heartland of enchantment 193 mi" [ref=e121] [cursor=pointer]':
                            - /url: /trips/16216387
                            - 'img "Welcome to Choctaw Country: The heartland of enchantment" [ref=e123]'
                            - 'heading "Welcome to Choctaw Country: The heartland of enchantment" [level=3] [ref=e124]':
                              - generic [ref=e125]: "Welcome to Choctaw Country: The heartland of enchantment"
                            - paragraph [ref=e126]: 193 mi
                          - 'link "America''s most wanted: See the graves of famous outlaws America''s most wanted: See the graves of famous outlaws" [ref=e128] [cursor=pointer]':
                            - /url: /trips/17118673
                            - 'img "America''s most wanted: See the graves of famous outlaws" [ref=e130]'
                            - 'heading "America''s most wanted: See the graves of famous outlaws" [level=3] [ref=e131]':
                              - generic [ref=e132]: "America's most wanted: See the graves of famous outlaws"
                          - link "Experience Endless Natural Beauty Along the Kiamichi Trace Experience Endless Natural Beauty Along the Kiamichi Trace 180 mi" [ref=e134] [cursor=pointer]:
                            - /url: /trips/17292023
                            - img "Experience Endless Natural Beauty Along the Kiamichi Trace" [ref=e136]
                            - heading "Experience Endless Natural Beauty Along the Kiamichi Trace" [level=3] [ref=e137]:
                              - generic [ref=e138]: Experience Endless Natural Beauty Along the Kiamichi Trace
                            - paragraph [ref=e139]: 180 mi
                          - 'link "Hidden Oklahoma: Explore the gems that time almost forgot Hidden Oklahoma: Explore the gems that time almost forgot 147 mi" [ref=e141] [cursor=pointer]':
                            - /url: /trips/17291467
                            - 'img "Hidden Oklahoma: Explore the gems that time almost forgot" [ref=e143]'
                            - 'heading "Hidden Oklahoma: Explore the gems that time almost forgot" [level=3] [ref=e144]':
                              - generic [ref=e145]: "Hidden Oklahoma: Explore the gems that time almost forgot"
                            - paragraph [ref=e146]: 147 mi
                          - link "The Ultimate Oklahoma I-44 Road Trip The Ultimate Oklahoma I-44 Road Trip 322 mi" [ref=e148] [cursor=pointer]:
                            - /url: /trips/15231595
                            - img "The Ultimate Oklahoma I-44 Road Trip" [ref=e150]
                            - heading "The Ultimate Oklahoma I-44 Road Trip" [level=3] [ref=e151]:
                              - generic [ref=e152]: The Ultimate Oklahoma I-44 Road Trip
                            - paragraph [ref=e153]: 322 mi
                          - 'link "Indian Mounds and Outlaw Hideouts: Oklahoma''s Wild History Indian Mounds and Outlaw Hideouts: Oklahoma''s Wild History 201 mi" [ref=e155] [cursor=pointer]':
                            - /url: /trips/17291005
                            - 'img "Indian Mounds and Outlaw Hideouts: Oklahoma''s Wild History" [ref=e157]'
                            - 'heading "Indian Mounds and Outlaw Hideouts: Oklahoma''s Wild History" [level=3] [ref=e158]':
                              - generic [ref=e159]: "Indian Mounds and Outlaw Hideouts: Oklahoma's Wild History"
                            - paragraph [ref=e160]: 201 mi
                          - link "The 12 most important Route 66 road trip photo ops The 12 most important Route 66 road trip photo ops 1,491 mi" [ref=e162] [cursor=pointer]:
                            - /url: /trips/14358996
                            - img "The 12 most important Route 66 road trip photo ops" [ref=e164]
                            - heading "The 12 most important Route 66 road trip photo ops" [level=3] [ref=e165]:
                              - generic [ref=e166]: The 12 most important Route 66 road trip photo ops
                            - paragraph [ref=e167]: 1,491 mi
                          - 'link "Road Trip Down US 83: The Road to Nowhere Road Trip Down US 83: The Road to Nowhere 1,869 mi" [ref=e169] [cursor=pointer]':
                            - /url: /trips/10397616
                            - 'img "Road Trip Down US 83: The Road to Nowhere" [ref=e171]'
                            - 'heading "Road Trip Down US 83: The Road to Nowhere" [level=3] [ref=e172]':
                              - generic [ref=e173]: "Road Trip Down US 83: The Road to Nowhere"
                            - paragraph [ref=e174]: 1,869 mi
                          - link "Offbeat guide to Kansas City, Missouri Offbeat guide to Kansas City, Missouri" [ref=e176] [cursor=pointer]:
                            - /url: /trips/14356652
                            - img "Offbeat guide to Kansas City, Missouri" [ref=e178]
                            - heading "Offbeat guide to Kansas City, Missouri" [level=3] [ref=e179]:
                              - generic [ref=e180]: Offbeat guide to Kansas City, Missouri
                          - 'link "Road trip along the Oregon Trail: A journey through history Road trip along the Oregon Trail: A journey through history 2,022 mi" [ref=e182] [cursor=pointer]':
                            - /url: /trips/14405751
                            - 'img "Road trip along the Oregon Trail: A journey through history" [ref=e184]'
                            - 'heading "Road trip along the Oregon Trail: A journey through history" [level=3] [ref=e185]':
                              - generic [ref=e186]: "Road trip along the Oregon Trail: A journey through history"
                            - paragraph [ref=e187]: 2,022 mi
                          - 'link "Will road-trip for BBQ: From Kansas City to the Carolinas Will road-trip for BBQ: From Kansas City to the Carolinas 2,211 mi" [ref=e189] [cursor=pointer]':
                            - /url: /trips/14425139
                            - 'img "Will road-trip for BBQ: From Kansas City to the Carolinas" [ref=e191]'
                            - 'heading "Will road-trip for BBQ: From Kansas City to the Carolinas" [level=3] [ref=e192]':
                              - generic [ref=e193]: "Will road-trip for BBQ: From Kansas City to the Carolinas"
                            - paragraph [ref=e194]: 2,211 mi
                        - button [ref=e195] [cursor=pointer]:
                          - img [ref=e197]
                    - link "Premium members get exclusive discounts from our partner brands" [ref=e200] [cursor=pointer]:
                      - /url: https://roadtrippers.com/member-deals/
                      - paragraph [ref=e202]: Premium members get exclusive discounts from our partner brands
                      - img [ref=e203]
                    - generic [ref=e205]:
                      - generic [ref=e206]:
                        - heading "Must-See Extraordinary Places" [level=2] [ref=e207]
                        - paragraph [ref=e208]:
                          - link "See all" [ref=e209] [cursor=pointer]:
                            - /url: https://roadtrippers.com/extraordinary-places
                      - generic [ref=e211]:
                        - generic [ref=e212]:
                          - link "Cincinnati Music Hall Cincinnati, OH 4.5" [ref=e213] [cursor=pointer]:
                            - /url: /us/cincinnati-oh/attractions/cincinnati-music-hall
                            - img [ref=e216]
                            - generic [ref=e287]:
                              - heading "Cincinnati Music Hall" [level=3] [ref=e288]
                              - paragraph [ref=e289]: Cincinnati, OH
                              - list [ref=e290]:
                                - listitem [ref=e291]:
                                  - generic [ref=e292]:
                                    - img [ref=e293]
                                    - generic [ref=e296]: "4.5"
                          - button [ref=e297] [cursor=pointer]:
                            - img [ref=e299]
                          - button [ref=e301] [cursor=pointer]:
                            - img [ref=e303]
                        - generic [ref=e305]:
                          - link "Tybee Island Lighthouse and Museum Tybee Island, GA 4.5" [ref=e306] [cursor=pointer]:
                            - /url: /us/tybee-island-ga/attractions/tybee-island-lighthouse-and-museum
                            - img [ref=e309]
                            - generic [ref=e327]:
                              - heading "Tybee Island Lighthouse and Museum" [level=3] [ref=e328]
                              - paragraph [ref=e329]: Tybee Island, GA
                              - list [ref=e330]:
                                - listitem [ref=e331]:
                                  - generic [ref=e332]:
                                    - img [ref=e333]
                                    - generic [ref=e336]: "4.5"
                          - button [ref=e337] [cursor=pointer]:
                            - img [ref=e339]
                          - button [ref=e341] [cursor=pointer]:
                            - img [ref=e343]
                        - generic [ref=e345]:
                          - link "Motown Museum Detroit, MI 4.5" [ref=e346] [cursor=pointer]:
                            - /url: /us/detroit-mi/attractions/motown-museum-detroit-mi--1
                            - img [ref=e349]
                            - generic [ref=e382]:
                              - heading "Motown Museum" [level=3] [ref=e383]
                              - paragraph [ref=e384]: Detroit, MI
                              - list [ref=e385]:
                                - listitem [ref=e386]:
                                  - generic [ref=e387]:
                                    - img [ref=e388]
                                    - generic [ref=e391]: "4.5"
                          - button [ref=e392] [cursor=pointer]:
                            - img [ref=e394]
                          - button [ref=e396] [cursor=pointer]:
                            - img [ref=e398]
                        - generic [ref=e400]:
                          - link "International Rose Test Garden Portland, OR 4.5" [ref=e401] [cursor=pointer]:
                            - /url: /us/portland-or/nature/international-rose-test-garden
                            - img [ref=e404]
                            - generic [ref=e516]:
                              - heading "International Rose Test Garden" [level=3] [ref=e517]
                              - paragraph [ref=e518]: Portland, OR
                              - list [ref=e519]:
                                - listitem [ref=e520]:
                                  - generic [ref=e521]:
                                    - img [ref=e522]
                                    - generic [ref=e525]: "4.5"
                          - button [ref=e526] [cursor=pointer]:
                            - img [ref=e528]
                          - button [ref=e530] [cursor=pointer]:
                            - img [ref=e532]
                        - generic [ref=e534]:
                          - link "Griffith Observatory Los Angeles, CA 4.5" [ref=e535] [cursor=pointer]:
                            - /url: /us/los-angeles-ca/attractions/griffith-observatory-los-angeles-ca
                            - img [ref=e538]
                            - generic [ref=e575]:
                              - heading "Griffith Observatory" [level=3] [ref=e576]
                              - paragraph [ref=e577]: Los Angeles, CA
                              - list [ref=e578]:
                                - listitem [ref=e579]:
                                  - generic [ref=e580]:
                                    - img [ref=e581]
                                    - generic [ref=e584]: "4.5"
                          - button [ref=e585] [cursor=pointer]:
                            - img [ref=e587]
                          - button [ref=e589] [cursor=pointer]:
                            - img [ref=e591]
                        - generic [ref=e593]:
                          - link "National Museum of American History Washington, DC 4.4" [ref=e594] [cursor=pointer]:
                            - /url: /us/washington-dc/attractions/national-museum-of-american-history
                            - img [ref=e597]
                            - generic [ref=e642]:
                              - heading "National Museum of American History" [level=3] [ref=e643]
                              - paragraph [ref=e644]: Washington, DC
                              - list [ref=e645]:
                                - listitem [ref=e646]:
                                  - generic [ref=e647]:
                                    - img [ref=e648]
                                    - generic [ref=e651]: "4.4"
                          - button [ref=e652] [cursor=pointer]:
                            - img [ref=e654]
                          - button [ref=e656] [cursor=pointer]:
                            - img [ref=e658]
                - button [ref=e660] [cursor=pointer]:
                  - img [ref=e662]
            - generic [ref=e665]:
              - button "Explore" [ref=e666] [cursor=pointer]:
                - img [ref=e667]
                - generic [ref=e669]: Explore
              - button "Itinerary" [ref=e670] [cursor=pointer]:
                - img [ref=e671]
                - generic [ref=e673]: Itinerary
              - button "My trips" [ref=e674] [cursor=pointer]:
                - img [ref=e675]
                - generic [ref=e677]: My trips
              - button "Start Trip" [ref=e678] [cursor=pointer]:
                - img [ref=e679]
                - generic [ref=e681]: Start Trip
      - generic [ref=e683]:
        - link [ref=e684] [cursor=pointer]:
          - /url: https://roadtrippers.com/
          - img [ref=e685]
        - generic [ref=e695]:
          - searchbox "Search and Explore" [ref=e696]
          - button [ref=e697] [cursor=pointer]:
            - img [ref=e699]
        - generic [ref=e701]:
          - list [ref=e703]:
            - listitem [ref=e704]:
              - link "Trip Planner" [ref=e705] [cursor=pointer]:
                - /url: /
            - listitem [ref=e706]:
              - button "Trip Ideas" [ref=e707] [cursor=pointer]:
                - generic [ref=e708]: Trip Ideas
                - img [ref=e709]
            - listitem [ref=e711]:
              - button "For RVers" [ref=e712] [cursor=pointer]:
                - generic [ref=e713]: For RVers
                - img [ref=e714]
            - listitem [ref=e716]:
              - button "Membership" [ref=e717] [cursor=pointer]:
                - generic [ref=e718]: Membership
                - img [ref=e719]
          - link "Log in" [ref=e722] [cursor=pointer]:
            - /url: /login
            - generic [ref=e723]: Log in
  - button "Open support chat" [ref=e724] [cursor=pointer]:
    - img [ref=e725]
  - generic [ref=e732]:
    - generic [ref=e733]:
      - heading "Where are you going?" [level=1] [ref=e734]
      - generic [ref=e735]:
        - generic [ref=e736]:
          - generic [ref=e740]:
            - textbox "Starting point" [ref=e741]: New York
            - generic: Starting point
          - generic [ref=e746]: Save as home address
          - generic [ref=e750]:
            - textbox "Destination" [ref=e751]: Sofia, Bulgaria
            - generic: Destination
        - separator [ref=e752]
        - generic [ref=e753]:
          - generic [ref=e754] [cursor=pointer]:
            - generic [ref=e755]:
              - text: Plan on your own
              - radio "Plan on your own Explore and discover stops by yourself" [checked] [ref=e756]
            - paragraph [ref=e757]: Explore and discover stops by yourself
          - generic [ref=e758] [cursor=pointer]:
            - generic [ref=e759]:
              - generic [ref=e760]:
                - text: Plan with
                - img "Autopilot" [ref=e761]
              - radio "Plan with Autopilot Powered by 42 million real trips" [ref=e765]
            - paragraph [ref=e766]: Powered by 42 million real trips
        - separator [ref=e767]
        - heading "Add dates(Optional)" [level=2] [ref=e768]
        - generic [ref=e769]:
          - group [ref=e770]:
            - generic [ref=e772]:
              - textbox "Start" [ref=e773]
              - generic: Start
          - group [ref=e774]:
            - generic [ref=e776]:
              - textbox "End" [ref=e777]
              - generic: End
      - button "Create trip" [active] [ref=e779] [cursor=pointer]:
        - generic [ref=e780]: Create trip
    - button [ref=e781] [cursor=pointer]:
      - img [ref=e783]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { HomePage } from '../pages/HomePage';
  3  | import { TripPlannerPage } from '../pages/TripPlannerPage';
  4  | import * as fs from 'fs';
  5  | import * as path from 'path';
  6  | 
  7  | test.describe('Roadtrippers Trip Planning Flow', () => {
  8  |   let homePage: HomePage;
  9  |   let tripPlannerPage: TripPlannerPage;
  10 | 
  11 |   test.beforeEach(async ({ page }) => {
  12 |     test.setTimeout(240000);
  13 |     homePage = new HomePage(page);
  14 |     tripPlannerPage = new TripPlannerPage(page);
  15 |     await homePage.navigate();
  16 |     await homePage.acceptCookies();
  17 |     await homePage.removeOverlays();
  18 |   });
  19 | 
  20 |   test.afterEach(async ({ page }, testInfo) => {
  21 |     const video = page.video();
  22 |     if (video) {
  23 |       const videoPath = await video.path();
  24 |       if (testInfo.status !== 'passed') {
  25 |         if (fs.existsSync(videoPath)) {
  26 |           try {
  27 |             fs.unlinkSync(videoPath);
  28 |           } catch (err) {}
  29 |         }
  30 |       } else {
  31 |         const now = new Date();
  32 |         const dateStr = now.toISOString().split('T')[0];
  33 |         const evidenceDir = path.join(process.cwd(), 'evidence', dateStr);
  34 |         
  35 |         if (!fs.existsSync(evidenceDir)) {
  36 |           fs.mkdirSync(evidenceDir, { recursive: true });
  37 |         }
  38 |         
  39 |         const cleanTitle = testInfo.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  40 |         const timestamp = now.getTime();
  41 |         const newPath = path.join(evidenceDir, `${cleanTitle}_${timestamp}.mp4`);
  42 |         
  43 |         await page.context().close();
  44 |         if (fs.existsSync(videoPath)) {
  45 |           fs.renameSync(videoPath, newPath);
  46 |           console.log(`Video saved to: ${newPath}`);
  47 |         }
  48 |       }
  49 |     }
  50 |   });
  51 | 
  52 |   test('Happy Path: Create a new trip from New York to Sofia, Bulgaria', async ({ page }) => {
  53 |     await homePage.clickStartTrip();
  54 |     await tripPlannerPage.setOrigin('New York, NY');
  55 |     await tripPlannerPage.setDestination('Sofia, Bulgaria');
  56 |     await tripPlannerPage.clickCreateTrip();
  57 | 
> 58 |     await expect(page).toHaveURL(/trip_id=|onboarding|itinerary/, { timeout: 60000 });
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  59 |   });
  60 | 
  61 |   test('Edge Case: Create a trip with same origin and destination (Sofia)', async ({ page }) => {
  62 |     await homePage.clickStartTrip();
  63 |     await tripPlannerPage.setOrigin('Sofia, Bulgaria');
  64 |     await tripPlannerPage.setDestination('Sofia, Bulgaria');
  65 |     await tripPlannerPage.clickCreateTrip();
  66 | 
  67 |     await expect(page).toHaveURL(/trip_id=|onboarding|itinerary/, { timeout: 60000 });
  68 |   });
  69 | 
  70 |   test('Negative Scenario: Attempt to create trip with missing destination', async ({ page }) => {
  71 |     await homePage.clickStartTrip();
  72 |     await tripPlannerPage.setOrigin('Sofia, Bulgaria');
  73 |     
  74 |     await page.locator('#destination').click();
  75 |     await page.locator('#destination').fill('');
  76 |     await tripPlannerPage.clickCreateTrip();
  77 | 
  78 |     // Verify we didn't navigate away
  79 |     await expect(page).not.toHaveURL(/trip_id=/, { timeout: 5000 });
  80 |   });
  81 | 
  82 |   test('Functional Case: Add waypoints to a trip', async ({ page }) => {
  83 |     await homePage.clickStartTrip();
  84 |     await tripPlannerPage.setOrigin('Sofia, Bulgaria');
  85 |     await tripPlannerPage.setDestination('Plovdiv, Bulgaria');
  86 |     await tripPlannerPage.clickCreateTrip();
  87 |     
  88 |     await expect(page).toHaveURL(/trip_id=|onboarding|itinerary/, { timeout: 60000 });
  89 |   });
  90 | });
  91 | 
```
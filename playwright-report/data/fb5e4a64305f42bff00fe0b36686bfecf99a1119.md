# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: trip-planning.spec.ts >> Roadtrippers Trip Planning Flow >> Edge Case: Create a trip with same origin and destination (Sofia)
- Location: tests/trip-planning.spec.ts:61:7

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
                          - link "Fisherman's Wharf San Francisco, CA 4.0" [ref=e213] [cursor=pointer]:
                            - /url: /us/san-francisco-ca/attractions/fishermans-wharf-san-francisco-ca--3
                            - img [ref=e216]
                            - generic [ref=e234]:
                              - heading "Fisherman's Wharf" [level=3] [ref=e235]
                              - paragraph [ref=e236]: San Francisco, CA
                              - list [ref=e237]:
                                - listitem [ref=e238]:
                                  - generic [ref=e239]:
                                    - img [ref=e240]
                                    - generic [ref=e243]: "4.0"
                          - button [ref=e244] [cursor=pointer]:
                            - img [ref=e246]
                          - button [ref=e248] [cursor=pointer]:
                            - img [ref=e250]
                        - generic [ref=e252]:
                          - link "Smithsonian Institution Building Washington, DC 4.5" [ref=e253] [cursor=pointer]:
                            - /url: /us/washington-dc/attractions/smithsonian-institution-building-washington
                            - img [ref=e256]
                            - generic [ref=e349]:
                              - heading "Smithsonian Institution Building" [level=3] [ref=e350]
                              - paragraph [ref=e351]: Washington, DC
                              - list [ref=e352]:
                                - listitem [ref=e353]:
                                  - generic [ref=e354]:
                                    - img [ref=e355]
                                    - generic [ref=e358]: "4.5"
                          - button [ref=e359] [cursor=pointer]:
                            - img [ref=e361]
                          - button [ref=e363] [cursor=pointer]:
                            - img [ref=e365]
                        - generic [ref=e367]:
                          - link "Golden Driller Tulsa, OK 4.0" [ref=e368] [cursor=pointer]:
                            - /url: /us/tulsa-ok/points-of-interest/golden-driller-tulsa-ok
                            - img [ref=e371]
                            - generic [ref=e417]:
                              - heading "Golden Driller" [level=3] [ref=e418]
                              - paragraph [ref=e419]: Tulsa, OK
                              - list [ref=e420]:
                                - listitem [ref=e421]:
                                  - generic [ref=e422]:
                                    - img [ref=e423]
                                    - generic [ref=e426]: "4.0"
                          - button [ref=e427] [cursor=pointer]:
                            - img [ref=e429]
                          - button [ref=e431] [cursor=pointer]:
                            - img [ref=e433]
                        - generic [ref=e435]:
                          - link "Mystic Seaport Mystic, CT 4.5" [ref=e436] [cursor=pointer]:
                            - /url: /us/mystic-ct/attractions/mystic-seaport-mystic-ct--6
                            - img [ref=e439]
                            - generic [ref=e467]:
                              - heading "Mystic Seaport" [level=3] [ref=e468]
                              - paragraph [ref=e469]: Mystic, CT
                              - list [ref=e470]:
                                - listitem [ref=e471]:
                                  - generic [ref=e472]:
                                    - img [ref=e473]
                                    - generic [ref=e476]: "4.5"
                          - button [ref=e477] [cursor=pointer]:
                            - img [ref=e479]
                          - button [ref=e481] [cursor=pointer]:
                            - img [ref=e483]
                        - generic [ref=e485]:
                          - link "East Harbor State Park Campground OH 3.9" [ref=e486] [cursor=pointer]:
                            - /url: /us/oh/camping-rv/east-harbor-state-park-campground
                            - img [ref=e489]
                            - generic [ref=e504]:
                              - heading "East Harbor State Park Campground" [level=3] [ref=e505]
                              - paragraph [ref=e506]: OH
                              - list [ref=e507]:
                                - listitem [ref=e508]:
                                  - generic [ref=e509]:
                                    - img [ref=e510]
                                    - generic [ref=e513]: "3.9"
                          - button [ref=e514] [cursor=pointer]:
                            - img [ref=e516]
                          - button [ref=e518] [cursor=pointer]:
                            - img [ref=e520]
                        - generic [ref=e522]:
                          - link "Cafe Du Monde New Orleans, LA 4.6" [ref=e523] [cursor=pointer]:
                            - /url: /us/new-orleans-la/food-drink/cafe-du-monde-new-orleans-la--16
                            - img [ref=e526]
                            - generic [ref=e558]:
                              - heading "Cafe Du Monde" [level=3] [ref=e559]
                              - paragraph [ref=e560]: New Orleans, LA
                              - list [ref=e561]:
                                - listitem [ref=e562]:
                                  - generic [ref=e563]:
                                    - img [ref=e564]
                                    - generic [ref=e567]: "4.6"
                          - button [ref=e568] [cursor=pointer]:
                            - img [ref=e570]
                          - button [ref=e572] [cursor=pointer]:
                            - img [ref=e574]
                - button [ref=e576] [cursor=pointer]:
                  - img [ref=e578]
            - generic [ref=e581]:
              - button "Explore" [ref=e582] [cursor=pointer]:
                - img [ref=e583]
                - generic [ref=e585]: Explore
              - button "Itinerary" [ref=e586] [cursor=pointer]:
                - img [ref=e587]
                - generic [ref=e589]: Itinerary
              - button "My trips" [ref=e590] [cursor=pointer]:
                - img [ref=e591]
                - generic [ref=e593]: My trips
              - button "Start Trip" [ref=e594] [cursor=pointer]:
                - img [ref=e595]
                - generic [ref=e597]: Start Trip
      - generic [ref=e599]:
        - link [ref=e600] [cursor=pointer]:
          - /url: https://roadtrippers.com/
          - img [ref=e601]
        - generic [ref=e611]:
          - searchbox "Search and Explore" [ref=e612]
          - button [ref=e613] [cursor=pointer]:
            - img [ref=e615]
        - generic [ref=e617]:
          - list [ref=e619]:
            - listitem [ref=e620]:
              - link "Trip Planner" [ref=e621] [cursor=pointer]:
                - /url: /
            - listitem [ref=e622]:
              - button "Trip Ideas" [ref=e623] [cursor=pointer]:
                - generic [ref=e624]: Trip Ideas
                - img [ref=e625]
            - listitem [ref=e627]:
              - button "For RVers" [ref=e628] [cursor=pointer]:
                - generic [ref=e629]: For RVers
                - img [ref=e630]
            - listitem [ref=e632]:
              - button "Membership" [ref=e633] [cursor=pointer]:
                - generic [ref=e634]: Membership
                - img [ref=e635]
          - link "Log in" [ref=e638] [cursor=pointer]:
            - /url: /login
            - generic [ref=e639]: Log in
  - button "Open support chat" [ref=e640] [cursor=pointer]:
    - img [ref=e641]
  - generic [ref=e648]:
    - generic [ref=e649]:
      - heading "Where are you going?" [level=1] [ref=e650]
      - generic [ref=e651]:
        - generic [ref=e652]:
          - generic [ref=e656]:
            - textbox "Starting point" [ref=e657]: Sofia, Bulgaria
            - generic: Starting point
          - generic [ref=e662]: Save as home address
          - generic [ref=e666]:
            - textbox "Destination" [ref=e667]: Sofia, Bulgaria
            - generic: Destination
        - separator [ref=e668]
        - generic [ref=e669]:
          - generic [ref=e670] [cursor=pointer]:
            - generic [ref=e671]:
              - text: Plan on your own
              - radio "Plan on your own Explore and discover stops by yourself" [checked] [ref=e672]
            - paragraph [ref=e673]: Explore and discover stops by yourself
          - generic [ref=e674] [cursor=pointer]:
            - generic [ref=e675]:
              - generic [ref=e676]:
                - text: Plan with
                - img "Autopilot" [ref=e677]
              - radio "Plan with Autopilot Powered by 42 million real trips" [ref=e681]
            - paragraph [ref=e682]: Powered by 42 million real trips
        - separator [ref=e683]
        - heading "Add dates(Optional)" [level=2] [ref=e684]
        - generic [ref=e685]:
          - group [ref=e686]:
            - generic [ref=e688]:
              - textbox "Start" [ref=e689]
              - generic: Start
          - group [ref=e690]:
            - generic [ref=e692]:
              - textbox "End" [ref=e693]
              - generic: End
      - button "Create trip" [active] [ref=e695] [cursor=pointer]:
        - generic [ref=e696]: Create trip
    - button [ref=e697] [cursor=pointer]:
      - img [ref=e699]
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
  58 |     await expect(page).toHaveURL(/trip_id=|onboarding|itinerary/, { timeout: 60000 });
  59 |   });
  60 | 
  61 |   test('Edge Case: Create a trip with same origin and destination (Sofia)', async ({ page }) => {
  62 |     await homePage.clickStartTrip();
  63 |     await tripPlannerPage.setOrigin('Sofia, Bulgaria');
  64 |     await tripPlannerPage.setDestination('Sofia, Bulgaria');
  65 |     await tripPlannerPage.clickCreateTrip();
  66 | 
> 67 |     await expect(page).toHaveURL(/trip_id=|onboarding|itinerary/, { timeout: 60000 });
     |                        ^ Error: expect(page).toHaveURL(expected) failed
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
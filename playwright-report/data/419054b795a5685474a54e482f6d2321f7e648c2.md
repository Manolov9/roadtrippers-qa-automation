# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: trip-planning.spec.ts >> Roadtrippers Trip Planning Flow >> Functional Case: Add waypoints to a trip
- Location: tests/trip-planning.spec.ts:82:7

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
                - generic [ref=e17]:
                  - iframe [ref=e21]:
                    - generic [ref=f171e3]:
                      - link [ref=f171e4] [cursor=pointer]:
                        - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CvLoebWj6afDnH_rUxtYP-5SRkA6d-8fVhgH9g6TG5Q_hj6je9y8QASC8pqWaAWDJrpmN7KSAEKAB5pKnxwPIAQLgAgCoAwHIAwiqBOsCT9A3RSSnWJI8mVFwngRCGL_rVurITJu3tLZfzGY5EzEUCwMfKU5bXhLCoUnv06aK1yqpfS72FacM13uDimU2t8Ra2cr2guvFIzbjlqDnFR_cX5VrwfOV3m89O6BTxu2_3nkbV6BCTqzqNAIOg6MC-BptcZZHImFbkGNI4oZjvVq5Q1sjzPyi6gHZ9OeOfHelPH35TRMKE6JbSexDKZvZn8vKo5dMZBHFkrqIVll4MtSTSRhaNhuhr7HbwPE842kQf487iSMG_F60FjGA03CqAoz0EMFbFUwI9cHIC-oiH5ZGXD6AsdRrUFvnt-Qs0xtviwGP9W6HKgXnnu22E8g7cBjNEQnPpZg1SWb9iGXkfU_QfYxeLwhpo6IgVzir05xPpw8-IJgydYp_g6bHDTp3NgbroOjz_qgu_uw-uK93sZ0UgxVpOWPrCWnc3q1UnVxS0ERDqu0GRtRQ21lj2f3g-giyBwQUSBfvnTz9wASV_vPr9QPgBAGIBdCHz78-oAYCgAeC7dg4qAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCJDhgEAQARidATIIi4OAgICAgAo6D4BAgMCAgICAqIACqIOQEEi9_cE6WPziwt-So5QDsQlg6CR0SwaUbYAKA5gLAcgLAaIMA5ABAaoNAlVTyA0B4g0TCJGhw9-So5QDFXqq0QQde0oE4uoNEwi8m8TfkqOUAxV6qtEEHXtKBOLwDQKIDv___________wHYEwzQFQGYFgHKFgIKAPgWAYAXAbIXEBgBKgo3MDE0NTIzMzQ5UAa6FwI4AaoYFwkAAAAAYDQKQRIKNzAxNDUyMzM0ORgBshgFGAIiAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIsNLE35KjlAMVeqrRBB17SgTiEAEYASAAEgKcaPD_BwE&num=1&cid=CAQS0AEABaugfYYQho7YqMB6Up7UkeS7U9b56s8HPDTLFY1S4nfUJ8nwYOjQ95JvNSwO2hy-Fs-ENWLTPyxni4CroFw8Qar_YREM1MSe87q6KXr-5mq193A1d3fDGsGW9XzNdFLXgZdkzj9MZcoZXbt-IeU64hluEab92VWmAYC96InBAhtUYLc_6Vz-rlxNEZJdsMfu19P9DWPN61u1OpnN1DAFgfEVmposcUdH-e_ho7PGHC7Qqi_jcEtVdOBi8cOBa41VuKXsonn6DeNbhMTW7P3PGAE&sig=AOD64_0qZGJQreiykBZTxSjlYGDzyaWLdg&client=ca-pub-9666242443471576&rf=5&nx=CLICK_X&ny=CLICK_Y&uap=UACH(platform)&uapv=UACH(platformVersion)&uaa=UACH(architecture)&uam=UACH(model)&uafv=UACH(uaFullVersion)&uab=UACH(bitness)&uaw=UACH(wow64)&uafvl=UACH(fullVersionList)&nb=2&adurl=https://capitaloneshopping.com/join-capital-one-shopping%3Futm_source%3DMeerkat%26utm_campaign%3D134712459029%26utm_term%3D591186616738%26utm_place%3Dmaps.roadtrippers.com%26gad_source%3D5%26gad_campaignid%3D16776414160%26gclid%3DEAIaIQobChMIsNLE35KjlAMVeqrRBB17SgTiEAEYASAAEgKcaPD_BwE
                      - generic [ref=f171e6]:
                        - link [ref=f171e8] [cursor=pointer]:
                          - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXhJPLL0_qxxZVewqdhWHWjikz15Ac5r-2EgunBiSb3VYjddujtP0KSku9kegGPg11sGJrHmPoycPBDaohejIp0WarQJ-UGkSLAIyGOcDqr1ZXo2trH9qbkhB_P5oxwv0ASGU7yrhNW_vSXwFgPGe0jDtz2W0LTDSupP1sl1NzhMB_Dg0MW7-ExC1XffPJ2fsBz5uwQ5Fw4lq-SGRD7u5f2QPKxIi9FnYpaUtEBAREJQ9Mb_w9cyzlVZ1ZgrWiKxBvlV_4nA5C69lm_xWt-H4oD53iZjRnH-969ORuVrnTaMmp5O3UliZYalIEkGzmtBTp2poVFysiE8zaXDGNk_7QBbi8G22f5a-0JgMXLUDO6oMS7mrpcDWSaugouaLfFF7L0a7PjQNk8wOv5dC4aBtb7qmKTiuzQoPP8JLFN5k2bcuHhyuUEhmcE_FbnO8QlZAB_jUAy6sd9VRAi-6l7vJk02QxqpZlqqOdgdh18uuTu1osJjvMr3DNXEyuqup3QMpI3J4JOaX-IKbX3NVZW-YggwtgTGqmTR4zUCd8RpgEr_ebfk-tFYK2fAm3KqU3izXWi6ovywkYGhelitkAVLUqTkPhSU6VNDEGGdWVCoo2fnob0VtLZtc40epmsEZluKY60DFuMwjV5gpNc-Ck6Idr98xA8p5GTg7okP4nwoNABOmGzZx69QA4aliwydm8dGDuK5mRM7FPsiPeMo6-dcLlCPH8SwrTjhvj-iVW32E06EB4XY39hLntmdxAwqmSAi5dMZyLow-tQRCf1XhCIH4VV-uIeDaOvVHEx1isV1-bb0L55ts1PgilAaVnIqCQqVoB6hDuSNYSE6zOpsUtfxMpFaX1Iur_Sq_tKmd5P7tKmo8JNrO1S-tCEbbneTfpSYIvrNk06jIGIJAqiiDCM9Ypp3uaJodckGVmz8os_y694z8dvGwhFYM7V5wfqd3fL7Abn-xPZ5-_VOnM8t5QuHXcBTPe9RZnMxWojWC7eELV7hqWT6yWkjZNH4ew70uKnyrl6zR2zdIZ_BxDp6HlkgXiqZB1MqhZ-q9XmUR3ztaRehJ1XBcYN_eTBd7j3PuHNoShnYj8KsVSCOqNZnfYSLIS10H12XbIpLpEg8FnujRGRTmVyO3cSEyJUPdHiVuyCKNeEkq1ZTr3n9GvGXcNqdtgJjYssWom4a1MWBdqM9yZX8IaenCn2gF56HUu8yrb77p_kELisCqGpRuYmUA7m17mxjSa9xM1NSM0M8Q_dDMASML3rRGHDQgH5T3ALu9G92ux4NL5cy3B9HlhbbEuqMrLYUBe-0a_GwMyrSxYQT4anXWxHJiBN_ctEYi2OsPi2k4JcmUoZkVBM1P27s7uug6i8aAPOhhVV8IurLZNFPphI-sYYi8cWD8UZ5aP1LQtr3rmcKNtkVX5NITfObuYEtqoMGv-30J5Zip1J6Wvb7-7HXnZtIhg9tZUPpED6UNMwdDEsPswhDytgK3nqLqZa5kz9joPqrLGq-cjhb3WgKkeKJq-gk0BN5pNSep3ORfsY-cRwmgZ2ittUIbN4rP8KOy5dm_mOgsGYjPAEED8YYAAG3X3CjvpmDe7BKSCP4heU_spy1zkgGXMiXfzo8U_XFIFBuBHsbtPWrsi83W1JlsZiwrT9wVRKAOfftgV2YRrEYSWfqnhny-pCZdfW0D_4jnE-O69LzYmjGTxKJQ-Hyyz7eXJwzHDUuJYfxA_NkYJbcrz0Ic9NS2btz3RgeKLK_85f37CXD5PRUPKz-uM8GZQ9-MtNCSwPd8Liy81hhO90QR1zKNxZMxsSf6sF5pDrDwke6CoP8LAbfdnu1ZQrXLyYsr9nD4_vpP7wc-AEuUGXxUaFq1-hNIy6wIomqHjNWmK-_JMu0Kqib05yp16QFnp0LJaMt5o3NDqmfGPwcUHY7IT5uafZQ_HUjddcTTyMeqJxY3wLTnW9wdwQF9xCayGRS2E_t0Z-jEhZUUD9Gdy47QGQLoLRI6-eQvPrUaENqyeeuPjN6KP6NPYmlkPhi10uoA6Xiln_vxpRw8aCvrXv39t3FP7xzoc8mGIBL8kzLuRKL6dG-B0t9HgMOYHm9ru6zHNiuZp2exA_ZxV9sfal-cQ0eB-VrxbKOQbYaabuyhImJy4PiBm0aoS_mbJ9JOPk1jNjNLIH2NZRft5w1mufvmYAClPtqE3BIHP-qnCWdPSOnE_SQTOImt-5F2z2sNRT7EJBHqD-_zlhbLlwDBX8oy4xxlvdu-oN_lGqMOB817GlmdhJoBINatBJzcQayqUy4yG8E4OXv5X0lF2sL_pu6Ch67KZ5Wk0In-dBm7X7xdzxwI5RAFKkI5FLA65VSTlAwxv7zgtUQ5_NswysuEZRj3s8sQdinaeIzVIpQUnjkVMcZfJVSWWzBTkTJ9gUZxYF37CK045Y8vWDBEBUNMajOecKJGBlhUoj1baNtXY0fU0fz6wbuBoidWMJ3uOES6hDj_7rZTvXJU36bhO8067O6YiJLsTtl2ayaeK_32o4QWo2rYC4FepbxT_SS3evQOEEG6SC8iNKHJJhcDtOMSzKnxSHDu7fbSCndYjTiC-mGXT6DHHRbZD7ve-eXe2GpD1JPpso1Vm6DrIK9AL_oSG1uPM0oFxMwIcpXkeEZXv6ObiyTR82wzR1lH2CbfUuhxmyR0w5KgFW5jV4NuBfJPIIQIY6FR3Be-60YMUc3i_JKVzkIwy1JoFZ7zg&opi=122715837
                          - img [ref=f171e10]
                        - link [ref=f171e12] [cursor=pointer]:
                          - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXhJPLL0_qxxZVewqdhWHWjikz15Ac5r-2EgunBiSb3VYjddujtP0KSku9kegGPg11sGJrHmPoycPBDaohejIp0WarQJ-UGkSLAIyGOcDqr1ZXo2trH9qbkhB_P5oxwv0ASGU7yrhNW_vSXwFgPGe0jDtz2W0LTDSupP1sl1NzhMB_Dg0MW7-ExC1XffPJ2fsBz5uwQ5Fw4lq-SGRD7u5f2QPKxIi9FnYpaUtEBAREJQ9Mb_w9cyzlVZ1ZgrWiKxBvlV_4nA5C69lm_xWt-H4oD53iZjRnH-969ORuVrnTaMmp5O3UliZYalIEkGzmtBTp2poVFysiE8zaXDGNk_7QBbi8G22f5a-0JgMXLUDO6oMS7mrpcDWSaugouaLfFF7L0a7PjQNk8wOv5dC4aBtb7qmKTiuzQoPP8JLFN5k2bcuHhyuUEhmcE_FbnO8QlZAB_jUAy6sd9VRAi-6l7vJk02QxqpZlqqOdgdh18uuTu1osJjvMr3DNXEyuqup3QMpI3J4JOaX-IKbX3NVZW-YggwtgTGqmTR4zUCd8RpgEr_ebfk-tFYK2fAm3KqU3izXWi6ovywkYGhelitkAVLUqTkPhSU6VNDEGGdWVCoo2fnob0VtLZtc40epmsEZluKY60DFuMwjV5gpNc-Ck6Idr98xA8p5GTg7okP4nwoNABOmGzZx69QA4aliwydm8dGDuK5mRM7FPsiPeMo6-dcLlCPH8SwrTjhvj-iVW32E06EB4XY39hLntmdxAwqmSAi5dMZyLow-tQRCf1XhCIH4VV-uIeDaOvVHEx1isV1-bb0L55ts1PgilAaVnIqCQqVoB6hDuSNYSE6zOpsUtfxMpFaX1Iur_Sq_tKmd5P7tKmo8JNrO1S-tCEbbneTfpSYIvrNk06jIGIJAqiiDCM9Ypp3uaJodckGVmz8os_y694z8dvGwhFYM7V5wfqd3fL7Abn-xPZ5-_VOnM8t5QuHXcBTPe9RZnMxWojWC7eELV7hqWT6yWkjZNH4ew70uKnyrl6zR2zdIZ_BxDp6HlkgXiqZB1MqhZ-q9XmUR3ztaRehJ1XBcYN_eTBd7j3PuHNoShnYj8KsVSCOqNZnfYSLIS10H12XbIpLpEg8FnujRGRTmVyO3cSEyJUPdHiVuyCKNeEkq1ZTr3n9GvGXcNqdtgJjYssWom4a1MWBdqM9yZX8IaenCn2gF56HUu8yrb77p_kELisCqGpRuYmUA7m17mxjSa9xM1NSM0M8Q_dDMASML3rRGHDQgH5T3ALu9G92ux4NL5cy3B9HlhbbEuqMrLYUBe-0a_GwMyrSxYQT4anXWxHJiBN_ctEYi2OsPi2k4JcmUoZkVBM1P27s7uug6i8aAPOhhVV8IurLZNFPphI-sYYi8cWD8UZ5aP1LQtr3rmcKNtkVX5NITfObuYEtqoMGv-30J5Zip1J6Wvb7-7HXnZtIhg9tZUPpED6UNMwdDEsPswhDytgK3nqLqZa5kz9joPqrLGq-cjhb3WgKkeKJq-gk0BN5pNSep3ORfsY-cRwmgZ2ittUIbN4rP8KOy5dm_mOgsGYjPAEED8YYAAG3X3CjvpmDe7BKSCP4heU_spy1zkgGXMiXfzo8U_XFIFBuBHsbtPWrsi83W1JlsZiwrT9wVRKAOfftgV2YRrEYSWfqnhny-pCZdfW0D_4jnE-O69LzYmjGTxKJQ-Hyyz7eXJwzHDUuJYfxA_NkYJbcrz0Ic9NS2btz3RgeKLK_85f37CXD5PRUPKz-uM8GZQ9-MtNCSwPd8Liy81hhO90QR1zKNxZMxsSf6sF5pDrDwke6CoP8LAbfdnu1ZQrXLyYsr9nD4_vpP7wc-AEuUGXxUaFq1-hNIy6wIomqHjNWmK-_JMu0Kqib05yp16QFnp0LJaMt5o3NDqmfGPwcUHY7IT5uafZQ_HUjddcTTyMeqJxY3wLTnW9wdwQF9xCayGRS2E_t0Z-jEhZUUD9Gdy47QGQLoLRI6-eQvPrUaENqyeeuPjN6KP6NPYmlkPhi10uoA6Xiln_vxpRw8aCvrXv39t3FP7xzoc8mGIBL8kzLuRKL6dG-B0t9HgMOYHm9ru6zHNiuZp2exA_ZxV9sfal-cQ0eB-VrxbKOQbYaabuyhImJy4PiBm0aoS_mbJ9JOPk1jNjNLIH2NZRft5w1mufvmYAClPtqE3BIHP-qnCWdPSOnE_SQTOImt-5F2z2sNRT7EJBHqD-_zlhbLlwDBX8oy4xxlvdu-oN_lGqMOB817GlmdhJoBINatBJzcQayqUy4yG8E4OXv5X0lF2sL_pu6Ch67KZ5Wk0In-dBm7X7xdzxwI5RAFKkI5FLA65VSTlAwxv7zgtUQ5_NswysuEZRj3s8sQdinaeIzVIpQUnjkVMcZfJVSWWzBTkTJ9gUZxYF37CK045Y8vWDBEBUNMajOecKJGBlhUoj1baNtXY0fU0fz6wbuBoidWMJ3uOES6hDj_7rZTvXJU36bhO8067O6YiJLsTtl2ayaeK_32o4QWo2rYC4FepbxT_SS3evQOEEG6SC8iNKHJJhcDtOMSzKnxSHDu7fbSCndYjTiC-mGXT6DHHRbZD7ve-eXe2GpD1JPpso1Vm6DrIK9AL_oSG1uPM0oFxMwIcpXkeEZXv6ObiyTR82wzR1lH2CbfUuhxmyR0w5KgFW5jV4NuBfJPIIQIY6FR3Be-60YMUc3i_JKVzkIwy1JoFZ7zg&opi=122715837
                          - img [ref=f171e14]
                      - img [ref=f171e17] [cursor=pointer]
                      - generic [ref=f171e28]:
                        - img [ref=f171e31]
                        - generic [ref=f171e34]:
                          - text: Ads by
                          - img [ref=f171e35]
                        - generic [ref=f171e38]:
                          - generic [ref=f171e41] [cursor=pointer]: Send feedback
                          - link [ref=f171e43] [cursor=pointer]:
                            - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXhJPLL0_qxxZVewqdhWHWjikz15Ac5r-2EgunBiSb3VYjddujtP0KSku9kegGPg11sGJrHmPoycPBDaohejIp0WarQJ-UGkSLAIyGOcDqr1ZXo2trH9qbkhB_P5oxwv0ASGU7yrhNW_vSXwFgPGe0jDtz2W0LTDSupP1sl1NzhMB_Dg0MW7-ExC1XffPJ2fsBz5uwQ5Fw4lq-SGRD7u5f2QPKxIi9FnYpaUtEBAREJQ9Mb_w9cyzlVZ1ZgrWiKxBvlV_4nA5C69lm_xWt-H4oD53iZjRnH-969ORuVrnTaMmp5O3UliZYalIEkGzmtBTp2poVFysiE8zaXDGNk_7QBbi8G22f5a-0JgMXLUDO6oMS7mrpcDWSaugouaLfFF7L0a7PjQNk8wOv5dC4aBtb7qmKTiuzQoPP8JLFN5k2bcuHhyuUEhmcE_FbnO8QlZAB_jUAy6sd9VRAi-6l7vJk02QxqpZlqqOdgdh18uuTu1osJjvMr3DNXEyuqup3QMpI3J4JOaX-IKbX3NVZW-YggwtgTGqmTR4zUCd8RpgEr_ebfk-tFYK2fAm3KqU3izXWi6ovywkYGhelitkAVLUqTkPhSU6VNDEGGdWVCoo2fnob0VtLZtc40epmsEZluKY60DFuMwjV5gpNc-Ck6Idr98xA8p5GTg7okP4nwoNABOmGzZx69QA4aliwydm8dGDuK5mRM7FPsiPeMo6-dcLlCPH8SwrTjhvj-iVW32E06EB4XY39hLntmdxAwqmSAi5dMZyLow-tQRCf1XhCIH4VV-uIeDaOvVHEx1isV1-bb0L55ts1PgilAaVnIqCQqVoB6hDuSNYSE6zOpsUtfxMpFaX1Iur_Sq_tKmd5P7tKmo8JNrO1S-tCEbbneTfpSYIvrNk06jIGIJAqiiDCM9Ypp3uaJodckGVmz8os_y694z8dvGwhFYM7V5wfqd3fL7Abn-xPZ5-_VOnM8t5QuHXcBTPe9RZnMxWojWC7eELV7hqWT6yWkjZNH4ew70uKnyrl6zR2zdIZ_BxDp6HlkgXiqZB1MqhZ-q9XmUR3ztaRehJ1XBcYN_eTBd7j3PuHNoShnYj8KsVSCOqNZnfYSLIS10H12XbIpLpEg8FnujRGRTmVyO3cSEyJUPdHiVuyCKNeEkq1ZTr3n9GvGXcNqdtgJjYssWom4a1MWBdqM9yZX8IaenCn2gF56HUu8yrb77p_kELisCqGpRuYmUA7m17mxjSa9xM1NSM0M8Q_dDMASML3rRGHDQgH5T3ALu9G92ux4NL5cy3B9HlhbbEuqMrLYUBe-0a_GwMyrSxYQT4anXWxHJiBN_ctEYi2OsPi2k4JcmUoZkVBM1P27s7uug6i8aAPOhhVV8IurLZNFPphI-sYYi8cWD8UZ5aP1LQtr3rmcKNtkVX5NITfObuYEtqoMGv-30J5Zip1J6Wvb7-7HXnZtIhg9tZUPpED6UNMwdDEsPswhDytgK3nqLqZa5kz9joPqrLGq-cjhb3WgKkeKJq-gk0BN5pNSep3ORfsY-cRwmgZ2ittUIbN4rP8KOy5dm_mOgsGYjPAEED8YYAAG3X3CjvpmDe7BKSCP4heU_spy1zkgGXMiXfzo8U_XFIFBuBHsbtPWrsi83W1JlsZiwrT9wVRKAOfftgV2YRrEYSWfqnhny-pCZdfW0D_4jnE-O69LzYmjGTxKJQ-Hyyz7eXJwzHDUuJYfxA_NkYJbcrz0Ic9NS2btz3RgeKLK_85f37CXD5PRUPKz-uM8GZQ9-MtNCSwPd8Liy81hhO90QR1zKNxZMxsSf6sF5pDrDwke6CoP8LAbfdnu1ZQrXLyYsr9nD4_vpP7wc-AEuUGXxUaFq1-hNIy6wIomqHjNWmK-_JMu0Kqib05yp16QFnp0LJaMt5o3NDqmfGPwcUHY7IT5uafZQ_HUjddcTTyMeqJxY3wLTnW9wdwQF9xCayGRS2E_t0Z-jEhZUUD9Gdy47QGQLoLRI6-eQvPrUaENqyeeuPjN6KP6NPYmlkPhi10uoA6Xiln_vxpRw8aCvrXv39t3FP7xzoc8mGIBL8kzLuRKL6dG-B0t9HgMOYHm9ru6zHNiuZp2exA_ZxV9sfal-cQ0eB-VrxbKOQbYaabuyhImJy4PiBm0aoS_mbJ9JOPk1jNjNLIH2NZRft5w1mufvmYAClPtqE3BIHP-qnCWdPSOnE_SQTOImt-5F2z2sNRT7EJBHqD-_zlhbLlwDBX8oy4xxlvdu-oN_lGqMOB817GlmdhJoBINatBJzcQayqUy4yG8E4OXv5X0lF2sL_pu6Ch67KZ5Wk0In-dBm7X7xdzxwI5RAFKkI5FLA65VSTlAwxv7zgtUQ5_NswysuEZRj3s8sQdinaeIzVIpQUnjkVMcZfJVSWWzBTkTJ9gUZxYF37CK045Y8vWDBEBUNMajOecKJGBlhUoj1baNtXY0fU0fz6wbuBoidWMJ3uOES6hDj_7rZTvXJU36bhO8067O6YiJLsTtl2ayaeK_32o4QWo2rYC4FepbxT_SS3evQOEEG6SC8iNKHJJhcDtOMSzKnxSHDu7fbSCndYjTiC-mGXT6DHHRbZD7ve-eXe2GpD1JPpso1Vm6DrIK9AL_oSG1uPM0oFxMwIcpXkeEZXv6ObiyTR82wzR1lH2CbfUuhxmyR0w5KgFW5jV4NuBfJPIIQIY6FR3Be-60YMUc3i_JKVzkIwy1JoFZ7zg&opi=122715837
                            - generic [ref=f171e44]:
                              - text: Why this ad?
                              - img [ref=f171e45]
                      - generic [ref=f171e48]:
                        - generic [ref=f171e51] [cursor=pointer]: Ad was inappropriate
                        - generic [ref=f171e54] [cursor=pointer]: Ad covered content
                        - generic [ref=f171e57] [cursor=pointer]: Not interested in this ad
                        - generic [ref=f171e60] [cursor=pointer]: Seen this ad multiple times
                      - generic [ref=f171e66]: Thanks. Feedback improves Google ads
                      - generic [ref=f171e72]:
                        - text: Ad closed by
                        - img [ref=f171e73]
                  - button "Remove ads" [ref=e23] [cursor=pointer]
                - generic:
                  - button [ref=e25] [cursor=pointer]:
                    - img [ref=e27]
                  - button [ref=e29] [cursor=pointer]:
                    - img [ref=e31]
                  - generic [ref=e33]:
                    - button [ref=e34] [cursor=pointer]:
                      - img [ref=e36]
                    - button [ref=e38] [cursor=pointer]:
                      - img [ref=e40]
                - generic [ref=e44]:
                  - banner [ref=e45]:
                    - heading "Explore" [level=2] [ref=e46]
                  - generic [ref=e47]:
                    - button "Start planning your next road trip today" [ref=e49] [cursor=pointer]:
                      - paragraph [ref=e51]: Start planning your next road trip today
                      - img [ref=e52]
                    - generic [ref=e54]:
                      - generic [ref=e55]:
                        - heading "Nearby guides for you" [level=2] [ref=e57]
                        - paragraph [ref=e58]:
                          - link "See all" [ref=e59] [cursor=pointer]:
                            - /url: /trips
                      - generic [ref=e60]:
                        - generic [ref=e62]:
                          - 'link "Gone But Not Forgotten: Former National Parks Gone But Not Forgotten: Former National Parks" [ref=e64] [cursor=pointer]':
                            - /url: /trips/14251975
                            - 'img "Gone But Not Forgotten: Former National Parks" [ref=e66]'
                            - 'heading "Gone But Not Forgotten: Former National Parks" [level=3] [ref=e67]':
                              - generic [ref=e68]: "Gone But Not Forgotten: Former National Parks"
                          - 'link "Canyons, caves, and abandoned Cadillacs: Southwest road trip Canyons, caves, and abandoned Cadillacs: Southwest road trip 1,847 mi" [ref=e70] [cursor=pointer]':
                            - /url: /trips/15631993
                            - 'img "Canyons, caves, and abandoned Cadillacs: Southwest road trip" [ref=e72]'
                            - 'heading "Canyons, caves, and abandoned Cadillacs: Southwest road trip" [level=3] [ref=e73]':
                              - generic [ref=e74]: "Canyons, caves, and abandoned Cadillacs: Southwest road trip"
                            - paragraph [ref=e75]: 1,847 mi
                          - link "The top things to do on an I-40 road trip The top things to do on an I-40 road trip 2,851 mi" [ref=e77] [cursor=pointer]:
                            - /url: /trips/14685149
                            - img "The top things to do on an I-40 road trip" [ref=e79]
                            - heading "The top things to do on an I-40 road trip" [level=3] [ref=e80]:
                              - generic [ref=e81]: The top things to do on an I-40 road trip
                            - paragraph [ref=e82]: 2,851 mi
                          - 'link "Ancient Mysteries: The 6 Coolest Indian Burial Mounds Ancient Mysteries: The 6 Coolest Indian Burial Mounds" [ref=e84] [cursor=pointer]':
                            - /url: /trips/15031463
                            - 'img "Ancient Mysteries: The 6 Coolest Indian Burial Mounds" [ref=e86]'
                            - 'heading "Ancient Mysteries: The 6 Coolest Indian Burial Mounds" [level=3] [ref=e87]':
                              - generic [ref=e88]: "Ancient Mysteries: The 6 Coolest Indian Burial Mounds"
                          - link "The top things to do on a Route 66 road trip The top things to do on a Route 66 road trip 2,316 mi" [ref=e90] [cursor=pointer]:
                            - /url: /trips/10296177
                            - img "The top things to do on a Route 66 road trip" [ref=e92]
                            - heading "The top things to do on a Route 66 road trip" [level=3] [ref=e93]:
                              - generic [ref=e94]: The top things to do on a Route 66 road trip
                            - paragraph [ref=e95]: 2,316 mi
                          - link "Meet America's most enchanting (and hidden) natural escape Meet America's most enchanting (and hidden) natural escape" [ref=e97] [cursor=pointer]:
                            - /url: /trips/17306041
                            - img "Meet America's most enchanting (and hidden) natural escape" [ref=e99]
                            - heading "Meet America's most enchanting (and hidden) natural escape" [level=3] [ref=e100]:
                              - generic [ref=e101]: Meet America's most enchanting (and hidden) natural escape
                          - link "Journey through Texas and Oklahoma to Route 66's midpoint Journey through Texas and Oklahoma to Route 66's midpoint 487 mi" [ref=e103] [cursor=pointer]:
                            - /url: /trips/24974955
                            - img "Journey through Texas and Oklahoma to Route 66's midpoint" [ref=e105]
                            - heading "Journey through Texas and Oklahoma to Route 66's midpoint" [level=3] [ref=e106]:
                              - generic [ref=e107]: Journey through Texas and Oklahoma to Route 66's midpoint
                            - paragraph [ref=e108]: 487 mi
                          - link "These are the best offbeat hidden gems in southeast Oklahoma These are the best offbeat hidden gems in southeast Oklahoma 323 mi" [ref=e110] [cursor=pointer]:
                            - /url: /trips/16216418
                            - img "These are the best offbeat hidden gems in southeast Oklahoma" [ref=e112]
                            - heading "These are the best offbeat hidden gems in southeast Oklahoma" [level=3] [ref=e113]:
                              - generic [ref=e114]: These are the best offbeat hidden gems in southeast Oklahoma
                            - paragraph [ref=e115]: 323 mi
                          - 'link "Need for Speed: A cross-country speedpark-fueled road trip Need for Speed: A cross-country speedpark-fueled road trip 2,741 mi" [ref=e117] [cursor=pointer]':
                            - /url: /trips/14352869
                            - 'img "Need for Speed: A cross-country speedpark-fueled road trip" [ref=e119]'
                            - 'heading "Need for Speed: A cross-country speedpark-fueled road trip" [level=3] [ref=e120]':
                              - generic [ref=e121]: "Need for Speed: A cross-country speedpark-fueled road trip"
                            - paragraph [ref=e122]: 2,741 mi
                          - 'link "Welcome to Choctaw Country: The heartland of enchantment Welcome to Choctaw Country: The heartland of enchantment 193 mi" [ref=e124] [cursor=pointer]':
                            - /url: /trips/16216387
                            - 'img "Welcome to Choctaw Country: The heartland of enchantment" [ref=e126]'
                            - 'heading "Welcome to Choctaw Country: The heartland of enchantment" [level=3] [ref=e127]':
                              - generic [ref=e128]: "Welcome to Choctaw Country: The heartland of enchantment"
                            - paragraph [ref=e129]: 193 mi
                          - 'link "America''s most wanted: See the graves of famous outlaws America''s most wanted: See the graves of famous outlaws" [ref=e131] [cursor=pointer]':
                            - /url: /trips/17118673
                            - 'img "America''s most wanted: See the graves of famous outlaws" [ref=e133]'
                            - 'heading "America''s most wanted: See the graves of famous outlaws" [level=3] [ref=e134]':
                              - generic [ref=e135]: "America's most wanted: See the graves of famous outlaws"
                          - link "Experience Endless Natural Beauty Along the Kiamichi Trace Experience Endless Natural Beauty Along the Kiamichi Trace 180 mi" [ref=e137] [cursor=pointer]:
                            - /url: /trips/17292023
                            - img "Experience Endless Natural Beauty Along the Kiamichi Trace" [ref=e139]
                            - heading "Experience Endless Natural Beauty Along the Kiamichi Trace" [level=3] [ref=e140]:
                              - generic [ref=e141]: Experience Endless Natural Beauty Along the Kiamichi Trace
                            - paragraph [ref=e142]: 180 mi
                          - 'link "Hidden Oklahoma: Explore the gems that time almost forgot Hidden Oklahoma: Explore the gems that time almost forgot 147 mi" [ref=e144] [cursor=pointer]':
                            - /url: /trips/17291467
                            - 'img "Hidden Oklahoma: Explore the gems that time almost forgot" [ref=e146]'
                            - 'heading "Hidden Oklahoma: Explore the gems that time almost forgot" [level=3] [ref=e147]':
                              - generic [ref=e148]: "Hidden Oklahoma: Explore the gems that time almost forgot"
                            - paragraph [ref=e149]: 147 mi
                          - link "The Ultimate Oklahoma I-44 Road Trip The Ultimate Oklahoma I-44 Road Trip 322 mi" [ref=e151] [cursor=pointer]:
                            - /url: /trips/15231595
                            - img "The Ultimate Oklahoma I-44 Road Trip" [ref=e153]
                            - heading "The Ultimate Oklahoma I-44 Road Trip" [level=3] [ref=e154]:
                              - generic [ref=e155]: The Ultimate Oklahoma I-44 Road Trip
                            - paragraph [ref=e156]: 322 mi
                          - 'link "Indian Mounds and Outlaw Hideouts: Oklahoma''s Wild History Indian Mounds and Outlaw Hideouts: Oklahoma''s Wild History 201 mi" [ref=e158] [cursor=pointer]':
                            - /url: /trips/17291005
                            - 'img "Indian Mounds and Outlaw Hideouts: Oklahoma''s Wild History" [ref=e160]'
                            - 'heading "Indian Mounds and Outlaw Hideouts: Oklahoma''s Wild History" [level=3] [ref=e161]':
                              - generic [ref=e162]: "Indian Mounds and Outlaw Hideouts: Oklahoma's Wild History"
                            - paragraph [ref=e163]: 201 mi
                          - link "The 12 most important Route 66 road trip photo ops The 12 most important Route 66 road trip photo ops 1,491 mi" [ref=e165] [cursor=pointer]:
                            - /url: /trips/14358996
                            - img "The 12 most important Route 66 road trip photo ops" [ref=e167]
                            - heading "The 12 most important Route 66 road trip photo ops" [level=3] [ref=e168]:
                              - generic [ref=e169]: The 12 most important Route 66 road trip photo ops
                            - paragraph [ref=e170]: 1,491 mi
                          - 'link "Road Trip Down US 83: The Road to Nowhere Road Trip Down US 83: The Road to Nowhere 1,869 mi" [ref=e172] [cursor=pointer]':
                            - /url: /trips/10397616
                            - 'img "Road Trip Down US 83: The Road to Nowhere" [ref=e174]'
                            - 'heading "Road Trip Down US 83: The Road to Nowhere" [level=3] [ref=e175]':
                              - generic [ref=e176]: "Road Trip Down US 83: The Road to Nowhere"
                            - paragraph [ref=e177]: 1,869 mi
                          - link "Offbeat guide to Kansas City, Missouri Offbeat guide to Kansas City, Missouri" [ref=e179] [cursor=pointer]:
                            - /url: /trips/14356652
                            - img "Offbeat guide to Kansas City, Missouri" [ref=e181]
                            - heading "Offbeat guide to Kansas City, Missouri" [level=3] [ref=e182]:
                              - generic [ref=e183]: Offbeat guide to Kansas City, Missouri
                          - 'link "Road trip along the Oregon Trail: A journey through history Road trip along the Oregon Trail: A journey through history 2,022 mi" [ref=e185] [cursor=pointer]':
                            - /url: /trips/14405751
                            - 'img "Road trip along the Oregon Trail: A journey through history" [ref=e187]'
                            - 'heading "Road trip along the Oregon Trail: A journey through history" [level=3] [ref=e188]':
                              - generic [ref=e189]: "Road trip along the Oregon Trail: A journey through history"
                            - paragraph [ref=e190]: 2,022 mi
                          - 'link "Will road-trip for BBQ: From Kansas City to the Carolinas Will road-trip for BBQ: From Kansas City to the Carolinas 2,211 mi" [ref=e192] [cursor=pointer]':
                            - /url: /trips/14425139
                            - 'img "Will road-trip for BBQ: From Kansas City to the Carolinas" [ref=e194]'
                            - 'heading "Will road-trip for BBQ: From Kansas City to the Carolinas" [level=3] [ref=e195]':
                              - generic [ref=e196]: "Will road-trip for BBQ: From Kansas City to the Carolinas"
                            - paragraph [ref=e197]: 2,211 mi
                        - button [ref=e198] [cursor=pointer]:
                          - img [ref=e200]
                    - link "Premium members get exclusive discounts from our partner brands" [ref=e203] [cursor=pointer]:
                      - /url: https://roadtrippers.com/member-deals/
                      - paragraph [ref=e205]: Premium members get exclusive discounts from our partner brands
                      - img [ref=e206]
                    - generic [ref=e208]:
                      - generic [ref=e209]:
                        - heading "Must-See Extraordinary Places" [level=2] [ref=e210]
                        - paragraph [ref=e211]:
                          - link "See all" [ref=e212] [cursor=pointer]:
                            - /url: https://roadtrippers.com/extraordinary-places
                      - generic [ref=e214]:
                        - generic [ref=e215]:
                          - link "Shenandoah National Park Luray, VA 4.6" [ref=e216] [cursor=pointer]:
                            - /url: /us/luray-va/nature/shenandoah-national-park
                            - img [ref=e219]
                            - generic [ref=e230]:
                              - heading "Shenandoah National Park" [level=3] [ref=e231]
                              - paragraph [ref=e232]: Luray, VA
                              - list [ref=e233]:
                                - listitem [ref=e234]:
                                  - generic [ref=e235]:
                                    - img [ref=e236]
                                    - generic [ref=e239]: "4.6"
                          - button [ref=e240] [cursor=pointer]:
                            - img [ref=e242]
                          - button [ref=e244] [cursor=pointer]:
                            - img [ref=e246]
                        - generic [ref=e248]:
                          - link "Taliesin West Scottsdale, AZ 4.5" [ref=e249] [cursor=pointer]:
                            - /url: /us/scottsdale-az/attractions/taliesin-west-scottsdale
                            - img [ref=e252]
                            - generic [ref=e308]:
                              - heading "Taliesin West" [level=3] [ref=e309]
                              - paragraph [ref=e310]: Scottsdale, AZ
                              - list [ref=e311]:
                                - listitem [ref=e312]:
                                  - generic [ref=e313]:
                                    - img [ref=e314]
                                    - generic [ref=e317]: "4.5"
                          - button [ref=e318] [cursor=pointer]:
                            - img [ref=e320]
                          - button [ref=e322] [cursor=pointer]:
                            - img [ref=e324]
                        - generic [ref=e326]:
                          - link "Kiska Submarine Wrecks Adak, AK 4.0" [ref=e327] [cursor=pointer]:
                            - /url: /us/adak-ak/points-of-interest/kiska-submarine-wrecks
                            - img [ref=e330]
                            - generic [ref=e358]:
                              - heading "Kiska Submarine Wrecks" [level=3] [ref=e359]
                              - paragraph [ref=e360]: Adak, AK
                              - list [ref=e361]:
                                - listitem [ref=e362]:
                                  - generic [ref=e363]:
                                    - img [ref=e364]
                                    - generic [ref=e367]: "4.0"
                          - button [ref=e368] [cursor=pointer]:
                            - img [ref=e370]
                          - button [ref=e372] [cursor=pointer]:
                            - img [ref=e374]
                        - generic [ref=e376]:
                          - link "Siesta Beach Siesta Key, FL 4.5" [ref=e377] [cursor=pointer]:
                            - /url: /us/siesta-key-fl/attractions/siesta-beach-siesta-key-fl--1
                            - img [ref=e380]
                            - generic [ref=e416]:
                              - heading "Siesta Beach" [level=3] [ref=e417]
                              - paragraph [ref=e418]: Siesta Key, FL
                              - list [ref=e419]:
                                - listitem [ref=e420]:
                                  - generic [ref=e421]:
                                    - img [ref=e422]
                                    - generic [ref=e425]: "4.5"
                          - button [ref=e426] [cursor=pointer]:
                            - img [ref=e428]
                          - button [ref=e430] [cursor=pointer]:
                            - img [ref=e432]
                        - generic [ref=e434]:
                          - link "Boston Common Boston, MA 4.5" [ref=e435] [cursor=pointer]:
                            - /url: /us/boston-ma/nature/boston-common
                            - img [ref=e438]
                            - generic [ref=e465]:
                              - heading "Boston Common" [level=3] [ref=e466]
                              - paragraph [ref=e467]: Boston, MA
                              - list [ref=e468]:
                                - listitem [ref=e469]:
                                  - generic [ref=e470]:
                                    - img [ref=e471]
                                    - generic [ref=e474]: "4.5"
                          - button [ref=e475] [cursor=pointer]:
                            - img [ref=e477]
                          - button [ref=e479] [cursor=pointer]:
                            - img [ref=e481]
                        - generic [ref=e483]:
                          - link "New River Gorge Bridge Fayetteville, WV 5.0" [ref=e484] [cursor=pointer]:
                            - /url: /us/fayetteville-wv/points-of-interest/new-river-gorge-bridge-fayetteville-wv--2
                            - img [ref=e487]
                            - generic [ref=e521]:
                              - heading "New River Gorge Bridge" [level=3] [ref=e522]
                              - paragraph [ref=e523]: Fayetteville, WV
                              - list [ref=e524]:
                                - listitem [ref=e525]:
                                  - generic [ref=e526]:
                                    - img [ref=e527]
                                    - generic [ref=e530]: "5.0"
                          - button [ref=e531] [cursor=pointer]:
                            - img [ref=e533]
                          - button [ref=e535] [cursor=pointer]:
                            - img [ref=e537]
                - button [ref=e539] [cursor=pointer]:
                  - img [ref=e541]
            - generic [ref=e544]:
              - button "Explore" [ref=e545] [cursor=pointer]:
                - img [ref=e546]
                - generic [ref=e548]: Explore
              - button "Itinerary" [ref=e549] [cursor=pointer]:
                - img [ref=e550]
                - generic [ref=e552]: Itinerary
              - button "My trips" [ref=e553] [cursor=pointer]:
                - img [ref=e554]
                - generic [ref=e556]: My trips
              - button "Start Trip" [ref=e557] [cursor=pointer]:
                - img [ref=e558]
                - generic [ref=e560]: Start Trip
      - generic [ref=e562]:
        - link [ref=e563] [cursor=pointer]:
          - /url: https://roadtrippers.com/
          - img [ref=e564]
        - generic [ref=e574]:
          - searchbox "Search and Explore" [ref=e575]
          - button [ref=e576] [cursor=pointer]:
            - img [ref=e578]
        - generic [ref=e580]:
          - list [ref=e582]:
            - listitem [ref=e583]:
              - link "Trip Planner" [ref=e584] [cursor=pointer]:
                - /url: /
            - listitem [ref=e585]:
              - button "Trip Ideas" [ref=e586] [cursor=pointer]:
                - generic [ref=e587]: Trip Ideas
                - img [ref=e588]
            - listitem [ref=e590]:
              - button "For RVers" [ref=e591] [cursor=pointer]:
                - generic [ref=e592]: For RVers
                - img [ref=e593]
            - listitem [ref=e595]:
              - button "Membership" [ref=e596] [cursor=pointer]:
                - generic [ref=e597]: Membership
                - img [ref=e598]
          - link "Log in" [ref=e601] [cursor=pointer]:
            - /url: /login
            - generic [ref=e602]: Log in
  - button "Open support chat" [ref=e603] [cursor=pointer]:
    - img [ref=e604]
  - generic [ref=e611]:
    - generic [ref=e612]:
      - heading "Where are you going?" [level=1] [ref=e613]
      - generic [ref=e614]:
        - generic [ref=e615]:
          - generic [ref=e619]:
            - textbox "Starting point" [ref=e620]: Sofia, Bulgaria
            - generic: Starting point
          - generic [ref=e625]: Save as home address
          - generic [ref=e629]:
            - textbox "Destination" [ref=e630]: Plovdiv, Bulgaria
            - generic: Destination
        - separator [ref=e631]
        - generic [ref=e632]:
          - generic [ref=e633] [cursor=pointer]:
            - generic [ref=e634]:
              - text: Plan on your own
              - radio "Plan on your own Explore and discover stops by yourself" [checked] [ref=e635]
            - paragraph [ref=e636]: Explore and discover stops by yourself
          - generic [ref=e637] [cursor=pointer]:
            - generic [ref=e638]:
              - generic [ref=e639]:
                - text: Plan with
                - img "Autopilot" [ref=e640]
              - radio "Plan with Autopilot Powered by 42 million real trips" [ref=e644]
            - paragraph [ref=e645]: Powered by 42 million real trips
        - separator [ref=e646]
        - heading "Add dates(Optional)" [level=2] [ref=e647]
        - generic [ref=e648]:
          - group [ref=e649]:
            - generic [ref=e651]:
              - textbox "Start" [ref=e652]
              - generic: Start
          - group [ref=e653]:
            - generic [ref=e655]:
              - textbox "End" [ref=e656]
              - generic: End
      - button "Create trip" [active] [ref=e658] [cursor=pointer]:
        - generic [ref=e659]: Create trip
    - button [ref=e660] [cursor=pointer]:
      - img [ref=e662]
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
> 88 |     await expect(page).toHaveURL(/trip_id=|onboarding|itinerary/, { timeout: 60000 });
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  89 |   });
  90 | });
  91 | 
```
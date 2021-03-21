TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": {
   "opacity": 0.4,
   "class": "Menu",
   "fontColor": "#FFFFFF",
   "backgroundColor": "#404040",
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "rollOverFontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000",
   "id": "Menu_58A220CE_5415_9D56_41B3_1F2AF6D5C21D",
   "selectedBackgroundColor": "#202020",
   "children": [
    {
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem",
     "label": "Camera001"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem",
     "label": "Camera008"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem",
     "label": "Camera002"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem",
     "label": "Camera004"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem",
     "label": "Camera006"
    }
   ],
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8
  },
  "label": "Camera001",
  "hfovMax": 150,
  "hfovMin": 59,
  "adjacentPanoramas": [
   {
    "panorama": {
     "class": "Panorama",
     "partial": false,
     "cardboardMenu": "this.Menu_58A220CE_5415_9D56_41B3_1F2AF6D5C21D",
     "label": "Camera002",
     "hfovMax": 150,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_06C0960B_0C17_F27D_418B_89AA338D9D69",
       "class": "AdjacentPanorama",
       "backwardYaw": -1.36,
       "yaw": 178.35,
       "distance": 1
      },
      {
       "panorama": {
        "class": "Panorama",
        "partial": false,
        "cardboardMenu": "this.Menu_58A220CE_5415_9D56_41B3_1F2AF6D5C21D",
        "label": "Camera004",
        "hfovMax": 150,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF",
          "class": "AdjacentPanorama",
          "backwardYaw": 79.04,
          "yaw": -101.95,
          "distance": 1
         },
         {
          "panorama": {
           "class": "Panorama",
           "partial": false,
           "cardboardMenu": "this.Menu_58A220CE_5415_9D56_41B3_1F2AF6D5C21D",
           "label": "Camera006",
           "hfovMax": 150,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": {
              "class": "Panorama",
              "partial": false,
              "cardboardMenu": "this.Menu_58A220CE_5415_9D56_41B3_1F2AF6D5C21D",
              "label": "Camera008",
              "hfovMax": 150,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_06C0960B_0C17_F27D_418B_89AA338D9D69",
                "class": "AdjacentPanorama",
                "backwardYaw": 83.77,
                "yaw": -92.73,
                "distance": 1
               },
               {
                "panorama": "this.panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0",
                "class": "AdjacentPanorama",
                "backwardYaw": 180,
                "yaw": 0.34,
                "distance": 1
               }
              ],
              "id": "panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_r_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "front": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_f_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_b_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "top": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_u_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "overlays": [
                 {
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_tcap0.png",
                     "height": 850,
                     "class": "ImageResourceLevel",
                     "width": 850
                    }
                   ]
                  },
                  "inertia": false,
                  "id": "panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_tcap0",
                  "hfov": 36,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "angle": 0
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_10432A89_1C53_35C2_41BA_ADB857765840",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_0_HS_3_0.png",
                       "height": 831,
                       "class": "ImageResourceLevel",
                       "width": 428
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 36.4,
                    "roll": 0,
                    "pitch": -17.46,
                    "yaw": 0.34
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0, this.camera_588C310B_5415_9CDF_41A8_4B8388F6D112); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_0_HS_3_1_0_map.gif",
                       "height": 200,
                       "class": "ImageResourceLevel",
                       "width": 103
                      }
                     ]
                    },
                    "pitch": -17.46,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 0.34,
                    "hfov": 36.4
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_10227301_1C53_D4C2_41AB_7D776F8AD0E2",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_0_HS_2_0.png",
                       "height": 533,
                       "class": "ImageResourceLevel",
                       "width": 416
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 35.41,
                    "roll": 0,
                    "pitch": -13.19,
                    "yaw": -92.73
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_06C0960B_0C17_F27D_418B_89AA338D9D69, this.camera_589630FC_5415_9D39_41B6_BD765E9985A1); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_0_HS_2_1_0_map.gif",
                       "height": 200,
                       "class": "ImageResourceLevel",
                       "width": 156
                      }
                     ]
                    },
                    "pitch": -13.19,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -92.73,
                    "hfov": 35.41
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_5FF7C930_541A_6CCA_418B_2EEB5B82D064",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_0_HS_5_0.png",
                       "height": 136,
                       "class": "ImageResourceLevel",
                       "width": 292
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 19.42,
                    "pitch": -41.05,
                    "yaw": 1.38
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_0_HS_5_0_0_map.gif",
                       "height": 68,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ]
                    },
                    "pitch": -41.05,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 1.38,
                    "hfov": 19.42
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_58259C8D_541A_A5DA_41D2_E5398D08AC6F",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_0_HS_4_0.png",
                       "height": 90,
                       "class": "ImageResourceLevel",
                       "width": 155
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 12.73,
                    "pitch": -21.09,
                    "yaw": -95.37
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_0_HS_4_0_0_map.gif",
                       "height": 45,
                       "class": "ImageResourceLevel",
                       "width": 77
                      }
                     ]
                    },
                    "pitch": -21.09,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -95.37,
                    "hfov": 12.73
                   }
                  ]
                 }
                ],
                "bottom": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_d_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "left": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_l_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_t.jpg"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": 0.34,
             "yaw": 180,
             "distance": 1
            },
            {
             "panorama": "this.panorama_05DEA5C9_0C17_11FC_41A6_139118314586",
             "class": "AdjacentPanorama",
             "backwardYaw": 110.6,
             "yaw": -65.65,
             "distance": 1
            }
           ],
           "id": "panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_r_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "front": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_f_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_b_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "top": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_u_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "overlays": [
              {
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_tcap0.png",
                  "height": 850,
                  "class": "ImageResourceLevel",
                  "width": 850
                 }
                ]
               },
               "inertia": false,
               "id": "panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_tcap0",
               "hfov": 36,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "angle": 0
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1038BF70_1C71_CB43_41A9_BFCB16678379",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_0_HS_3_0.png",
                    "height": 940,
                    "class": "ImageResourceLevel",
                    "width": 650
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 53.03,
                 "roll": 0,
                 "pitch": -39.07,
                 "yaw": 180
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5, this.camera_58EB0153_5415_9F4E_41B9_302F4B77CECA); this.mainPlayList.set('selectedIndex', 1)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_0_HS_3_1_0_map.gif",
                    "height": 200,
                    "class": "ImageResourceLevel",
                    "width": 138
                   }
                  ]
                 },
                 "pitch": -39.07,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 180,
                 "hfov": 53.03
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_5F44BA67_5435_AD56_41D1_B9366AB222A2",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_0_HS_5_0.png",
                    "height": 1100,
                    "class": "ImageResourceLevel",
                    "width": 718
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 57.72,
                 "roll": 0,
                 "pitch": -28.14,
                 "yaw": -65.65
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_05DEA5C9_0C17_11FC_41A6_139118314586, this.camera_58E14161_5415_9F4A_41B9_D21BCA91C946); this.mainPlayList.set('selectedIndex', 3)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_0_HS_5_1_0_map.gif",
                    "height": 200,
                    "class": "ImageResourceLevel",
                    "width": 130
                   }
                  ]
                 },
                 "pitch": -28.14,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -65.65,
                 "hfov": 57.72
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_58612480_541F_A5CA_41D0_4ED58883AF54",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_0_HS_7_0.png",
                    "height": 130,
                    "class": "ImageResourceLevel",
                    "width": 212
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 11.51,
                 "pitch": -51.92,
                 "yaw": -72.14
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_0_HS_7_0_0_map.gif",
                    "height": 65,
                    "class": "ImageResourceLevel",
                    "width": 106
                   }
                  ]
                 },
                 "pitch": -51.92,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -72.14,
                 "hfov": 11.51
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_585B10AE_541D_BDD6_41C3_7EFFA407246F",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_0_HS_6_0.png",
                    "height": 143,
                    "class": "ImageResourceLevel",
                    "width": 235
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 14.55,
                 "pitch": -45.39,
                 "yaw": 177.47
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_0_HS_6_0_0_map.gif",
                    "height": 71,
                    "class": "ImageResourceLevel",
                    "width": 117
                   }
                  ]
                 },
                 "pitch": -45.39,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 177.47,
                 "hfov": 14.55
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_d_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "left": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_l_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -65.65,
          "yaw": 110.6,
          "distance": 1
         }
        ],
        "id": "panorama_05DEA5C9_0C17_11FC_41A6_139118314586",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_r_hq.jpeg",
             "height": 1296,
             "class": "ImageResourceLevel",
             "width": 1296
            },
            {
             "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "front": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_f_hq.jpeg",
             "height": 1296,
             "class": "ImageResourceLevel",
             "width": 1296
            },
            {
             "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_b_hq.jpeg",
             "height": 1296,
             "class": "ImageResourceLevel",
             "width": 1296
            },
            {
             "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "top": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_u_hq.jpeg",
             "height": 1296,
             "class": "ImageResourceLevel",
             "width": 1296
            },
            {
             "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_tcap0.png",
               "height": 850,
               "class": "ImageResourceLevel",
               "width": 850
              }
             ]
            },
            "inertia": false,
            "id": "panorama_05DEA5C9_0C17_11FC_41A6_139118314586_tcap0",
            "hfov": 36,
            "class": "TripodCapPanoramaOverlay",
            "rotate": false,
            "angle": 0
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_10056139_1C4F_D4C2_41B2_A9CD93F13826",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_0_HS_3_0.png",
                 "height": 644,
                 "class": "ImageResourceLevel",
                 "width": 399
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 34.11,
              "roll": 0,
              "pitch": -16.47,
              "yaw": -101.95
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF, this.camera_58827119_5415_9CFB_4158_D5C9A0B91114); this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_0_HS_3_1_0_map.gif",
                 "height": 199,
                 "class": "ImageResourceLevel",
                 "width": 123
                }
               ]
              },
              "pitch": -16.47,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -101.95,
              "hfov": 34.11
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_5F86CCCD_543D_A55A_41C0_B316474E2A34",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_0_HS_4_0.png",
                 "height": 925,
                 "class": "ImageResourceLevel",
                 "width": 711
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 57.25,
              "roll": 0,
              "pitch": -30.83,
              "yaw": 110.6
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0, this.camera_58F8C127_5415_9CD6_41D3_14BEFE962B9C); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_0_HS_4_1_0_map.gif",
                 "height": 200,
                 "class": "ImageResourceLevel",
                 "width": 153
                }
               ]
              },
              "pitch": -30.83,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 110.6,
              "hfov": 57.25
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_583C3BB4_541E_E3CA_41AF_77A579EEEBFC",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_0_HS_6_0.png",
                 "height": 125,
                 "class": "ImageResourceLevel",
                 "width": 141
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 11.13,
              "pitch": -26.4,
              "yaw": -92.95
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_0_HS_6_0_0_map.gif",
                 "height": 62,
                 "class": "ImageResourceLevel",
                 "width": 70
                }
               ]
              },
              "pitch": -26.4,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -92.95,
              "hfov": 11.13
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_58574C11_541F_A4CA_41C4_1DE20FF73A50",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_0_HS_5_0.png",
                 "height": 133,
                 "class": "ImageResourceLevel",
                 "width": 208
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 11.55,
              "pitch": -51.03,
              "yaw": 107.83
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_0_HS_5_0_0_map.gif",
                 "height": 66,
                 "class": "ImageResourceLevel",
                 "width": 104
                }
               ]
              },
              "pitch": -51.03,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 107.83,
              "hfov": 11.55
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_d_hq.jpeg",
             "height": 1296,
             "class": "ImageResourceLevel",
             "width": 1296
            },
            {
             "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "left": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_l_hq.jpeg",
             "height": 1296,
             "class": "ImageResourceLevel",
             "width": 1296
            },
            {
             "url": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_05DEA5C9_0C17_11FC_41A6_139118314586_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": -101.95,
       "yaw": 79.04,
       "distance": 1
      }
     ],
     "id": "panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "frames": [
      {
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_r_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "front": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_f_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_b_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "top": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_u_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "overlays": [
        {
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_tcap0.png",
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850
           }
          ]
         },
         "inertia": false,
         "id": "panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_tcap0",
         "hfov": 36,
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "angle": 0
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_10785B31_1C51_54C2_4190_2E92344CA17A",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_0_HS_3_0.png",
              "height": 697,
              "class": "ImageResourceLevel",
              "width": 547
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 45.53,
           "roll": 0,
           "pitch": -17.71,
           "yaw": 79.04
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_05DEA5C9_0C17_11FC_41A6_139118314586, this.camera_589FF0EE_5415_9D56_41BC_15B2D6F695E7); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_0_HS_3_1_0_map.gif",
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 156
             }
            ]
           },
           "pitch": -17.71,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 79.04,
           "hfov": 45.53
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1012CC70_1C50_CD42_4129_150287DA79C0",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_0_HS_2_0.png",
              "height": 774,
              "class": "ImageResourceLevel",
              "width": 331
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 28.56,
           "roll": 0,
           "pitch": -23.29,
           "yaw": 178.35
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_06C0960B_0C17_F27D_418B_89AA338D9D69, this.camera_5899D0DF_5415_9D76_41B0_E0F57E852201); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_0_HS_2_1_0_map.gif",
              "height": 199,
              "class": "ImageResourceLevel",
              "width": 85
             }
            ]
           },
           "pitch": -23.29,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 178.35,
           "hfov": 28.56
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_586307B7_541A_6336_419C_25B1A3985DF8",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_0_HS_5_0.png",
              "height": 131,
              "class": "ImageResourceLevel",
              "width": 192
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 12.95,
           "pitch": -40.07,
           "yaw": 177.85
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_0_HS_5_0_0_map.gif",
              "height": 65,
              "class": "ImageResourceLevel",
              "width": 96
             }
            ]
           },
           "pitch": -40.07,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 177.85,
           "hfov": 12.95
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_5922362D_541A_64DA_41CC_C5385CCBF2C0",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_0_HS_4_0.png",
              "height": 104,
              "class": "ImageResourceLevel",
              "width": 144
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.95,
           "pitch": -30.32,
           "yaw": 72.91
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_0_HS_4_0_0_map.gif",
              "height": 52,
              "class": "ImageResourceLevel",
              "width": 72
             }
            ]
           },
           "pitch": -30.32,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 72.91,
           "hfov": 10.95
          }
         ]
        }
       ],
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_d_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "left": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_l_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "thumbnailUrl": "media/panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_t.jpg"
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": 178.35,
    "yaw": -1.36,
    "distance": 1
   },
   {
    "panorama": "this.panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5",
    "class": "AdjacentPanorama",
    "backwardYaw": -92.73,
    "yaw": 83.77,
    "distance": 1
   }
  ],
  "id": "panorama_06C0960B_0C17_F27D_418B_89AA338D9D69",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_r_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_f_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_b_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_u_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "yaw": 80.08,
      "rotationX": 0,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "id": "popup_1A5A7016_160D_B60D_417E_651C653EA221",
      "hideDuration": 500,
      "hfov": 8.28,
      "loop": false,
      "pitch": -6.88,
      "popupMaxHeight": "95%",
      "video": {
       "height": 720,
       "class": "VideoResource",
       "mp4Url": "media/video_1C0191B3_1602_B60A_41AC_D71117DBFD23.mp4",
       "width": 1280
      },
      "autoplay": true
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_tcap0.png",
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850
        }
       ]
      },
      "inertia": false,
      "id": "panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_tcap0",
      "hfov": 36,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "angle": 0
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_16F18521_1C51_3CC2_41BB_A5FA494FF78D",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_0_HS_3_0.png",
           "height": 2048,
           "class": "ImageResourceLevel",
           "width": 791
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 79.13,
        "roll": 0,
        "pitch": -26.36,
        "yaw": -1.36
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF, this.camera_58FED136_5415_9F36_41C7_9F09926C3253); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_0_HS_3_1_0_map.gif",
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 77
          }
         ]
        },
        "pitch": -26.36,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -1.36,
        "hfov": 79.13
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_10262021_1C51_D4C2_41B1_C4638A95CD75",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_0_HS_4_0.png",
           "height": 1032,
           "class": "ImageResourceLevel",
           "width": 615
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 50.57,
        "roll": 0,
        "pitch": -8.3,
        "yaw": 83.77
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5, this.camera_58F4F144_5415_9F4A_41AA_F1CF8460FA91); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_0_HS_4_1_0_map.gif",
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 118
          }
         ]
        },
        "pitch": -8.3,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 83.77,
        "hfov": 50.57
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_111167E8_1C51_7B42_4190_2D2FAAD053EA",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_0_HS_8_0.png",
           "height": 241,
           "class": "ImageResourceLevel",
           "width": 237
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.68,
        "pitch": -41.37,
        "yaw": -2.31
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_0_HS_8_0_0_map.gif",
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ]
        },
        "pitch": -41.37,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -2.31,
        "hfov": 15.68
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_11C39FE1_1C51_4B42_41AC_94846FE38B6D",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_0_HS_7_0.png",
           "height": 386,
           "class": "ImageResourceLevel",
           "width": 299
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 25.85,
        "roll": 0,
        "pitch": -10.14,
        "yaw": 45.2
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_0_HS_7_1_0_map.gif",
           "height": 193,
           "class": "ImageResourceLevel",
           "width": 149
          }
         ]
        },
        "pitch": -10.14,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 45.2,
        "hfov": 25.85
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_d_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_l_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_t.jpg"
   }
  ]
 },
 {
  "mouseControlMode": "drag_rotation",
  "gyroscopeEnabled": true,
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "id": "panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_camera"
 },
 "this.panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "id": "panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_camera"
 },
 "this.panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "id": "panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_camera"
 },
 "this.panorama_05DEA5C9_0C17_11FC_41A6_139118314586",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "id": "panorama_05DEA5C9_0C17_11FC_41A6_139118314586_camera"
 },
 "this.panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "id": "panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_camera"
 },
 {
  "items": [
   {
    "media": "this.panorama_06C0960B_0C17_F27D_418B_89AA338D9D69",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_06C0960B_0C17_F27D_418B_89AA338D9D69_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_05DE8482_0C17_366F_41A7_5E97DECC51F5_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_05C1FE4E_0C17_F2F7_41A7_D49C652022EF_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_05DEA5C9_0C17_11FC_41A6_139118314586",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_05DEA5C9_0C17_11FC_41A6_139118314586_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
    "camera": "this.panorama_05DEBD30_0C17_16AB_4177_2CFC9DA625B0_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 "this.Menu_58A220CE_5415_9D56_41B3_1F2AF6D5C21D",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 178.64
  },
  "id": "camera_5899D0DF_5415_9D76_41B0_E0F57E852201"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 78.05
  },
  "id": "camera_589FF0EE_5415_9D56_41BC_15B2D6F695E7"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -96.23
  },
  "id": "camera_589630FC_5415_9D39_41B6_BD765E9985A1"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "id": "camera_588C310B_5415_9CDF_41A8_4B8388F6D112"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -100.96
  },
  "id": "camera_58827119_5415_9CFB_4158_D5C9A0B91114"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 114.35
  },
  "id": "camera_58F8C127_5415_9CD6_41D3_14BEFE962B9C"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -1.65
  },
  "id": "camera_58FED136_5415_9F36_41C7_9F09926C3253"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 87.27
  },
  "id": "camera_58F4F144_5415_9F4A_41AA_F1CF8460FA91"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -179.66
  },
  "id": "camera_58EB0153_5415_9F4E_41B9_302F4B77CECA"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -69.4
  },
  "id": "camera_58E14161_5415_9F4A_41B9_D21BCA91C946"
 }
], "children": [
 {
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "toolTipOpacity": 0.53,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "minHeight": 50,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBorderSize": 0,
  "toolTipFontWeight": "normal",
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "minWidth": 100,
  "progressOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 15,
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBarOpacity": 1,
  "paddingBottom": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "progressHeight": 10,
  "progressBackgroundColorDirection": "vertical",
  "height": "100%",
  "progressBorderSize": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "width": "100%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0
 }
], 
 "horizontalAlign": "left",
 "contentOpaque": false,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "unregisterKey": function(key){    delete window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "registerKey": function(key, value){    window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "getKey": function(key){    return window[key]; },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "existsKey": function(key){    return key in window; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } }
 },
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "width": "100%",
 "borderRadius": 0,
 "height": "100%",
 "paddingRight": 0
})
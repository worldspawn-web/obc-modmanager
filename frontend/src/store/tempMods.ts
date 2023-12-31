// # TEMPORARY STORAGE FOR LANDING DEV
// # TODO: REDO WITH REAL BACKEND
interface Mod {
  id: number;
  name: string;
  version: number | string;
  link: string;
  type: string;
  filesize: number;
  trust: string;
  images: {
    "front-view": string;
    "back-view"?: string;
    "interior-view"?: string;
  };
  stats: {
    quality: number;
    handling: number;
    tuning: number;
    coop: boolean;
    size: number;
    fps: number;
  }[];
}

const modsStore: Mod[] = [
  {
    id: 0,
    name: "Lexus LX 570 Super Sport 2021",
    version: 1.49,
    link: "https://stmods.org/euro_truck_simulator_2/mods/lexus_lx_570_super_sport_2021_by_yahia_abid_for_ets2/",
    type: "car",
    filesize: 54.1,
    trust: "New",
    images: {
      "front-view":
        "https://stmods.org/euro_truck_simulator_2/mods/lexus_lx_570_super_sport_2021_by_yahia_abid_for_ets2/lexus_lx_570_super_sport_2021_by_yahia_abid_for_ets2_img1.jpg?656da50943d81",
      "back-view":
        "https://stmods.org/euro_truck_simulator_2/mods/lexus_lx_570_super_sport_2021_by_yahia_abid_for_ets2/lexus_lx_570_super_sport_2021_by_yahia_abid_for_ets2_img3.jpg?656da50943d81",
      "interior-view":
        "https://stmods.org/euro_truck_simulator_2/mods/lexus_lx_570_super_sport_2021_by_yahia_abid_for_ets2/lexus_lx_570_super_sport_2021_by_yahia_abid_for_ets2_img2.jpg?656da50943d81",
    },
    stats: [
      {
        quality: 4,
        handling: 2,
        tuning: 2,
        coop: false,
        size: 5,
        fps: 5,
      },
    ],
  },
  {
    id: 1,
    name: "Mercedes-Benz AMG S63 Coupe 2021",
    version: 1.49,
    link: "https://stmods.org/euro_truck_simulator_2/mods/mercedes_benz_amg_s63_coupe_2021_by_yahia_abid_for_ets2/",
    type: "car",
    filesize: 49.2,
    trust: "New",
    images: {
      "front-view":
        "https://stmods.org/euro_truck_simulator_2/mods/mercedes_benz_amg_s63_coupe_2021_by_yahia_abid_for_ets2/mercedes_benz_amg_s63_coupe_2021_by_yahia_abid_for_ets2_img1.jpg?",
      "back-view":
        "https://stmods.org/euro_truck_simulator_2/mods/mercedes_benz_amg_s63_coupe_2021_by_yahia_abid_for_ets2/mercedes_benz_amg_s63_coupe_2021_by_yahia_abid_for_ets2_img2.jpg?",
      "interior-view":
        "https://stmods.org/euro_truck_simulator_2/mods/mercedes_benz_amg_s63_coupe_2021_by_yahia_abid_for_ets2/mercedes_benz_amg_s63_coupe_2021_by_yahia_abid_for_ets2_img3.jpg?",
    },
    stats: [
      {
        quality: 4,
        handling: 4,
        tuning: 2,
        coop: true,
        size: 5,
        fps: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Bollore Bluebus SE",
    version: 1.49,
    link: "https://stmods.org/euro_truck_simulator_2/mods/bollore_bluebus_se_by_etrusan_for_ets2/",
    type: "bus",
    filesize: 17.3,
    trust: "Trusted",
    images: {
      "front-view":
        "https://stmods.org/euro_truck_simulator_2/mods/bollore_bluebus_se_by_etrusan_for_ets2/bollore_bluebus_se_v1_0_11_46_by_etrusan_for_ets2_v1_45_x_1_46_x_img1.jpg?6550df8162011",
      "back-view":
        "https://stmods.org/euro_truck_simulator_2/mods/bollore_bluebus_se_by_etrusan_for_ets2/bollore_bluebus_se_v1_0_11_46_by_etrusan_for_ets2_v1_45_x_1_46_x_img2.jpg?6550df8162011",
      "interior-view":
        "https://stmods.org/euro_truck_simulator_2/mods/bollore_bluebus_se_by_etrusan_for_ets2/bollore_bluebus_se_v1_0_11_46_by_etrusan_for_ets2_v1_45_x_1_46_x_img6.jpg?6550df8162011",
    },
    stats: [
      {
        quality: 5,
        handling: 4,
        tuning: 2,
        coop: true,
        size: 5,
        fps: 5,
      },
    ],
  },
  {
    id: 3,
    name: "Frosty Winter Weather Mod",
    version: 1.49,
    link: "https://stmods.org/euro_truck_simulator_2/mods/frosty_winter_weather_mod_v6_1_by_grimes_for_euro_truck_simulator_2_v1_26/",
    type: "weather",
    filesize: 2570,
    trust: "Trusted",
    images: {
      "front-view":
        "https://stmods.org/euro_truck_simulator_2/mods/frosty_winter_weather_mod_v6_1_by_grimes_for_euro_truck_simulator_2_v1_26/frosty_winter_weather_mod_v7_4_by_grimes_for_ets2_v1_37_x_img1.jpg?657496a686243",
      "back-view":
        "https://stmods.org/euro_truck_simulator_2/mods/frosty_winter_weather_mod_v6_1_by_grimes_for_euro_truck_simulator_2_v1_26/frosty_winter_weather_mod_v7_4_by_grimes_for_ets2_v1_37_x_img2.jpg?657496a686243",
      "interior-view":
        "https://stmods.org/euro_truck_simulator_2/mods/frosty_winter_weather_mod_v6_1_by_grimes_for_euro_truck_simulator_2_v1_26/frosty_winter_weather_mod_v7_4_by_grimes_for_ets2_v1_37_x_img3.jpg?657496a686243",
    },
    stats: [
      {
        quality: 5,
        coop: true,
        handling: 0,
        tuning: 0,
        size: 2,
        fps: 5,
      },
    ],
  },
  {
    id: 4,
    name: "Frosty Physics",
    version: 1.49,
    link: "https://stmods.org/euro_truck_simulator_2/mods/frosty_physics_by_grimes_for_ets2/",
    type: "other",
    filesize: 0.012,
    trust: "New",
    images: {
      "front-view":
        "https://stmods.org/euro_truck_simulator_2/mods/frosty_physics_by_grimes_for_ets2/frosty_physics_by_grimes_for_ets2_img1.jpg?65749703b8f58",
    },
    stats: [
      {
        quality: 5,
        coop: true,
        handling: 0,
        tuning: 0,
        size: 5,
        fps: 5,
      },
    ],
  },
  {
    id: 5,
    name: "Iveco Evedys",
    version: 1.49,
    link: "https://stmods.org/euro_truck_simulator_2/mods/iveco_evedys_by_etrusan_for_ets2/",
    type: "bus",
    filesize: 78.8,
    trust: "Trusted",
    images: {
      "front-view":
        "https://stmods.org/euro_truck_simulator_2/mods/iveco_evedys_by_etrusan_for_ets2/iveco_evedys_v1_04_by_etrusan_for_ets2_v1_38_x_1_39_x_img2.jpg?6550df3993733",
      "back-view":
        "https://stmods.org/euro_truck_simulator_2/mods/iveco_evedys_by_etrusan_for_ets2/iveco_evedys_v1_04_by_etrusan_for_ets2_v1_38_x_1_39_x_img6.jpg?6550df3993733",
      "interior-view":
        "https://stmods.org/euro_truck_simulator_2/mods/iveco_evedys_by_etrusan_for_ets2/iveco_evedys_v1_04_by_etrusan_for_ets2_v1_38_x_1_39_x_img3.jpg?6550df3993733",
    },
    stats: [
      {
        quality: 5,
        coop: true,
        handling: 4,
        tuning: 3,
        size: 5,
        fps: 5,
      },
    ],
  },
  {
    id: 6,
    name: "VAZ 2107",
    version: 1.49,
    link: "https://stmods.org/euro_truck_simulator_2/mods/vaz_2107_pererabotka_by_ajieha_for_ets2/",
    type: "car",
    filesize: 61.1,
    trust: "New",
    images: {
      "front-view":
        "https://stmods.org/euro_truck_simulator_2/mods/vaz_2107_pererabotka_by_ajieha_for_ets2/vaz_2107_pererabotka_by_ajieha_for_ets2_img1.jpg?6579856753013",
      "interior-view":
        "https://stmods.org/euro_truck_simulator_2/mods/vaz_2107_pererabotka_by_ajieha_for_ets2/vaz_2107_pererabotka_by_ajieha_for_ets2_img2.jpg?6579856753013",
    },
    stats: [
      {
        quality: 4,
        coop: true,
        handling: 2,
        tuning: 2,
        size: 5,
        fps: 5,
      },
    ],
  },
  {
    id: 7,
    name: "Passenger Transportation",
    version: 1.49,
    link: "https://stmods.org/euro_truck_simulator_2/mods/passenger_transportation_by_sovtransbus_for_ets2/",
    type: "other",
    filesize: 40.4,
    trust: "New",
    images: {
      "front-view":
        "https://stmods.org/euro_truck_simulator_2/mods/passenger_transportation_by_sovtransbus_for_ets2/passenger_transportation_v1_2_by_sovtransbus_for_ets2_v1_43_x_img1.jpg?6587e43c10b2b",
      "interior-view":
        "https://stmods.org/euro_truck_simulator_2/mods/passenger_transportation_by_sovtransbus_for_ets2/passenger_transportation_v1_2_by_sovtransbus_for_ets2_v1_43_x_img3.jpg?6587e43c10b2b",
    },
    stats: [
      {
        quality: 5,
        coop: false,
        handling: 0,
        tuning: 0,
        size: 5,
        fps: 5,
      },
    ],
  },
  {
    id: 8,
    name: "Neoplan New Tourliner C13",
    version: 1.49,
    link: "https://stmods.org/euro_truck_simulator_2/mods/neoplan_new_tourliner_c13_2018_2022_by_harun_aras_for_ets2/",
    type: "bus",
    filesize: 786,
    trust: "New",
    images: {
      "front-view":
        "https://stmods.org/euro_truck_simulator_2/mods/neoplan_new_tourliner_c13_2018_2022_by_harun_aras_for_ets2/neoplan_new_tourliner_c13_2018_2022_by_harun_aras_for_ets2_img1.jpg?656c29690c200",
      "interior-view":
        "https://stmods.org/euro_truck_simulator_2/mods/neoplan_new_tourliner_c13_2018_2022_by_harun_aras_for_ets2/neoplan_new_tourliner_c13_2018_2022_by_harun_aras_for_ets2_img3.jpg?656c29690c200",
    },
    stats: [
      {
        quality: 5,
        coop: false,
        handling: 5,
        tuning: 5,
        size: 2,
        fps: 5,
      },
    ],
  },
];

export default modsStore;

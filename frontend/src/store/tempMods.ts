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
    "back-view": string;
    "interior-view": string;
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
    name: "Cadillac CT5-V Black Wing 2022",
    version: 1.49,
    link: "https://stmods.org/euro_truck_simulator_2/mods/cadillac_ct5_v_black_wing_2022_by_dn_modding_for_ets2/",
    type: "car",
    filesize: 167,
    trust: "New",
    images: {
      "front-view":
        "https://stmods.org/euro_truck_simulator_2/mods/cadillac_ct5_v_black_wing_2022_by_dn_modding_for_ets2/cadillac_ct5_v_black_wing_2022_by_dn_modding_for_ets2_img1.jpg?",
      "back-view":
        "https://stmods.org/euro_truck_simulator_2/mods/cadillac_ct5_v_black_wing_2022_by_dn_modding_for_ets2/cadillac_ct5_v_black_wing_2022_by_dn_modding_for_ets2_img2.jpg?",
      "interior-view":
        "https://stmods.org/euro_truck_simulator_2/mods/cadillac_ct5_v_black_wing_2022_by_dn_modding_for_ets2/cadillac_ct5_v_black_wing_2022_by_dn_modding_for_ets2_img5.jpg?",
    },
    stats: [
      {
        quality: 5,
        handling: 4,
        tuning: 3,
        coop: true,
        size: 3,
        fps: 5,
      },
    ],
  },
  {
    id: 1,
    name: "Cadillac  Escalade 2021",
    version: "Steam",
    link: "https://stmods.org/euro_truck_simulator_2/mods/cadillac_escalade_2021_by_dn_modding_for_ets2/",
    type: "car",
    filesize: 220,
    trust: "Trusted",
    images: {
      "front-view":
        "https://stmods.org/euro_truck_simulator_2/mods/cadillac_escalade_2021_by_dn_modding_for_ets2/cadillac_escalade_2021_by_dn_modding_for_ets2_img1.jpg?",
      "back-view":
        "https://stmods.org/euro_truck_simulator_2/mods/cadillac_escalade_2021_by_dn_modding_for_ets2/cadillac_escalade_2021_by_dn_modding_for_ets2_img2.jpg?",
      "interior-view":
        "https://stmods.org/euro_truck_simulator_2/mods/cadillac_escalade_2021_by_dn_modding_for_ets2/cadillac_escalade_2021_by_dn_modding_for_ets2_img5.jpg?",
    },
    stats: [
      {
        quality: 4,
        handling: 3,
        tuning: 2,
        coop: true,
        size: 3,
        fps: 5,
      },
    ],
  },
];

export default modsStore;

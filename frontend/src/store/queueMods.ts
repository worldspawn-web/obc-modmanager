// # TEMPORARY STORAGE FOR LANDING DEV
// # TODO: REDO WITH REAL BACKEND
interface Mod {
  id: number;
  status: string; // QUEUE / DECLINED
  name: string;
  version: number | string;
  author: string;
  link: string;
  type: string;
  filesize: number;
  image: string;
  declineReasons?: string[];
}

const queueStore: Mod[] = [
  {
    id: 0,
    status: "queue",
    name: "Mercedes-Benz G65 Gelandewagen",
    version: "1.49",
    author: "Elaman",
    link: "https://stmods.org/euro_truck_simulator_2/mods/mercedes_benz_g65_gelendvagen_v2_0_by_elaman_for_euro_truck_simulator_2_v1_25_1_26_x/",
    type: "car",
    filesize: 70,
    image:
      "https://stmods.org/euro_truck_simulator_2/mods/mercedes_benz_g65_gelendvagen_v2_0_by_elaman_for_euro_truck_simulator_2_v1_25_1_26_x/mercedes_benz_g65_gelandewagen_v4_6_by_elaman_for_ets2_v1_47_x_img2.jpg?6575e4b3d7c93",
  },
  {
    id: 1,
    status: "queue",
    name: "Kia Telluride SX X-Pro 2024",
    version: "1.49",
    author: "Yahia Abid",
    link: "https://stmods.org/euro_truck_simulator_2/mods/kia_telluride_sx_x_pro_2024_by_yahia_abid_for_ets2/",
    type: "car",
    filesize: 131,
    image:
      "https://stmods.org/euro_truck_simulator_2/mods/kia_telluride_sx_x_pro_2024_by_yahia_abid_for_ets2/kia_telluride_sx_x_pro_2024_by_yahia_abid_for_ets2_img1.jpg?",
  },
  {
    id: 2,
    status: "queue",
    name: "MAN TGE 3.140",
    version: "1.49",
    author: "Dzordz",
    link: "https://zemods.ru/3737-man-tge-3140-dlja-euro-truck-simulator-2.html",
    type: "car",
    filesize: 55.8,
    image: "https://zemods.ru/uploads/posts/2023-12/ets_man-tge-3-1.jpg",
  },
  {
    id: 3,
    status: "declined",
    name: "VAZ 2107",
    version: "1.49",
    author: "AJIEHA",
    link: "https://stmods.org/euro_truck_simulator_2/mods/vaz_2107_pererabotka_by_ajieha_for_ets2/",
    type: "car",
    filesize: 61.1,
    declineReasons: ["Brakes are way too weak.", "Overall bad handling."],
    image:
      "https://stmods.org/euro_truck_simulator_2/mods/vaz_2107_pererabotka_by_ajieha_for_ets2/vaz_2107_pererabotka_by_ajieha_for_ets2_img1.jpg?6579856753013",
  },
];

export default queueStore;

const NobuHotel = "/image/NobuHotel.png";
const TheLangham = "/image/TheLangham.png";
const HappyHotel = "/image/HappyHotel.png";
const TheGuesthouseHotel = "/image/TheGuesthouseHotel.png";
const VillaDCitta = "/image/VillaDCitta.png";
const LoewsHotel = "/image/LoewsHotel.png";
const Gallery1 = "/image/gallery1.png";
const Gallery2 = "/image/gallery2.png";
const Gallery3 = "/image/gallery3.png";
export const HOTEL_DATA = [
  {
    id: 1,
    location: "Chicago",
    name: "Nobu Hotel",
    area: "City Center, Chicago, USA",
    image: NobuHotel,
    gallery: [NobuHotel, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 1500, roomImg: NobuHotel },
      { type: "Suite Room", price: 1500, roomImg: NobuHotel },
    ],
  },
  {
    id: 2,
    location: "Chicago",
    name: "The Langham",
    area: "Dowtown, Chicago, USA",
    image: TheLangham,
    gallery: [TheLangham, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 2500, roomImg: TheLangham },
      { type: "Suite Room", price: 2500, roomImg: TheLangham },
    ],
  },
  {
    id: 3,
    location: "Chicago",
    name: "Happy Hotel",
    area: "Dowtown, Chicago, USA",
    image: HappyHotel,
    gallery: [HappyHotel, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 1500, roomImg: HappyHotel },
      { type: "Suite Room", price: 1500, roomImg: HappyHotel },
    ],
  },
  {
    id: 4,
    location: "Chicago",
    name: "The Guesthouse Hotel",
    area: "Dowtown, Chicago, USA",
    image: TheGuesthouseHotel,
    gallery: [TheGuesthouseHotel, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 2500, roomImg: TheGuesthouseHotel },
      { type: "Suite Room", price: 2500, roomImg: TheGuesthouseHotel },
    ],
  },
  {
    id: 5,
    location: "Chicago",
    name: "Villa D’Citta",
    area: "Dowtown, Chicago, USA",
    image: VillaDCitta,
    gallery: [VillaDCitta, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 3500, roomImg: VillaDCitta },
      { type: "Suite Room", price: 3500, roomImg: VillaDCitta },
    ],
  },
  {
    id: 6,
    location: "Chicago",
    name: "Loews Hotel",
    area: "Dowtown, Chicago, USA",
    image: LoewsHotel,
    gallery: [LoewsHotel, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 2500, roomImg: LoewsHotel },
      { type: "Suite Room", price: 2500, roomImg: LoewsHotel },
    ],
  },
  {
    id: 7,
    location: "Bangkok",
    name: "Nobu Hotel",
    area: "City Center, Bangkok, Thailand",
    image: NobuHotel,
    gallery: [NobuHotel, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 1500, roomImg: NobuHotel },
      { type: "Suite Room", price: 1500, roomImg: NobuHotel },
    ],
  },
  {
    id: 8,
    location: "Bangkok",
    name: "The Langham",
    area: "City Center, Bangkok, Thailand",
    image: TheLangham,
    gallery: [TheLangham, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 2500, roomImg: TheLangham },
      { type: "Suite Room", price: 2500, roomImg: TheLangham },
    ],
  },
  {
    id: 9,
    location: "Bangkok",
    name: "Happy Hotel",
    area: "City Center, Bangkok, Thailand",
    image: HappyHotel,
    gallery: [HappyHotel, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 1500, roomImg: HappyHotel },
      { type: "Suite Room", price: 1500, roomImg: HappyHotel },
    ],
  },
  {
    id: 10,
    location: "Bangkok",
    name: "The Guesthouse Hotel",
    area: "City Center, Bangkok, Thailand",
    image: TheGuesthouseHotel,
    gallery: [TheGuesthouseHotel, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 2500, roomImg: TheGuesthouseHotel },
      { type: "Suite Room", price: 2500, roomImg: TheGuesthouseHotel },
    ],
  },
  {
    id: 11,
    location: "Bangkok",
    name: "Villa D’Citta",
    area: "City Center, Bangkok, Thailand",
    image: VillaDCitta,
    gallery: [VillaDCitta, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 3500, roomImg: VillaDCitta },
      { type: "Suite Room", price: 3500, roomImg: VillaDCitta },
    ],
  },
  {
    id: 12,
    location: "Bangkok",
    name: "Loews Hotel",
    area: "City Center, Bangkok, Thailand",
    image: LoewsHotel,
    gallery: [LoewsHotel, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 2500, roomImg: LoewsHotel },
      { type: "Suite Room", price: 2500, roomImg: LoewsHotel },
    ],
  },
  {
    id: 13,
    location: "Paris",
    name: "Nobu Hotel",
    area: "Dowtown, Paris, France",
    image: NobuHotel,
    gallery: [NobuHotel, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 1500, roomImg: NobuHotel },
      { type: "Suite Room", price: 1500, roomImg: NobuHotel },
    ],
  },
  {
    id: 14,
    location: "Paris",
    name: "The Langham",
    area: "Dowtown, Paris, France",
    image: TheLangham,
    gallery: [TheLangham, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 2500, roomImg: TheLangham },
      { type: "Suite Room", price: 2500, roomImg: TheLangham },
    ],
  },
  {
    id: 15,
    location: "Paris",
    name: "Happy Hotel",
    area: "Dowtown, Paris, France",
    image: HappyHotel,
    gallery: [HappyHotel, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 1500, roomImg: HappyHotel },
      { type: "Suite Room", price: 1500, roomImg: HappyHotel },
    ],
  },
  {
    id: 16,
    location: "Paris",
    name: "The Guesthouse Hotel",
    area: "Dowtown, Paris, France",
    image: TheGuesthouseHotel,
    gallery: [TheGuesthouseHotel, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 2500, roomImg: TheGuesthouseHotel },
      { type: "Suite Room", price: 2500, roomImg: TheGuesthouseHotel },
    ],
  },
  {
    id: 17,
    location: "Paris",
    name: "Villa D’Citta",
    area: "Dowtown, Paris, France",
    image: VillaDCitta,
    gallery: [VillaDCitta, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 3500, roomImg: VillaDCitta },
      { type: "Suite Room", price: 3500, roomImg: VillaDCitta },
    ],
  },
  {
    id: 18,
    location: "Paris",
    name: "Loews Hotel",
    area: "Dowtown, Paris, France",
    image: LoewsHotel,
    gallery: [LoewsHotel, Gallery1, Gallery2, Gallery3],
    room: [
      { type: "Deluxe Room", price: 2500, roomImg: LoewsHotel },
      { type: "Suite Room", price: 2500, roomImg: LoewsHotel },
    ],
  },
];

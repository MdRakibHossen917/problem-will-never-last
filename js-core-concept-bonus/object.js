const nayak = {
  name: "Sakif khan",
  id: 121,
  activities: function () {
    console.log("morning: mew mew . evening: tiw tiw");
  },
  address: "movie cinema",
  isSingle: true,
  friends: ["apu", "bubli", "salman", "abir", "kanchan"],
  movies: [
    { name: "No. 1", year: 2015 },
    { name: "king khan", year: 2018 },
  ],
  act: function () {
    console.log("acting like sakib khan");
  },

  car: {
    brand: "tesla",
    price: 500000,
    model: 2015,
    import_port: "chittagong",
    manufacturer: {
      name: "tesla",
      ceo: "Elon Mask",
      location: "USA",
    },
  },
};

console.log(nayak.car.manufacturer.name);
//nayak.activities();
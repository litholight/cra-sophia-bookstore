const SHOP_DATA = {
  philoscience: {
    id: 1,
    title: "Philosophy of Science",
    routeName: "philoscience",
    items: [
      {
        id: 1,
        title: "Philosophy of Science - The Central Isues",
        imageUrl: "/book-images/philoScienceCentral.jpg",
        price: 25
      },
      {
        id: 2,
        title:
          "Conjectures and Refutations: The Growth of Scientific Knowledge",
        imageUrl: "/book-images/philoscience/popper.jpg",
        price: 18
      },
      {
        id: 3,
        title: "Criticism and the Growth of Knowledge",
        imageUrl: "/book-images/philoscience/criticism.jpg",
        price: 35
      },
      {
        id: 4,
        title: "The Rationality of Science",
        imageUrl: "/book-images/philoscience/rationality.jpg",
        price: 25
      }
    ]
  },
  oldtestament: {
    id: 2,
    title: "Old Testament",
    routeName: "oldtestament",
    items: [
      {
        id: 1,
        title: "Old Testament",
        imageUrl: "/book-images/oldtestament/ancientisraelitereligion.jpg",
        price: 220
      },
      {
        id: 2,
        title: "The Garden of Eden and the Hope of Immortality",
        imageUrl: "/book-images/oldtestament/garden.jpg",
        price: 280
      },
      {
        id: 3,
        title: "Recent Archaeological Discoveries and Biblical Research",
        imageUrl: "/book-images/oldtestament/achdiscoveries.jpg",
        price: 110
      },
      {
        id: 4,
        title: "Missing Persons and Mistaken Identities",
        imageUrl: "/book-images/oldtestament/missingPersons.jpg",
        price: 160
      }
    ]
  }
};

export default SHOP_DATA;

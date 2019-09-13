const INITIAL_STATE = {
  sections: [
    {
      title: "Philsophy of Science",
      productImage: "/book-images/philoScienceCentral.jpg",
      id: 1,
      linkUrl: "hats"
    },
    {
      title: "History",
      productImage: "/book-images/IDC.jpg",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "Philosophy",
      productImage: "/book-images/IDC.jpg",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "Old Testament",
      productImage: "/book-images/ancientisrael.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "Existentialism",
      productImage: "/book-images/IDC.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

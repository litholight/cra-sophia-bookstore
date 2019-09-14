const INITIAL_STATE = {
  sections: [
    {
      title: "Philsophy of Science",
      imageUrl: "/book-images/philoScienceCentral.jpg",
      id: 1,
      linkUrl: "shop/philoscience"
    },
    {
      title: "Old Testament",
      imageUrl: "/book-images/ancientisrael.png",
      id: 2,
      linkUrl: "shop/oldtestament"
    },
    {
      title: "Philosophy",
      imageUrl: "/book-images/IDC.jpg",
      id: 3,
      linkUrl: "shop/philosophy"
    },
    {
      title: "History",
      imageUrl: "/book-images/IDC.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/history"
    },
    {
      title: "Existentialism",
      imageUrl: "/book-images/IDC.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/existentialism"
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

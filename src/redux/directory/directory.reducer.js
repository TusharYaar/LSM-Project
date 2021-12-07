const INITIAL_STATE = {
  sections: [
    {
      title: "Books",
      imageUrl: "https://www.kimsbookshops.co.uk/wp-content/uploads/2019/12/How-to-sell-second-hand-books-1.jpg",
      id: 1,
      linkUrl: "shop/books",
    },
    {
      title: "Instruments",
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/knxiavk0/drafting-compass-set/u/w/k/engineering-kit-set-squares-protractor-drawing-clips-etc-book-original-imag2gcs48ncedae.jpeg",
      id: 2,
      linkUrl: "shop/instruments",
    },
    {
      title: "Labcoats",
      imageUrl: "https://3.imimg.com/data3/OD/JU/MY-954469/lab-coat-500x500.jpg",
      id: 3,
      linkUrl: "shop/labcoats",
    },
    {
      title: "Bags/Kits",
      imageUrl: "https://sc04.alicdn.com/kf/HLB1luuDSQvoK1RjSZFNq6AxMVXan.jpg",
      id: 4,
      linkUrl: "shop/bags",
    },
    {
      title: "Electronics",
      imageUrl: "https://5.imimg.com/data5/QU/WA/MY-42341821/used-dell-19-inch-monitor-250x250.jpg",
      id: 5,
      linkUrl: "shop/electronics",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

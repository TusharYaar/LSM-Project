const INITIAL_STATE = {
  sections: [
    {
      title: "Books",
      imageUrl: "http://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/books",
    },
    {
      title: "Instruments",
      imageUrl: "http://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/instruments",
    },
    {
      title: "Labcoats",
      imageUrl: "http://i.ibb.co/0jqHpnp/sneekers.png",
      id: 3,
      linkUrl: "shop/labcoats",
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

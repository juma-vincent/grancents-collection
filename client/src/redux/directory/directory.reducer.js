const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://c1.wallpaperflare.com/preview/644/115/795/cap-minimal-grey-gray.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ihEwOlyehgfo/v1/1000x-1.jpg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://inhabitat.com/wp-content/blogs.dir/1/files/2020/02/space-hippie-2-889x592.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://i1.wp.com/shoppeblack.us/wp-content/uploads/2018/01/Screenshot_20200425-104118_Instagram-e1587826904109.jpg?fit=1080%2C808&ssl=1",
      id: 4,
      size: "large",
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://cf.ltkcdn.net/mens-fashion/images/orig/231575-2120x1414-man_in_smart_casual_jacket.jpg",
      id: 5,
      size: "large",
      linkUrl: "shop/mens",
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

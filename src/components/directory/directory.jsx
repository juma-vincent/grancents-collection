import React, { Component } from "react";
import "../menuItem/menuItem";
import "./directory.scss";
import MenuItem from "./../menuItem/menuItem";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://c1.wallpaperflare.com/preview/644/115/795/cap-minimal-grey-gray.jpg",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ihEwOlyehgfo/v1/1000x-1.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://inhabitat.com/wp-content/blogs.dir/1/files/2020/02/space-hippie-2-889x592.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "womens",
          imageUrl:
            "https://i1.wp.com/shoppeblack.us/wp-content/uploads/2018/01/Screenshot_20200425-104118_Instagram-e1587826904109.jpg?fit=1080%2C808&ssl=1",
          id: 4,
          size: "large",
          linkUrl: "",
        },
        {
          title: "mens",
          imageUrl:
            "https://cf.ltkcdn.net/mens-fashion/images/orig/231575-2120x1414-man_in_smart_casual_jacket.jpg",
          id: 5,
          size: "large",
          linkUrl: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

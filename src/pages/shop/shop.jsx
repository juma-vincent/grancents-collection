import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collectionsOverview/collectionsOverview";
import CollectionPage from "../collection/collection";
import { connect } from "react-redux";

const ShopPage = ({ match, collections }) => {
  console.log(match);
  // console.log(collections);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> //This routing doesn't work here */}
    </div>
  );
};

const mapStateToProps = ({ shop: collections }) => ({
  collections: collections,
});

export default connect(mapStateToProps)(ShopPage);

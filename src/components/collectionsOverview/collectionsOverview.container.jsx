import { connect } from "react-redux";
import { selectIsCollectionsFetching } from "./../../redux/shop/shop.selectors";
import { compose } from "redux";
import WithSpinner from "./../withSpinner/withSpinner";
import { createStructuredSelector } from "reselect";
import CollectionOverview from "./collectionsOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
export default CollectionsOverviewContainer;

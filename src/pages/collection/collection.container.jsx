import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CollectionPage from "./collection";
import { selectIsCollectionsLoaded } from "./../../redux/shop/shop.selectors";
import WithSpinner from "./../../components/withSpinner/withSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
  //we want to get a true boolean value for isLoading if collections aren't loaded yet
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
export default CollectionPageContainer;

import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { BUY_ITEM, buyFeature, removeItem } from "./store/actions/index";

import { connect } from "react-redux";

const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    console.log("REMOVE ITEM", item);
    props.removeItem(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    console.log("BUY ITEM", item);
    props.buyFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
        {/* <AddedFeature /> */}
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  { buyFeature, removeItem }
)(App);

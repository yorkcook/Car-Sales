import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { connect } from "react-redux";

class App extends React.Component {
  removeFeature = item => {
    // dispatch an action here to remove an item
  };

  buyItem = item => {
    // dipsatch an action here to add an item
  };

  render() {
    return (
      <div className="boxes">
        <div className="box">
          <Header car={this.props.car} />
          <AddedFeatures car={this.props.car} />
        </div>
        <div className="box">
          <AdditionalFeatures store={this.props.store} />
          <Total
            car={this.props.car}
            additionalPrice={this.props.additionalPrice}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);

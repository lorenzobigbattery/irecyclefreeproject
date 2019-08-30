import React, { Component } from 'react';
import AddressItem from './../AddressItem/AddressItem';


class AddressSuggest extends Component {
  render() {
    return (
        <AddressItem
          label="Address"
          value={this.props.query}
          onChange={this.props.onChange}
          placeholder="Type your address" />
    );
  }
}

export default AddressSuggest;
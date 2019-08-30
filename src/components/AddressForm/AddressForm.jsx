import React, { Component } from 'react';
import AddressSuggest from './../AddressSuggest/AddressSuggest';
import AddressInput from './../AddressInput/AddressInput';
import axios from 'axios';

const APP_ID_HERE = 'ZVMyKWjCTmQTiVcffrSB';
const APP_CODE_HERE = '9ofB6uvELW61xidGsHdssg';

class AddressForm extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        // User has entered something in the address bar
        this.onQuery = this.onQuery.bind(this);
        // User has entered something in an address field
        this.onAddressChange = this.onAddressChange.bind(this);
        // User has clicked the check button
        this.onCheck = this.onCheck.bind(this);
        // User has clicked the clear button
        this.onClear = this.onClear.bind(this);

        this.handleUserInfoChange = this.handleUserInfoChange.bind(this)
        this.emailIsValid = this.emailIsValid.bind(this)
        this.addressInputsLocked = this.addressInputsLocked.bind(this)


    }

    addressInputsLocked(e, state){
        this.props.sendUserInfoToRootComp(e, state)
    }

    handleUserInfoChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    onQuery(evt) {
        const query = evt.target.value;

        if (!query.length > 0) {
            this.setState(this.getInitialState());
            return;
        }

        const self = this;
        axios.get('https://autocomplete.geocoder.api.here.com/6.2/suggest.json',
            {
                'params': {
                    'app_id': APP_ID_HERE,
                    'app_code': APP_CODE_HERE,
                    'query': query,
                    'maxresults': 1,
                }
            }).then(function (response) {
                if (response.data.suggestions.length > 0) {
                    const id = response.data.suggestions[0].locationId;
                    const address = response.data.suggestions[0].address;
                    self.setState({
                        'address': address,
                        'query': query,
                        'locationId': id
                    })
                } else {
                    const state = self.getInitialState();
                    self.setState(state);
                }
            });
    }

    getInitialState() {
        return {
            'firstName': '',
            'lastName': '',
            'email': '',
            'address': {
                'street': '',
                'city': '',
                'state': '',
                'postalCode': '',
                'country': ''
            },
            'query': '',
            'locationId': '',
            'isChecked': false,
            'coords': {}
        }
    }

    onClear(evt) {
        const state = this.getInitialState();
        this.setState(state);
    }

    onAddressChange(evt) {
        const id = evt.target.id
        const val = evt.target.value

        let state = this.state
        state.address[id] = val;
        this.setState(state);
    }

    onCheck(evt) {
        let params = {
            'app_id': APP_ID_HERE,
            'app_code': APP_CODE_HERE,
        }

        if (this.state.locationId.length > 0) {
            params['locationId'] = this.state.locationId;
        } else {
            params['searchtext'] = this.state.address.street
                + this.state.address.city
                + this.state.address.state
                + this.state.address.postalCode
                + this.state.address.country;
        }

        const self = this;
        axios.get('https://geocoder.api.here.com/6.2/geocode.json',
            { 'params': params }
        ).then(function (response) {
            const view = response.data.Response.View
            if (view.length > 0 && view[0].Result.length > 0) {
                const location = view[0].Result[0].Location;

                self.setState({
                    'isChecked': 'true',
                    'locationId': '',
                    'query': location.Address.Label,
                    'address': {
                        'street': location.Address.HouseNumber + ' ' + location.Address.Street,
                        'city': location.Address.City,
                        'state': location.Address.State,
                        'postalCode': location.Address.PostalCode,
                        'country': location.Address.Country
                    },
                    'coords': {
                        'lat': location.DisplayPosition.Latitude,
                        'lon': location.DisplayPosition.Longitude
                    }
                });
                console.log(self.state)
            } else {
                self.setState({
                    'isChecked': true,
                    'coords': null,
                })
            }

        })
            .catch(function (error) {
                console.log('caught failed query', error);
                self.setState({
                    'isChecked': true,
                    'coords': null,
                });
            });
    }

    emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }

    alert() {
        const self = this;
        if (!this.state.isChecked) {
            return;
        }

        let isEmailValid = this.emailIsValid(this.state.email);

        if (!this.state.firstName || !this.state.lastName || !isEmailValid){
            return (
                <div className='alert alert-warning'>Please enter in your full name and a valid email. Thank you.</div>
            )
        }

        if (this.state.coords === null) {
            return (
                <div className="alert alert-warning" role="alert">
                    <b>Invalid.</b> The address is not recognized.
        </div>
            );
        } else {
            return (
                <div className="alert alert-success" role="alert">
                    <b>Valid Address.</b>
                    <div>{this.state.address.postalCode}</div>
                    <div>{this.state.address.city}</div>
                    <div>{this.state.address.street}</div>
                    <div>{this.state.address.country}</div>
                    <button onClick={(e) => { this.addressInputsLocked(e, self.state) }}>Submit Address</button>
                </div>
            );
        }
    }

    render() {
        let result = this.alert();
        return (
            <div className="container">

                <input name='firstName' onChange={(e) => { this.handleUserInfoChange(e) }} placeholder='First Name' />
                <input name='lastName' onChange={(e) => { this.handleUserInfoChange(e) }} placeholder='Last Name' />
                <input name='email' onChange={(e) => { this.handleUserInfoChange(e) }} placeholder='Email' />


                <AddressSuggest
                    query={this.state.query}
                    onChange={this.onQuery}
                />
                <AddressInput
                    street={this.state.address.street}
                    city={this.state.address.city}
                    state={this.state.address.state}
                    postalCode={this.state.address.postalCode}
                    country={this.state.address.country}
                    onChange={this.onAddressChange}
                />
                <br />
                {result}
                <button type="submit" className="btn btn-primary" onClick={this.onCheck}>Check</button>
                <button type="submit" className="btn btn-outline-secondary" onClick={this.onClear}>Clear</button>
            </div>
        );
    }
}

export default AddressForm;




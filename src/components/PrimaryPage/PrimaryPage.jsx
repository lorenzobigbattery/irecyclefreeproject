import React, { useState, useEffect } from 'react'
import { Switch, Link, Route, HashRouter } from 'react-router-dom'
import LoginRegister from "./../../components/LoginRegister/LoginRegister";
import LoginRegisterPage from "./../../components/LoginRegisterPage/LoginRegisterPage";
import AddressForm from "./../../components/AddressForm/AddressForm";
import BusinessRegister from "./../../components/BusinessRegister/BusinessRegister";
import CategorySelectModal from "./../../components/CategorySelectModal/CategorySelectModal";
import FirstOptionsMenu from "./../../components/FirstOptionsMenu/FirstOptionsMenu";
import SecondOptionsMenu from "./../../components/SecondOptionsMenu/SecondOptionsMenu";
import ThirdOptionsMenu from "./../../components/ThirdOptionsMenu/ThirdOptionsMenu";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Provider } from "react-router-dom";
import Popup from "reactjs-popup";
import './PrimaryPage.css'

function PrimaryPage() {

    const [itemNavigation, setItemNavigation] = useState({
        category: "",
        brand: "",
        model: "",
        condition: "",
    });

    const [listOfRecyclables, setListOfRecyclables] = useState([])

    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: {
            street: '',
            city: '',
            state: '',
            postalCode: '',
            country: ''
        },
        coords: {
            lat: '',
            lon: ''
        },
        query: '',
        isSubmitted: ''
    })

    const sendUserInfoToRootComp = (e, userInformation) => {
        e.preventDefault();
        const { firstName, lastName, email, address, coords, query } = userInformation
        setUserInfo({
            firstName,
            lastName,
            email,
            address,
            coords,
            query,
            isSubmitted: true
        })
        console.log('line 57 from sendUserInfoToRootComp fn', userInfo)
    }

    const chooseCategory = category => {
        setItemNavigation({
            ...itemNavigation,
            category: category,
            brand: '',
            model: '',
            condition: ''
        });
        
    };

    const chooseBrand = e => {
        e.preventDefault();
        if (e.target.textContent === 'Other'){
            return setItemNavigation({
                ...itemNavigation,
                brand: "Other",
                model: "NA",
                condition: ""
            })
        }
        
        setItemNavigation({
            ...itemNavigation,
            brand: e.target.alt,
            model: '',
            condition: ''
        });
        afterChoosing();
    };

    const afterChoosing = () => {
        setTimeout(() => {
            console.log(itemNavigation)
        }, 2000)
    }

    const chooseModel = e => {
        e.preventDefault();
        if (e.target.textContent === 'Other'){
            return setItemNavigation({
                ...itemNavigation,
                model: "Other",
                condition: ""
            })
        }
        
        setItemNavigation({
            ...itemNavigation,
            model: e.target.alt,
            condition: ''
        });
    };
    
    const chooseCondition = (e) => {
        e.preventDefault();
        const newItem = {
            category: itemNavigation.category,
            brand: itemNavigation.brand,
            model: itemNavigation.model,
            condition: e.target.alt.toString() || e.target.textContent.toString(),
            key: (itemNavigation.brand + itemNavigation.model + e.target.textContent).toString(),
            quantity: 1
        }
        console.log(`line 125 from chooseCondition fn`, newItem)
        setListOfRecyclables([...listOfRecyclables, newItem])
        setItemNavigation({
            ...itemNavigation,
            category: "",
            brand: "",
            model: "",
            condition: ""
        });
    };
    
    const startOver = () => {
        setItemNavigation({
            ...itemNavigation,
            category: "",
            brand: "",
            model: "",
            condition: ""
        });
        console.log(`line 143 from startOver fn`, itemNavigation)
    };

    const decreaseQuantity = (e, brand, model, condition, quantity) => {
        e.preventDefault();
        const keyOfItem = (brand + model + condition).toString();
        if (quantity > 1) {
            let updatedList = [];
            for (let i = 0; i < listOfRecyclables.length; i++) {
                if (listOfRecyclables[i].key === keyOfItem) {
                    listOfRecyclables[i].quantity = listOfRecyclables[i].quantity - 1;
                }
                updatedList.push(listOfRecyclables[i])
            }
            return setListOfRecyclables([...updatedList])
        }
        if (quantity === 1) {
            let newList = listOfRecyclables.filter((item) => {
                return item.key !== keyOfItem
            })
            return setListOfRecyclables([...newList])
        }
    }

    const increaseQuantity = (e, brand, model, condition, quantity) => {
        e.preventDefault();
        const keyOfItem = (brand + model + condition).toString();
        if (quantity < 20) {
            let updatedList = [];
            for (let i = 0; i < listOfRecyclables.length; i++) {
                if (listOfRecyclables[i].key === keyOfItem) {
                    listOfRecyclables[i].quantity = listOfRecyclables[i].quantity + 1;
                }
                updatedList.push(listOfRecyclables[i])
            }
            return setListOfRecyclables([...updatedList])
        }

    }


    const goBackToMainCategories = () => {
        setItemNavigation({
            ...itemNavigation,
            mainCategory: ""
        });
    };

    return (
        <div className="App">
            <header className="header">
                <div className="headercolumn1">
                    Recycle in&nbsp; <b>3</b> &nbsp;easy steps!
          </div>
                <div className="headercolumn2">
                    <img
                        style={{ height: "80px" }}
                        src={require("./../../images/irecyclefreelogo.png")}
                    />
                </div>
                <div className="headercolumn3"></div>
            </header>
            <div className="maincontainer">
                <div className="maincolumn1">
                    <div className="loginregistercontainer">

                        <AddressForm sendUserInfoToRootComp={sendUserInfoToRootComp} />

                    </div>
                    <div className="businessaccountcontainer">
                        ARE YOU A BUSINESS? SETUP FREE CORPORATE ACCOUNT
                        
                        <Link className='myButton' to='/business'>HERE</Link>
                    </div>
                </div>
                <div className="maincolumn2">
                    <div>STEP #1: PICK ITEMS TO RECYCLE</div>
                    <div className="pickallitemscontainer">

                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='smartphone' title='Smartphones' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='laptop' title='Laptops' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='console' title='Gaming Consoles' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='tablet' title='Tablets' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='monitor' title='Monitors' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='desktop' title='Desktops' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='cellphone' title='Cellphones' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='musicplayer' title='MP3 Players' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='smartwatch' title='Smartwatches' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='dvdplayer' title='DVD Players' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='printer' title='Printers' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='photocamera' title='Digital Cameras' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='videocamera' title='Video Cameras' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='iotdevice' title='Smart Home Devices' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='router' title='Routers' chooseCategory={chooseCategory} />
                        <CategorySelectModal chooseBrand={chooseBrand} chooseModel={chooseModel} chooseCondition={chooseCondition} startOver={startOver} itemNavigation={itemNavigation} category='homesystem' title='Home Systems' chooseCategory={chooseCategory} />




                    </div>

                    <div className="confirmitemscontainer">
                        <div className="confirmdialog">
                            <p>CONFIRM:</p>
                            <label>YES</label>
                            <input type="checkbox" />
                            <label>NO</label>
                            <input type="checkbox" />
                        </div>
                        <div className="boxofconfirmeditems">
                            <img
                                style={{ height: "200px" }}
                                value="speakers"
                                src={require("./../../images/icons/open-cardboard-box1.png")}
                                alt="icon of a speaker"
                            />
                        </div>
                        <div className="confirmeditemslist">
                            <ol>
                                {listOfRecyclables[0] ? (listOfRecyclables.map((item) => {
                                    const { brand, model, condition, quantity } = item
                                    return (<li key={brand + model + condition}>
                                        {brand} {model} ({condition}) qty:
                      <span className='changequantity' onClick={(e) => { decreaseQuantity(e, item.brand, item.model, item.condition, item.quantity) }}>-</span>
                                        {quantity}
                                        <span className='changequantity' onClick={(e) => { increaseQuantity(e, item.brand, item.model, item.condition, item.quantity) }}>+</span>
                                    </li>)
                                })) : (<li>No items to display</li>)}
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="maincolumn3">
                    <div className="printlabelcontainer">
                        <h1>STEP #2: PRINT LABEL</h1>
                        <span className="weight">
                            WEIGHT: <input placeholder="lbs" /> <input placeholder="oz" />{" "}
                        </span>
                        <span className="dimensions">
                            DIMENSIONS: <input placeholder="L" /> x <input placeholder="W" />{" "}
                            x <input placeholder="H" />
                        </span>
                        <button className="myButton">PRINT LABEL HERE</button>
                    </div>
                    <div className="packboxcontainer">
                        <h1>STEP #3: PACK BOX & PUT OUTSIDE</h1>
                        <div className="eachpackagingstep"></div>
                        <div className="eachpackagingstep"></div>
                        <div className="eachpackagingstep"></div>
                    </div>
                    <div className="donecontainer">
                        <h1>And You're Done!</h1>
                        <button className="myButton">
                            PRINT YOUR RECYCLING CERTIFICATE HERE
              </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrimaryPage

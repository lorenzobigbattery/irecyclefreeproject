import React from 'react'
import './ThirdOptionsMenu.css'
import Popup from "reactjs-popup";

const Card = ({ title }) => (
    <div className="card">
      <div className="header">{title} position </div>
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem
        sapiente labore architecto exercitationem optio quod dolor cupiditate
      </div>
    </div>
  );

function ThirdOptionsMenu(props) {
    const renderSwitch = (brand) => {
        switch(brand){
            case 'Apple':
                return (<div className="thirdoptionsmenucontainer">
                    <h3>Condition:</h3>
                    <button onClick={(e)=>{props.chooseCondition(e)}}>Working</button>
                    <span>
                        <button onClick={(e)=>{props.chooseCondition(e)}}>Functional</button>
                        <Popup trigger={<span className='functionalasterisk'>*</span>} position="right top" on="hover">
                            <div className="functionalasteriskcard">
                                <div className="functionalasteriskheader">Functional</div>
                                <div className="content">
                                    If the device turns on but not in optimal condition (ie. if the screen is cracked or knobs are missing)
                                </div>
                            </div>
                        </Popup>
                    </span>
                    <button onClick={(e)=>{props.chooseCondition(e)}}>For Parts/Repair</button>
                </div>);
            case 'Samsung':
                return (<div>
                    <h3>Condition:</h3>
                    <button onClick={(e)=>{props.chooseCondition(e)}}>Working</button>
                    <button onClick={(e)=>{props.chooseCondition(e)}}>Functional</button>
                    <button onClick={(e)=>{props.chooseCondition(e)}}>For Parts/Repair</button>
                </div>);
            case 'LG':
                return (<div>
                    <h3>Samsung Models</h3>
                    <button>S2</button>
                    <button>S3</button>
                    <button>Note</button>
                    <button>Note 2</button>
                </div>);
            default:
                return (<div>
                    <h3>MODEL MENU</h3>
                    <button>MODEL #1</button>
                    <button>MODEL #2</button>
                    <button>MODEL #3</button>
                    <button>MODEL #4</button>
                    <button>MODEL #5</button>
                    <button>MODEL #6</button>
                    <button>MODEL #7</button>
                    <button>MODEL #8</button>
                    <button>OTHER</button>
                </div>)
        }
    }
    return (
        <React.Fragment className="thirdoptionsmenucontainer">
            {renderSwitch(props.brand)}
        </React.Fragment>
    )
}

export default ThirdOptionsMenu

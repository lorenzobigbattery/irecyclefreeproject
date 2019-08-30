import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup'
import './BusinessRegister.css'
import FirstOptionsMenu from '../FirstOptionsMenu/FirstOptionsMenu';


function BusinessRegister() {
    return (
        <Popup className='popupcontainer' trigger={<h3 className="myButton"> HERE </h3>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <FirstOptionsMenu category='smartphone' />

        <div className="actions">
          <button
            className="myButton"
            onClick={() => {
              close();
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    )}
  </Popup>
    )
}

export default BusinessRegister

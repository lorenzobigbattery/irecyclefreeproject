import React from 'react'
import './FirstOptionsMenu.css'

function FirstOptionsMenu(props) {

    const renderSwitch = (category) => {
        switch(category){
            case 'smartphone':
                return (<div>
                    <h3>Smart Phone Brands:</h3>
                    <button onClick={(e)=>{props.chooseBrand(e)}}>Apple</button>
                    <button onClick={(e)=>{props.chooseBrand(e)}}>Samsung</button>
                    <button onClick={(e)=>{props.chooseBrand(e)}}>LG</button>
                    <button>Google</button>
                    <button>Sony</button>
                    <button>OTHER</button>
                </div>);
                break;
            case 'laptop':
                return (<div>
                    <h3>Laptop Brands:</h3>
                    <button>Dell</button>
                    <button>Apple</button>
                    <button>Hewlett Packard (HP)</button>
                    <button>Google</button>
                    <button>Lenovo</button>
                    <button>Asus</button>
                    <button>OTHER</button>
                </div>);
                break;
            case 'desktop':
                return (<div>
                    <h3>Desktop Brands:</h3>
                    <button>Dell</button>
                    <button>Apple</button>
                    <button>Hewlett Packard (HP)</button>
                    <button>Lenovo</button>
                    <button>Google</button>
                    <button>Acer</button>
                    <button>Asus</button>
                    <button>OTHER</button>
                </div>);
                break;
            case 'console':
                return (<div>
                    <h3>Game Console Brands:</h3>
                    <button>Sony</button>
                    <button>Nintendo</button>
                    <button>Microsoft</button>
                    <button>Sega</button>
                    <button>Samsung</button>
                    <button>Oculus</button>
                    <button>OTHER</button>
                </div>);
                break;
            case 'tablet':
                return (<div>
                    <h3>Tablet Brands:</h3>
                    <button>Sony</button>
                    <button>LG</button>
                    <button>Asus</button>
                    <button>Dell</button>
                    <button>Samsung</button>
                    <button>Amazon</button>
                    <button>OTHER</button>
                </div>);
                break;
            case 'monitor':
                return (<div>
                    <h3>Monitor Brands:</h3>
                    <button>Sony</button>
                    <button>LG</button>
                    <button>Asus</button>
                    <button>Dell</button>
                    <button>Samsung</button>
                    <button>Acer</button>
                    <button>BenQ</button>
                    <button>OTHER</button>
                </div>);
                break;
            case 'cellphone':
                return (<div>
                    <h3>Cellphone Brands:</h3>
                    <button>Sony</button>
                    <button>LG</button>
                    <button>T-Mobile</button>
                    <button>Samsung</button>
                    <button>Motorola</button>
                    <button>HTC</button>
                    <button>Blackberry</button>
                    <button>Other</button>
                </div>);
                break;
            case 'printer':
                return (<div>
                    <h3>Printer Type:</h3>
                    <button>Inkjet</button>
                    <button>Laser</button>
                </div>);
                break;
            case 'iotdevice':
                return (<div>
                    <h3>Smart Home Devices Brands:</h3>
                    <button>NEST</button>
                    <button>August</button>
                    <button>Ring</button>
                    <button>Amazon</button>
                    <button>OTHER</button>
                </div>);
                break;
            case 'router':
                return (<div>
                    <h3>Router Brands:</h3>
                    <button>Netgear</button>
                    <button>WiseTiger</button>
                    <button>TP-Link</button>
                    <button>Linksys</button>
                    <button>Asus</button>
                    <button>OTHER</button>
                </div>);
                break;
            case 'smartwatch':
                return (<div>
                    <h3>Smart Watch Brands:</h3>
                    <button>Apple</button>
                    <button>Samsung</button>
                    <button>Motorola</button>
                    <button>OTHER</button>
                </div>);
                break;
            case 'photocamera':
                return (<div>
                    <h3>Digital Camera Brands:</h3>
                    <button>Canon</button>
                    <button>Nikon</button>
                    <button>Sony</button>
                    <button>Panasonic</button>
                    <button>Leica</button>
                    <button>OTHER</button>
                </div>);
                break;
            default:
                return (<div>
                    <h3>MISC MENU</h3>
                    <button>BRAND #1</button>
                    <button>BRAND #2</button>
                    <button>BRAND #3</button>
                    <button>BRAND #4</button>
                    <button>BRAND #5</button>
                    <button>BRAND #6</button>
                    <button>BRAND #7</button>
                    <button>BRAND #8</button>
                    <button>OTHER</button>
                </div>)
        }
    }

    return (
        <React.Fragment>
            {renderSwitch(props.category)}
        </React.Fragment>
    )
}

export default FirstOptionsMenu

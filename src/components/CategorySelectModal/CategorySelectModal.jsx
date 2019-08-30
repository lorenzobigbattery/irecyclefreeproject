import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup'
import './CategorySelectModal.css'
import ChooseModel from './../ChooseModel/ChooseModel'
import ChooseCondition from './../ChooseCondition/ChooseCondition'

function CategorySelectModal(props) {


    const isBrandSelected = props.itemNavigation.brand.length > 0 ? 'choosemodel-hide' : 'choosemodel-hide';



    

    const makePlural = (string) => {
        const pluralWord = string + 's'
        return pluralWord;
    }

    const renderSwitchBrands = (category) => {
        switch(category){
            case 'smartphones':
                return (<div className='choosebrandcontainer'>
                    <h1>Smart Phone Brands:</h1>
                    <section>
                        <img className='svg-brand-icon' alt='Apple' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/apple.svg')} />
                        <img className='svg-brand-icon' alt='Samsung' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/samsung.svg')} />
                        <img className='svg-brand-icon' alt='LG' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/lg.svg')} />
                        <img className='svg-brand-icon' alt='Google' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/google.svg')} />
                        <img className='svg-brand-icon' alt='Sony' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/sony.svg')} />
                        <img className='svg-brand-icon' alt='Huawei' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/huawei.svg')} />
                        <img className='svg-brand-icon' alt='Motorola' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/motorola.svg')} />
                        <img className='svg-brand-icon' alt='HTC' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/htc.svg')} />
                        <div className='otheroption' onClick={(e)=>{ props.chooseBrand(e) }}>Other</div>
                    </section>
                </div>);
                break;
            case 'laptops':
                return (<div className='choosebrandcontainer'>
                    <h1>Laptop Brands:</h1>
                    <section>
                        <img className='svg-brand-icon' alt='Apple' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/apple.svg')} />
                        <img className='svg-brand-icon' alt='Dell' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/dell.svg')} />
                        <img className='svg-brand-icon' alt='HP' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/hp.svg')} />
                        <img className='svg-brand-icon' alt='Lenovo' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/lenovo.svg')} />
                        <img className='svg-brand-icon' alt='Sony' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/sony.svg')} />
                        <img className='svg-brand-icon' alt='Acer' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/acer.svg')} />
                        <img className='svg-brand-icon' alt='Asus' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/asus.svg')} />
                        <img className='svg-brand-icon' alt='Toshiba' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/toshiba.svg')} />
                        <div className='otheroption' onClick={(e)=>{ props.chooseBrand(e) }}>Other</div>
                    </section>
                </div>);
                break;
            case 'desktops':
                return (<div className='choosebrandcontainer'>
                    <h1>Desktop Brands:</h1>
                    <section>
                        <img className='svg-brand-icon' alt='Apple' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/apple.svg')} />
                        <img className='svg-brand-icon' alt='Dell' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/dell.svg')} />
                        <img className='svg-brand-icon' alt='HP' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/hp.svg')} />
                        <img className='svg-brand-icon' alt='Lenovo' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/lenovo.svg')} />
                        <img className='svg-brand-icon' alt='Google' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/google.svg')} />
                        <img className='svg-brand-icon' alt='Acer' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/acer.svg')} />
                        <img className='svg-brand-icon' alt='Asus' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/asus.svg')} />
                        <img className='svg-brand-icon' alt='Toshiba' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/toshiba.svg')} />
                        <div className='otheroption' onClick={(e)=>{ props.chooseBrand(e) }}>Other</div>
                    </section>
                </div>);
                break;
                case 'consoles':
                    return (<div className='choosebrandcontainer'>
                    <h1>Game Console Brands:</h1>
                    <section>
                        <img className='svg-brand-icon' alt='Sony' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/sony.svg')} />
                        <img className='svg-brand-icon' alt='Nintendo' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/nintendo.svg')} />
                        <img className='svg-brand-icon' alt='Microsoft' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/microsoft.svg')} />
                        <img className='svg-brand-icon' alt='Sega' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/sega.svg')} />
                        <img className='svg-brand-icon' alt='Sega' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/atari.svg')} />
                        <img className='svg-brand-icon' alt='Oculus' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/oculus.svg')} />
                        <div className='otheroption' onClick={(e)=>{ props.chooseBrand(e) }}>Other</div>
                    </section>
                </div>);
                break;
            case 'tablets':
                return (<div className='choosebrandcontainer'>
                    <h1>Tablet Brands:</h1>
                    <section>
                        <img className='svg-brand-icon' alt='Apple' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/apple.svg')} />
                        <img className='svg-brand-icon' alt='Dell' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/dell.svg')} />
                        <img className='svg-brand-icon' alt='HP' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/hp.svg')} />
                        <img className='svg-brand-icon' alt='Lenovo' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/lenovo.svg')} />
                        <img className='svg-brand-icon' alt='Sony' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/sony.svg')} />
                        <img className='svg-brand-icon' alt='Acer' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/acer.svg')} />
                        <img className='svg-brand-icon' alt='Asus' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/asus.svg')} />
                        <img className='svg-brand-icon' alt='Toshiba' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/toshiba.svg')} />
                        <div className='otheroption' onClick={(e)=>{ props.chooseBrand(e) }}>Other</div>
                    </section>
                </div>);
                break;
            case 'monitors':
                return (<div className='choosebrandcontainer'>
                    <h1>Monitor Brands:</h1>
                    <section>
                        <img className='svg-brand-icon' alt='Apple' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/apple.svg')} />
                        <img className='svg-brand-icon' alt='Dell' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/dell.svg')} />
                        <img className='svg-brand-icon' alt='HP' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/hp.svg')} />
                        <img className='svg-brand-icon' alt='Lenovo' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/lenovo.svg')} />
                        <img className='svg-brand-icon' alt='Sony' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/sony.svg')} />
                        <img className='svg-brand-icon' alt='Acer' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/acer.svg')} />
                        <img className='svg-brand-icon' alt='Asus' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/asus.svg')} />
                        <img className='svg-brand-icon' alt='BenQ' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/benq.svg')} />
                        <div className='otheroption' onClick={(e)=>{ props.chooseBrand(e) }}>Other</div>
                    </section>
                </div>);
                break;
            case 'cellphones':
                return (<div className='choosebrandcontainer'>
                    <h1>Cellphone Brands:</h1>
                    <section>
                        <img className='svg-brand-icon' alt='Sony' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/sony.svg')} />
                        <img className='svg-brand-icon' alt='Motorola' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/motorola.svg')} />
                        <img className='svg-brand-icon' alt='Samsung' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/samsung.svg')} />
                        <img className='svg-brand-icon' alt='Blackberry' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/blackberry.svg')} />
                        <img className='svg-brand-icon' alt='LG' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/lg.svg')} />
                        <img className='svg-brand-icon' alt='HTC' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/htc.svg')} />
                        <div className='otheroption' onClick={(e)=>{ props.chooseBrand(e) }}>Other</div>
                    </section>
                </div>);
                break;
                case 'printers':
                    return (<div className='choosebrandcontainer'>
                    <h1>Printer Type:</h1>
                    <section>
                        <div value='Inkjet' className='otheroption'>Inkjet</div>
                        <div value='Laser' className='otheroption'>Laser</div>
                    </section>
                </div>);
                break;
                case 'iotdevices':
                    return (<div className='choosebrandcontainer'>
                    <h1>Smart Home Devices Brands:</h1>
                    <section>
                        <img className='svg-brand-icon' alt='Ring' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/ring.svg')} />
                        <img className='svg-brand-icon' alt='Nest' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/nest.svg')} />
                        <img className='svg-brand-icon' alt='August' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/august.svg')} />
                        <img className='svg-brand-icon' alt='Amazon' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/amazon.svg')} />
                        <div className='otheroption' onClick={(e)=>{ props.chooseBrand(e) }}>Other</div>
                    </section>
                </div>);
                break;
                case 'routers':
                    return (<div className='choosebrandcontainer'>
                    <h1>Router Brands:</h1>
                    <section>
                        <img className='svg-brand-icon' alt='Netgear' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/netgear.svg')} />
                        <img className='svg-brand-icon' alt='Linksys' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/linksys.svg')} />
                        <img className='svg-brand-icon' alt='TP-Link' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/tplink.svg')} />
                        <img className='svg-brand-icon' alt='Asus' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/asus.svg')} />
                        <div className='otheroption' onClick={(e)=>{ props.chooseBrand(e) }}>Other</div>
                    </section>
                </div>);
                break;
                case 'smartwatchs':
                    return (<div className='choosebrandcontainer'>
                    <h1>Smart Watch Brands:</h1>
                    <section>
                        <img className='svg-brand-icon' alt='Apple' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/apple.svg')} />
                        <img className='svg-brand-icon' alt='Samsung' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/samsung.svg')} />
                        <img className='svg-brand-icon' alt='Motorola' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/motorola.svg')} />
                        <div className='otheroption' onClick={(e)=>{ props.chooseBrand(e) }}>Other</div>
                    </section>
                </div>);
                break;
                case 'photocameras':
                    return (<div className='choosebrandcontainer'>
                    <h1>Digital Camera Brands:</h1>
                    <section>
                        <img className='svg-brand-icon' alt='Canon' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/canon.svg')} />
                        <img className='svg-brand-icon' alt='Nikon' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/nikon.svg')} />
                        <img className='svg-brand-icon' alt='Sony' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/sony.svg')} />
                        <img className='svg-brand-icon' alt='Panasonic' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/panasonic.svg')} />
                        <img className='svg-brand-icon' alt='Leica' onClick={(e)=>{ props.chooseBrand(e) }} src={require('./../../images/brands/leica.svg')} />
                        <div className='otheroption' onClick={(e)=>{ props.chooseBrand(e) }}>Other</div>    
                    </section>
                </div>);
                break;
            default:
                return (<div className='choosebrandcontainer'>
                    <h1>MISC MENU</h1>
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
        <Popup onClose={ () => { props.startOver(); } } onOpen={() => { props.chooseCategory(makePlural(props.category)); }} className='popupcontainer' trigger={
            <div className='eachcategorycontainer' value={makePlural(props.category)}  >
                <img className="eachitemicon" src={require(`./../../images/icons/${props.category}.png`)} alt={`brand-icon of ${props.category}`} />
                <h3>{props.title}</h3>
            </div>
        } modal>
            {close => (
            <div className="modal">
                <a className="close" onClick={close}>
                    &times;
                </a>


                {renderSwitchBrands((makePlural(props.category)))}

                <ChooseModel chooseCategory={props.chooseCategory} chooseModel={props.chooseModel} chooseCondition={props.chooseCondition} startOver={props.startOver} itemNavigation={props.itemNavigation} category={props.itemNavigation.category} brand={props.itemNavigation.brand} /> 
                <ChooseCondition chooseCategory={props.chooseCategory} chooseModel={props.chooseModel} chooseCondition={props.chooseCondition} startOver={props.startOver} itemNavigation={props.itemNavigation} category={props.itemNavigation.category} />

                {props.itemNavigation.category ? (<p>{props.itemNavigation.category}</p>) : null}
                {props.itemNavigation.brand ? (<p>{props.itemNavigation.brand}</p>) : null}
                {props.itemNavigation.model ? (<p>{props.itemNavigation.model}</p>) : null}
                {props.itemNavigation.condition ? (<p>{props.itemNavigation.condition}</p>) : null}
                
                

                <div className="actions">
                    <button onClick={() => {  close(); }} > Close </button>
                </div>
            </div>  )}
        </Popup>
    )
}

export default CategorySelectModal

import React from 'react'
import './ChooseModel.css'

function ChooseModel(props) {

    const renderIfElseStatements = (category, brand) => {
        if (category === 'smartphones' && brand === 'Apple'){
            return (<div className='choosemodelcontainer slide'>
                <h3>Apple Models</h3>
                <section>
                    <img className='png-model-icon' alt='iPhone 4 Series' onClick={(e)=>{ props.chooseModel(e) }} src={require('./../../images/modelseries/apple/iphone4series.png')} />
                    <img className='png-model-icon' alt='iPhone 5 Series' onClick={(e)=>{ props.chooseModel(e) }} src={require('./../../images/modelseries/apple/iphone5series.png')} />
                    <img className='png-model-icon' alt='iPhone 6 Series' onClick={(e)=>{ props.chooseModel(e) }} src={require('./../../images/modelseries/apple/iphone6series.png')} />
                    <img className='png-model-icon' alt='iPhone 7 Series' onClick={(e)=>{ props.chooseModel(e) }} src={require('./../../images/modelseries/apple/iphone7series.png')} />
                    <img className='png-model-icon' alt='iPhone 8 Series' onClick={(e)=>{ props.chooseModel(e) }} src={require('./../../images/modelseries/apple/iphone8series.png')} />
                    <img className='png-model-icon' alt='iPhone X Series' onClick={(e)=>{ props.chooseModel(e) }} src={require('./../../images/modelseries/apple/iphonexseries.png')} />
                    <div className='otheroption' onClick={(e)=>{ props.chooseModel(e) }}>Other</div>
                </section>
            </div>);
        } else if (category ==='smartphones' && brand === 'Samsung'){
            return (<div className='choosemodelcontainer slide'>
                <h3>Samsung Models</h3>
                <button onClick={(e)=>{props.chooseModel(e)}} >S</button>
                <button>S II</button>
                <button>S3</button>
                <button>S3 Mini</button>
                <button>S4</button>
                <button>S4 Mini</button>
                <button>Galaxy Note 1</button>
                <button>Galaxy Note 2</button>
                <button>Galaxy Note 3</button>
                <button>Galaxy Note 4</button>
                <button>Galaxy Note 5</button>
                <button>Galaxy Note 6</button>
                <button>Galaxy Note 7</button>
                <button>Galaxy Note 8</button>
                <button>Galaxy Note 9</button>
                <button>OTHER</button>
            </div>);
        } else if (category === 'laptops' && brand === 'Samsung'){

        } else if ( brand === 'Other' ) {
            return (null);
        }
        else {
            return (null);
        }
    }

    return (
        <div className={ (props.itemNavigation.brand) ? ('choosemodel-display slide-wrapper') : ('choosemodel-hide slide-wrapper') }>
            {renderIfElseStatements(props.category, props.brand)}

            {props.itemNavigation.category ? (<p>{props.itemNavigation.category}</p>) : null}
            {props.itemNavigation.brand ? (<p>{props.itemNavigation.brand}</p>) : null}
            {props.itemNavigation.model ? (<p>{props.itemNavigation.model}</p>) : null}
            {props.itemNavigation.condition ? (<p>{props.itemNavigation.condition}</p>) : null}
        </div>
    )
}

export default ChooseModel

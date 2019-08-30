import React from 'react'
import './ChooseModel.css'

function ChooseModel(props) {

    const renderIfElseStatements = (category, brand) => {
        if (category === 'smartphones' && brand === 'Apple'){
            return (<div className='choosemodelcontainer slide'>
                <h3>Apple Models</h3>
                <section>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 4 Series' src={require('./../../images/modelseries/apple/iphone4series.png')} />
                        <p>iPhone 4 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 5 Series' src={require('./../../images/modelseries/apple/iphone5series.png')} />
                        <p>iPhone 5 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 5 Series' src={require('./../../images/modelseries/apple/iphone6series.png')} />
                        <p>iPhone 6 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 5 Series' src={require('./../../images/modelseries/apple/iphone7series.png')} />
                        <p>iPhone 7 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 5 Series' src={require('./../../images/modelseries/apple/iphone8series.png')} />
                        <p>iPhone 8 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 5 Series' src={require('./../../images/modelseries/apple/iphonexseries.png')} />
                        <p>iPhone X Series</p>
                    </div>              
                    <div className='otheroptionmodel' onClick={(e)=>{ props.chooseModel(e) }}>Other</div>
                </section>
            </div>);
        } else if (category ==='smartphones' && brand === 'Samsung'){
            return (<div className='choosemodelcontainer slide'>
                <h3>Samsung Models</h3>
                <section>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 4 Series' src={require('./../../images/modelseries/apple/iphone4series.png')} />
                        <p>iPhone 4 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 5 Series' src={require('./../../images/modelseries/apple/iphone5series.png')} />
                        <p>iPhone 5 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 5 Series' src={require('./../../images/modelseries/apple/iphone6series.png')} />
                        <p>iPhone 6 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 5 Series' src={require('./../../images/modelseries/apple/iphone7series.png')} />
                        <p>iPhone 7 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 5 Series' src={require('./../../images/modelseries/apple/iphone8series.png')} />
                        <p>iPhone 8 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 5 Series' src={require('./../../images/modelseries/apple/iphonexseries.png')} />
                        <p>iPhone X Series</p>
                    </div>
                      
                    <div className='otheroption' onClick={(e)=>{ props.chooseModel(e) }}>Other</div>
                </section>
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
        </div>
    )
}

export default ChooseModel

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
                        <img className='png-model-icon' alt='iPhone 6 Series' src={require('./../../images/modelseries/apple/iphone6series.png')} />
                        <p>iPhone 6 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 7 Series' src={require('./../../images/modelseries/apple/iphone7series.png')} />
                        <p>iPhone 7 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone 8 Series' src={require('./../../images/modelseries/apple/iphone8series.png')} />
                        <p>iPhone 8 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='iPhone X Series' src={require('./../../images/modelseries/apple/iphonexseries.png')} />
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
                        <img className='png-model-icon' alt='Samsung S6 Series' src={require('./../../images/modelseries/samsung/samsunggalaxys6series.png')} />
                        <p>Samsung S6 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='Samsung S7 Series' src={require('./../../images/modelseries/samsung/samsunggalaxys7series.png')} />
                        <p>Samsung S7 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='Samsung S8 Series' src={require('./../../images/modelseries/samsung/samsunggalaxys8series.png')} />
                        <p>Samsung S8 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='Samsung S9 Series' src={require('./../../images/modelseries/samsung/samsunggalaxys9series.png')} />
                        <p>Samsung S9 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='Samsung S10 Series' src={require('./../../images/modelseries/samsung/samsunggalaxys10series.png')} />
                        <p>Samsung S10 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='Samsung Note Series' src={require('./../../images/modelseries/samsung/samsunggalaxynoteseries.png')} />
                        <p>Samsung Note Series</p>
                    </div>
                      
                    <div className='otheroption' onClick={(e)=>{ props.chooseModel(e) }}>Other</div>
                </section>
            </div>);
        } else if (category === 'laptops' && brand === 'Dell'){
            return (<div className='choosemodelcontainer slide'>
                <h3>Dell Models</h3>
                <section>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='Samsung S6 Series' src={require('./../../images/modelseries/samsung/samsunggalaxys6series.png')} />
                        <p>Samsung S6 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='Samsung S7 Series' src={require('./../../images/modelseries/samsung/samsunggalaxys7series.png')} />
                        <p>Samsung S7 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='Samsung S8 Series' src={require('./../../images/modelseries/samsung/samsunggalaxys8series.png')} />
                        <p>Samsung S8 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='Samsung S9 Series' src={require('./../../images/modelseries/samsung/samsunggalaxys9series.png')} />
                        <p>Samsung S9 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='Samsung S10 Series' src={require('./../../images/modelseries/samsung/samsunggalaxys10series.png')} />
                        <p>Samsung S10 Series</p>
                    </div>
                    <div onClick={ (e)=>{props.chooseModel(e)} } className='eachmodelcontainer'>
                        <img className='png-model-icon' alt='Samsung Note Series' src={require('./../../images/modelseries/samsung/samsunggalaxynoteseries.png')} />
                        <p>Samsung Note Series</p>
                    </div>
                    
                    <div className='otheroption' onClick={(e)=>{ props.chooseModel(e) }}>Other</div>
                </section>
        </div>);
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

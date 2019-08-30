import React from 'react'
import './ChooseCondition.css'

function ChooseCondition(props) {

    const closeModalFromConditionPage = () => {
        props.onClose();
    }

    const renderSwitchCondition = (category) => {
        switch(category){
            case 'smartphones': 
                return (<div className='chooseconditioncontainer slide'>
                    <h1>Choose Condition:</h1>
                    <section>
                        <div onClick={ (e)=>{ props.chooseCondition(e); closeModalFromConditionPage(); } } className='eachconditioncontainer'>
                            <img className='svg-conditions-icon' alt='Working' src={require('./../../images/conditions/workingsmartphone.svg')} />
                            <p>Working</p>
                        </div>
                        <div onClick={ (e)=>{ props.chooseCondition(e); closeModalFromConditionPage(); } } className='eachconditioncontainer'>
                            <img className='svg-conditions-icon' alt='Functional' src={require('./../../images/conditions/functionalsmartphone.svg')} />
                            <p>Functional</p>
                        </div>
                        <div onClick={ (e)=>{ props.chooseCondition(e); closeModalFromConditionPage(); } } className='eachconditioncontainer'>
                            <img className='svg-conditions-icon' alt='Broken' src={require('./../../images/conditions/brokensmartphone.svg')} />
                            <p>Broken</p>
                        </div>
                    </section>
                </div>);
            break;
            case 'consoles':
                return (<div>
                    <h1>Choose Condition:</h1>
                    <section>
                        <div onClick={ (e)=>{ props.chooseCondition(e); closeModalFromConditionPage(); } } className='eachconditioncontainer'>
                            <img className='svg-conditions-icon'alt='Working' src={require('./../../images/conditions/workingsmartphone.svg')} />
                            <p>Working</p>
                        </div>
                        <div onClick={ (e)=>{ props.chooseCondition(e); closeModalFromConditionPage(); } } className='eachconditioncontainer'>
                            <img className='svg-conditions-icon' alt='Functional' src={require('./../../images/conditions/functionalsmartphone.svg')} />
                            <p>Functional</p>
                        </div>
                        <div onClick={ (e)=>{ props.chooseCondition(e); closeModalFromConditionPage(); } } className='eachconditioncontainer'>
                            <img className='svg-conditions-icon' alt='Broken' src={require('./../../images/conditions/brokensmartphone.svg')} />
                            <p>Broken</p>
                        </div>
                        <div onClick={ (e)=>{ props.chooseCondition(e); closeModalFromConditionPage(); } } className='eachconditioncontainer'>
                            <img className='svg-conditions-icon' alt='Missing Pieces' src={require('./../../images/conditions/missingpieces.svg')} />
                            <p>Missing Pieces</p>
                        </div>
                    </section>
                </div>);
            default:
                return (<div className='chooseconditioncontainer slide'>
                    <h1>Choose Condition:</h1>
                    <section>
                        <div onClick={ (e)=>{ props.chooseCondition(e); closeModalFromConditionPage(); } } className='eachconditioncontainer'>
                            <img className='svg-conditions-icon' alt='Working' src={require('./../../images/conditions/workingsmartphone.svg')} />
                            <p>Working</p>
                        </div>
                        <div onClick={ (e)=>{ props.chooseCondition(e); closeModalFromConditionPage(); } } className='eachconditioncontainer'>
                            <img className='svg-conditions-icon' alt='Functional' src={require('./../../images/conditions/functionalsmartphone.svg')} />
                            <p>Functional</p>
                        </div>
                        <div onClick={ (e)=>{ props.chooseCondition(e); closeModalFromConditionPage(); } } className='eachconditioncontainer'>
                            <img className='svg-conditions-icon' alt='Broken' src={require('./../../images/conditions/brokensmartphone.svg')} />
                            <p>Broken</p>
                        </div>
                    </section>
                </div>)
        }
    }

    return (
        <div className={ (props.itemNavigation.model) ? ('choosecondition-display slide-wrapper') : ('choosecondition-hide slider-wrapper') }>
            {renderSwitchCondition(props.category)}
        </div>
    )
}

export default ChooseCondition

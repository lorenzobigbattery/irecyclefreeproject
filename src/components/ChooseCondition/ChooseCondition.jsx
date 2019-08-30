import React from 'react'
import './ChooseCondition.css'

function ChooseCondition(props) {
    return (
        <div className={ (props.itemNavigation.model) ? ('choosecondition-display') : ('choosecondition-hide') }>
            <h1>From ChooseCondition.jsx</h1>
        </div>
    )
}

export default ChooseCondition

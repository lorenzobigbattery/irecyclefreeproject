import React from 'react'
import './SecondOptionsMenu.css'

function SecondOptionsMenu(props) {

    const renderIfElseStatements = (category, brand) => {
        if (category === 'smartphone' && brand === 'Apple'){
            return (<div>
                <h3>Apple Models</h3>
                <button onClick={(e)=>{props.chooseModel(e)}} >iPhone 4</button>
                <button>iPhone 5</button>
                <button>iPhone 6</button>
                <button>iPhone 7</button>
                <button>iPhone 8</button>
                <button>OTHER</button>
            </div>);
        } else if (category ==='smartphone' && brand === 'Samsung'){
            return (<div>
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
        } else if (category ==='smartphone' && brand === 'LG'){
            return (<div>
                <h3>LG Models</h3>
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
        }
        else {
            return (<div>
                <h3>DEFAULT Options Menu:</h3>
                    <button>Model #1</button>
                    <button>Model #2</button>
                    <button>Model #3</button>
            </div>);
        }
    }
        

    return (
        <React.Fragment>
            {renderIfElseStatements(props.category, props.brand)}
        </React.Fragment>
    )
}

export default SecondOptionsMenu

import { calculatorButtons } from '../globals/calculator-button-data';

function Buttons( { display } ) {
    // Function for handling all button inputs, which then calls the getInputValues function in the App component
    function displayInputValue(e) {
        // Obtain button input value
        let inputValue = e.target.value;
        console.log(inputValue);
        // Send button input value to parent component
        display( inputValue );
    }

    return (
        // Below outputs all buttons
        <div className="buttons">
            { calculatorButtons.map( ( singleButton, i ) => <button onClick={ displayInputValue } type={ singleButton.type } value={ singleButton.value } className={ singleButton.className } key={ i }>{ singleButton.text}</button>) }
        </div>
    )
}

export default Buttons;

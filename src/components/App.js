import { useState } from 'react';
import Display from './Display';
import Buttons from './Buttons';

function App() {
  // State for displaying numbers
  const [ displayValue, setDisplayValue ] = useState('');
  // State for storing operator 
  const [ operator, setOperator ] = useState('');
  // State for storing currently displayed number into memory 
  const [ memoryStore, setMemoryStore ] = useState(null);

  function getInputValues( value ) {
    // Check for value by running it through a switch statement
    switch ( value ) {
      // All clear button
      case 'All Clear':
        let allClearValue = '';
        setDisplayValue( allClearValue );
        break;
      // Clear button
      case 'Clear':
        let newClearValue = displayValue.slice( 0, displayValue.length - 1 );
        setDisplayValue( newClearValue );
        break;
      // Add button
      case 'Add':
        if ( displayValue !== '' ) {
          let addValue = displayValue;
          setOperator( value );
          setDisplayValue( `${ addValue } + `);
        } 
        break;
      // Subtract button
      case 'Subtract':
        if ( displayValue !== '' ) {
          let subtractValue = displayValue;
          setOperator( value );
          setDisplayValue(`${ subtractValue } - `);
        }
        break;
      // Multiply button
      case 'Multiply':
        if ( displayValue !== '' ) {
          let multiplyValue = displayValue;
          setOperator( value );
          setDisplayValue(`${ multiplyValue } * `);
        }
        break;
      // Divide button
      case 'Divide':
        if ( displayValue !== '' ) {
          let divideValue = displayValue;
          setOperator( value );
          setDisplayValue(`${ divideValue } / `);
        }
        break;
      // Memory store button
      case 'Memory Store':
        if ( displayValue !== '' ) {
          let memoryValue = displayValue;
          setMemoryStore( memoryValue );
        }
        break;
      // Memory recall button
      case 'Memory Recall':
        if ( memoryStore ) {
          let memoryRecallValue = memoryStore;
          setDisplayValue( memoryRecallValue );
        } 
        break;
      // Memory clear button
      case 'Memory Clear':
        if ( memoryStore ) {
          setMemoryStore( null );
        }
        break;
      // Memory plus button
      case 'Memory Plus':
        if ( memoryStore && displayValue !== '' ) {
          let memoryPlus = displayValue;
          let storedValue = memoryStore;
          let concatString = `${ storedValue } + ${ memoryPlus }`;
          let evaluatedMemoryPlus = eval( concatString );
          setMemoryStore( evaluatedMemoryPlus );
        } else if ( !memoryStore && displayValue !== '' ) {
          let memoryPlus = displayValue;
          setMemoryStore( memoryPlus );
        }
        break;
      // Memory minus button
      case 'Memory Minus':
        if ( memoryStore && displayValue !== '' ) {
          let memoryMinus = displayValue;
          let storedValue = memoryStore;
          let concatString = `${ storedValue } - ${ memoryMinus }`;
          let evaluatedMemoryPlus = eval( concatString );
          setMemoryStore( evaluatedMemoryPlus );
        } else if ( !memoryStore && displayValue !== '' ) {
          let memoryMinus = `-${ displayValue }`;
          setMemoryStore( memoryMinus );
        }
        break;
      // Decimal button
      case '.':
        if ( displayValue && !displayValue.includes( '.' ) ) {
          let decimal = '.';
          setDisplayValue( displayValue.concat( decimal ) );
        } else if ( displayValue && operator !== '' ) {
          let decimal = '.';
          setDisplayValue( displayValue.concat( decimal ) );
        }
        break;
      // +/- button
      case 'Sign Key':
        let strToNum = Number( displayValue );
        if ( displayValue !== '' && strToNum > 0 ) {
          setDisplayValue(`-${ displayValue.toString() }` );
        } else if ( displayValue !== '' && strToNum < 0 ) {
          let plusToMinus = Math.abs( displayValue );
          setDisplayValue( plusToMinus.toString() );
        }
        break;
      // Percent button
      case 'Percent':
        if ( displayValue !== '') {
          let concatString = `${ displayValue } / 100`;
          let percentResult = eval( concatString );
          setDisplayValue( percentResult.toString() );
        } 
        break;
      // Square root button
      case 'Square Root':
        if ( displayValue !== '' && operator === ''  ) {
          let strToNum = Number( displayValue );
          let sqrtResult = Math.sqrt( strToNum );
          setDisplayValue( sqrtResult );
        } else if ( operator !== '' ) {
          let operatorResult = eval( displayValue );
          let strToNum = Number( operatorResult );
          let sqrtResult = Math.sqrt( strToNum );
          setDisplayValue( sqrtResult );
        }
        break;
      // Equal button
      case 'Equal':
        if ( operator !== '' ) {
            let operationResult = eval( displayValue );
            let newDisplayValue = operationResult.toString();
            setDisplayValue( newDisplayValue );
            setOperator('');
        } 
        break;
      default:
        setDisplayValue( displayValue + value );
    }
  }
 
  return (
    <div className="wrapper">
      <h1>React Calculator App</h1>
      <section className="calculator">
        {/* displayValue and memoryStore gets passed down to Display component as a prop */}
        <Display value={ displayValue } memoryStore = { memoryStore }/>
        {/* getInputvValues function gets passed down to Buttons component as a prop to obtain button input value */}
        <Buttons display={ getInputValues } />
      </section>
    </div>
  );
  
}

export default App;

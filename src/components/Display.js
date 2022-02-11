function Display( { value, memoryStore } ) {
    return (
        // Below outputs the calculator display
        <section className="display-section">
            <div className="display">
                <span className='memory-display'>{ memoryStore === null ? '' : `( ${ memoryStore } )` }</span>
                <span>{ value === '' ? '0' : value }</span>
            </div>
        </section>
    )
}

export default Display;

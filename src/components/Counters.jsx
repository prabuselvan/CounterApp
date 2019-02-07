import React from 'react';
import Counter from './Counter';
class Counters  extends React.Component{
    render() {
        console.log('Counters rendered');
        
        const  {onDeleteEvent, onClickReset, counters, handleDecrement,  handleIncrement} = this.props;
        return (
            <div>            
                {counters.map((counter)=> (
                        <Counter 
                                        key={counter.id}
                                        onDeleteEvent={onDeleteEvent} 
                                        // value={counter.value}
                                        // id={counter.id}
                                        counter={counter}
                                        onIncrement={handleIncrement}
                                        onDecrement={handleDecrement}
                                        onReset={onClickReset}></Counter>
                                
                ))} 
            </div>
        )
    }
}

export default Counters;
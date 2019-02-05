import React, { Component } from 'react';
import Counters from './components/Counters';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {


  state = {
    counters : [
        {id:1 ,value : 10},
        {id:2 ,value : 11},
        {id:3 ,value : 12},
        {id:4 ,value : 13},
        {id:5 ,value : 14},
        {id:6 ,value : 15},
    ]
}

onDeleteEvent=(productId)=> {
    console.log('this is onDeleteEvent', productId);
   const counters =  this.state.counters.filter( c => c.id!== productId);
   console.log(counters);

   this.setState({
       counters
   });
}

onClickReset=(counter)=> { 
    console.log(counter,'Reset clicked');
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value=0;
    console.log(this.state.counters[index]);
    this.setState({
        counters
    })
    
}

handleIncrement=(counter)=> {
    // console.log(counter);
    
   const  counters = [...this.state.counters];
   const index = counters.indexOf(counter);
//    console.log(index);
// to increment the value of the object
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({counters});
}
  render() {
    return (
      <React.Fragment>
          <NavBar totalCounters={this.state.counters.filter(c=> c.value > 0 ).length}/>
            <main className="container">
              <Counters 
                    counters ={this.state.counters}
                    onDeleteEvent={this.onDeleteEvent} 
                    // value={counter.value}
                    // id={counter.id}
                
                    handleIncrement={this.handleIncrement}
                    onClickReset={this.onClickReset}/>
                    {/* Counters component is the controlled component */}
          </main>
         
      </React.Fragment>
    );
  }
}

export default App;

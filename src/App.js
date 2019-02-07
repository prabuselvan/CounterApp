import React, { Component } from 'react';
import Counters from './components/Counters';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {


  state = {
    counters : [
        {id:1 ,value : 0},
        {id:2 ,value : 11},
        {id:3 ,value : 12},
        {id:4 ,value : 13},
        {id:5 ,value : 14},
        {id:6 ,value : 15},
    ]
}

constructor(props) {
  super(props)
  console.log("App Constructor ", this.props);
}


componentDidMount() {
  console.log('component DidMount');
  
}
// lifecycle hooks

//  Mounting Component
// constructor
// render 
// componentDidMount  --> to get the data from the server once component is rendered

// Update component
// render 
// componentDidUpdate


// UnMount
// componentWillUnMount (Wheneve removing the component)
 
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

handleDecrement=(counter)=> {
  const counters = [...this.state.counters];
  // find the index
  const index = counters.indexOf(counter);
  counters[index].value--;
  this.setState({counters})
}
  render() {

    console.log('Rendered method represents the virtual DOM');
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
                    handleDecrement={this.handleDecrement}
                    onClickReset={this.onClickReset}/>
                    {/* Counters component is the controlled component */}
          </main>
         
      </React.Fragment>
    );
  }
}

export default App;

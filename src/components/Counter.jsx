import React from 'react';

class Counter extends React.Component {

    // state={ 
    //     value : this.props.counter.value,
    //     tags: ['Red','Green','Blue']
    // }

    // doHandleIncrement= ()=> {
    //     const {value} = this.state;
    //     this.setState( {
    //         value: value+1
    //     })
    // }
    // onDeleteEvent =()=> {
    //     this.props.onDelete();
    // }

    componentDidUpdate(prevProps, prevState ) {
        console.log('ComponentdidUpdate ');
        console.log('prevProps = ',prevProps);
        console.log('prevState = ',prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        
    }

    render () {
        console.log('Counter  Rendered');
        
        return (
            <div className="row">
                <div className="col-1">
                <button className="btn btn-warning" 
                        onClick={()=> this.props.onReset(this.props.counter)}> Reset </button>
                </div>
              

                <div className="col-1">
                        <span style={{padding: '7px'}} className={this.getBadgeClasses()}> {this.formatCount()}</span>
                </div>
                

                <div className="col">

            
                <button className="btn btn-primary btn-sm m-2"
                    onClick={()=> this.props.onIncrement(this.props.counter)}
                    > + </button>
 
                <button className="btn btn-info btn-sm m-2"
                    onClick={()=> this.props.onDecrement(this.props.counter)}
                    disabled={this.buttonCheck()}> - </button>

                <button className="btn btn-danger btn-sm m-3"
                        onClick={()=> this.props.onDeleteEvent(this.props.counter.id)}> Delete </button>

                {/* {this.state.tags.length===0  && <p>No Tags are available  Please Create a New Tag </p>}
                {this.renderTags()} */}
                    </div>
             
            </div>
        )
    }

    formatCount() {
        const {value} = this.props.counter;
        return value ===  0 ? <p> Zero </p> : value
    }

    getBadgeClasses ()  {
        let classes = "badge badge-";
        classes+=(this.props.counter.value===0 ? "warning" : "primary");
        return classes;
    }

    buttonCheck() {
        const {value} = this.props.counter;
        // alert(value);
        return value=== 0 ? true : false;
    }
    // renderTags() {
    //   return <ul> {this.props.counter.tags.map ((tag,index)=> <li key={index}> {tag}</li>)} </ul>
    // }


}
export default Counter;
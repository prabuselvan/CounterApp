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


    render () {

        return (
            <div>
                <button className="btn btn-warning" 
                        onClick={()=> this.props.onReset(this.props.counter)}> Reset </button>


                <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
                <button className="btn btn-primary m-2"
                    onClick={()=> this.props.onIncrement(this.props.counter)}> Increment</button>

                <button className="btn btn-danger m-3"
                        onClick={()=> this.props.onDeleteEvent(this.props.counter.id)}> Delete </button>

                {/* {this.state.tags.length===0  && <p>No Tags are available  Please Create a New Tag </p>}
                {this.renderTags()} */}
             
            </div>
        )
    }

    formatCount() {
        const {value} = this.props.counter;
        return value ===  0 ? <h4> Zero </h4> : value
    }

    getBadgeClasses ()  {
        let classes = "badge badge-";
        classes+=(this.props.counter.value===0 ? "warning" : "primary");
        return classes;
    }

    // renderTags() {
    //   return <ul> {this.props.counter.tags.map ((tag,index)=> <li key={index}> {tag}</li>)} </ul>
    // }


}
export default Counter;
import React, { Component } from 'react';

class FilterObject extends Component    {
    constructor()   {
        super();
        this.state = {
            unFilteredArray: [
                {name: 'Bob', age: 25},
                {name: 'Sue', age: 22},
                {name: 'Jim', age: 31},
                {name: 'Kate', age: 40},
                {name: 'Karen', age: 19},
                {name: 'Lee', age: 28},
            ],
            userInput: '',
            filteredArray: []
        }
        this.updateInput = this.updateInput.bind(this);
        this.filterStuff = this.filterStuff.bind(this);
    }
    updateInput(e)   {
        this.setState({userInput: e.target.value});
    }
    filterStuff()   {
        let filtered = this.state.unFilteredArray.filter(v => v.age > Number(this.state.userInput))
        this.setState({filteredArray: filtered, userInput: ''});
    }
    render()    {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">
                    {this.state.unFilteredArray.map((v, i) =>    {
                        return(
                            <span key={i}>name: {v.name} age: {v.age}&nbsp;&nbsp;</span>
                        )
                    })}
                </span>
                <input onChange={this.updateInput} className="inputLine" />
                <button onClick={this.filterStuff} className="confirmationButton">Filter Age > ?</button>
                <span className="resultsBox filterObjectRB">
                    {this.state.filteredArray.map((v, i) =>    {
                        return(
                            <span key={i}>name: {v.name} age: {v.age}&nbsp;&nbsp;</span>
                        )
                    })}
                </span>
            </div>
        )  
    }
}

export default FilterObject;
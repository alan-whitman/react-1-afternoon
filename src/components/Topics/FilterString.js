import React, { Component } from 'react';

class FilterString extends Component    {
    constructor()   {
        super();
        this.state = {
            unfilteredArray: [
                'The rain in spain falls mainly in the plain',
                'Bob',
                'A man, a plan, a canal, Panama',
                'Batman',
                'Washington',
                'Hello World'
            ],
            userInput: '',
            filteredArray: []
        }
        this.updateInput = this.updateInput.bind(this);
        this.solveProblem = this.solveProblem.bind(this);
    }
    updateInput(e)   {
        this.setState({userInput: e.target.value});
    }
    solveProblem()   {
        let filtered = this.state.unfilteredArray.filter(v => v.toLowerCase().includes(this.state.userInput.toLowerCase()))
        this.setState({filteredArray: filtered, userInput: ''});
    }
    render()    {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{this.state.unfilteredArray}</span>
                <input onChange={this.updateInput} className="inputLine" value={this.state.userInput} />
                <button onClick={this.solveProblem} className="confirmationButton">Filter out words that don't include ?</button>
                <span className="resultsBox filterStringsRB">{this.state.filteredArray}</span>
            </div>
        )  
    }
}

export default FilterString;
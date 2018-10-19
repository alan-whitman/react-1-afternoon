import React, { Component } from 'react';

class EvenAndOdd extends Component    {
    constructor()   {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        this.updateInput = this.updateInput.bind(this);
        this.solveProblem = this.solveProblem.bind(this);
    }
    updateInput(e)   {
        this.setState({userInput: e.target.value})
    }
    solveProblem()  {
        let nums = this.state.userInput.split(',');
        let actualNums = nums.filter(v =>   {
            return isNaN(parseInt(v, 10)) ? false : true
        }).map(v => {return parseInt(v, 10)});
        this.setState({evenArray: actualNums.filter(v => v % 2 !== 0), oddArray: actualNums.filter(v => v % 2 === 0)});
        this.setState({userInput: ''});
    }
    render()    {
        return (
             <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input onChange={this.updateInput} className="inputLine" value={this.state.userInput} />
                <button onClick={this.solveProblem} className="confirmationButton">Do The Thing</button>
                <span className="resultsBox">Odds:&nbsp;
                    {this.state.evenArray.map((v, i) => {
                        return (
                            <span key={i}>
                                {v}&nbsp;
                            </span>
                        )
                    })}
                </span>
                <span className="resultsBox"> Evens:&nbsp;
                    {this.state.oddArray.map((v, i) => {
                        return (
                            <span key={i}>
                                {v}&nbsp;
                            </span>
                        )
                    })}
                </span>
            </div>
        )  
    }
}

export default EvenAndOdd;
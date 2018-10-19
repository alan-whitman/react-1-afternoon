import React, { Component } from 'react';

class Palindrome extends Component    {
    constructor()   {
        super()
        this.state = {
            userInput: '',
            isAPalindrome: false,
            currentWord: `whatever`
        }
        this.updateInput = this.updateInput.bind(this);
        this.solveProblem = this.solveProblem.bind(this);
    }
    updateInput(e)   {
        this.setState({userInput: e.target.value});
    }
    solveProblem() {
        let str = this.state.userInput;
        let firstHalf = str.slice(0, Math.floor(str.length / 2));
        let secondHalf = str.slice(Math.floor(str.length / 2), str.length);
        secondHalf = secondHalf.split('').reverse().join('');
        if (secondHalf.length > firstHalf.length)
            secondHalf = secondHalf.slice(0, secondHalf.length - 1);
        this.setState({isAPalindrome: firstHalf === secondHalf ? true : false, currentWord: str, userInput: ''});
    }
    render()    {
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input onChange={this.updateInput} className="inputLine" value={this.state.userInput} />
                <button onClick={this.solveProblem} className="confirmationButton">Is it a palindrome?</button>
                <span className="resultsBox">Is "{this.state.currentWord}" a palindrome: {this.state.isAPalindrome ? 'Yes' : 'No'}</span>
            </div>
        )  
    }
}

export default Palindrome;
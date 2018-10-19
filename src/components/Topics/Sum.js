import React, { Component } from 'react';


class Sum extends Component    {
    constructor()   {
        super();
        this.state = {
            num1: '',
            num2: '',
            sum: 0
        }
        this.updateInput = this.updateInput.bind(this);
        this.solveProblem = this.solveProblem.bind(this);
    }
    updateInput(e)    {
        if (e.target.id === 'num1')
            this.setState({num1: e.target.value})
        else
            this.setState({num2: e.target.value})
    }
    solveProblem()  {
        if (!isNaN(Number(this.state.num1)) && !isNaN(Number(this.state.num2)))
            this.setState({sum: Number(this.state.num1) + Number(this.state.num2)})
        else
            this.setState({sum: 'At least one of those is not a number'})
    }
    render()    {
        return (
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input onChange={this.updateInput} id="num1" className="inputLine" value={this.state.num1} />
            <input onChange={this.updateInput} id="num2" className="inputLine" value={this.state.num2} />
            <button onClick={this.solveProblem} className="confirmationButton">Sum</button>
            <span className="resultsBox">Sum: {this.state.sum}</span>
        </div>
        )  
    }
}


// class Sum extends Component    {
//     constructor()   {
//         super();
//         this.state = {
//             num1: '',
//             num2: '',
//             sum: 0
//         }
//         this.updateInput = this.updateInput.bind(this);
//         this.solveProblem = this.solveProblem.bind(this);
//     }
//     updateInput(e)    {
//         if (e.target.id === 'num1')
//             this.setState({num1: e.target.value})
//         else
//             this.setState({num2: e.target.value})
//     }
//     solveProblem()  {
//         if (!isNaN(Number(this.state.num1)) && !isNaN(Number(this.state.num2)))
//             this.setState({sum: Number(this.state.num1) + Number(this.state.num2)})
//         else
//             this.setState({sum: 'At least one of those is not a number'})
//     }
//     render()    {
//         return (
//         <div className="puzzleBox sumPB">
//             <h4>Sum</h4>
//             <input onChange={this.updateInput} id="num1" className="inputLine" value={this.state.num1} />
//             <input onChange={this.updateInput} id="num2" className="inputLine" value={this.state.num2} />
//             <button onClick={this.solveProblem} className="confirmationButton">Sum</button>
//             <span className="resultsBox">Sum: {this.state.sum}</span>
//         </div>
//         )  
//     }
// }

export default Sum;
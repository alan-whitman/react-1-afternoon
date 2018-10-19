import React, { Component } from 'react';


class Sum extends Component    {
    constructor()   {
        super();
        this.state = {
            nums: [
                '',
                ''
            ],
            sum: 0
        }
        this.updateInput = this.updateInput.bind(this);
        this.solveProblem = this.solveProblem.bind(this);
    }
    updateInput(e, key)    {
        let newNums = this.state.nums;
        newNums[key] = e.target.value;
        this.setState({nums: newNums});
    }
    solveProblem()  {
        console.log(this.state.nums);
        if (!isNaN(Number(this.state.nums[0])) && !isNaN(Number(this.state.nums[1])))
            this.setState({sum: Number(this.state.nums[0]) + Number(this.state.nums[1])})
        else
            this.setState({sum: 'At least one of those is not a number'})
    }
    render()    {
        return (
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input onChange={(e) => this.updateInput(e, 0)} id="num1" className="inputLine" value={this.state.nums[0]} />
            <input onChange={(e) => this.updateInput(e, 1)} id="num2" className="inputLine" value={this.state.nums[1]} />
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
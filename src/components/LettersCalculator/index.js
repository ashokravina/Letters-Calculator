import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, searchInput: ''}
  onChangeInput = event => {
    const {count} = this.state
    this.setState({
      count: event.target.value.length,
    })
    console.log(count)
  }
  render() {
    const {count, searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="card">
            <h1 className="heading">Calculate the Latters you enter</h1>
            <div className="label-container">
              <label className="label" htmlFor="input">
                Enter The Phrese
              </label>
              <input
                type="text"
                className="input"
                id="input"
                placeholder="Enter the Phrese"
                onChange={this.onChangeInput}
              />
            </div>
            <p className="paragraph">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator

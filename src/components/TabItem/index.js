// Write your code here
import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  click = tabId => {
    const {details, clicked} = this.props
    clicked(tabId)
  }

  render() {
    const {details, actabId} = this.props
    const {tabId, displayText} = details
    let style = ''
    if (actabId === tabId) {
      style = 'style-btn'
    }

    return (
      <li className="tabli">
        <button 
          className={`tabil ${style}`} onClick={() => this.click(tabId)}>
            {displayText}
        
        </button>
      </li>
    )
  }
}
export default TabItem

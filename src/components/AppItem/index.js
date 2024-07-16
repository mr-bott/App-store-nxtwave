// Write your code here
import {Component} from 'react'
import './index.css'
class AppItem extends Component {
  render() {
    const {details} = this.props
    const {appId, imageUrl, appName} = details
    return (
      <li className="appli">
        <img src={imageUrl} alt={appName} className="appimg" />
        <p className="app-p">{appName}</p>
      </li>
    )
  }
}
export default AppItem

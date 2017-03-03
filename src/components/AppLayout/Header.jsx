import React, {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <header id="appHeader">
        <div className="logo">
          <i className="material-icons">important_devices</i>
          <div className="great-title">
            <strong>Web Style Guide</strong>
            <small>React/ES6/Express/NodeJS</small>
          </div>
        </div>
      </header>
    )
  }
}

export default Header

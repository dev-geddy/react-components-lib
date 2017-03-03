import React, {Component} from 'react'
import {Link} from 'react-router'

class Navigation extends Component {
  render() {
    const {
      activeLocation,
      onNavigation
      } = this.props
    return (
      <div className="app-navigation">
        <Link className={activeLocation === '/' ? 'current' : 'home'} to="/" onClick={onNavigation.bind(this)}>Home</Link>
        <Link activeClassName="current" to="/typography" onClick={onNavigation.bind(this)}>Typography</Link>
        <Link activeClassName="current" to="/buttons" onClick={onNavigation.bind(this)}>Buttons</Link>
        <Link activeClassName="current" to="/navigation" onClick={onNavigation.bind(this)}>Navigation</Link>
        <Link activeClassName="current" to="/forms" onClick={onNavigation.bind(this)}>Forms</Link>
        <Link activeClassName="current" to="/layouts" onClick={onNavigation.bind(this)}>Layouts</Link>
        <div className="navSeparator"></div>
        <Link activeClassName="current" to="/about" onClick={onNavigation.bind(this)}>About</Link>
      </div>
    )
  }
}

export default Navigation

import React, {Component} from 'react'
import './ActionButton.scss'

export const cssFile = 'ActionButton.css'
export const scssFile = 'ActionButton.scss'
export const componentName = 'Action button'
export const componentDescription = 'Button with different states, colors and loader support.'

export class ActionButton extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    loadingName: React.PropTypes.string,
    isDisabled: React.PropTypes.bool,
    isLoading: React.PropTypes.bool,
    withColor: React.PropTypes.string,
    withIcon: React.PropTypes.string,
    addClass: React.PropTypes.string,
    onClick: React.PropTypes.func
  }

  render() {

    const {
      name,
      loadingName,
      isDisabled,
      isLoading,
      withColor,
      withIcon,
      addClass
      } = this.props

    const classAddition = (withColor ? ' ' + withColor : '') +
                          (addClass ? ' ' + addClass : '') +
                          (isLoading ? ' is-loading' : '') +
                          (withIcon ? ' has-icon' : '' )

    const buttonCaption = (isLoading && loadingName ? loadingName : name)

    return (
      <button className={"g86-action-button" + classAddition}
              disabled={isDisabled || isLoading}
              onClick={this.props.onClick && this.props.onClick.bind(this)}>{withIcon ? <i className="material-icons">{withIcon}</i> : ''}{buttonCaption}</button>
    )
  }
}

export default ActionButton

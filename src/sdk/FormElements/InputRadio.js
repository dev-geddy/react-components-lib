import React, {Component} from 'react'
import './FormElements.scss'

export const cssFile = 'FormElements.css'
export const scssFile = 'FormElements.scss'
export const componentName = 'Input radio'
export const componentDescription = 'Input of type radio.'

export class InputRadio extends Component {
  state = {
    checked: false
  }
  onHandleChange(e) {
    const currentState = this.state.checked
    this.setState({checked: !currentState})
    // this.props.onChange(!currentState)
  }
  render() {
    /*const {
     ref,
     name,
     value,
     initialValue,
     placeHolder,
     onChange,
     onFocus,
     onBlur
     } = this.props*/
    const { checked } = this.state

    return (
      <div className={"g86-radio" + (checked ? " is-checked" : "")} onClick={this.onHandleChange.bind(this)}>
        <i className="material-icons">{checked ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
        <input type="radio" className="input-radio" checked={checked} />
      </div>
    )
  }
}

export default InputRadio

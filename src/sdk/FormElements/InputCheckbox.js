import React, {Component} from 'react'
import './FormElements.scss'

export const cssFile = 'FormElements.css'
export const scssFile = 'FormElements.scss'
export const componentName = 'Input checkbox'
export const componentDescription = 'Input of type checkbox.'

export class InputCheckbox extends Component {
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
      <div className={"g86-checkbox" + (checked ? " is-checked" : "")} onClick={this.onHandleChange.bind(this)}>
        <i className="material-icons">{checked ? 'check_box' : 'check_box_outline_blank'}</i>
        <input type="checkbox" className="input-checkbox" checked={checked} />
      </div>
    )
  }
}

export default InputCheckbox

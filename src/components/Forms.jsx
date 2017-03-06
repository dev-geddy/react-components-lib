import React, {Component} from 'react'
import StyleGuideSection from './UI/StyleGuideSection'
import InputText, {cssFile} from '../sdk/FormElements/InputText'
import InputCheckbox from '../sdk/FormElements/InputCheckbox'
import InputRadio from '../sdk/FormElements/InputRadio'

import OptionsRow, {cssFile as cssFileCustom} from '../sdk/FormElementsCustom/OptionsRow'

/* ================== Import components for preview ================================== */
const previewFormInputs = [
  <InputText />,
  <div><InputCheckbox name="a" /><InputCheckbox name="b" /></div>,
  <div><InputRadio name="c" /><InputRadio name="c" /></div>
]

let optionsInRow1 = [
  {
    name: 'Front end',
    value: 'front-end'
  },
  {
    name: 'Back end',
    value: 'back-end'
  },
  {
    name: 'Full stack',
    value: 'full-stack'
  }
]

let optionsInRow2 = [
  {
    name: 'Mr.',
    value: 'mr'
  },
  {
    name: 'Ms.',
    value: 'ms'
  },
  {
    name: 'Mrs.',
    value: 'mrs'
  },
  {
    name: 'Dr.',
    value: 'dr'
  },
  {
    name: 'N/A',
    value: 'other'
  }
]

let optionsInRow3 = [
  {
    name: 'OFF',
    value: false
  },
  {
    name: 'ON',
    value: true
  }
]

let optionsInRow4 = [
  {
    name: '1',
    value: 1
  },
  {
    name: '2',
    value: 2
  },
  {
    name: '3',
    value: 3
  },
  {
    name: '4',
    value: 4
  },
  {
    name: '5',
    value: 5
  }
]

const describeFormInputs = (
  <div>
    <p>Form data entry inputs. Text field, text area, checkbox, radio.</p>
  </div>
)
/* ================== Section data separator ========================================= */
const previewCustomInputs = [
  <OptionsRow name="role" options={optionsInRow1} preselectOption={optionsInRow1[0]} onChange={(selectName, selectedValue)=>{console.log(selectName + ': ' + selectedValue)}} />,
  <OptionsRow name="title" options={optionsInRow2} preselectOption={optionsInRow2[0]} onChange={(selectName, selectedValue)=>{console.log(selectName + ': ' + selectedValue)}} />,
  <OptionsRow name="on" options={optionsInRow3} preselectOption={optionsInRow3[0]} onChange={(selectName, selectedValue)=>{console.log(selectName + ': ' + selectedValue)}} />,
  <OptionsRow name="rating" options={optionsInRow4} isInterval={true} preselectOption={optionsInRow4[0]} onChange={(selectName, selectedValue)=>{console.log(selectName + ': ' + selectedValue)}} />
]
const describeCustomInputs = (
  <div>
    <p>Data entry in a non-standard way.</p>
  </div>
)
/* ================== Section data separator ========================================= */
/* ================== End of StyleGuideSection components definition ================= */

class Forms extends Component {
  render() {
    return (
      <article className="page with-preview">
        <header>
          <h2>Form elements</h2>
          <p>Form elements with their states</p>
        </header>
        <StyleGuideSection sectionName="Form input fields"
                           sectionContent={describeFormInputs}
                           previewName="Preview of most common input types"
                           previewComponents={previewFormInputs}
                           previewComponentsInLine={0}
                           previewHTML={1}
                           previewCssFileName={cssFile}
                           previewCSS={1}/>

        <StyleGuideSection sectionName="Custom inputs"
                           sectionContent={describeCustomInputs}
                           previewName="Options row"
                           previewComponents={previewCustomInputs}
                           previewComponentsInLine={0}
                           previewHTML={1}
                           previewCssFileName={cssFileCustom}
                           previewCSS={1}/>

      </article>
    )
  }
}

export default Forms

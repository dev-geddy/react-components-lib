import React, {Component} from 'react'
import StyleGuideSection from './UI/StyleGuideSection'

/* ================== Import components for preview ================================== */
import ActionButton, {cssFile} from '../sdk/ActionButton/ActionButton'
const previewComponentsButtons = [
  <ActionButton name="Default button"/>,
  <div>
    <ActionButton name="Continue" loadingName="Loading..." isLoading={true} />
    <ActionButton name="Continue" loadingName="Loading..." isLoading={true} withIcon="toys" />
  </div>,
  <div>
    <ActionButton name="Continue" loadingName="Processing..." isLoading={true} withIcon="settings" />
    <ActionButton name="Continue" loadingName="Wait..." isLoading={true} withIcon="cached" />
    <ActionButton name="Continue" loadingName="Wait..." isLoading={true} withIcon="hourglass_empty" />
  </div>,
  <ActionButton name="Disabled" isDisabled={true} />
]
const describeActionButtons = (
  <div>
    <p>Sample of default uncoloured button. Loading and disabled states are available.</p>
  </div>
)
/* ================== Section data separator ========================================= */
const previewButtonsWithIcon = [
  <ActionButton name="With icon" withColor="black" withIcon="settings" />,
  <div>
    <ActionButton name="Log in" withColor="black" withIcon="fingerprint" />
    <ActionButton name="Log out" withColor="black" withIcon="power_settings_new" />
  </div>,
  <div>
    <ActionButton name="Add to basket" withColor="black" withIcon="shopping_cart" />
    <ActionButton name="Like" withColor="black" withIcon="thumb_up" />
    <ActionButton name="Add" withColor="black" withIcon="add_circle_outline" />
  </div>,
  <div>
    <ActionButton name="Upload" withColor="black" withIcon="file_upload" />
    <ActionButton name="Download" withColor="black" withIcon="file_download" />
  </div>,
]
const describeButtonsWithIcon = (
  <div>
    <p>Bottons can have icons. Button component uses Google Material icons, accepts material icon name.</p>
  </div>
)
/* ================== Section data separator ========================================= */
const previewButtonColours = [
  <ActionButton name="Black button" withColor="black" />,
  <ActionButton name="Grey button" withColor="grey" />,
  <ActionButton name="Blue button" withColor="blue"/>,
  <ActionButton name="Green button" withColor="green" />,
  <ActionButton name="Red button" withColor="red" />
]
const describeButtonColours = (
  <div>
    <p>These are the buttons, supposed to be used to invoke user actions.</p>
    <p>Color variations allows to highlight action type or importance.</p>
  </div>
)
/* ================== Section data separator ========================================= */
const previewOutlineButtons = [
  <ActionButton name="Outline grey" withColor="outline-grey" />,
  <ActionButton name="Outline blue" withColor="outline-blue" />,
  <ActionButton name="Outline green" withColor="outline-green" />,
  <ActionButton name="Outline red" withColor="outline-red" />
]
const describeOutlineButtons = (
  <div>
    <p>These are the buttons, supposed to be used to invoke user actions.</p>
    <p>Color variations allows to highlight action type or importance.</p>
  </div>
)
/* ================== Section data separator ========================================= */
/* ================== Section data separator ========================================= */
/* ================== End of StyleGuideSection components definition ================= */

class Buttons extends Component {
  render() {
    return (
      <article className="page with-preview">
        <header>
          <h2>Buttons</h2>
          <p>Available button styles</p>
        </header>
        <StyleGuideSection sectionName="Default button"
                           sectionContent={describeActionButtons}
                           previewName="Default button with states"
                           previewComponents={previewComponentsButtons}
                           previewComponentsInLine={0}
                           previewHTML={1}
                           previewCssFileName={cssFile}
                           previewCSS={1}/>

        <StyleGuideSection sectionName="Button with icon"
                           sectionContent={describeButtonsWithIcon}
                           previewName="Default button with states"
                           previewComponents={previewButtonsWithIcon}
                           previewComponentsInLine={0}
                           previewHTML={1}
                           previewCssFileName={cssFile}
                           previewCSS={1}/>

        <StyleGuideSection sectionName="Button colours"
                           sectionContent={describeButtonColours}
                           previewName="Available button colours"
                           previewComponents={previewButtonColours}
                           previewComponentsInLine={0}
                           previewHTML={1}
                           previewCssFileName={cssFile}
                           previewCSS={1}/>

        <StyleGuideSection sectionName="Outline buttons"
                           sectionContent={describeOutlineButtons}
                           previewName="Buttons in Outline style"
                           previewComponents={previewOutlineButtons}
                           previewComponentsInLine={0}
                           previewHTML={1}
                           previewCssFileName={cssFile}
                           previewCSS={1}/>
      </article>
    )
  }
}

export default Buttons

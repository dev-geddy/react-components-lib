import React, {Component} from 'react'
import StyleGuideSection from './UI/StyleGuideSection'

/* ================== Import components for preview ================================== */
import Fonts from '../sdk/Typography/Fonts'
import FontSizes from '../sdk/Typography/FontSizes'
import FontWeights from '../sdk/Typography/FontWeights'

const previewFonts = [
  <Fonts />
]
const previewFontSizes = [
  <FontSizes />
]
const previewFontWeights = [
  <FontWeights />
]
const describeFonts = (
  <div>
    <p>There are two different fonts used. Open Sans and Mr De Haviland.</p>
    <p>Main font is Open Sans. Reason of choice:</p>
    <ul>
      <li>Nice round looking</li>
      <li>Easy to read</li>
      <li>Clear</li>
      <li>Renders well</li>
    </ul>
  </div>
)
const describeFontSizes = (
  <div>
    <p>There are six different font sizes used within this style guide.</p>
    <p>Four sizes available for headlines</p>
    <p>Four sizes available for body text</p>
  </div>
)
const describeFontWeights = (
  <div>
    <p>Changing weights of the fonts may create illusion of a different shade of a colour.</p>
    <p>Four font weights avilable for Open Sans font.</p>
  </div>
)
/* ================== Section data separator ========================================= */
/* ================== End of StyleGuideSection components definition ================= */


class Typography extends Component {
  render() {

    return (
      <article className="page with-preview">
        <header>
          <h2>Typography</h2>
          <p>Fonts, weights and sizes</p>
        </header>

        <StyleGuideSection sectionName="Fonts"
                           sectionContent={describeFonts}
                           previewName="Fonts used"
                           previewComponents={previewFonts}
                           previewComponentsInLine={0}
                           previewHTML={0}
                           previewCSS={0}/>

        <StyleGuideSection sectionName="Font sizes"
                           sectionContent={describeFontSizes}
                           previewName="Font sizes used"
                           previewComponents={previewFontSizes}
                           previewComponentsInLine={0}
                           previewHTML={1}
                           previewCSS={0}/>

        <StyleGuideSection sectionName="Font weights"
                           sectionContent={describeFontWeights}
                           previewName="Font weights available"
                           previewComponents={previewFontWeights}
                           previewComponentsInLine={0}
                           previewHTML={0}
                           previewCSS={0}/>

      </article>
    )
  }
}

export default Typography

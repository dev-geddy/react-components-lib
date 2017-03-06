import React, {Component} from 'react'
import StyleGuideSection from './UI/StyleGuideSection'

/* ================== Import components for preview ================================== */
import HorizontalNav, {cssFile as cssFileHorizontal} from '../sdk/HorizontalNav/HorizontalNav'
import VerticalNav, {cssFile as cssFileVertical} from '../sdk/VerticalNav/VerticalNav'
const sampleItems = [
  {
    name: "Home",
    linkTo: "/"
  },
  {
    name: "Web Style Guide",
    linkTo: "/about"
  },
  {
    name: "sdk",
    linkTo: "/about"
  },
  {
    name: "separator"
  },
  {
    name: "About",
    linkTo: "/about"
  }
]
const activeLocation = "/"
const previewNav = [
  <HorizontalNav menuItems={sampleItems} activeLocation={activeLocation} />
]
const describeNav = (
  <div>
    <p>Horizontal navigation of this Web Style Guide theme. Built for use</p>
  </div>
)
/* ================== Section data separator ========================================= */
const previewNavVertical = [
  <VerticalNav menuItems={sampleItems} activeLocation={activeLocation} />
]
const describeNavVertical = (
  <div>
    <p>Vertical navigation is built to be used on the left side of layout.</p>
  </div>
)
/* ================== Section data separator ========================================= */
/* ================== End of StyleGuideSection components definition ================= */

class Navigation extends Component {
  render() {
    return (
      <article className="page with-preview">
        <header>
          <h2>Navigation</h2>
          <p>Available navigation styles</p>
        </header>
        <StyleGuideSection sectionName="Horizontal navigation"
                           sectionContent={describeNav}
                           previewName="Horizontal menu example"
                           previewComponents={previewNav}
                           previewComponentsInLine={0}
                           previewHTML={1}
                           previewCssFileName={cssFileHorizontal}
                           previewCSS={1}/>
        <StyleGuideSection sectionName="Vertical navigation"
                           sectionContent={describeNavVertical}
                           previewName="Vertical menu example"
                           previewComponents={previewNavVertical}
                           previewComponentsInLine={0}
                           previewHTML={1}
                           previewCssFileName={cssFileVertical}
                           previewCSS={1}/>

      </article>
    )
  }
}

export default Navigation

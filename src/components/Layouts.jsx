import React, {Component} from 'react'
import StyleGuideSection from './UI/StyleGuideSection'

/* ================== Import components for preview ================================== */
import LayoutVertical, {cssFile} from '../sdk/Layouts/LayoutVertical'

const previewLayouts = [
  <div style={{height: '120', border: '1px solid #22b0df', padding: 10}}>
    <LayoutVertical />
  </div>
]
const describeLayouts = (
  <div>
    <p>Base layout, Section layout, View layout, Form layout</p>
  </div>
)
/* ================== Section data separator ========================================= */
import LayoutWithSidebar from '../sdk/Layouts/LayoutWithSidebar'

const previewSidebarLayouts = [
  <div style={{height: '120', border: '1px solid #22b0df', padding: 10}}>
    <LayoutWithSidebar />
  </div>
]
const describeSidebarLayouts = (
  <div>
    <p>Layout with sidebar on the left as in this application.</p>
  </div>
)
/* ================== Section data separator ========================================= */
const previewBoxedLayouts = [
  // HorizontalNav
]
const describeBoxedLayouts = (
  <div>
    <p>Boxed layout with max width, the one used in the <strong>Transactions</strong> application.</p>
  </div>
)
/* ================== Section data separator ========================================= */
/* ================== End of StyleGuideSection components definition ================= */

class Forms extends Component {
  render() {
    return (
      <article className="page with-preview">
        <header>
          <h2>Layouts</h2>
          <p>Layout compositions</p>
        </header>
        <StyleGuideSection sectionName="Layouts"
                           sectionContent={describeLayouts}
                           previewName="Basic layout"
                           previewComponents={previewLayouts}
                           previewComponentsInLine={0}
                           previewHTML={1}
                           previewCssFileName={cssFile}
                           previewCSS={1}/>

        <StyleGuideSection sectionName="Sidebar layout"
                           sectionContent={describeSidebarLayouts}
                           previewName="Layout with sidebar"
                           previewComponents={previewSidebarLayouts}
                           previewComponentsInLine={0}
                           previewHTML={1}
                           previewCssFileName={cssFile}
                           previewCSS={1}/>

        <StyleGuideSection sectionName="Boxed layout"
                           sectionContent={describeBoxedLayouts}
                           previewName="Layout in a box"
                           previewComponents={previewBoxedLayouts}
                           previewComponentsInLine={0}
                           previewHTML={0}
                           previewCSS={0}/>

      </article>
    )
  }
}

export default Forms

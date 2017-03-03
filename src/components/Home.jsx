import React, {Component} from 'react'
import AppStore from '../stores/AppStore'
// import AppDispatcher from '../dispatchers/AppDispatcher'
import {Link} from 'react-router'

const urls = {
  atomicDesign: 'http://www.justinmind.com/blog/wireframing-tool-and-atomic-design-user-experience-from-the-bottom-up/',
  moreDesign: 'https://medium.com/@realjoet',
  materialDesign: 'https://material.google.com/'
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      isLoading: false
    }
  }

  _onStoreChange() {
    this.setState({
      ...AppStore.state
    })
  }

  componentWillMount() {
    this._changeListener = this._onStoreChange.bind(this)
    AppStore.addChangeListener(this._changeListener)
  }


  componentWillUnmount() {
    AppStore.removeChangeListener(this._changeListener)
    this._changeListener = null
  }


  render() {

    return (
      <article className="page">
        <header>
          <h2>Home of Web Style Guide</h2>
          <p>Built to preview UI components</p>
        </header>
        <section className="page-content with-columns">
          <div className="row">
            <div className="column small-12 medium-8 large-8">
              <h3>What is this?</h3>
              <p>This is a sleek application that is built to browse Web Style Guide elements and provide HTML and CSS of them with easy COPY possibility.</p>
              <p>Style guide is the way to achieve consistency and seamless experience across large scale applications, providing atomic design elements for reusability.</p>

              <h3>GUI SDK preview</h3>
              <p>Well. Start with <Link to="/typography">Typography</Link>.</p>
            </div>
            <div className="column small-12 medium-4 large-4">
              <h3>Glossary</h3>
              <p><Link to={urls.atomicDesign}>Atomic design</Link> - design methodology, mainly about splitting the style down to the very basic modules <em>atoms</em>.</p>
              <p><Link to={urls.materialDesign}>Material Design</Link> - is a design language developed in 2014 by Google.</p>
              <p>Web Style Guide - a collaborative collection of resources for creating Front-End.</p>
              <p>SDK - software development kit, a library of software components.</p>
            </div>
          </div>
        </section>
        <section className="page-content">
          <h3>Author</h3>
          <p>Brought to you by a Front-end developer</p>
          <p className="g86-signature">Gediminas Ginkevicius</p>
        </section>
      </article>
    )
  }
}

export default Home

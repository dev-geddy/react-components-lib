import React, { Component } from 'react'

const urls = {
  axios: 'https://github.com/mzabriskie/axios',
  bluebird: 'http://bluebirdjs.com/docs/getting-started.html',
  express: 'https://expressjs.com/en/4x/api.html',
  reactCreateApp: 'https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html',
  jsx: 'https://facebook.github.io/react/docs/jsx-in-depth.html',
  oocss: 'https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/',
  smacss: 'https://smacss.com/',
  es6: 'http://es6-features.org/',
  babelLoader: 'https://github.com/babel/babel-loader',
  nodejs: 'https://nodejs.org/en/',
  sass: 'http://sass-lang.com/guide',
  dom: 'https://www.w3.org/DOM/'
}

class About extends Component {
  render() {
    return (
      <article className="page">
        <header>
          <h2>About &bdquo;Web Style Guide&rdquo;</h2>
          <p>Web style guide browser based on React</p>
        </header>
        <div className="page-content with-columns">
          <div className="row">
            <div className="column small-12 medium-8 large-8">
              <h3>Application idea</h3>
              <p>I've spent hours and hours working on my CSS methodologies presentation and came up with the conclusion, that in order to build something consistent and scalable you must create your UI <em>language</em>. The answer which was always buzzling in my mind was "Web Style Guide".</p>
              <p>This project is an environment, built to showcase Web Style Guide elements and provide their code snippets.</p>
              <p>Another thought which I came up with is: all Style Guide modules would be coming from a single spot and be accessible across different projects. The way to achieve that is to build a library, which could be called GUI SDK and available as node dependency.</p>
              <p>Given GUI SDK could be built with a purpose to serve for my React projects, this Web Style Guide Browser could implement features like:</p>
              <ul>
                <li>Preview working GUI elements grouped in categories on aside.</li>
                <li>Provide compiled HTML source code of the GUI components.</li>
                <li>Provide compiled CSS source code of the GUI components (<strong>coming soon</strong>).</li>
                <li>Implement convenient single click COPY functionality.</li>
              </ul>
            </div>
            <div className="column small-12 medium-4 large-4">
              <h3>Technologies used</h3>
              <p>Starting from environment setup and ending up with final touch.</p>
              <ul>
                <li>React, written in <a href={urls.es6} target="_blank">ES6</a> (<a href={urls.babelLoader} target="_blank">transpiled</a> to JS)
                  <ul>
                    <li><a href={urls.axios} target="_blank">Axios</a> for HTTP requests</li>
                    <li><a href={urls.bluebird} target="_blank">Bluebird</a> promises implementation</li>
                  </ul>
                </li>
                <li>
                  <a href={urls.dom} target="_blank">DOM</a> written in <a href={urls.jsx} target="_blank">JSX</a>, visually enhanced using <a href={urls.sass} target="_blank">SCSS</a>, using <a href={urls.smacss} target="_blank">SMACSS</a> method with slight taste of <a href={urls.oocss} target="_blank">OOCSS</a>.
                </li>
                <li><a href={urls.nodejs} target="_blank">NodeJS</a> and <a href={urls.express} target="_blank">Express</a> framework</li>
                <li><a href={urls.reactCreateApp} target="_blank">react-create-app</a> was used to set up local development environment</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="column small-12 medium-6 large-6">
              <h3>Thank you</h3>
              <p>Thank you for checking out my app.</p>
              <p>Sincerely,<br/><span className="gediminas">Gediminas Ginkevicius</span></p>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default About

import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Subfont Test</h1>
    <SubFontTest />
  </Layout>
)

class SubFontTest extends React.Component {
  state = { showCharacters: false }

  handleClick = () => this.setState({ showCharacters: true })

  render() {
    return (
      <div>
        {/* <p className="lora" style={{ color: `blue` }}>
          Lora (normal): abcdefghijklm
        </p> */}

        <p className="lora" style={{ color: `blue`, fontWeight: 700 }}>
          Lora (bold): abcdefghijklm
        </p>

        <button
          onClick={this.handleClick}
          style={{ backgroundColor: `black`, color: `white` }}
        >
          Show more characters
        </button>

        {this.state.showCharacters && (
          <div>
            <p className="lora" style={{ marginTop: `1rem`, color: `blue` }}>
              Lora (normal): nopqrstuvwxyz
            </p>

            <p
              className="lora"
              style={{ marginTop: `1rem`, color: `blue`, fontWeight: 700 }}
            >
              Lora (bold): nopqrstuvwxyz
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default IndexPage

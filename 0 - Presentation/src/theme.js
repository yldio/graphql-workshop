// example theme.js
import theme from 'mdx-deck/themes'
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'

export default {
  ...theme,
  font: 'Futura, sans-serif',
  h1: {
    textTransform: 'uppercase',
    fontWeight: 600
  },
  monospace: '"Dank Mono", monospace',
  prism: {
    style: atomDark
  },
  img: {
    maxWidth: '100%'
  },
  weights: 400,
  li: {
    paddingBottom: '20px',
    fontFamily: '"Dank Mono", monospace'
  },
  ul: {
    listStyle: 'none',
    paddingLeft: '20px',
    display: 'inline-block'
  },
  colors: {
    text: '#6AD798',
    background: 'rgb(1, 22, 39)',
    link: '#fff',
    pre: '#fff',
    preBackground: '#051626',
    code: '#fff'
  }
}

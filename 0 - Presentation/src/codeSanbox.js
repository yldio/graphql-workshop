import React from 'react'
import styled from 'styled-components'

const Frame = styled.iframe`
  width: 100vw;
  height: 100vh;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  z-index: 20000;
`

const CodeSanbox = ({ id }) => (
  <Frame
    src={`https://codesandbox.io/embed/${id}?view=preview`}
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  />
)

export default CodeSanbox

import React from 'react'
import styled from 'styled-components'

const IMG = styled.img`
  width: 100vw;
  position: absolute;
  left: 0;
  z-index: -1;
  top: 50%;
  transform: translateY(-50%);
`
const BGImage = ({ src }) => <IMG src={src} />

export default BGImage

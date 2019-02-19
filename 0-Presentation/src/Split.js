import React from 'react'
import styled from 'styled-components'
import Flex from 'mdx-deck/dist/Flex'
import Box from 'mdx-deck/dist/Box'

const Footer = styled.footer`
  font-size: 14px;
  color: white;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
  border-top: 1px solid #dc5f53;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`

const Root = styled.div([], {
  width: '100vw',
  height: '100vh'
})

const Half = styled(Box)`
  > * {
    max-width: 100%;
  }
`

const Split = ({ children }) => {
  const kids = React.Children.toArray(children.props.children)
  const times = kids.length

  return (
    <Root>
      <Flex
        css={{
          alignItems: 'center',
          height: '100%'
        }}
      >
        {kids.map(k => (
          <Half key={k} width={1 / times}>
            {k}
          </Half>
        ))}
      </Flex>
      <Footer>
        <span>@YLDio</span>
      </Footer>
    </Root>
  )
}

export default Split

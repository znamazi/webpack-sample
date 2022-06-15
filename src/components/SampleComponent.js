import React from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'

const Title = styled.div`
  padding: 10px;
  font-weight: bold;
  margin: 20px;
`
const SampleComponent = () => {
  return (
    <Flex justifyContent="center">
      <Title>Sample Component</Title>
    </Flex>
  )
}

export default SampleComponent

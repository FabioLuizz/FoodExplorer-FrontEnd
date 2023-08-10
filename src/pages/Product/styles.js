import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 114px auto auto 93px;
  grid-template-areas:
    'header'
    'content'
    'content'
    'footer';
`

export const Path = styled(Link)`

`

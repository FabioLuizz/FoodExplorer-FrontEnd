import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  
  > img {
    width: 43px;
    height: 43px;

    display: flex;
  }

  > h1 {
    font-family: Roboto;
    font-size: 37px;
    font-weight: 700;
    line-height: 44px;

    white-space: nowrap;

    color: ${({ theme }) => theme.COLORS.Light_100};

  }
`

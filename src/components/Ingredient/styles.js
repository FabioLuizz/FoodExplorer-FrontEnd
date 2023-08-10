import styled from 'styled-components'

export const Container = styled.div`
  width: 125px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  font-family: Poppins, sans-serif;

  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.Dark_1000};

  color: ${({ theme }) => theme.COLORS.Light_100};

  &:hover {
    cursor: pointer;
  }
`

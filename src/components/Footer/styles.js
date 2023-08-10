import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: footer;

  width: 100%;
  height: 77px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  font-family: DM Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  white-space: nowrap;

  margin-top: 15px;

  color: ${({ theme }) => theme.COLORS.Light_200};
  background-color: ${({ theme }) => theme.COLORS.Dark_700};

  > .logo {
    display: flex;
    align-items: center;

    gap: 7px;

    font-family: Roboto;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;

    color: ${({ theme }) => theme.COLORS.Light_700};
    
    > img {
      width: 20px;
      height: 20px;

      color: #4D585E;
    }
  }
`

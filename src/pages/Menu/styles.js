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

  > header {
    width: 100%;

    display: flex;
    align-items: center;

    padding-left: 28px;

    color: ${({theme}) => theme.COLORS.Light_100};
    background-color: ${({ theme }) => theme.COLORS.Dark_900};
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 36px;

    .entrys {
      display: flex;
      flex-direction: row;
      align-items: center;

      > label {
        margin-right: -50px;

        z-index: 1;

        color: ${({ theme }) => theme.COLORS.Light_100};
      }

      > input {
        width: clamp(7.4rem, 2rem + 78vw, 24rem);

        padding-left: 60px;

        background-color: ${({ theme }) => theme.COLORS.Dark_900};
      }

      > input:focus {
        background-color: ${({ theme }) => theme.COLORS.Dark_900};
      }
    }

    > .navigation {
      width: 300px;

      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 46px;

      > button {
        width: clamp(200px, 150px + 50vw, 316px);

        display: flex;

        font-family: Poppins;
        font-size: 24px;
        font-weight: 300;
        line-height: 33px;

        color: ${({ theme }) => theme.COLORS.Light_300};
        background-color: ${({ theme }) => theme.COLORS.Dark_400};

        outline: none;
        border: none;
        border-bottom: 1px solid;
        border-color: ${({ theme }) => theme.COLORS.Dark_1000};

        padding-bottom: 10px;
      }
    }
  }
`

export const Path = styled(Link)`

  display: flex;
  align-items: center;

  color: ${({theme}) => theme.COLORS.Light_100};

  gap: 16px;
`
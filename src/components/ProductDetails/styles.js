import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 1130px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;

  header {
    display: flex;
    align-items: center;
    gap: 6px;

    padding: 0px 15px;

    margin-top: 20px;

    color: ${({ theme }) => theme.COLORS.Light_100};

    > h3 {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 700;
      line-height: 34px;
    }

    > h3:hover {
      cursor: pointer;
    }
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 0px 15px;

    gap: 47px;

    margin-top: 40px;

    color: ${({ theme }) => theme.COLORS.Light_100};

    > .image {
      img {
        border-radius: 50%;
      }
    }

    > .details {

      > h1 {
        font-family: Poppins;
        font-size: 27px;
        font-weight: 500;
        line-height: 37px;

      }

      > p {
        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;

      }

      > footer {
        display: flex;
        justify-content: start;
        gap: 16px;

        margin-left: 1px;

        margin-top: 46px;

        > button {
          display: flex;
          align-items: center;
          gap: 7px;

          padding: 12px 24px;

          border-radius: 5px;
          border: none;

          font-size: 14px;
          font-weight: 500;
          line-height: 16px;

          color: ${({ theme }) => theme.COLORS.Light_100};
          background-color: ${({ theme }) => theme.COLORS.Tomato_100};

          > img {
            width: 17px;
          }
        }

        > button:hover {
          background-color: ${({ theme }) => theme.COLORS.Tomato_200};
        }
      }
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    main {

      display: flex;
      flex-direction: column;

      margin-top: 60px;

      gap: 60px;

      > .details {
        display: flex;
        flex-direction: column;
        align-items: center;

        > .ingredients {
          padding-left: 20px;
        }
      }
    }

    footer {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      margin-left: 90px;
    }
  }
`

export const Ingredients = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  flex-wrap: wrap;

  margin-top: 24px;
`

export const Path = styled(Link)``

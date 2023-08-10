import styled from 'styled-components'

import { Link } from 'react-router-dom'


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 96px auto auto auto;
  grid-template-areas:
    'header'
    'content'
    'content'
    'content';

  main {
    grid-area: content;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 5px;
      height: 20px;
      background: rgba(0, 0, 0, 0);
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.Dark_1000};
      border-radius: 10px;
    }

    .catalog {
      max-width: 1130px;

      margin: 0 auto;

      display: flex;
      flex-direction: column;

      position: relative;


      gap: 24px;

      > h2 {
        font-family: Poppins;
        font-weight: 500;
        font-size: 24px;
        line-height: 25px;

        margin-top: 48px;

        color: ${({ theme }) => theme.COLORS.Light_300};
      }

      > .firstCards, .secondCards, .thirdCards {
        height: 362px;

        display: flex;
        flex-direction: row;
        gap: 16px;

        padding-right: 16px;

        border-radius: 5px;

        overflow-y: auto;

        > .ButtonLeft {
          height: 362px;
          width: 90px;

          position: absolute;

          color: white;


          background: linear-gradient(90deg, #000A0F, transparent);
          z-index: 100;
          
          border: none;
        }

        > .ButtonRight {
          height: 362px;
          width: 60px;

          position: absolute;
          right: 0;

          color: white;

          margin-left: 250px;

          background: linear-gradient(270deg, #000A0F, transparent);
          z-index: 100;

          border: none;
        }

        .scrollable-container::-webkit-scrollbar {
          display: none;
        }

        ::-webkit-scrollbar {
          display: none;
          height: 4px;
          background: rgba(0, 0, 0, 0);
        }

        ::-webkit-scrollbar-thumb {
          background: ${({ theme }) => theme.COLORS.Dark_1000};
          border-radius: 10px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .catalog {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`

export const Path = styled(Link)``

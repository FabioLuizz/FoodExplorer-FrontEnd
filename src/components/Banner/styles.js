import styled from 'styled-components'

export const Container = styled.div`
  main {
    width: 100%;
    height: 100%;

    margin: 0 auto;
    padding-left: 10px;
    padding-right: 15px;

    overflow: hidden;

    .general {
      display: flex;
      flex-direction: row;

      margin: 70px auto;

      max-width: 1120px;
      height: 120px;

      background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

      border-radius: 8px;

      > img {
        margin-left: -30px;
        margin-top: -58px;
      }
    }

    section {
      display: flex;
      flex-direction: column;

      margin-top: 25px;
      margin-bottom: 15px;
      margin-left: -20px;

      padding: 5px;

      font-family: Poppins;

      color: ${({ theme }) => theme.COLORS.Light_300};

      > h2 {
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
      }

      > p {
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;

        white-space: nowrap;
        text-overflow: ellipsis;

        @supports (-webkit-line-clamp: 2) {
          overflow: hidden;
          white-space: initial;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
    }
  }
`

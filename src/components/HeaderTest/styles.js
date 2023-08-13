import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 104px;

  justify-content: center;

  margin: 0 auto;

  background-color: ${({ theme }) => theme.COLORS.Dark_700};

  main {
    width: 100%;

    display: flex;
    justify-content: space-evenly;

    > .hide {
      display: none;
    }

    .menu {
      display: flex;
      justify-content: center;

      color: ${({ theme }) => theme.COLORS.Light_100};
    }

    .logo {
      display: flex;
      flex-direction: row;
      align-items: center;

      color: ${({ theme }) => theme.COLORS.Light_100};

      > img {
        width: 30px;
        height: 30px;
      }

      .text {
        > .logo-name {
          font-family: Roboto;
          font-weight: 700;
          font-size: 21px;
          line-height: 24px;

          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;

          color: ${({ theme }) => theme.COLORS.Light_100};
        }

        > .hide {
          display: none;
        }

        > p {
          font-size: 10px;

          margin-top: -10px;

          display: flex;
          justify-content: end;

          color: ${({ theme }) => theme.COLORS.Cake_200};
        }
      }

      .text:hover {
        cursor: pointer;
      }
    }

    .entrys {
      display: flex;
      flex-direction: row;
      align-items: center;

      > label {
        margin-right: -60px;

        z-index: 1;

        color: ${({ theme }) => theme.COLORS.Light_100};
      }

      > label:hover {
        cursor: pointer;
      }

      > input {
        width: clamp(6.4rem, -6rem + 38vw, 150rem);

        padding-left: 80px;

        background-color: ${({ theme }) => theme.COLORS.Dark_900};
      }

      > input:focus {
        background-color: ${({ theme }) => theme.COLORS.Dark_900};
      }
    }

    .buttons {
      display: flex;
      flex-direction: row;

      align-items: center;

      gap: 32px;

      color: ${({ theme }) => theme.COLORS.Light_100};

      .hide {
        display: none;
      }

      > .button {
        height: 48px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 14px;

        padding: 0 63px;

        border: none;
        border-radius: 5px;

        color: ${({ theme }) => theme.COLORS.Light_100};

        background-color: ${({ theme }) => theme.COLORS.Tomato_100};
      }

      > .button:hover {
        background-color: ${({ theme }) => theme.COLORS.Tomato_200};
      }

      > a {
        color: ${({ theme }) => theme.COLORS.Light_100};
      }
    }

    .buttons:hover {
      cursor: pointer;
    }

    .icon {
      width: 26px;
      height: 22px;

      display: flex;

      margin-top: 12px;

      position: relative;

      cursor: pointer;

      > .ballon {
        width: 17px;
        height: 17px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        outline: none;
        border: none;

        font-size: 12px;
        font-weight: 500;
        line-height: 24px;

        position: absolute;
        top: -10px;
        right: -10px;

        color: ${({ theme }) => theme.COLORS.Light_100};
        background-color: ${({ theme }) => theme.COLORS.Tomato_100};
      }
    }
  }

  @media (min-width: 799px) {
    main {
      .hide {
        display: none;
      }

      #icons {
        display: none;
      }

      .icon {
        > .ballon {
          display: none;
          z-index: -10;
        }
      }
    }
  }

  @media (max-width: 799px) {
    main {
      .logo {
        margin-right: 15px;
      }

      .buttons {
        display: none;
      }

      .entrys {
        display: none;
      }
    }
  }
`

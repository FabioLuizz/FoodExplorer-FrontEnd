import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 73px;

  margin-top: 60px;
  margin-bottom: 30px;

  header {
    margin-left: -15px;
  }

  main {
    display: flex;
    flex-direction: column;

    gap: 32px;

    h1 {
      text-align: center;

      font-family: Poppins;
      font-weight: 500;

      color: ${({ theme }) => theme.COLORS.Light_100};
    }

    button {
      width: clamp(15.4rem, 9rem + 43vw, 21rem);
      height: 48px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      border-radius: 5px;

      background-color: ${({ theme }) => theme.COLORS.Tomato_100};
      color: ${({ theme }) => theme.COLORS.Light_100};
    }

    button:hover {
      background-color: ${({ theme }) => theme.COLORS.Tomato_200};
    }

    > a {
      font-family: Poppins;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;

      text-align: center;

      color: ${({ theme }) => theme.COLORS.Light_400};
    }

    a:hover {
      color: ${({ theme }) => theme.COLORS.Light_200};
    }
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: clamp(0px, -60px + 12vw, 306px);

    header {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0;
      padding: 0;

      margin-top: -100px;
    }

    main {
      padding: 65px;
      margin-right: 5px;

      border-radius: 16px;

      background-color: ${({ theme }) => theme.COLORS.Dark_700};
    }
  }

  @media (max-width: 900px) {
    main {
      > h1 {
        display: none;
      }
    }
  }
`

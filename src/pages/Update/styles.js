import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 98px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 4px;
      height: 6px;
      background: rgba(0, 0, 0, 0);
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.Tomato_100};
      border-radius: 15px;
    }
  }
`

export const Form = styled.form`
  max-width: 1130px;

  display: grid;
  flex-direction: column;

  margin: 40px auto;

  padding-right: 15px;
  padding-left: 15px;

  gap: 32px;

  * {
    label {
      color: ${({ theme }) => theme.COLORS.Light_400};
    }
  }

  header {
    display: flex;

    color: ${({ theme }) => theme.COLORS.Light_100};

    gap: 10px;

    > p {
      font-size: 18px;
      font-weight: bold;
    }
  }

  header:hover {
    cursor: pointer;
  }

  h1 {
    font-weight: normal;

    color: ${({ theme }) => theme.COLORS.Light_100};
  }

  .first-column {
    display: flex;
    flex-direction: row;

    gap: 32px;

    > .upload {
      display: flex;
      flex-direction: column;

      > .icon {
        width: 100%;
        height: 50px;

        display: flex;
        align-items: center;
        gap: 10px;

        white-space: nowrap;

        margin-top: 10px;
        padding: 15px;

        z-index: 1;
        border-radius: 8px;

        color: ${({ theme }) => theme.COLORS.Light_100};
        background-color: ${({ theme }) => theme.COLORS.Dark_800};
      }

      > input[type='file'] {
        display: none;
      }
    }

    .name {
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 16px;

      > input {
        border: none;
        outline: none;

        background-color: ${({ theme }) => theme.COLORS.Dark_800};
        color: ${({ theme }) => theme.COLORS.Light_400};
      }
    }

    .category {
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 16px;

      div {
        padding: 17px;

        background-color: ${({ theme }) => theme.COLORS.Dark_800};

        border-radius: 8px;
        border: none;

        select {
          border: none;
          outline: none;

          background-color: ${({ theme }) => theme.COLORS.Dark_800};
          color: ${({ theme }) => theme.COLORS.Light_400};
        }
      }
    }
  }

  .second-column {
    display: flex;
    flex-direction: row;

    gap: 32px;

    > .ingredients {
      width: 100%;

      gap: 16px;

      > .tags {
        width: 100%;

        flex-wrap: wrap;

        display: flex;
        flex-direction: row;

        padding-left: 8px;

        border-radius: 8px;

        background-color: ${({ theme }) => theme.COLORS.Dark_800};
      }
    }

    .price {
      min-width: 251px;

      display: flex;
      flex-direction: column;
      gap: 16px;

      > input {
        border: none;
        outline: none;

        background-color: ${({ theme }) => theme.COLORS.Dark_800};
        color: ${({ theme }) => theme.COLORS.Light_600};
      }
    }
  }

  .third-column {
    display: flex;
    flex-direction: column;

    gap: 32px;

    > .description {
      gap: 16px;
    }

    > .details {
      display: flex;
      flex-direction: row;
      justify-content: end;

      gap: 32px;

      > button:nth-child(1) {
        background-color: ${({ theme }) => theme.COLORS.Dark_800};
      }

      > button {
        width: 172px;
        height: 48px;

        border-radius: 8px;
        border: none;

        color: ${({ theme }) => theme.COLORS.Light_100};
        background-color: ${({ theme }) => theme.COLORS.Tomato_100};
      }
    }
  }

  @media (max-width: 800px) {
    .first-column {
      display: flex;
      flex-direction: column;

      > .icon {
        width: 100%;
      }
    }

    .second-column {
      display: flex;
      flex-direction: column;

      width: 100%;
    }

    .third-column {
      .details {
        display: flex;
        flex-direction: row;

        > button {
          width: 100%;
        }
      }
    }
  }
`

export const Path = styled(Link)``

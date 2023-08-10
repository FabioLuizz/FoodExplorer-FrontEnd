import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 172px;

  padding: 19px 16px;

  resize: none;
  border: none;
  border-radius: 10px;
  outline: none;

  color: ${({ theme }) => theme.COLORS.Light_400};
  background-color: ${({ theme }) => theme.COLORS.Dark_800};

  font-size: 16px;
  font-family: Roboto;
  font-weight: regular;

  ::-webkit-scrollbar {
    width: 6px;
    height: 20px;
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.Tomato_100};
    border-radius: 15px;
  }
`

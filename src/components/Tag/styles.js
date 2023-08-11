import styled from 'styled-components'

export const Container = styled.div`
  width: 198px;
  height: 40px;

  border-radius: 8px;
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.Light_600}` : 'none'};

  background: ${({ theme, isNew }) => isNew ? theme.COLORS.Dark_800 : theme.COLORS.Light_600};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  white-space: nowrap;

  padding: 0 10px;

  margin: 5px 5px 5px 0px ;

  > input {
    width: 160px;
    height: 24px;

    background-color: ${({ theme, isNew }) => isNew ? theme.COLORS.Dark_800 : theme.COLORS.Light_600};
    border: none;
    outline: none;

    padding-left: 16px;
    padding-right: 10px;

    white-space: nowrap;

    font-family: Roboto;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS.Light_600 : theme.COLORS.Light_100};

    &::placeholder {
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.Light_600 : theme.COLORS.Light_100};
    }
  }

  > button {
    border: none;
    background: none;

    display: flex;
    align-items: center;

    > svg {
      width: 15px;
      height: 17px;

      border: none;

      color: ${({ theme, isNew }) => isNew ? theme.COLORS.Light_600 : theme.COLORS.Light_100};
    }
  }
`

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  align-items: center;

  font-size: 16px;
  font-weight: 700;

  color: ${({theme}) => theme.COLORS.Light_100};

  > button{
    background-color: transparent;
    border: 0px;

    color: ${({theme}) => theme.COLORS.Light_100};
  }
`
import styled from 'styled-components'

export const Container = styled.div`
  min-width: 244px;
  max-height: 362px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.Dark_300};

  color: ${({ theme }) => theme.COLORS.Light_100};
  background-color: ${({ theme }) => theme.COLORS.Dark_200};

  position: relative;

  img {
    margin-top: 24px;

    min-width: 120px;
    max-height: 120px;

    border-radius: 50%;

    cursor: pointer;
  }

  .icon {
    position: absolute;
    top: 10px;
    right: 10px;

    cursor: pointer;
  }

  .title {
    font-family: Poppins;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;

    margin-top: 5px;

    cursor: pointer;
  }

  .description {
    width: 170px;

    white-space: nowrap;
    text-overflow: ellipsis;

    text-align: center;

    white-space: nowrap;
    overflow: hidden;

    font-family: Roboto;
    font-size: 12px;
    font-weight: regular;

    color: ${({ theme }) => theme.COLORS.Light_400};
  }

  .value {
    font-family: Roboto;
    font-size: 22px;
    font-weight: 400;
    line-height: 16px;

    margin-top: 15px;
    margin-bottom: 15px;

    color: ${({ theme }) => theme.COLORS.Cake_200};
  }

  .mainButton {
    width: 110px;
    min-height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    border: none;
    border-radius: 5px;

    margin-top: 5px;
    margin-bottom: 20px;

    color: ${({ theme }) => theme.COLORS.Light_100};
    background-color: ${({ theme }) => theme.COLORS.Tomato_100};
  }

  .mainButton:hover {
    background-color: ${({ theme }) => theme.COLORS.Tomato_200};
  }

  .hide {
    display: none;
  }
`

export const Increment = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  font-size: 16px;
  font-weight: 700;

  color: ${({theme}) => theme.COLORS.Light_100};

  > button{
    background-color: transparent;
    border: 0px;

    color: ${({theme}) => theme.COLORS.Light_100};
  }
`
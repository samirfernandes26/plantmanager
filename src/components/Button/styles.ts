import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors';

interface IButtonProp {
  error?: string;
  width?: number;
  height?: number;
}

export const Butt = styled.TouchableOpacity.attrs(
  {
    activeOpacity: 0.6,

  }
)<IButtonProp>`
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 60px;
  width: 60px;

  ${({error}) => error && css`
    border-width: 1px;
    border-color: red;
  `}

  ${({width}) => width && css`
    width: ${width}px
  `}

  ${({height}) => height && css`
    height: ${height}px;
    border-color: red;
  `}

`

export const TextButt = styled.Text`

`;
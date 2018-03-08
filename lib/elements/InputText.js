import styled from 'styled-components';
import { darken } from 'polished';

import * as colors from '../styles/colors';

const inputSizes = {
  small: {
    'font-size':   '14px',
    'line-height': '30px',
    'padding':     '0 8px',
  },
  medium: {
    'font-size':   '16px',
    'line-height': '40px',
    'padding':     '0 8px',
  },
  large: {
    'font-size':   '18px',
    'line-height': '50px',
    'padding':     '0 8px',
  },
  wide: {
    'font-size':   '16px',
    'line-height': '40px',
    'padding':     '0 8px',
  },
  extraWide: {
    'font-size':   '16px',
    'line-height': '40px',
    'padding':     '0 8px',
  },
  fullWidth: {
    'font-size':   '16px',
    'line-height': '40px',
    'padding':     '0 8px',
  },
};

function setDisplay({ size }) {
  return size === 'fullWidth' ? 'block' : 'inline-block';
}
function setWidth({ size }) {
  return size === 'fullWidth' ? '100%' : 'initial';
}

const InputText = styled.input`
    display:        ${setDisplay};
    width:          ${setWidth};
    background:     ${({ bgColor }) => colors[bgColor]};
    color:          ${({ fontColor }) => colors[fontColor]};
    font-size:      ${({ size }) => inputSizes[size]['font-size']};
    line-height:    ${({ size }) => inputSizes[size]['line-height']};
    padding:        ${({ size }) => inputSizes[size]['padding']};
    border:         none;
    border-radius:  2px;
    cursor:         pointer;
    display:        inline-block;
    font-weight:    200;
    margin:         8px 0;
    outline:        none;
    transition:     all 300ms ease;
    &:              hover {
        background: ${({ bgColor }) => darken(0.1, colors[bgColor])};
    }
`;

InputText.defaultProps = {
    bgColor:   'darkSnow',
    fontColor: 'steel',
    size:      'wide'
};
export default InputText;

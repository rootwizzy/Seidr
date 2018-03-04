import styled from 'styled-components';

import * as colors from '../styles/colors';

const headerSizes = {
    '1': {
        'font-size': '40px',
        'line-height': '40px',
        'padding': '8px 0'
    },
    '2': {
        'font-size': '32px',
        'line-height': '32px',
        'padding': '8px 0'

    },
    '3': {
        'font-size': '24px',
        'line-height': '24px',
        'padding': '8px 0'

    },
    '4': {
        'font-size': '16px',
        'line-height': '16px',
        'padding': '8px 0'

    },
    '5': {
        'font-size': '14px',
        'line-height': '14px',
        'padding': '8px 0'

    }
};

const fontWeights = {
    'thin': {
        'font-weight': '100'
    },
    'normal': {
        'font-weight': '400'
    },
    'bold': {
        'font-weight': '900'
    }
};

const Header = styled.header`
    display: block;
    color: ${({ fontColor }) => colors[fontColor]};
    font-size: ${({ size }) => headerSizes[size]['font-size']};
    font-weight: ${({fontWeight}) => fontWeights[fontWeight]['font-weight']};
    line-height: ${({ size }) => headerSizes[size]['line-height']};
    margin: 8px 0;
    padding: ${({ size }) => headerSizes[size]['padding']};
    text-transform: ${({ textTransform }) => textTransform};
`;

Header.defaultProps = {
    fontColor: 'steel',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    size: '2'
};

export default Header;

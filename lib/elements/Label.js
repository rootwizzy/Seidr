import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const labelSizes = {
    small: {
        'font-size':   '8px',
        'line-height': '8px',
    },
    medium: {
        'font-size':   '16px',
        'line-height': '16px',
    },
    large: {
        'font-size':   '24px',
        'line-height': '24px',
    },
  };

const Label = styled.label`
    font-weight:    ${({ fontWeight }) => fontWeight};
    color:          ${({ color }) => colors[color]};
    font-size:      ${({ size }) => labelSizes[size]['font-size']};
    line-height:    ${({ size }) => labelSizes[size]['line-height']};
    text-transform: ${({ textTransform }) => textTransform};
    display:        inline-block;
    margin:         8px 0;
    transition:     all 300ms ease;
`;

Label.propTypes = {
    color:         PropTypes.string,
    fontWeight:    PropTypes.number,
    size:          PropTypes.string,
    textTransform: PropTypes.string,
};

Label.defaultProps = {
    color:         'silver',
    size:          'medium',
    fontWeight:    400,
    textTransform: 'capitalize',
};

export default Label;

import { PropTypes } from 'prop-types';

import { StyledButton } from './Button.styled';

export const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  children,
  iconSize,
}) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {Icon && <Icon size={iconSize} />}
      {children}
    </StyledButton>
  );
};

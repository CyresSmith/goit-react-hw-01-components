import { PropTypes } from 'prop-types';

import { Item, Label, Percentage, color } from './Item.styled';

export const StatisticsItem = ({ label, percentage, color }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </Item>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

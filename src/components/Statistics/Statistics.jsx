import { PropTypes } from 'prop-types';
import data from '../../incomingData/data.json';
import { Statistics, Title, StatList } from './Statistics.styled';
import { StatisticsItem } from './Item/Item';

export const StatisticsSection = () => {
  return (
    <Statistics>
      <Title>Upload stats</Title>
      <StatList>
        {data.map(item => (
          <StatisticsItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </StatList>
    </Statistics>
  );
};

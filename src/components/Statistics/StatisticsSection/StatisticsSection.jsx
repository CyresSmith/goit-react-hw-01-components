import { PropTypes } from 'prop-types';
import { Statistics, Title, StatList } from './StatisticsSection.styled';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';

export const StatisticsSection = ({ title, stats }) => {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(item => (
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

StatisticsSection.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

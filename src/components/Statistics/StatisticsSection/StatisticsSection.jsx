import { PropTypes } from 'prop-types';
import { Statistics, Title, StatList } from './StatisticsSection.styled';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';

export const StatisticsSection = ({ title, stats }) => {
  const widthFactor = stats.length;
  return (
    <Statistics widthFactor={widthFactor}>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </Statistics>
  );
};

StatisticsSection.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

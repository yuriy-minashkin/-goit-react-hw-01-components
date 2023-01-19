import PropTypes from 'prop-types';
import {Statistics} from './Statistics';

export const StatisticsCard = ({title, stats}) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        <Statistics stats={stats} />
      </ul>
    </section>
  );
}

StatisticsCard.propTypes = {
  title: PropTypes.string,
}
import PropTypes from 'prop-types';

export const Statistics = ({ stats }) => {
  return (
    <>
      {stats.map(({id, label, percentage}) => (
        <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      ))}
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
}


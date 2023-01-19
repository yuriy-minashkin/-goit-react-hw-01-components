import PropTypes from 'prop-types';

export const FriendListItem = ({friend: {avatar, name, isOnline, }}) => {
  return (
    <>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }).isRequired,
}
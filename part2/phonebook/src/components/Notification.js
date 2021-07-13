const Notification = ({ message }) => {
  if (message === null) {
    return null;
  } else if (message.startsWith("Added")) {
    return <div className="success">{message}</div>;
  } else if (message.startsWith("Information")) {
    return <div className="error">{message}</div>;
  }
  return null;
};

export default Notification;

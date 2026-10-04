function Message({ children, type = "info" }) {
  return (
    <div className={`message ${type}`}>
      {children}
    </div>
  );
}

export default Message;

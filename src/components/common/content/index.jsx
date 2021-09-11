const Content = ({ children }) => {
  return (
    <div className="content" style={{ minHeight: "calc(100vh - 90px)" }}>
      {children}
    </div>
  );
};

export default Content;

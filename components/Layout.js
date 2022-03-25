import Menubar from "./Menubar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Menubar />
      {children}
    </div>
  );
};

export default Layout;

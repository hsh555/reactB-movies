import Content from "../../common/content";
import Footer from "../../common/footer";
import Header from "../../common/header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default MainLayout;

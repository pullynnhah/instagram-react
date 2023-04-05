import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Page />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

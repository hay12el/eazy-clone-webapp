import ChooseIcon from "../components/chooseIcon/ChooseIcon";
import Header from "../components/header/Header";
import Results from "../components/results/Results";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div
        className="hoContainer"
        style={{ display: "flex", justifyContent: "center", direction: "rtl" }}
      >
        <ChooseIcon text="מניקור" />
        <ChooseIcon text="תסרוקות" />
        <ChooseIcon text="מספרה" />
        <ChooseIcon text="שיזוף" />
      </div>
      <Results />
      {/* <Footer /> */}
    </>
  );
};

export default Home;

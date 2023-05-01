import Navbar from "../Components/Layouts/Navbar";
import Styles from "../styles/Home.module.css";
const Home = () => {
  return (
    <main>
      <Navbar />
      <div className={`  ${Styles.about}`}>
        <h1>Run, Publish & Deploy and code - anywhere</h1>
      </div>
    </main>
  );
};

export default Home;

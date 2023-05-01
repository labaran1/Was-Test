import Product from "@/Components/Layouts/Product";
import Navbar from "../Components/Layouts/Navbar";
import Styles from "../styles/Home.module.css";
const Home = () => {
  return (
    <main>
      <Navbar />
      <div className={`  ${Styles.about}`}>
        <h1>Run, Publish & Deploy any code - anywhere</h1>
      </div>
      <Product />
    </main>
  );
};

export default Home;

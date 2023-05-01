import Product from "@/Components/Layouts/Product";
import Navbar from "../Components/Layouts/Navbar";
import Styles from "../styles/Home.module.css";
import GithubArrow from "@/Components/Icons/GithubArrow";
import Star from "@/Components/Icons/Star";
const Home = () => {
  return (
    <main>
      <Navbar />
      <div className={`  ${Styles.about}`}>
        <h1>Run, Publish & Deploy any code - anywhere</h1>
      </div>
      <Product />
      <div className={`  ${Styles.description}`}>
        <p>
          Serve sandboxed WebAssembly apps anywhere through a single runtime and
          do in days what others do in months
        </p>

        <div>
          <h2>Reach for the stars, we do too</h2>
          <button>
            <div>
              <h1> 15000</h1>
              <Star />
            </div>
            <GithubArrow />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;

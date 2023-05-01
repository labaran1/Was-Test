import Product from "@/Components/Layouts/Product";
import Navbar from "../Components/Layouts/Navbar";
import Styles from "../styles/Home.module.css";
import GithubArrow from "@/Components/Icons/GithubArrow";
import Star from "@/Components/Icons/Star";
import Arrow from "@/Components/Icons/Arrow";
import RunStart from "@/Components/Icons/RunStart";
import PublishStart from "@/Components/Icons/PublishStart";
import DeployStart from "@/Components/Icons/DeployStart";
import DockerIcon from "@/Components/Icons/Docker";
import RProgrammingIcon from "@/Components/Icons/RProgramming";
import CProgrammingIcon from "@/Components/Icons/CProgramming";
import JSProgrammingIcon from "@/Components/Icons/JSProgramming";
import PythonProgrammingIcon from "@/Components/Icons/PythonProgramming";
import GoProgrammingIcon from "@/Components/Icons/GoProgramming";
import CirclePointerIcon from "@/Components/Icons/CirclePointer";

import { Button } from "@mui/material";
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
          <button className={Styles.githubBtn}>
            <div>
              <p style={{ fontWeight: "600" }}> 15000</p> <Star />
            </div>
            <GithubArrow />
          </button>
        </div>
        <div className={Styles.create}>
          Create apps that{" "}
          <Button
            startIcon={<RunStart />}
            className={Styles.createBtn}
            endIcon={<Arrow />}
          >
            Run
          </Button>{" "}
          everywhere.
          <Button
            startIcon={<PublishStart style={{ width: "1rem" }} />}
            endIcon={<Arrow />}
            className={Styles.createBtn}
          >
            Publish
          </Button>{" "}
          and share with the community and{" "}
          <Button
            startIcon={<DeployStart />}
            endIcon={<Arrow />}
            className={Styles.createBtn}
          >
            Deploy
          </Button>{" "}
          to the edge, globally.
        </div>

        <div
          className={Styles.inspContainer}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button startIcon={<RunStart />} className={Styles.createBtn}>
            Run
          </Button>{" "}
          <p className={Styles.inspHeader}>Run The world</p>
          <p className={Styles.inspInfo}>
            Using a binary for each platform and chip is the past. Rise above
            with lightweight conternerized apps that simply run everywhere.
          </p>
          <div className={Styles.inspMain}>
            <div className={Styles.inspMainProduct}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <DockerIcon />
                <RProgrammingIcon />

                <CProgrammingIcon />

                <JSProgrammingIcon />

                <PythonProgrammingIcon />

                <GoProgrammingIcon />
              </div>
              <p style={{ color: "#fff" }}>
                Supports almost every programming language
              </p>
            </div>
            <div className={Styles.inspFooter}>
              <div>
                <p>Truly universal, runs everywhere & fast as native</p>
              </div>
              <div className={Styles.inspFooterCircleArrow}>
                <CirclePointerIcon />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

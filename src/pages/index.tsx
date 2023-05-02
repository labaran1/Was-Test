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
import VercelIcon from "@/Components/Icons/VercelIcon";
import SqliteIcon from "@/Components/Icons/Sqlite";
import MonkeyIcon from "@/Components/Icons/MonkeyIcon";
import BarIcon from "@/Components/Icons/BarIcon";
import LoveIcon from "@/Components/Icons/LoveIcon";
import ArrowDownIcon from "@/Components/Icons/ArrowDown";

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
        <section className={Styles.vercelQuote}>
          <p>This Programming tool makes it easier for apps to work anywhere</p>
          <div>
            <VercelIcon />
          </div>
        </section>

        <section className={Styles.publishContainer}>
          <Button
            startIcon={<PublishStart style={{ width: "1rem" }} />}
            className={Styles.createBtn}
          >
            Publish
          </Button>
          <p className={Styles.inspHeader}>Better together</p>
          <p className={Styles.inspInfo}>
            Using a binary for each platform and chip is the past. Rise above
            with lightweight conternerized apps that simply run everywhere.
          </p>
        </section>
      </div>
      <section className={Styles.productContainer}>
        <div className={Styles.productCard}>
          <div className={Styles.productCardHeader}>
            <p>Spidermonkey</p>
          </div>
          <div className={Styles.productCardContent}>
            <p>
              {" "}
              SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used
              in Firefox, Servo and various other projects.
            </p>
          </div>
          <div className={Styles.productCardFooter}>
            <div className={Styles.productCardFooterIcon}>
              <BarIcon />
            </div>
            |
            <div className={Styles.productCardFooterIcon}>
              <LoveIcon />
              <p>574</p>
            </div>
            <div className={Styles.productCardFooterIcon}>
              <ArrowDownIcon />
              <p>4k</p>
            </div>
          </div>
        </div>
        <div className={Styles.productCard}>
          <div className={Styles.productCardHeader}>
            <SqliteIcon />
            <p>Sqlite/sqlite</p>
          </div>
          <div className={Styles.productCardContent}>
            <p>
              SQLite is a C-language library that implements a small, fast,
              self-contained, high-reliability, full-featured, SQL database
              engine
            </p>
          </div>

          <div className={Styles.productCardFooter}>
            <div className={Styles.productCardFooterIcon}>
              <BarIcon />
            </div>
            |
            <div className={Styles.productCardFooterIcon}>
              <LoveIcon />
              <p>574</p>
            </div>
            <div className={Styles.productCardFooterIcon}>
              <ArrowDownIcon />
              <p>4k</p>
            </div>
          </div>
        </div>
        <div className={Styles.productCard}>
          <div className={Styles.productCardHeader}>
            <MonkeyIcon />
            <p>Syrusakbary / r2</p>
          </div>
          <div className={Styles.productCardContent}>
            <p>
              cowsay is a program that generates ASCII pictures of a cow with a
              message
            </p>
          </div>

          <div className={Styles.productCardFooter}>
            <div className={Styles.productCardFooterIcon}>
              <BarIcon />
            </div>
            |
            <div className={Styles.productCardFooterIcon}>
              <LoveIcon />
              <p>574</p>
            </div>
            <div className={Styles.productCardFooterIcon}>
              <ArrowDownIcon />
              <p>4k</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`  ${Styles.productFooter}`}>
        <div>
          <p>All Languages, fully containerized & collaborative</p>
        </div>
        <div className={Styles.inspFooterCircleArrow}>
          <CirclePointerIcon />{" "}
        </div>
      </section>
      <section
        className={`  ${Styles.vercelQuote}`}
        style={{ margin: "auto", marginTop: "2rem" }}
      >
        <p>This Programming tool makes it easier for apps to work anywhere</p>
        <div>
          <VercelIcon />
        </div>
      </section>
    </main>
  );
};

export default Home;

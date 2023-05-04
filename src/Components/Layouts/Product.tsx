/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Styles from "./Product.module.css";
import { Button } from "@mui/material";
import SpiderMonkeyIcon from "../Icons/SpiderMonkey";
import TantivityIcon from "../Icons/Tantivity";
import PythonIcon from "../Icons/PythonColored";
import LuaProgIcon from "../Icons/LuaProgamming";
import QuickJSIcon from "../Icons/Quick";
import TerminalIcon from "../Icons/Terminal";
import JSIcon from "../Icons/Javascript";
import DockerIcon from "@/Components/Icons/DockerColored";

export default function Product() {
  return (
    <div className={Styles.productContainer}>
      <div className={Styles.productIcons}>
        <div className={Styles.productIconsChild}>
          <Button startIcon={<PythonIcon />} className={Styles.productIconsBtn}>
            Python
          </Button>
          <Button
            startIcon={<TantivityIcon />}
            className={Styles.productIconsBtn}
          >
            Tantivity
          </Button>
          <Button
            startIcon={<SpiderMonkeyIcon />}
            className={Styles.productIconsBtn}
          >
            SpiderMonkey
          </Button>
          <Button className={Styles.productIconsBtn}>Java</Button>
          <Button
            startIcon={<PythonIcon />}
            className={Styles.productIconsBtn}
            style={{ border: "2px solid #4e4e4e" }}
          >
            Python
          </Button>
          <Button
            startIcon={<LuaProgIcon />}
            className={Styles.productIconsBtn}
          >
            Cowsay
          </Button>
          <Button className={Styles.productIconsBtn}>PHP</Button>
          <Button
            className={Styles.productIconsBtn}
            startIcon={<QuickJSIcon />}
          >
            Quick JS
          </Button>
          <Button
            className={Styles.productIconsBtn}
            startIcon={<TerminalIcon />}
          >
            CowSay
          </Button>
        </div>
        <div className={Styles.productIconsChild2}>
          <Button className={Styles.productIconsBtn} startIcon={<JSIcon />} />
          <Button
            className={Styles.productIconsBtn}
            startIcon={<TerminalIcon />}
          />
          <Button
            className={Styles.productIconsBtn}
            startIcon={<PythonIcon />}
          />
          <Button
            className={Styles.productIconsBtn}
            startIcon={<LuaProgIcon />}
          />
          <Button
            className={Styles.productIconsBtn}
            startIcon={<PythonIcon />}
          />
          <Button className={Styles.productIconsBtn} startIcon={<JSIcon />} />
          <Button
            className={Styles.productIconsBtn}
            startIcon={<LuaProgIcon />}
          />
          <Button
            className={Styles.productIconsBtn}
            startIcon={<TerminalIcon />}
          />
          <Button className={Styles.productIconsBtn} startIcon={<JSIcon />} />
          <Button
            className={Styles.productIconsBtn}
            startIcon={<TerminalIcon />}
          />
          <Button
            className={Styles.productIconsBtn}
            startIcon={<PythonIcon />}
          />
          <Button
            className={Styles.productIconsBtn}
            startIcon={<LuaProgIcon />}
          />
        </div>
        {/* <ProductIcon /> */}
      </div>
      <div className={Styles.interactiveCode}>
        <div className={Styles.codeTitle}>
          <p>Install</p>
          <p className={Styles.code}>
            {" "}
            $ curl https://get.wasmer.io -sSEL | sh
          </p>
        </div>
        <div className={Styles.codeSection}>
          <p>Run</p>
          <p>
            <span className={Styles.code}>
              $ wasmer run python/python - - -c
            </span>
            <span className={`${Styles.code}`} style={{ color: "green" }}>
              {" "}
              "{"for x in range(5): print(f`{x} square: {x * x}`)"}"
            </span>
          </p>
          <button>Run online</button>
        </div>
        <div className={Styles.codeFooter}>
          <p>
            {/* //todo:add arrow Icons */}
            Running Python <span>v</span> in CLI <span>v</span>
          </p>
        </div>
      </div>
    </div>
  );
}

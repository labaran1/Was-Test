/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Styles from "./Product.module.css";
import ProductIcon from "../Icons/Product";

export default function Product() {
  return (
    <div className={Styles.productContainer}>
      <div className={Styles.productIcons}>
        hi
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

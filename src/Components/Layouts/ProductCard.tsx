import React from "react";
import Styles from "./ProductCard.module.css";
import Link from "next/link";
import RunStart from "../Icons/RunStart";
import PublishStart from "../Icons/PublishStart";
import DeployStart from "../Icons/DeployStart";
export default function ProductCard() {
  return (
    <li className={Styles.productCard}>
      <Link href="#" className={Styles.productCardMain}>
        {" "}
        Products
      </Link>
      <ul className={Styles.Card}>
        <li className={Styles.productItem}>
          <span>
            <RunStart />
          </span>
          <span>
            <p>Run</p>
            <p>Run any code anywhere</p>
          </span>
        </li>
        <li className={Styles.productItem}>
          <span>
            <PublishStart />
          </span>
          <span>
            <p>Publish</p>
            <p>Create, publish, collaborate</p>
          </span>
        </li>
        <li className={Styles.productItem}>
          <span>
            <DeployStart />
          </span>
          <span>
            <p>Deploy</p>
            <p>Deploy above the clouds</p>
          </span>
        </li>
      </ul>
    </li>
  );
}

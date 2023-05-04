import React from "react";
import Link from "next/link";
import CirclePointerIcon from "../Icons/CirclePointer";
import BookIcon from "../Icons/Book";

import Styles from "./DeveloperCard.module.css";

export default function DeveloperCard() {
  return (
    <li className={Styles.developerCard}>
      <Link href="#">Developers</Link>

      <ul className={Styles.developerCardMain}>
        <li className={Styles.developerCardHeader}>CLI</li>
        <li className={Styles.developerCardDocument}>
          <div className={Styles.developerCardDocumentHead}>
            <BookIcon />
            <p>Documentation</p>
            <CirclePointerIcon />
          </div>
          <div className={Styles.developerCardDocumentMain}>
            <ul>
              <li>Get started</li>
              <li>Runtime</li>
              <li>Registry</li>
              <li>Deploy</li>
            </ul>
            <ul>
              <li>Guides</li>
              <li>Run a package</li>
              <li>Publish a package</li>
              <li>Deploy your website</li>
            </ul>
          </div>
        </li>
        <li className={Styles.DeveloperCardTools}>
          <p>Tools</p>
          <p>Visual Studio Code Extension</p>
        </li>

        <li className={Styles.DeveloperCardSDK}>
          <p className={Styles.DeveloperCardSDKHead}>SDK&rsquo;S</p>
          <div className={Styles.DeveloperCardSDKMain}>
            <p>Python</p>
            <p>Rust</p>
            <p>Go</p>
            <p>C</p>
            <p>C++</p>
            <p>Docker</p>
          </div>
        </li>
      </ul>
    </li>
  );
}

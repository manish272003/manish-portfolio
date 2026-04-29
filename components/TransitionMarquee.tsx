"use client";

import React from "react";
import styles from "./TransitionMarquee.module.css";

const phrases = [
  "PROJECTS & CASE STUDIES",
  "PRODUCT THINKING",
  "0→1 MVPs",
  "AI PRODUCTS"
];

export const TransitionMarquee = () => {

  const generateMarqueeItems = () => {
    // Render the sequence 4 times to ensure it covers ultra-wide screens seamlessly
    return [...Array(4)].map((_, i) => (
      <div className={styles.marqueeContent} key={i}>
        {phrases.map((phrase, index) => (
          <React.Fragment key={`${i}-${index}`}>
            <span className={styles.marqueeText}>{phrase}</span>
            <span className={styles.star}>✦</span>
          </React.Fragment>
        ))}
      </div>
    ));
  };

  return (
    <section className={styles.marqueeContainer}>
      <div className={styles.marqueeInner}>
        {generateMarqueeItems()}
      </div>
    </section>
  );
};

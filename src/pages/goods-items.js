import React from "react";

import { useState, useEffect } from "react";

import Banner from "../components/Global/Banner";

import * as globalStyles from "../styles/Global/Global.module.css";

import * as styles from "../styles/pages/GoodItems.module.css";

import kit from "../images/goodItems/kit.webp";

import phone from "../images/goodItems/phone.webp";

import store from "../images/goodItems/store.webp";

import donations from "../images/goodItems/donations.webp";

import Card from "../components/Global/Card";

import Button from "../components/Global/Button";

import useWindowDimensions from "../utils/hooks/useWindowDimensions";

import BannerImg from "../images/goodItems/bannerimg.jpg";

export default function GoodsItems() {
  const { width } = useWindowDimensions();

  return (
    <div>
      <Banner
        color="white"
        backgroundColor="darkblue"
        height={"30vh"}
        textDirection="left"
        backgroundImage={BannerImg}
      >
        <h1>Goods & Items</h1>
      </Banner>

      <div className={styles.section}>
        <div className={styles.sectionContent}>
          <h1>
            The goods & supplies you give today equip families to build home
            tomorrow.
          </h1>

          <p>
            <strong>
              Family Promise of Spokane provides all the essentials to families
              staying in our program as well as the move-in essentials for
              families that find permanent housing. ​ There are a few ways to
              give goods & items to Family Promise. All make a difference.
            </strong>
          </p>

          <p>
            <strong>
              There are a few ways to give goods & items to Family Promise. All
              make a difference.
            </strong>
          </p>
        </div>
      </div>

      <section className={globalStyles.genericContainer}>
        <div className={styles.sectionContent}>
          <Card image={kit} direction={width < 700 ? "vertical" : "horizontal"}>
            <div className={styles.cardContentContainer}>
              <div className={styles.cardContent}>
                <h3>Create a </h3>
                <h1>Welcome Home Kit</h1>
                <p>Provide the essentials for newly housed families.</p>
              </div>
              <Button color={"gold"}>Learn more</Button>
            </div>
          </Card>
          <Card
            image={phone}
            direction={width < 700 ? "vertical" : "horizontal"}
          >
            <div className={styles.cardContentContainer}>
              <div className={styles.cardContent}>
                <h3>Donate</h3>
                <h1>Items & Furniture</h1>
                <p>Build a stable foundation for a newly-housed family.</p>
              </div>
              <Button color={"gold"}>Learn more</Button>
            </div>
          </Card>
          <Card
            image={store}
            direction={width < 700 ? "vertical" : "horizontal"}
          >
            <div className={styles.cardContentContainer}>
              <div className={styles.cardContent}>
                <h3>Purchase</h3>
                <h1>Groceries & Supplies</h1>
                <p>Gift our Family Promise shelters the essential supplies.</p>
              </div>
              <Button color={"gold"}>Learn more</Button>
            </div>
          </Card>
          <Card
            image={donations}
            direction={width < 700 ? "vertical" : "horizontal"}
          >
            <div className={styles.cardContentContainer}>
              <div className={styles.cardContent}>
                <h3>Shop our</h3>
                <h1>Amazon Wishlist</h1>
                <p>Make our dreams come true!</p>
              </div>
              <Button color={"gold"}>Learn more</Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

const CardContent = () => {
  return (
    <div>
      <h1>Card content</h1>
    </div>
  );
};

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Grid from "@mui/material/Grid";

export default function Navbar() {
  return (
    <Box sx={{ alignContent: "center" }}>
      <div className={styles.meum_bar}>
        <Grid container spacing={15}>
          <Grid item xs={7}>
            <div className={styles.gtnews_logo}>
              <img
                className={styles.gtnewslogo}
                src="GTNEWS.png"
                alt="GTNews"
              ></img>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div className={styles.tech}>
              <Link href="/tech">
                <LanguageIcon sx={{ fontSize: 50 }} />
              </Link>
              <span className={styles.icontechtext}>Tech</span>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div className={styles.game}>
              <Link href="/game">
                <SportsEsportsIcon sx={{ fontSize: 50 }} />
              </Link>
              <span className={styles.icongametext}>Gaming</span>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div className={styles.account}>
              <AccountCircleOutlinedIcon sx={{ fontSize: 50 }} />
              <span className={styles.iconaccounttext}>Account</span>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

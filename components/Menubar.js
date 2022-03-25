import styles from "../styles/Home.module.css";
import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Grid from "@mui/material/Grid";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import Datetime from "./Datetime";
export default function Menubar() {
  return (
    <div className={styles.meum_bar}>
      <Box sx={{ mx: "auto" }}>
        <Grid item xs={12} container>
          <Grid item xs={0.5} container></Grid>
          <Grid item md={2} lg={1} container alignItems="center">
            <div className={styles.gtnews_logo}>
              <img
                className={styles.gtnewslogo}
                src="GTNEWS.png"
                alt="GTNews"
              ></img>
            </div>
          </Grid>
          <Grid item md={4.5} lg={5.5} container alignItems="center">
            <Datetime />
          </Grid>
          <Grid
            item
            xs={1}
            container
            alignItems="center"
            justifyContent="center"
          >
            <div className={styles.tech}>
              <Link href="/tech">
                <PublicOutlinedIcon sx={{ color: "#2196f3", fontSize: 50 }} />
              </Link>
              <br></br>
              <span className={styles.icontechtext}>Tech</span>
            </div>
          </Grid>
          <Grid
            item
            xs={1}
            container
            alignItems="center"
            justifyContent="center"
          >
            <div className={styles.game}>
              <Link href="/game">
                <SportsEsportsOutlinedIcon
                  sx={{ color: "#2196f3", fontSize: 50 }}
                />
              </Link>
              <br></br>
              <span className={styles.icongametext}>Game</span>
            </div>
          </Grid>
          <Grid
            item
            xs={1}
            container
            alignItems="center"
            justifyContent="center"
          >
            <div className={styles.notice}>
              <AddAlarmIcon sx={{ color: "#2196f3", fontSize: 50 }} />
              <br></br>
              <span className={styles.iconaccounttext}>Notice</span>
            </div>
          </Grid>
          <Grid
            item
            xs={1}
            container
            alignItems="center"
            justifyContent="center"
          >
            <div className={styles.favorite}>
              <StarOutlinedIcon sx={{ color: "#2196f3", fontSize: 50 }} />
              <br></br>
              <span className={styles.iconaccounttext}>Favorite</span>
            </div>
          </Grid>
          <Grid
            item
            xs={1}
            container
            alignItems="center"
            justifyContent="center"
          >
            <div className={styles.account}>
              <AccountCircleOutlinedIcon
                sx={{ color: "#2196f3", fontSize: 50 }}
              />
              <br></br>
              <span className={styles.iconaccounttext}>Account</span>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

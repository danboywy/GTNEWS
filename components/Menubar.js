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
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Menubar({ check, change }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
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
          <Grid item md={3.5} lg={4.5} container alignItems="center">
            <Datetime />
          </Grid>
          <Grid item xs={1} container alignItems="center">
            <Switch checked={check} onChange={change} />
            <span className={styles.switchtext}>Dark mode</span>
          </Grid>
          <Grid
            item
            xs={1}
            container
            alignItems="center"
            justifyContent="center"
          >
            <div className={styles.tech}>
              <Link href="/techNews">
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
              <Link href="/gameNews">
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
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <div className={styles.account}>
                <AccountCircleOutlinedIcon
                  sx={{ color: "#2196f3", fontSize: 50 }}
                />
                <br></br>
                <span className={styles.iconaccounttext}>Account</span>
              </div>
            </IconButton>
            <Menu
              sx={{ mt: "80px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

import { createStyles, makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import {BrowserRouter, Outlet, Route, RouterProvider, Routes} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import SideNav from "./SideNav";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

const drawerWidth = 240;

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  })
);

function App() {
  const classes = useStyles();
  return (
      <BrowserRouter>

      <CssBaseline />
      zack
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Module Federation
            </Typography>
          </Toolbar>
        </AppBar>
        <SideNav />
        <div className={classes.content}>
          <div className={classes.toolbar} />
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route path="page1" element={<Page1 />} />
                    <Route path="page2" element={<Page2 />} />
                </Route>
            </Routes>

        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;

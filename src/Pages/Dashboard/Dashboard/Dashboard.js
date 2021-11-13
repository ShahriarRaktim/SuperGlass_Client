import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from "@mui/material";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import DashboardHome from "../DashboardHome/DashboardHome";
import Review from "../Review/Review";
import AdminRoute from "../AdminRoute/AdminRoute";
import useAuth from "../../../Hooks/useAuth";
import "./Dashboard.css";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddProduct from "../AddProduct/AddProduct";
import ManageProducts from "../ManageProducts/ManageProducts";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { logOut, admin } = useAuth();

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {admin ? (
        <Box>
          <Link to={`${url}/manageallorders`} className="decoration">
            <Button className="text-info">Manage All Orders</Button>
          </Link>
          <Link to={`${url}/manageproducts`} className="decoration">
            <Button className="text-info">Manage Products</Button>
          </Link>
          <Link to={`${url}/addproduct`} className="decoration">
            <Button className="text-info">Add Product</Button>
          </Link>
          <Link to={`${url}/makeAdmin`} className="decoration">
            <Button className="text-info">Make Admin</Button>
          </Link>
        </Box>
      ) : (
        <Box>
          <Link to={`${url}`} className="decoration">
            <Button className="text-info">Dashboard</Button>
          </Link>
          <br />
          <Link to={`${url}/myorder`} className="decoration">
            <Button className="text-info ">My Order</Button>
          </Link>
          <br />
          <Link to={`${url}/review`} className="decoration">
            <Button className="text-info">Review</Button>
          </Link>
          <br />
          <Link to={`${url}/pay`} className="decoration">
            <Button className="text-info">Pay</Button>
          </Link>
        </Box>
      )}
      <Link to="/home" className="decoration" onClick={logOut}>
        <Button className="text-info">LOGOUT</Button>
      </Link>
      <br />
      <Link to="/" className="decoration">
        <Button className="text-info">Back To Home</Button>
      </Link>

      <List>
        {["", "", "", ""].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route exact path={`${path}/myorder`}>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route exact path={`${path}/review`}>
            <Review></Review>
          </Route>

          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageallorders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default Dashboard;

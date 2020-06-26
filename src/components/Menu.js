import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Menu extends Component {
  state = {};
  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Taxe TNB</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <a href="/" className="d-block">
                Youssef Angri
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview menu-open">
                <a href="/" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/taxes" exact={true} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Taxes</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/redevables" exact={true} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Redevables</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/terrains" exact={true} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Terrains</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/taux" exact={true} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Taux</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview menu-open">
                <a href="/" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Operation
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/paye" exact={true} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Paye Taxes</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/redevables/save"
                      exact={true}
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Add Redevables</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/terrains/new"
                      exact={true}
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Add Terrains</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/taux/edit" exact={true} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Edit Taux</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview menu-open">
                <a href="/" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Statistique
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink
                      to="/statistique/year"
                      exact={true}
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Revenue in Year</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default Menu;

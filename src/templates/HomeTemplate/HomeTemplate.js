import React, { Fragment } from 'react';
import { Route } from "react-router";
// import './HomeTemplate.css';
//Layout
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';



export default function HomeTemplate(props) {
  const { Component, ...restProps } = props

  return (
    <Route {...restProps} render={(routeProps) => {

      return (
        <Fragment>
          <Header {...routeProps} />
          <Component {...routeProps} />
          <Footer />
        </Fragment>
      )
    }} />

  )
}


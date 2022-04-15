import React from 'react'
import { Fragment } from 'react'
import { Route } from 'react-router-dom'
import * as s from './UserTemplate.Style'
import './UserTemplate.css'

export default function UserTemplate(props) {
    const { Component, ...restProps } = props
    return (
        <Route {...restProps} render={(routeProps) => {
            return (
                <Fragment>
                    <s.UserBackground className='scrollBarStyle'>
                        <Component {...routeProps} />
                    </s.UserBackground>
                </Fragment>
            )
        }} />
    )
}

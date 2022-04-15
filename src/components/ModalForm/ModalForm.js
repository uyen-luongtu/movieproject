import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import './ModalForm.css'

export default function ModalForm() {

    const { Component } = useSelector(state => state.ModalReducer)
    return (
        <Fragment>
            <div className="modal modalForm" id='modalForm'>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    {Component}
                </div>
            </div>
        </Fragment>
    )
}

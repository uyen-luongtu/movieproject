import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import * as s from './ModalFormStyle'

export default function ModalForm() {

    const { Component } = useSelector(state => state.ModalReducer)
    return (
        <Fragment>
            <s.ModalForm className="modal modalForm" id='modalForm'>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    {Component}
                </div>
            </s.ModalForm>
        </Fragment>
    )
}

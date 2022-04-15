import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input } from 'antd'
// import './UserManagement.css'
import * as s from './UserManagementStyle'
import * as gs from '../../../styles/GlobalStyle'
import { layDanhSachNguoiDungAction, xoaNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import { OPEN_MODALFORM } from '../../../redux/types/ModalType';
import EditUserForm from '../../../components/ModalForm/EditUserForm/EditUserForm';
import AddUserForm from '../../../components/ModalForm/AddUserForm/AddUserForm';


export default function UserManagement() {
    const { Search } = Input;
    const dispatch = useDispatch()

    const onSearch = value => {
        dispatch(layDanhSachNguoiDungAction(value))
    };
    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction())
    }, [])
    const { dsUser } = useSelector(state => state.QuanLyNguoiDungReducer)
    const columns = [
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            width: '15%',
            sorter: (a, b) => a.hoTen.localeCompare(b.hoTen),
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            width: '15%',
            sorter: (a, b) => a.hoTen.localeCompare(b.hoTen),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: '27%',

        },
        {
            title: 'Số điện thoại',
            dataIndex: 'soDt',
            width: '15%',
            sorter: (a, b) => a.soDt - b.soDt,
        },
        {
            title: 'Mã người dùng',
            dataIndex: 'maLoaiNguoiDung',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Hành động',
            dataIndex: 'hoTen',
            width: '12%',
            render: (hoTen, user) => {
                return (
                    <gs.ActionBtnGroup className=' d-flex justify-content-around'>
                        <span>
                            <button className='btn btn-primary'
                                data-bs-toggle="modal" data-bs-target="#modalForm" onClick={() => {
                                    dispatch({
                                        type: OPEN_MODALFORM,
                                        Component: <EditUserForm user={user} />
                                    })
                                }}><i className="fa-solid fa-pen-to-square"></i></button>
                            <p className='btnTooltip'>Sửa</p>
                        </span>
                        <span>
                            <button className='btn btn-danger' onClick={() => {
                                if (window.confirm('Bạn có chắc muốn xoá người dùng ?')) {
                                    //Gọi action
                                    dispatch(xoaNguoiDungAction(user.taiKhoan))
                                }

                            }}><i className="fa-solid fa-trash-can"></i></button>
                            <p className='btnTooltip'>Xóa</p>

                        </span>
                    </gs.ActionBtnGroup>
                )
            },
        },
    ];
    const data = dsUser
    return (
        <Fragment>
            <s.UserManagement id='userManagement'>
                <h3>Quản lý Người dùng</h3>
                <div className='d-flex justify-content-between mb-3'>
                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalForm" onClick={() => {
                        dispatch({
                            type: OPEN_MODALFORM,
                            Component: <AddUserForm />
                        })
                    }}>
                        <span>Thêm người dùng </span>
                        <i className="fa-solid fa-user-plus"></i>
                    </button>
                    <Search style={{ width: '80%' }}
                        placeholder="Nhập tên để tìm kiếm"
                        enterButton="Tìm kiếm"
                        size="large"
                        onChange={(e) => {
                            dispatch(layDanhSachNguoiDungAction(e.target.value))
                        }}
                        onSearch={onSearch}
                    />
                </div>

                <Table columns={columns} dataSource={data} pagination={{ position: ['topRight', 'bottomRight'], pageSize: '5', total: `${dsUser.length}`, showTotal: (total, range) => `${range[0]}-${range[1]} / ${total} users`, showSizeChanger: false }} />



            </s.UserManagement>


        </Fragment>
    )
}

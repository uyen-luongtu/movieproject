import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Input } from 'antd'
import * as s from './FilmManagementStyle'
import * as gs from '../../../styles/GlobalStyle'
import AddFilmForm from '../../../components/ModalForm/AddFilmForm/AddFilmForm'
import { layDanhSachPhimAction, xoaPhimAction } from '../../../redux/actions/QuanLyPhimAction';
import EditFilmForm from '../../../components/ModalForm/EditFilmForm/EditFilmForm';
import { OPEN_MODALFORM } from '../../../redux/types/ModalType';
import AddShowtime from '../../../components/ModalForm/AddShowtime/AddShowtime';


export default function FilmManagement() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layDanhSachPhimAction())
    }, [])
    const danhSachPhim = useSelector(state => state.QuanLyPhimReducer.danhSachPhim)

    //search 
    const { Search } = Input;
    const onSearch = (value) => {
        dispatch(layDanhSachPhimAction(value))
    };

    //Table
    const columns = [
        {
            key: '1',
            title: 'Mã phim',
            dataIndex: 'maPhim',
            sorter: (a, b) => a.maPhim - b.maPhim,
        },
        {
            key: '2',
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: hinhAnh => (<img style={{ width: '60px', margin: 'auto' }} src={hinhAnh} alt='hinhAnhPhim' />),

        },
        {
            key: '3',
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            sorter: (a, b) => a.tenPhim.localeCompare(b.tenPhim),

        },
        {
            key: '4',
            title: 'Mô tả',
            dataIndex: 'moTa',
            width: '45%'
        },
        {
            key: '5',
            title: 'Hành động',
            dataIndex: ['maPhim'],
            render: (maPhim, phim, index) => {
                return (
                    <gs.ActionBtnGroup className=' d-flex justify-content-around'>
                        <span>
                            <button className='btn btn-primary'
                                data-bs-toggle="modal" data-bs-target="#modalForm" onClick={() => {
                                    dispatch({
                                        type: OPEN_MODALFORM,
                                        Component: <EditFilmForm phim={phim} />
                                    })
                                }}><i className="fa-solid fa-pen-to-square"></i></button>
                            <p className='btnTooltip'>Sửa</p>
                        </span>
                        <span>
                            <button className='btn btn-danger' onClick={() => {
                                if (window.confirm('Bạn có chắc muốn xoá phim ?')) {
                                    //Gọi action
                                    dispatch(xoaPhimAction(maPhim));
                                }

                            }}><i className="fa-solid fa-trash-can"></i></button>
                            <p className='btnTooltip'>Xóa</p>

                        </span>
                        <span>
                            <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#modalForm" onClick={() => {
                                dispatch({
                                    type: OPEN_MODALFORM,
                                    Component: <AddShowtime phim={phim} />
                                })
                            }}><i className="fa-solid fa-calendar-days"></i></button>
                            <p className='btnTooltip'>Tạo lịch chiếu</p>
                        </span>

                    </gs.ActionBtnGroup>
                )
            }
        },
    ];
    const data = danhSachPhim


    return (
        <Fragment>
            <s.FilmManagement id='filmManagement'>
                <h3>Quản lý Phim</h3>
                <div className='d-flex justify-content-between mb-3'>
                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalForm" onClick={() => {
                        dispatch({
                            type: OPEN_MODALFORM,
                            Component: <AddFilmForm />
                        })
                    }}>
                        <span>Thêm Phim </span>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                    <Search style={{ width: '80%' }}
                        placeholder="Nhập tên phim để tìm kiếm"
                        enterButton="Tìm kiếm"
                        size="large"
                        onChange={(e) => {
                            dispatch(layDanhSachPhimAction(e.target.value))
                        }}
                        onSearch={onSearch}
                    />
                </div>
                <Table columns={columns} dataSource={data} pagination={{ position: ['topRight', 'bottomRight'], pageSize: '5', total: `${danhSachPhim.length}`, showTotal: (total, range) => `${range[0]}-${range[1]} / ${total} phim` }} />

            </s.FilmManagement>
        </Fragment>
    )
}

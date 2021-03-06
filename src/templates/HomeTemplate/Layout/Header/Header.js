import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import * as s from './HeaderStyle'
// import '../../HomeTemplate.css'
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config"

import loginImg from '../../../../assets/img/loginImg.png'
import { history } from '../../../../App'


import logo from '../../../../assets/img/logo/logo.png'

export default function Header() {
    const tenTaiKhoan = JSON.parse(localStorage.getItem(USER_LOGIN))?.taiKhoan
    return (
        <Fragment>

            <s.Header>
                <s.NavbarHeader className="navbar navbar-expand-sm">
                    <div className="container-fluid p-0">
                        <NavLink className='logo navbar-brand' to={'/'}>
                            <img src={logo} alt='logo' />
                        </NavLink>
                        <button className="toggleBtn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                            <i className="fa-solid fa-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse col-6 col-md-4 justify-content-center" id="navbarContent">
                            <ul className="navbar-nav ">
                                <li className='nav-item d-block d-sm-none'>
                                    {tenTaiKhoan ?
                                        <span className="nav-link d-flex align-items-center" id='account' >
                                            <img src={`https://i.pravatar.cc/150?u=${tenTaiKhoan}`} alt='avatar' />
                                            <span>{tenTaiKhoan}</span>
                                        </span>
                                        : <button className=" d-flex align-items-center" id='account' onClick={() => {
                                            history.push('/login')
                                        }}>
                                            <img src={loginImg} alt='userLogo' /> <span>????ng nh???p</span>
                                        </button>
                                    }
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#listMovies">L???ch Chi???u</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={async () => {
                                        await history.push('/')
                                        let yPos = document.getElementById('showtimes').offsetTop;
                                        window.scrollTo({
                                            top: yPos - 60,
                                        })
                                    }}>C???m R???p</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={async () => {
                                        await history.push('/')
                                        let yPos = document.getElementById('application').offsetTop
                                        window.scrollTo({ top: yPos - 60 })
                                    }}>???ng D???ng</a>
                                </li>
                                {tenTaiKhoan ?
                                    <li className='nav-item d-block d-sm-none'>
                                        <a className="nav-link" onClick={() => {
                                            localStorage.removeItem(USER_LOGIN);
                                            localStorage.removeItem(TOKEN);
                                            window.location.reload()
                                        }}>
                                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                            <span> ????ng xu???t
                                            </span> </a>
                                    </li>
                                    : ''
                                }

                            </ul>
                        </div>
                        <div className="collapse navbar-collapse col-4 justify-content-end">
                            {tenTaiKhoan ?
                                <button className="d-flex align-items-center" id='account' >
                                    <img src={`https://i.pravatar.cc/150?u=${tenTaiKhoan}`} />
                                    <span>{tenTaiKhoan}</span>
                                    <button className='logoutBtn' onClick={() => {
                                        localStorage.removeItem(USER_LOGIN);
                                        localStorage.removeItem(TOKEN);
                                        window.location.reload()

                                    }}>????ng xu???t</button>
                                </button>

                                : <button className="d-flex align-items-center" id='account' onClick={() => {
                                    history.push('/login')
                                }}>
                                    <img src={loginImg} alt='userLogo' /> <span>????ng nh???p</span>
                                </button>
                            }
                        </div>
                    </div>
                </s.NavbarHeader>
            </s.Header>
        </Fragment >
    )
}
{/* <header className='header'>
<nav id='navbarHeader' className='navbar navbar-expand-lg'>
    <div className='col-4' style={{ lineHeight: '0' }}>
        <NavLink className='logo' to={'/home'}>
            <img src={logo} alt='logo' />
        </NavLink>
    </div>
    <div className='col-4'>
        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <a className="nav-link" href="/home#listMovies">L???ch Chi???u</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={async () => {
                        await history.push('/home')
                        let yPos = document.getElementById('showtimes').offsetTop
                        window.scrollTo({ top: yPos - 60 })
                    }}>C???m R???p</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={async () => {
                        await history.push('/home')
                        let yPos = document.getElementById('application').offsetTop
                        window.scrollTo({ top: yPos - 60 })
                    }}>???ng D???ng</a>
                </li>
            </ul>
        </div>
    </div>
    <div className='col-4'>
        <div className="collapse navbar-collapse justify-content-end">
            {tenTaiKhoan ?
                <button className="d-flex align-items-center" id='account' >
                    <img src={`https://i.pravatar.cc/150?u=${tenTaiKhoan}`} />
                    <span>{tenTaiKhoan}</span>
                    <button className='logoutBtn' onClick={() => {
                        localStorage.removeItem(USER_LOGIN);
                        localStorage.removeItem(TOKEN);
                        window.location.reload()

                    }}>????ng xu???t</button>
                </button>

                : <button className="d-flex align-items-center" id='account' onClick={() => {
                    history.push('/login')
                }}>
                    <img src={loginImg} alt='userLogo' /> <span>????ng nh???p</span>
                </button>
            }
        </div>
    </div>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
</nav>
</header > */}
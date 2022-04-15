import React, { Fragment } from 'react'
import { listPartner } from '../../../../data/data'
import * as s from './FooterStyle'
// img logo
import fbLogo from '../../../../assets/img/logo/fbLogo.png'
import appleLogo from '../../../../assets/img/logo/appleLogo.png'
import androidLogo from '../../../../assets/img/logo/androidLogo.png'
import zaloLogo from '../../../../assets/img/logo/zaloLogo.png'


export default function Footer() {
    return (
        <Fragment>
            <s.Footer>
                <div className='footer_content'>
                    <s.FooterTop>
                        <div className='row'>
                            <div className='col-12 col-sm-3 col-md-4'>
                                <p className='footer_title'>TIX</p>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <p>FAQ</p>
                                        <p>Brand Guidlines</p>
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <p>Thỏa thuận sử dụng</p>
                                        <p>Chính sách bảo mật</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-md-4'>
                                <p className='footer_title'>ĐỐI TÁC</p>
                                <s.ParterList>
                                    {listPartner.map((partner, index) => {
                                        return <s.Partner key={index} >
                                            <div className='imgBg'>
                                                <img src={partner.img} alt='img' />
                                            </div>
                                        </s.Partner>
                                    })}
                                </s.ParterList>
                            </div>
                            <div className='col-12 col-sm-3 col-md-4'>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <p className='footer_title'>MOBILE APP</p>
                                        <s.LogoGroup>
                                            <s.Logo src={appleLogo} />
                                            <s.Logo src={androidLogo} />
                                        </s.LogoGroup>
                                    </div>
                                    <div className='col-12 col-md-6 mt-3 mt-md-0'>
                                        <p className='footer_title'>SOCIAL</p>
                                        <s.LogoGroup>
                                            <s.Logo src={fbLogo} />
                                            <s.Logo src={zaloLogo} />
                                        </s.LogoGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </s.FooterTop>
                    <s.FooterBottom>
                        <p>&copy; 2021 All right reserved</p>
                    </s.FooterBottom>
                </div>
            </s.Footer>
        </Fragment>
    )
}
{/* <footer className='footer' >
<div className='footer_content'>
    <div className='footer_top py-5' >
        <div className='row'>
            <div className='col-4'>
                <p className='footer_title'>TIX</p>
                <div className='row'>
                    <div className='col-6'>
                        <p>FAQ</p>
                        <p>Brand Guidlines</p>
                    </div>
                    <div className='col-6'>
                        <p>Thỏa thuận sử dụng</p>
                        <p>Chính sách bảo mật</p>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <p className='footer_title'>ĐỐI TÁC</p>
                <div className='footer_partnerList flex'>

                    {listPartner.map((partner, index) => {
                        return <div key={index} className='footer_partner'>
                            <div className='imgBg'>
                                <img src={partner.img} />
                            </div>

                        </div>
                    })}

                </div>
            </div>
            <div className='col-4'>
                <div className='row'>
                    <div className='col-6'>
                        <p className='footer_title'>MOBILE APP</p>
                        <div className='footer_logo flex'>
                            <img src={appleLogo} />
                            <img src={androidLogo} />
                        </div>


                    </div>
                    <div className='col-6'>
                        <p className='footer_title'>SOCIAL</p>
                        <div className='footer_logo flex'>
                            <img src={fbLogo} />
                            <img src={zaloLogo} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='footer_bottom py-4'>
        <p className='m-0 text-center' style={{ color: '#949494' }}>&copy; 2021 All right reserved</p>
    </div>
</div>
</footer > */}

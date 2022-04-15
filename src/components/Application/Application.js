import React, { Fragment } from 'react'
// import './Application.css'
import * as s from './ApplicationStyle'
import phoneImg from '../../assets/img/phoneImg.png'
import appSlide from '../../assets/img/app-slide.jpg'

export default function Application() {
    return (
        <Fragment>
            <s.ApplicationContainer id='application'>
                <s.Content>
                    <div className='d-sm-flex align-items-center'>
                        <s.ContentLeft>
                            <h2 className='text-white'>Ứng dụng tiện lợi dành cho người yêu diện ảnh</h2>
                            <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                            <button>App miễn phí - Tải về ngay</button>
                            <p>TIX có 2 phiên bản <a>iOS</a> & <a>Android</a></p>
                        </s.ContentLeft>
                        <s.ContentRight>
                            <s.PhoneImg>
                                <img src={phoneImg} alt='PhoneImg' />
                            </s.PhoneImg>
                            <s.AppImg className='appSlide'>
                                <img src={appSlide} alt='appImg' />
                            </s.AppImg>

                        </s.ContentRight>
                    </div>
                </s.Content>
            </s.ApplicationContainer >

        </Fragment >
    )
}

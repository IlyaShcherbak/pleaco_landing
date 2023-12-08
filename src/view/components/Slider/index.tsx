// Core
import { FC } from 'react';

// MUI
import { Theme, useMediaQuery } from '@mui/material';

// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper Modules
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Imgages
import screenDesc1 from '../../../assets/images/screenDesc1.png';
import screenDesc2 from '../../../assets/images/screenDesc2.png';
import screenDesc3 from '../../../assets/images/screenDesc3.png';
import screenMobile1 from '../../../assets/images/screenMobile1.png';
import screenMobile2 from '../../../assets/images/screenMobile2.png';
import screenMobile3 from '../../../assets/images/screenMobile3.png';


// Styles
import './styles.css';


export const Slider: FC = () => {
    const isSm = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
    const pagination = {
        clickable:    true,
        renderBullet: function (index:number, className:string) {
            return '<span class="' + className + '"></span>';
        },
    };

    return (
        <>
            <Swiper
                centeredSlides
                autoplay = {{
                    delay:                2500,
                    disableOnInteraction: false,
                }}
                className = 'mySwiper'
                effect = { 'fade' }
                modules = { [ Autoplay, Pagination, EffectFade ] }
                pagination = { pagination }
                slidesPerView = { 1 }
                spaceBetween = { 30 }>
                <SwiperSlide>
                    <img
                        alt = 'Screen 1'
                        src = { isSm ? screenMobile1 :  screenDesc1 }
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        alt = 'Screen 2'
                        src = { isSm ? screenMobile2 : screenDesc2 }
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        alt = 'Screen 3'
                        src = { isSm ? screenMobile3 : screenDesc3 }
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

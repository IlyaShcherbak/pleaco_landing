// Core
import React, { useEffect, useState } from 'react';

// Styles
import { BackgroundWrapper, BackgroundImage } from './backgroundStyles';


import img1 from '../../../assets/images/img1.png';
import img2 from '../../../assets/images/img2.png';
import img3 from '../../../assets/images/img3.png';

const images = [
    img1,
    img2,
    img3,
];

interface Props {
    children: React.ReactNode;
}

export const Background = ({ children }: Props) => {
    const [ currentImageIndex, setCurrentImageIndex ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentImageIndex + 1) % images.length;
            setCurrentImageIndex(nextIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [ currentImageIndex ]);

    return (
        <BackgroundWrapper>
            {images.map((image, index) => (
                <BackgroundImage
                    key = { index }
                    style = {{ backgroundImage: `url(${image})`, opacity: index === currentImageIndex ? 1 : 0 }}
                />
            ))}

            {children}
        </BackgroundWrapper>
    );
};

// export default Background;

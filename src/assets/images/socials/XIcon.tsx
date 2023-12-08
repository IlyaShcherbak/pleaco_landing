// Core
import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const XIcon: FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            fill = 'none'
            height = '24'
            viewBox = '0 0 24 24'
            width = '24'
            { ...props }>
            <path
                d = 'M18.205 2.25H21.513L14.286 10.51L22.788 21.75H16.13L10.916 14.933L4.95 21.75H1.64L9.37 12.915L1.215 2.25H8.04L12.753 8.481L18.203 2.25H18.205ZM17.044 19.77H18.877L7.045 4.126H5.078L17.044 19.77Z'
                fill = '#1C1C1C'
            />
        </SvgIcon>
    );
};

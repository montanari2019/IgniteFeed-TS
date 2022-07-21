import { ImgHTMLAttributes } from 'react';
import styleAvatar from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return(
        <img className={hasBorder ? styleAvatar.avatarWidthBorder : styleAvatar.avatar}
        {...props}
        
        />
    )
}
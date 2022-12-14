import React from 'react';
import { SvgIcon } from '@mui/material';

export type SendProps = {
  //** Цвет */
  color?: string;
  //** ширина и высота элемента */
  size?: number;
  //** размер */
  fontSize?: number;
  [key: string]: any;
};

export const Send = ({
  color = '#000',
  size = 24,
  fontSize,
  ...props
}: SendProps) => (
  <SvgIcon
    style={{ fontSize: fontSize ?? '' }}
    height={size}
    width={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M3.077 2.913c-.433.143-.637.4-.637.8 0 .124.361 1.834.898 4.247L4.236 12l-.905 4.069c-.885 3.985-.903 4.073-.858 4.29.062.297.294.627.527.752.378.202-.248.489 8.895-4.078 4.551-2.273 8.349-4.179 8.441-4.236.202-.126.406-.484.446-.782a.815.815 0 0 0-.25-.679c-.061-.058-3.869-1.984-8.461-4.28-9.165-4.583-8.536-4.294-8.994-4.143M11.22 8.83c3.465 1.732 6.3 3.159 6.3 3.17 0 .024-12.585 6.32-12.633 6.32-.019 0 .269-1.363.64-3.03.491-2.21.673-3.1.673-3.29 0-.19-.182-1.08-.673-3.29-.371-1.667-.659-3.03-.64-3.03.018 0 2.868 1.417 6.333 3.15"
      fillRule="evenodd"
      fill={color}
    />
  </SvgIcon>
);

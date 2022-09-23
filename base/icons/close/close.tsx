import React from 'react';
import { SvgIcon } from '@mui/material';

export type CloseProps = {
  //** Цвет */
  color?: string;
  //** ширина и высота элемента */
  size?: number;
  //** размер */
  fontSize?: number;
  [key: string]: any;
};

export const Close = ({
  color = '#000',
  size = 24,
  fontSize,
  ...props
}: CloseProps) => (
  <SvgIcon
    style={{ fontSize: fontSize ?? '' }}
    height={size}
    width={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M6.213 5.442a.97.97 0 0 0-.756.701.891.891 0 0 0 .068.711c.055.11.926 1.011 2.568 2.656L10.579 12l-2.503 2.51c-1.547 1.551-2.528 2.564-2.568 2.653a.999.999 0 0 0 .627 1.377.883.883 0 0 0 .719-.065c.11-.055 1.011-.926 2.656-2.568L12 13.421l2.49 2.486c1.645 1.642 2.546 2.513 2.656 2.568.4.199.822.129 1.14-.189a.948.948 0 0 0 .189-1.14c-.055-.11-.926-1.011-2.568-2.656L13.421 12l2.486-2.49c1.642-1.645 2.513-2.546 2.568-2.656a.891.891 0 0 0 .068-.711 1.02 1.02 0 0 0-.529-.626 1.059 1.059 0 0 0-.856.002c-.125.062-.919.829-2.668 2.574L12 10.579 9.51 8.093C7.898 6.484 6.964 5.58 6.86 5.53c-.2-.098-.431-.13-.647-.088"
      fill={color}
      fillRule="evenodd"
    />
  </SvgIcon>
);

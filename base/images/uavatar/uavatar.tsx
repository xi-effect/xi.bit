import React from 'react';
import { Stack, Typography } from '@mui/material';

export type UavatarProps = {
  label?: string;
  color?: string;
  bgcolor?: string;
};

export const Uavatar = ({
  label = 'М',
  color = '#9769FF',
  bgcolor = '#F5F0FF',
}: UavatarProps) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: 48,
        height: 48,
        borderRadius: 24,
        bgcolor: bgcolor,
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '20px',
          color: color,
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
};

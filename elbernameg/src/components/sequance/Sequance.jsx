import React from 'react';
import {Box, useTheme } from '@mui/material';
import { tokens } from '../themes/themes';

export default function Sequance() {
    const theme = useTheme();
    const colors = tokens (theme.palette.mode);

  return (
    <Box display = {"flex"} alignItems = {"center"}>
        <Box name = "step1"
         sx={{
            background: colors.redAccent[500],
            borderRadius: "100%",
            width: "20px",
            height: "20px",
        }}></Box>

        <Box name = "link1"
         sx={{
            background: colors.redAccent[500],
            width: "40px",
            height: "1.5px",
            borderRadius: "10%",
        }}></Box>


         <Box name = "step2"
         sx={{
            background: colors.redAccent[500],
            borderRadius: "100%",
            width: "20px",
            height: "20px",
        }}></Box>
        <Box name = "link2"
         sx={{
            background: colors.redAccent[500],
            width: "40px",
            height: "1.5px",
            borderRadius: "10%",
        }}></Box>


         <Box name = "step3"
         sx={{
            background: colors.redAccent[500],
            borderRadius: "100%",
            width: "20px",
            height: "20px",
        }}></Box>
         <Box name = "link3"
         sx={{
            background: colors.redAccent[500],
            width: "40px",
            height: "1.5px",
            borderRadius: "10%",
        }}></Box>


         <Box name = "step4"
         sx={{
            background: colors.redAccent[500],
            borderRadius: "100%",
            width: "20px",
            height: "20px",
        }}></Box>

    </Box>
  )
}
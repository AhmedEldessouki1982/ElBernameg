import React from 'react';
import { Box, Switch, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../themes/themes';

// import '../nav/nav.scss';

export default function Nav() {
  const theme = useTheme();
  const colors = tokens (theme.palette.mode);

  let toggleTheme = React.useContext(ColorModeContext);
  
  
  return (
    <Box 
      display = {"flex"}
      alignItems = {"center"}
      justifyContent = {"space-between"}
      sx= {{
          height: 50,
          width: "99hv",
          backgroundColor: colors.primary[500]
      }}>

        <Box
          fontSize = {"20px"}
          marginLeft = {"15px"}
          >{`</> elBernameg`}
        </Box>

        
        <Box margine = {"5px"}>
          <Switch color="warning" onChange={()=>{
            toggleTheme.toggleColorMode()
          }} />
          
        </Box>

    </Box>
  )
}
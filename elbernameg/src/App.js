import './App.css';
import ActivityContext from './components/ActivityContext/ActivityContext';
import Nav from './components/nav/Nav';
import Activity from './components/activity/Activity';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './components/themes/themes';

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value = { colorMode } >
        <ThemeProvider theme = {theme}>
          <ActivityContext>
            <CssBaseline />
            <Nav />
          </ActivityContext>
          <Activity />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
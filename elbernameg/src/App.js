import './App.css';
import ActivityContext from './components/ActivityContext/ActivityContext';
import Nav from './components/nav/Nav';
import Activity from './components/activity/Activity';


export default function App() {
  return (
    <>
      <ActivityContext>
        <Nav />
      </ActivityContext>
      <Activity />
    </>
  );
}
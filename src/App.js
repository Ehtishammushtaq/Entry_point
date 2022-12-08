import Resumeupdated from './components/files/Resumeupdated.pdf'
import Box from './components/box';
import './App.css';
import Profile from './components/profile';

function App() {
  return (
    
   <div>
     <Profile/>
     <Box text='LINKDIN' href='https://www.linkedin.com/in/ehtishammushtaq/'/>
     <Box text='PROJECTS' href='https://my-projects-eta.vercel.app/'/>
     <Box text='RESUME' href={Resumeupdated}/>
     <Box text='GITHUB' href='https://github.com/Ehtishammushtaq'/>
    
   </div>
    
      
  );
}

export default App;

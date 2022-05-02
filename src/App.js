
import './App.css';

import SongList from './components/SongList/SongList'
import Header from './components/Header/Header'

function App() {
  const mySongs =[{id: 1, Artist : "Eminem", Song : "The Real Slim Shady" },
  { id: 2, Artist : "Eminem", Song : "Lose Yourself"},
  { id: 3, Artist : "Whiz Khalifa", Song : "King of Everything"},
  { id: 4, Artist : "Lil Peep", Song : "Live Forever" },
  { id: 5, Artist : "Lil Peep", Song : "Angeldust"},
  { id: 6, Artist : "White Katt", Song : "Sorry"},
  { id: 7, Artist : "White Katt", Song : "Verkiu deimantais" },
  { id: 8, Artist : "Micro One", Song : "Amžinai"},
  { id: 9, Artist : "Erke", Song : "Nauja Teritorija"}]
  
  return (
    
    <div>
      <Header 
      text="Song List"
      customStyle={{color: 'purple', backgroundColor: "green"}}
      />
      <SongList mySongs={mySongs}/>
     
     
     
  
    </div>
  );
}

export default App;

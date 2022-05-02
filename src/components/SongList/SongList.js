// 00g.00import React from 'react';
import PropTypes from 'prop-types';


function SongList(props) {
  const handleClick = () => console.log("click")

  


  return ( <> <h2 className="c1" style={{color:"darkgreen"}}>My favourite songs </h2>
  <ol style={{backgroundColor:"grey"}}>

  {props.mySongs.map((value,idx) => (
     <li key={idx} style={{color: 'gold'}}> <strong> {value.Artist} </strong> <i> {value.Song}  </i> </li>  
  ))}
</ol>
<button onClick={() =>
   handleClick("Value!")}
  >Press</button>
  </>
  );
  
}
  SongList.defaultProps ={
    mySongs: [{ id: 3, Artist : "Whiz Khalifa", Song : "King of Everything"}],
  };
  SongList.propTypes = {
    mySongs: PropTypes.array,
  };


export default SongList;

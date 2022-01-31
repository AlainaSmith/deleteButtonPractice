import React, {useState} from "react";
import Data from "./Data";
import './BandComponent.css';

const Bands = (bandi) => {
// const {id, name, favoriteSong} = bandi

    const [list, setList] = useState(Data)

    const handleRemove = (id) => {
        const newList = list.filter((item) => 
            item.id !== id)
            setList(newList)
    }

    const [id, setId] = useState(Data[0].id)
    const [band, setBand] = useState(Data[0])
    const [maxId] = useState(Data[Data.length - 1].id)
  
    const selectBand = (value) => { /* hello */
      if((value === -1 && id > 1) || (value === 1 && id < maxId)){ /* if we are decreasing the value, and the id is not 1, OR if we are increasing the value and the id is less than the maximum, then we can change the card without going too high or too low. */
        setId(value === 1 ? id + 1 : id - 1) /*if the value is equal to one, then we are going to increase the id by on, otherwise (: this is an else statement in line) we are going to subtract the id by 1 */
        setBand(value === 1 ? Data[id] : Data[id-2]) /* */
      }
    }
    
    return(
        <div id="bandCard">
        <div className="bandList">
           
            <ul>
                {list.map((item)=> (
                    <li key={item.id}>
                        <p><strong>{id}/3</strong></p>
                        <span>Musician Name:{item.name}</span>
                        <br></br>
                        <span>Favorite Song: {item.favoriteSong}</span>
                        <br></br>
                        <button className='previous' onClick={() => {selectBand(-1)}}>Previous</button>
                        <button type="button" onClick={()=>handleRemove(item.id)}>Remove</button>
                        <button className="next" onClick={()=>{selectBand(1)}}>Next</button>
                       
                    </li>
                ))}
               </ul>
                {/* <Bands bandi={band}/> */}
        </div>
        </div>
    )

}

export default Bands



       // <Bands selectBand={selectBand}/> 
import { useSelector,useDispatch } from 'react-redux';
import { changeName } from '../features/search';
import "./Text.css"
export const Text = () => {
const dispatch =useDispatch()
const {personName,filteredName}=useSelector((state)=>state.person)
  return (
    <div>
      <input className="input-style" value={personName} onChange={(e)=>dispatch(changeName(e.target.value))} placeholder='Enter Name' type='text' />
{filteredName.length>0?
 <ul className="list-style">
 {filteredName.map((names) => (
   <div key={names.id} className="item-style">
     <li>{names?.name}</li>
     <li>{names?.id}</li>
     <li>{names?.age}</li>
     <li>{names?.country}</li>
     <li>{names?.profession}</li>
   </div>
 ))}
</ul>
:null
}


    </div>
  );
};
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
     <li>Name: {names?.name}</li>
     <li>Id: {names?.id}</li>
     <li>Age: {names?.age}</li>
     <li>Country: {names?.country}</li>
     <li>Profession: {names?.profession}</li>
   </div>
 ))}
</ul>
:null
}


    </div>
  );
};
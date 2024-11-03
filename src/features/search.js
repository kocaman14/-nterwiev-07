import { createSlice } from "@reduxjs/toolkit"; 
import people from "../components/Persons";

const initialState={
personName:"",
newName:[],
filteredName:""
}

export const personSlice=createSlice({
name:"searchPerson",
initialState,
reducers:{
changeName:(state,action)=>{
let name = action.payload;
state.personName = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if(state.personName.length>0){
state.filteredName=people.filter((person)=>person.name.includes(state.personName))
}else{
state.filteredName=[]
}
console.log(state.filteredName)
}
}
})


export const {changeName}=personSlice.actions
export default personSlice.reducer
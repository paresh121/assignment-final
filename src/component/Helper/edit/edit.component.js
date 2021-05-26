import "./edit.styles.scss";
export const Edit=({func, setState})=>{
    return(
        <button className="editBox" onClick={()=>func(setState)}>
        <img src="logo/edit.png"/>
        Edit 
        </button>
    );
}
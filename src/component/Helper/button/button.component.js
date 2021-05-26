import "./button.styles.scss";
export const ButtonComponent=({func, setState, type="submit", labelText,  classBox, classButton})=>{
    return(
        <div className={classBox}>
            <button className={classButton} type={type} onClick={()=>func?func(setState):null}> {labelText} </button>
        </div> 
    );
}
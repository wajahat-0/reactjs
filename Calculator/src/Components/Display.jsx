import styles from   './Display.module.css'
 export default function Display({value,keyDown}){
    
    return (
        <input type="text" className={styles.Display} value={value} onKeyDown={keyDown} ></input>
    )

}
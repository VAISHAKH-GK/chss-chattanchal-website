import React, { useState } from "react";
import styles from "./Popup.module.css";

export default function Popup(props) {

  return (
    <>
      {props.visible == true ? (
        <div className={styles.outside} onClick={()=>{props.onChange((prev)=>!prev)}}>
          <div className={styles.popupBody}>
            <div className={styles.box}> <code>{props.text}</code></div>
            <div className={styles.buttonWrapper}>
              <button onPress={()=>{props.onChange((prev)=>!prev)}} >Close</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

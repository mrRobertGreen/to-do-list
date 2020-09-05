import React, {FC} from "react";
import styles from "./column.module.scss"

export const Column: FC = ({children}) => {
   return (
      <div className={styles.wrapper}>
         {children}
      </div>
   )
}

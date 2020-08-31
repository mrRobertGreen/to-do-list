import React, {FC} from "react";
import styles from "./row.module.scss"

export const Row: FC = ({children}) => {
   return (
      <div className={styles.wrapper}>
         {children}
      </div>
   )
}
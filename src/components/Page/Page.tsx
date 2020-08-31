import React, {FC} from "react";
import styles from "./page.module.scss"

export const Page: FC = ({children}) => {
   return (
      <div className={styles.wrapper}>
         {children}
      </div>
   )
}
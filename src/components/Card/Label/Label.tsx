import React, {FC} from "react";
import styles from "./label.module.scss"

type PropsT = {
   bgColor: string
}

export const Label: FC<PropsT> = ({
                                     children,
                                     bgColor,
                                  }) => {
   return (
      <div className={styles.wrapper} style={{backgroundColor: bgColor}}>
         {children}
      </div>
   )
}
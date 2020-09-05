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
        <div className={styles.wrapper}>
            <div style={{backgroundColor: bgColor}}>
                <div className={styles.header}> {children} </div>
            </div>
        </div>
    )
};
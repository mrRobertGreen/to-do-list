import React, {FC} from "react";
import styles from "./card.module.scss"
import {Label} from "./Label/Label";

type PropsT = {
   items: Array<ItemT>
   label: string
   labelColor: string
}
type ItemT = {
   id: number
   title: string
}

export const Card: FC<PropsT> = ({
                                    children,
                                    items,
                                    label,
                                    labelColor,
                                 }) => {
   return (
      <div className={styles.wrapper}>
         <Label children={label} bgColor={labelColor}/>
         {items.map(item => (
            <div key={item.id}>
               {item.title}
            </div>
         ))}
      </div>
   )
}
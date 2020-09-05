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
    title: string,
    done: string
}

export const Card: FC<PropsT> = ({
                                     children,
                                     items,
                                     label,
                                     labelColor,
                                 }) => {
    const doneLine = (Id:number) => {
        // функция ищет нужный textarea и зачеркивает в нем текст
        // ее нужно дописать, вставив после if обновление элемента
        for (let i=1; i < items.length; i++) {
            if (i == Id) {
                items[i].done = "line-throw"
            }
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.label}>
                <Label children={label} bgColor={labelColor}/>
            </div>
            {items.map(item => (
                <form key={item.id}>
                    <input type="radio" onChange={() => doneLine(item.id)}/>
                    <textarea autoComplete="on" className={styles.item} style={{ textDecoration: item.done }}>{item.title}</textarea>
                </form>
            ))}
        </div>
    )
}
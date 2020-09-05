import React, {FC} from "react";
import styles from "./home.module.scss"
import {Page} from "../../components/Page/Page";
import {Card} from "../../components/Card/Card";
import {MyDay} from "../../components/MyDay/MyDay";

export const Home: FC = () => {
    return (
        <Page>
            <MyDay />
            <div className={styles.cardsArea} >
                <Card items={[{id: 1, title: "Пойти туда-то", done:""},
                              {id: 2, title: "Прийти оттуда-то", done:""},
                              {id: 2, title: "Прийти оттуда-то", done:""}]}
                      label={"To-Do"}
                      labelColor={"red"}/>
                <Card items={[{id: 1, title: "Пойти туда-то", done:""},
                    {id: 2, title: "ничего не сделать", done:""},
                    {id: 2, title: "Прийти оттуда-то", done:""}]}
                      label={"To-Do"}
                      labelColor={"red"}/>
                <Card items={[{id: 1, title: "Пойти туда-то", done:""},
                    {id: 2, title: "Прийти оттуда-то", done:""},
                    {id: 2, title: "Прийти оттуда-то", done:""}]}
                      label={"To-Do"}
                      labelColor={"green"}/>
                <Card items={[{id: 1, title: "Пойти туда-то", done:""},
                    {id: 2, title: "Прийти оттуда-то", done:""},
                    {id: 2, title: "Прийти оттуда-то", done:""}]}
                      label={"To-Do"}
                      labelColor={"blue"}/>
                <Card items={[{id: 1, title: "Пойти туда-то", done:""},
                    {id: 2, title: "Прийти оттуда-то", done:""},
                    {id: 2, title: "Прийти оттуда-то", done:""},
                    {id: 2, title: "Прийти оттуда-то", done:""}]}
                      label={"To-Do"}
                      labelColor={"blue"}/>
                <Card items={[{id: 1, title: "Пойти туда-то", done:""},
                    {id: 2, title: "Прийти оттуда-то", done:""},
                    {id: 2, title: "Прийти оттуда-то", done:""}]}
                      label={"To-Do"}
                      labelColor={"blue"}/>
                <Card items={[{id: 1, title: "Пойти туда-то", done:""},
                    {id: 2, title: "Прийти оттуда-то", done:""},
                    {id: 2, title: "Прийти оттуда-то", done:""}]}
                      label={"To-Do"}
                      labelColor={"blue"}/>
            </div>
        </Page>
    )
};
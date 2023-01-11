import clsx from "clsx";
import { HeadActionButton } from "./HeadActionButton/HeadActionButton";
import { HeadActionTitle } from "./HeadActionTitle/HeadActionTitle";
import "./HeadAction.css"

export function HeadAction ({className}) {
    return (
        <a className={clsx("content__playlists-header", className)}>
            <HeadActionTitle title="Подкасты и книги" subtitle="Слушайте не только песни"/>
            <HeadActionButton title="Смотреть всё"/>
        </a>
    )
}
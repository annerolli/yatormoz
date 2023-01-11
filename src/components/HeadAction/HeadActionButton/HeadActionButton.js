import { ReactComponent as HeadActionIcon } from "./headActionIcon.svg"
import "./HeadActionButton.css"


export function HeadActionButton({title}) {
    return (
        <div className="content__playlists-link">
            <span className="content__playlists-link-text">
                {title}
            </span>
            <span className="content__playlists-link-icon">
                <HeadActionIcon/>
            </span>
        </div>
    )
}
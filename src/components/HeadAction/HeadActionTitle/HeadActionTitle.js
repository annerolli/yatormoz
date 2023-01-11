import "./HeadActionTitle.css"

export function HeadActionTitle({ title, subtitle }) {
    return (
        <div className="content__playlists-title">
            <h2 className=" title title__hover">
                {title}
            </h2>
            <p className="subtitle">
                {subtitle}
            </p>
        </div>
    )
}
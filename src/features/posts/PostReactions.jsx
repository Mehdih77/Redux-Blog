
const reactionsIcons = {
    eyes: "👀",
    heart: "❤️",
    hooray: "🎉",
    rocket: "🚀",
    thumbsUp: "👍",
}

export default function PostReactions({ reactions }) {

    const reactionsBtns = Object.keys(reactions).map( reaction => (
        <button key={reactions} type="button" className="muted-button reaction-button">
         {reactionsIcons[reaction]} {reactions[reaction]}
        </button>
    ))

    return (
        <div>
            {reactionsBtns}
        </div>
    )
}

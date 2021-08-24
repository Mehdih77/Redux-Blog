import { useDispatch } from "react-redux"
import { increaseReaction } from "./postsSlice";

const reactionsIcons = {
    eyes: "👀",
    heart: "❤️",
    hooray: "🎉",
    rocket: "🚀",
    thumbsUp: "👍",
}

export default function PostReactions({ reactions, postId }) {

    const dispatch = useDispatch();

    const handleIncreaseReaction = (postId,reaction) => {
        dispatch(increaseReaction({postId,reaction}))
    }

    const reactionsBtns = Object.keys(reactions).map( reaction => (
        <button 
        onClick={() => handleIncreaseReaction(postId,reaction)}
        key={reaction} 
        type="button" 
        className="muted-button reaction-button">
         {reactionsIcons[reaction]} {reactions[reaction]}
        </button>
    ))

    return (
        <div>
            {reactionsBtns}
        </div>
    )
}

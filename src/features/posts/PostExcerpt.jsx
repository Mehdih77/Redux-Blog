import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import PostReactions from "./PostReactions";
import TimeAgo from './TimeAgo';
import { selectPostById } from './postsSlice';
import { Link } from "react-router-dom";


export default function PostExcerpt({ postId }) {

    //* get all detail in posts like id,title,content adn so on
    //? selectPostById(state, postId) >>>> first entry came from postsSlice that we make it
    //? second entry is the id of post that we need
    const post = useSelector(state => selectPostById(state, postId));

    return (
        <article className="post-excerpt">
            <h3>{post.title}</h3>
            <div>
                <PostAuthor userId={post.id} />
                <TimeAgo date={post.date} />
            </div>
            <p className="post-content">{post.content.substring(0,70)} </p>
            <PostReactions reactions={post.reactions} />
            <Link className="button muted-button" to={`/posts/${post.id}`} dideo-checked="true">View Post</Link>
        </article>
    )
}

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {selectPostById} from './postsSlice';
import PostReactions from './PostReactions';
import TimeAgo from './TimeAgo';
import PostAuthor from './PostAuthor';
import { Link } from "react-router-dom";


export default function PostPage() {

    const { postId } = useParams();
    const post = useSelector(state => selectPostById(state, postId));

    return (
        <section className="post">
            <h2>{post.title}</h2>
            <div>
                <PostAuthor userId={post.user} />
                <TimeAgo date={post.date} />
            </div>
            <p className="post-content">{post.content} </p>
            <PostReactions reactions={post.reactions} postId={post.id} />
            <Link className="button" to='/' dideo-checked="true">Edit Post</Link>
        </section>
    )
}

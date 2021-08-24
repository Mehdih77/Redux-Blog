import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { selectPostsByUser } from "../posts/postsSlice";
import { selectUserById } from "./usersSlice";

export default function UserPage() {

    const { userId } = useParams();
    const userPosts = useSelector(state => selectPostsByUser(state, userId));
    const user = useSelector(state => selectUserById(state, userId));

    const postLink = userPosts.map( post => (
        <li>
            <Link key={post.id} to={`/posts/${post.id}`} dideo-checked="true">
             {post.title}
            </Link>
        </li>
    ))

    return (
        <section>
            <h2>{user.firstName}</h2>
            <ul>
                {postLink}
            </ul>
        </section>

    )
}

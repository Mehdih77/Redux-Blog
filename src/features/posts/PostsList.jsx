import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostExcerpt from "./PostExcerpt";
import { fetchPosts, selectPostIds } from "./postsSlice";


export default function PostsList() {

    const dispatch = useDispatch();
    const postIds = useSelector(selectPostIds); //* get all post Ids
    const status = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);

    // for get posts
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [status, dispatch])

    // manage status and showing content
    let content;
    if (status === 'loading') {
        content = <div className='loader'>Loading ...</div>
    } else if ( status === 'success') {
        content = postIds.map( id => <PostExcerpt postId={id} key={id} />)
    } else if ( status === 'error') {
        content = <div className="erorr">{error}</div>
    }
     
    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {content}
        </section>
    )
}

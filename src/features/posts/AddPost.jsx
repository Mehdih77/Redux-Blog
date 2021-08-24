import { useState } from "react";
import { useSelector } from "react-redux";
import {selectAllUsers} from '../users/usersSlice';

export default function AddPost() {

    const [title, setTitle] = useState();
    const [userId, setUserId] = useState();
    const [content, setContent] = useState();
    const [status, setStatus] = useState("idle");

    const users = useSelector(selectAllUsers)

    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeAuthor = (e) => setUserId(e.target.value);
    const onChangeContent = (e) => setContent(e.target.value);

    // use for checking that inputs dont be blank
    const canSave = () => {
        return [title, userId, content].every(Boolean) && status === "idle";
    }

    const userOptions = users.map(user => <option value={user.id}> {user.lastName} </option>)

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input value={title} onChange={onChangeTitle} type="text" id="postTitle" name="postTitle" placeholder="What's on your mind?" />
                <label htmlFor="postAuthor">Author:</label>
                <select value={userId} onChange={onChangeAuthor} id="postAuthor">
                    <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea value={content} onChange={onChangeContent} id="postContent" name="postContent"></textarea>
                <button type="button" disabled={!canSave()} >
                    Save Post
                </button>
            </form>
        </section>

    )
}

export default function AddPost() {
    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text" id="postTitle" name="postTitle" placeholder="What's on your mind?" />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor">
                    <option value=""></option>
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea id="postContent" name="postContent"></textarea>
                <button type="button">
                    Save Post
                </button>
            </form>
        </section>

    )
}

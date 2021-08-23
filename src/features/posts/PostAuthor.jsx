import { useSelector } from "react-redux";
import { selectUserById } from '../users/usersSlice';

export default function PostAuthor({ userId }) {

    // get detail of user by Id
    const author = useSelector(state => selectUserById(state, userId))

    return (
        <span>by {author ? author.lastName : "Unknown Author"} -</span>
    )
}

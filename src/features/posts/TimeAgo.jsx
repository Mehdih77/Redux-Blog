import moment from "moment";

export default function TimeAgo({ date }) {

    //using moment package
    const momentDate = moment(date);
    return (
        <span title={momentDate.toString()}>
        &nbsp; <i>{momentDate.fromNow()}</i>
        </span>
    )
}




export default function HistoryTemplate({ data }) {
    const { param, timeStamp } = data;
//   
    return (
        <div className="">
            <div className="history">
                <p>{param}</p>
                <p>{timeStamp}</p>
            </div>
            <hr className="hr" />
        </div>
    )
}
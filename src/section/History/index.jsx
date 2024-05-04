import history from '../../lib/history';
import HistoryTemplate from './historyTemplate';


export default function HistoryPage() {

    console.log(history);
    return (
        <div className='historyTemplate'>
            <h1>5 recent searches</h1>
            <div className='historyTemplate1'>
                <div className='historyTemplate2'>
                    {history.map((his, index) => (
                        <HistoryTemplate key={index} data={his} />
                    ))}
                </div>
            </div>
        </div>
    );
}
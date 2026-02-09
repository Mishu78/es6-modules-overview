import './Sunglass.css';
import Watch from './Watch/Watch';
//import add from '../../Utils/calculate';
import { add,multiply,divide } from '../../Utils/calculate';
const Sunglass = () => {
    const first=55;
    const second=199;
    const sum=add(first,second);
     const multiply=(first,second);
     const divide=(first,second)=>{
        return first/second;
     }
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;
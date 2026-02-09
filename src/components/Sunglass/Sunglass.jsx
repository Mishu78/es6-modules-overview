import './Sunglass.css';
import Watch from './Watch/Watch';
//import add from '../../Utils/calculate';
import { add, multiply, divide } from '../../Utils/calculate';
const Sunglass = () => {
    const first=55;
    const second=199;
    const sum=add(first,second);
     const product=multiply(first,second);
     const result=divide(first,second);
    return (
        <div>
            <Watch></Watch>
            <p>sum:{sum}</p>
            <p>multiply:{product}</p>
            <p>divide:{result}</p>
        </div>
    );
};

export default Sunglass;
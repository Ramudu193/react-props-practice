import { useSelector, useDispatch } from 'react-redux';
import { addMoney } from './store';

export default function UserInfo() {
  const data = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{data.username}, Balance: ₹{data.balance}</h1>
      <button onClick={() => dispatch(addMoney(500))}>Add ₹5000</button>
    </div>
  );
}  
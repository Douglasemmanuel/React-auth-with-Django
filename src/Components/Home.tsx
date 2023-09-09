import react, {useState,useEffect} from 'react'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { setAuth } from '../redux/authSlice';
import { RootState } from '../redux/store';
const Home = () => {
    const dispatch = useDispatch();
    const [message,setmessage] = useState('');
    const auth = useSelector((state:RootState)=> state.auth.value)
    useEffect(()=>{
        (async ()=>{
          try{
            const {data} = await axios.get('user');
            
            setmessage(`Hi ${data.first_name}${data.last_name}${data.email}`);
            dispatch(setAuth(true));
          }catch(e){
            setmessage('You are not Authenticated');
            dispatch(setAuth(false));
          }
        })();
    },[]);
  return (
    <div className='container mt-5 text-center'>
        <h3>{auth ? message : 'You are not authenticated'}</h3>
    </div>
  )
  
}

export default Home
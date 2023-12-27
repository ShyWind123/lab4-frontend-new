import './index.css'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const ExpertList = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://8.134.215.31:90/expert/findall-online');
                setList([...response.data]);
            } catch (error) {
                console.log('请求失败', error);
            }
        };

        fetchData(); 
    }, []); 
    return (
        <ul className='expertList'>
            {list.map(item => (<li key={item.Name} className='expert'>
                <div className='cir'></div>
                <div className='tButton'>
                    <div className='tButton1'>+关注</div>
                    <div className='tButton1' onClick={() =>navigate(`/message/${item.Name}`)}>+预约</div>
                </div>
                <div className='des'>{item.Introduce}...</div>
                <div className='mes'>
                    <div className='mes1'>{ item.Name}</div>
                    <div className='mes1'>{ item.Score}</div>
                </div>
            </li>))}
       </ul>
    );
}
const ExpertList1 = () => {
    const navigate = useNavigate(); 
    const [list1, setList1] = useState([]);
     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://8.134.215.31:90/expert/findall');
                setList1([...response.data]);
            } catch (error) {
                console.log('请求失败', error);
            }
        };

        fetchData(); 
    }, []); 
    return (
        <ul className='expertList'>
            {list1.map(item => (<li key={item.Name} className='expert'>
                <div className='cir'></div>
                <div className='tButton'>
                    <div className='tButton1'>+关注</div>
                    <div className='tButton1'  onClick={() =>navigate(`/message/${item.Name}`)}>+预约</div>
                </div>
                <div className='des'>{item.Introduce}...</div>
                <div className='mes'>
                    <div className='mes1'>{ item.Name}</div>
                    <div className='mes1'>{ item.Score}</div>
                </div>
            </li>))}
       </ul>
    );
}
const Expert = () => {
    const [sign, setSign] = useState(true);
    const clickF=()=>{
        setSign(true);
    }
    const clickS=()=>{
        setSign(false);
    }
    return (
        <div className="body">
            <div className='header'>专家列表</div>
            <div className="main">
                <div className="nav10">
                    <div className='nav1' onClick={clickF}>在线专家列表</div>
                    <div className='nav1' onClick={clickS}>全部专家列表</div>
                </div>
                {sign?<ExpertList></ExpertList>:<ExpertList1></ExpertList1>}
            </div>
        </div>
    );
}
export default Expert;
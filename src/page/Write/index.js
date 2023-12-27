import './index.css'
import { useEffect, useState } from 'react';
import {
    useNavigate
} from 'react-router-dom'
import axios from 'axios';
const Write = () => {
    const [list, setList] = useState([]);
    const [list1, setList1] = useState([]);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://8.134.215.31:90/question/get-random')
            .then(response => { setList([...response.data]); },
                error => { console.log('失败了', error); })
    }, []);
    const submit = () => {
        axios({
            method: 'post',
            url: 'http://8.134.215.31:90/question/answer',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                "answer": list1
            }),
        })
            .then(res => {
                setScore(res.data.score);
            })
            .catch(err => {
                console.log('失败了', err);
            });
        console.log(JSON.stringify({
            "answer": list1
        }));
    }
    return (
        <div className="body">
            <div className='header'>面试题模拟</div>
            <ul className="main1">
                {list.map((item, index) => (<li key={item.ID} className='question'>
                    <div className='con'>
                        {index+1}.{item.Content}
                    </div>
                    <label>
                    <input
                      type="radio"
                      name={item.ID}
                      value="A"
                            onChange={(e) => {
                                const n = [...list1];
                                n[index] = { "id": `${item.ID}`, "answer": `${e.target.value}` };
                                setList1([...n]);
                            }}
                     />
                          {item.OptionA}
                    </label>
                    <label>
                    <input
                      type="radio"
                      name={item.ID}
                      value="B"
                       onChange={(e) => {
                                const n = [...list1];
                                n[index] = { "id": `${item.ID}`, "answer": `${e.target.value}` };
                                setList1([...n]);
                            }}
                     />
                          {item.OptionB}
                    </label>
                    <label>
                    <input
                      type="radio"
                      name={item.ID}
                      value="C"
                       onChange={(e) => {
                                const n = [...list1];
                                n[index] = { "id": `${item.ID}`, "answer": `${e.target.value}` };
                                setList1([...n]);
                            }}
                     />
                          {item.OptionC}
                    </label>
                    <label>
                    <input
                      type="radio"
                      name={item.ID}
                      value="D"
                       onChange={(e) => {
                                const n = [...list1];
                                n[index] = { "id": `${item.ID}`, "answer": `${e.target.value}` };
                                setList1([...n]);
                            }}
                     />
                          {item.OptionD}
                     </label>
                </li>))}
            </ul>
            <div className='sm'>分数：{score}</div>
            <div className='subT'>
                <div className='sub' onClick={submit}>提交</div>
                <div  className = 'sub' onClick = {()=>navigate('/')}> 退出 </div>
            </div>
        </div>
    );
}
export default Write;

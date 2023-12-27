import './index.css'
import {useNavigate} from 'react-router-dom'
const Start = () => {
    const navigate = useNavigate();
    return (
         <div className='body'>
            <div className='header'>面试类型</div>
            <div className='main'>
                <div className='explain'>你选择的面试类型是</div>
                <div className='buttonZ'>
                    <div className='buttonP' onClick={() =>navigate('/write')}>基础模块</div>
                    <div className='buttonP'>线上模拟</div>
                    <div className='buttonP'>线下模拟</div>
                    <div className='buttonP' onClick={() =>navigate('/expertList')}>现场面试</div>
                </div>
            </div>
        </div>
    );
}
export default Start;
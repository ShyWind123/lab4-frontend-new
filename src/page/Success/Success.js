import './Success.css'
import React, { useState, useEffect} from 'react';
import {  ArrowForwardIcon} from '@chakra-ui/icons';
import {  useLocation } from 'react-router-dom';



const Success = () => {




    const location = useLocation();
    const formData = location.state;  // 获取从Message组件传递过来的表单数据

    useEffect(() => {
        // 在组件挂载时弹出提示窗口
        window.alert("tip:您已经预约成功，请按时前往广东省广东市番禺区小谷围街道225.1号，届时会有专家等待您！"); 

        // 在控制台中打印表单数据
        console.log('表单数据:', formData);
    }, [formData]);  // 在 formData 变化时执行

    


    const [type, setType] = useState(true);

    const click1 = () => {
        setType(true);
    }
    const click2 = () => {
        setType(false);
    }

    return (
        <div className="body">
            <div className='successHeader'>面试预约</div>
            <div className="main">

                <div className="nav">
                    <div className='navBlock'>
                        <div className='navBlock0'>预约流程</div>
                        <div className='navBlock1'>
                            <div className='navBlock2'>
                                <div >
                                    NO.1
                                </div>


                                <div className='detail'>选择您要预约的专家</div>


                            </div>

                            <div className='navBlock3'>
                                <ArrowForwardIcon />
                            </div>


                            <div className='navBlock2'>
                                <div >
                                    NO.2
                                </div>
                                <div className='detail'>选择预约的面试形式</div>

                            </div>

                            <div className='navBlock3'>
                                <ArrowForwardIcon />
                            </div>


                            <div className='navBlock2'>
                                <div >
                                    NO.3
                                </div>
                                <div className='detail'>填写预约用户个人信息</div>

                            </div>

                            <div className='navBlock3'>
                                <ArrowForwardIcon />
                            </div>

                            <div className='navBlock2'>
                                <div >
                                    NO.4
                                </div>
                                <div className='detail1'>完成面试预约服务</div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='choiceCard'>
                    <div className={`choice${type ? '1' : ''}`} onClick={click1}>当前申请</div>
                    <div className={`choice${type ? '' : '1'}`} onClick={click2}>历史申请</div>
                </div>
                <div className='bookCard'>
                    <div className='cardItem'>
                        <div className='itemTitle'>线下面试</div>
                        <div className='itemContent'>
                            面试单号: 114514
                        </div>

                        <div className='itemContent'>面试日期：{formData.interviewDate}</div>
                        <div className='itemContent'>预约专家：{formData.interviewerName.name}</div>
                        <div className='itemContent'>面试地点：广东省广东市番禺区小谷围街道225.1号</div>
                    </div>

                </div>

            </div>
 
        </div>
    )
}
export default Success;
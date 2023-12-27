


import './Message.css'
import React, { useState} from 'react';
import { PhoneIcon, CalendarIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; // 引入 Axios




const Message = () => {



    const expertName = useParams();


    const navigate = useNavigate();

    // 使用 React 的状态来管理表单数据
    const [formData, setFormData] = useState({
        appointee: '',
        interviewDate: '',
        idCard: '',
        phoneNumber: '',
        interviewerName: expertName
    });
    

    // 处理表单字段变化的函数
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, });

    };

    // 处理表单提交的函数
    const handleSubmit = async(e) => {
        e.preventDefault();
        // 在这里可以处理表单提交的逻辑


        navigate('/success', { state: formData });//后端端口更正后删除这行


        try {
            // 使用 Axios 发送 POST 请求到后端API
            const response = await axios.post('http://8.134.215.31:90/reservation/add', formData);

            // 检查响应是否成功
            if (response.status === 200) {
                // 在这里可以处理成功的逻辑，例如显示成功消息
                console.log('表单提交成功！');

                // 跳转到 Success 页面
                navigate('/success', { state: formData });
            } else {
                throw new Error('请求失败');
            }
        } catch (error) {
            // 处理错误，例如显示错误消息
            console.error('表单提交失败', error);
        }


    };


    return (
        <div className="body">
            <div className='messageHeader'>面试预约</div>
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
                                <div className='detail1'>填写预约用户个人信息</div>

                            </div>

                            <div className='navBlock3'>
                                <ArrowForwardIcon />
                            </div>

                            <div className='navBlock2'>
                                <div >
                                    NO.4
                                </div>
                                <div className='detail'>完成面试预约服务</div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='info'>

                    <div className="block1">
                        <img src={process.env.PUBLIC_URL + '/logo192.png'}></img>
                    </div>
                    <div className="block">
                        <div className="block2"><div className='compName'>广东省广东市五香科技有限公司</div></div>

                        <div className="block2">广东省广东市番禺区小谷围街道225.1号</div>
                    </div>
                </div>
                <form className="body" onSubmit={handleSubmit}>

                    <div className="form-title">
                        <CalendarIcon />
                        <div>预约信息</div>

                    </div>
                    <div>
                        <div className="form-label">
                            <label>
                                预约人：
                                <input
                                    type="text"
                                    name="appointee"
                                    value={formData.appointee}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="form-label">
                            <label>
                                面试日期：
                                <input
                                    type="date"
                                    name="interviewDate"
                                    value={formData.interviewDate}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="form-label">
                            <label>
                                身份证号：
                                <input
                                    type="text"
                                    name="idCard"
                                    value={formData.idCard}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="form-label">
                            <label>
                                联系电话：
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>


                    </div>
                </form>
            </div>

            <div className='footer'>
                <div className='support'>
                    <PhoneIcon />
                    <div>客服</div>
                </div>
                <div className="amount">￥388</div>
                <button type="submit" className="submit-button" onClick={handleSubmit} >确认预约</button>
            </div>
        </div>
    );
}
export default Message;
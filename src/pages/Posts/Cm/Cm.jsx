import React, { useState } from 'react'
import './Cm.css'
import postData from '../../../temp/post.json'
import { useEffect } from "react";
import api from '../../../api/axiosconf';

function Cm(props) {


        // const postId = props.id
        // const cms = props.comments

        const [newCm, setnewCm] = useState('');
        // const [cms, setcms] = useState(postData.find(e => e.id === postId).cm.map(e =><div className='comment' key={e.text}><b>{e.author} :</b><pre>   </pre>{e.text}<hr /></div>));
        // // eslint-disable-next-line no-unused-vars
        const [localcms, setlocalcms] = useState([...postData.find(e => e.id === postId).cm]);


        const addcm = () => {
                localcms.push({ "text": newCm });
                console.log(localcms)
                setcms(localcms.map(e =><div className='comment' key={e.text}><b>{e.author} :</b><pre>   </pre>{e.text}<hr /></div>))
                document.getElementById('com').value = ''
        }



        return (
                <div className='comment-container'>
                        {/* {cms} */}
                        {/* {cms[0].text} */}
                        

                        {/* <input id='com' type="text" onChange={e => { e.target.value ? <>{setnewCm(e.target.value)}</> : <></>}} /> */}
                        {/* <button onClick={() => addcm()}>add comment</button> */}
                </div>
        )
}

export default Cm
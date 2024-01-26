import './post.css'
import Cm from './Cm/Cm'
import { useEffect, useState } from "react";
import api from '../../api/axiosconf';
import axios from 'axios';

function Posts() {
  
  const [Posts, setPosts] = useState([]);
  const [newCm, setnewCm] = useState('');
  const [title, settitle] = useState('');
  const [text, settext] = useState('');
      

  const getPosts = async () => {
    
    try{
      
      const response = await api.get("/posts/all")
      
      console.log(response.data)  
      setPosts(response.data)  
      
    }catch(err){
      
      console.log("err");
      
    }
    
  }
  
  useEffect(() => {
    getPosts()
  }, [])

  // const [localcms, setlocalcms] = useState([...Posts.cmIds]);


  // const addcm = () => {
  //         localcms.push({ "text": newCm });
  //         console.log(localcms)
  //         setcms(localcms.map(e =><div className='comment' key={e.text}>{e.text}<hr /></div>))
  //         document.getElementById('com').value = ''
  // }

  async function save(event) {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/api/v1/posts",
        {
          "title": title,
          "text": text,  
          
        });

        alert("added");
    }
    catch (err) {
      alert("post Registation Failed");
    }
  }


   async function addcm (id) {
    // event.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/api/v1/cms",
        {
          "text": newCm,
          "pid": id,  
          
        });

        alert("added");
    }
    catch (err) {
      console.log("post Registation Failed");
    }
  }
  
  return (
    <div>
      {
        Posts.map( e => 
          <div className="post" key={e.id}>
            <h3>{e.title}</h3>
            <hr />
            <p>{e.text}</p> 
            <hr />
            <div className="info">
            { e.id ?  <p>postID:  {e.id}</p> : <></> } 
            { e.like ?  <p>likes:   {e.like}</p> : <></> } 
            { e.uname ?  <p>Author:  {e.uname}</p> : <></> }
            </div>
            <hr /> 
            {/* <Cm comments={e.cmIds} /> */}
            {/* <div>{e.cmIds.map(e => <> */}
            {/* {e.text}<br/> */}
            {/* </>)}</div> */}
            <div className='comment-container'>
                        {/* {cms} */}
                        {/* {cms[0].text} */}
        {
          // e.cmIds.map(e =><div className='comment' key={e.text}>{e.text}<hr /></div>)
}               

{/* <form id='signup' onSubmit={addcm}>

                        <input id='com' type="text" onChange={e => { setnewCm(e.target.value)} } />
                        <button id='cmbtn' type='submit'>add comment</button>
</form> */}
                </div>
          </div>
          )
        }

<div className="con">

<form id='signup' onSubmit={save}>
        <input  type="text" placeholder='title' value={title}       onChange={(event) => { settitle(event.target.value);   }} />
        <input  type="text" placeholder='text'    value={text}        onChange={(event) => { settext(event.target.value); }} />
        <button type='submit'> add post</button><br />
      </form>
</div>
    </div>
  )
}

export default Posts
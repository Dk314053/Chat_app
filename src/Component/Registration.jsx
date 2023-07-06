import React, { useState } from 'react'
import './Registration.css'
import { db } from '../firebase/Firebase';
import { doc, setDoc } from "firebase/firestore"; 
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {  createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import  {auth,storage } from '../firebase/Firebase';
import { BsPersonFillAdd } from 'react-icons/bs';
import { useNavigate,Link } from 'react-router-dom';
const Registration = () => {
  const [err,setErr]=useState(false)
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
const handleSubmit=async (e)=>{
e.preventDefault()
const displayName=e.target[0].value;
const email=e.target[1].value;
const password=e.target[2].value;
const file=e.target[3].files[0];

try {
  const res=await createUserWithEmailAndPassword(auth, email, password)
  


  const date = new Date().getTime();
  const storageRef = ref(storage, `${displayName + date}`);

await uploadBytesResumable(storageRef, file).then(() => {
  getDownloadURL(storageRef).then(async (downloadURL) => {
    try {
      //Update profile
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
      });
      //create user on firestore
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });

      //create empty user chats on firestore
      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  });
});
} catch (err) {
setErr(true);
setLoading(false);
}
};


  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <span className="logo">User Chat App</span>
        <span className="title">Register</span>
        <form className='form' onSubmit={handleSubmit}>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{display:"none"}} type="file" id='file' />
          <label htmlFor='file'>
            <BsPersonFillAdd/>
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p className='paraRegister'>You  have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Registration
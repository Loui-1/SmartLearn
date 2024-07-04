import { useState } from "react";
import "./App.css";




export default function App(){

    const[item, setItem] = useState("")


  const changeItem = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      const response = await fetch('http://192.168.33.1:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: item }),
      });

      const result = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  };


    return(

    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100vw'}}>
        <div className="outerCanvas shadow-2xl shadow-black">
            <div style={{flex:1,backgroundImage:`url('sidePic.webp')`,backgroundSize:'cover'}}></div>
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500" style={{flex:1,flexDirection:'column',display:'flex',alignItems:'center'}}>
                <div style={{height:'20%',width:'80%',alignItems:'center',justifyContent:'center',flexDirection:'column',display:'flex'}}>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <img src="crown.png" style={{height:50,width:50}}></img>
                            <h1 style={{fontFamily:'Poppins',marginLeft:10,fontWeight:'bold'}} className="text-3xl text-white">SmartLearn</h1>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between',width:'80%'}}>
                            <p className="text-white">Welcome to Our App <em style={{marginLeft:30,textDecoration:'underline',color:'white'}}>Register</em></p>
                        </div>   
                </div>
                <div>
                      <input
                        type="username"
                        placeholder="Username"
                        value={item}
                        onChange={changeItem}
                        className="w-full mb-4 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-purple-500"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full mb-6 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-purple-500"
                      />
                      <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
                        onClick={()=>{handleSubmit()}}
                      >
                        Sign in
                      </button>
                                        </div>
                    <footer className="text-center py-4">
                      <p className="text-gray-600">Don't have an account? <a href="#" className="text-purple-600">Sign up now</a></p>
                    </footer>
            </div>
        </div>
    </div>
    )}
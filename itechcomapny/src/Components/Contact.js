import React, { useState } from "react";

function Contact() {
  const[userName ,setuserName] = useState();
  const[ email,setEmail] = useState();
  const[password ,setPassword] = useState();
  const [userError,setUserError] = useState(false)
  const [emailErr,setEmailErr] = useState(false)
  const [passErr ,setPassErr] = useState(false)
  const [Submit ,setSubmit] =useState('Submit')


   const formSubmit = (e) => {
    e.preventDefault();
  }

  const henldeSubmit =()=>{
    let val = Submit;
    if(val === 'Submit'  ){
      setSubmit(alert('your form is submit'))
    }
    else{
      setSubmit('Please Enter Valid information')
    }
  }
 const hendleChange=(e)=>{
  let item =e.target.value;
  if(item.length <4){
    setUserError(true)
    console.log('Invalid')
  }
  else{
    setUserError(false)

  }
    // console.log(e.target.value)
    setuserName(item)
 }


 const emailHendle=(e)=>{
  let item =e.target.value;
  if(item.length <4){
    setEmailErr(true)
    console.log('Invalid')
  }
  else{
    setEmailErr(false)

  }
    // console.log(e.target.value)
    setEmail(item)
 }
 const passwordHendle=(e)=>{
  let item =e.target.value;
  if(item.length <4){
    setPassErr(true)
    console.log('Invalid')
  }
  else{
    setPassErr(false)

  }
    // console.log(e.target.value)
    setPassword(item)
 }
  

 
 
  return (
    <>
      <div className="bg-[#b2c0cd] w-full  py-[50px]">
        <div className="max-w-[1240px] my-[50px] mx-auto border border-black">
          <h1 className="text-4xl text-center font-bold">Contact Us</h1>

          <form action="" className="form" onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="text-2xl my-4">
                Full Name:
              </label>
              <input
              onChange={hendleChange}
            value={userName}
              type="text"
                name="username"
                autoComplete="off"
                id="username"
                className="border border-black text-2xl
            w-[100%] form-control px-2"
                placeholder="Enter Your Full Name"
              />
            {userError? <span>User Not Valid</span>:""}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="text-2xl my-4 ">
                Email:
              </label>
              <input
                type="email"
                autoComplete="off"
                onChange={emailHendle}
               value={email}
                name="email"
                id="email"
                className="border border-black text-2xl px-2
            w-[100%] form-control"
                placeholder="Enter Your Email"
              />
               {emailErr? <span>Email is Not Valid</span>:""}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="text-2xl my-4 ">
                Password:
              </label>
              <input
                type="password"
                autoComplete="off"
              onChange={passwordHendle}
             value={password}
                name="password"
                id="password"
                className="border border-black text-2xl px-2
            w-[100%] form-control"
                placeholder="Enter Your LastName"
              />
               {passErr? <span>Password is Not Valid</span>:""}
                         

            </div>
            <button
              type="submit"
              className="border border-blue-700 py-2 px-3 text-2xl mt-3 mb-3 mx-4
             bg-blue-700 rounded-md text-white"
          // value={Submit}
          onClick={henldeSubmit}
            >
              Submit
            </button>
          </form>
       
        </div>
      </div>
    </>
  );
}

export default Contact;

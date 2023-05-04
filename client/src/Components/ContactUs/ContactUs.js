import React,{useState} from 'react';
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router";

function ContactUs(){
    const navigatTo=useNavigate();
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Subject:', subject);
      console.log('Description:', description);
    };

    const handleBack = () =>{
        navigatTo('/profile/get-help')
    }

  
    return(
        <div className='flex flex-row justify-center items-center my-[58px]'>
        <div className='w-[610px] h-[780px] rounded-[20px] bg-iWhite shadow-2xl px-[35px]'>
        <button className='pt-[38px]'>
          <BiLeftArrowAlt size={38}  onClick={handleBack}/>
        </button>
            <div className='pt-[10px] text-center text-iBlue text-[28px] font-semibold'>Contact Us</div>
            <form onSubmit={handleSubmit}>
        <div className="mb-[28px]">
          <label htmlFor="subjectInput" className="block text-iBlue text-[20px] font-semibold mb-2">Subject</label>
          <input type="text" placeholder="Subject" className="border border-iBlue rounded-[10px] w-[540px] h-[56px] py-2 px-3 focus:border-iBlue" id="subjectInput" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="descriptionInput" className="block text-iBlue text-[20px] font-semibold mb-2">Description</label>
          <textarea placeholder="Description" className="border border-iBlue focus:border-iBlue rounded-[10px] w-[540px] h-[248px] py-2 px-3" id="descriptionInput" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit"  className="w-[280px] h-[54px] bg-iBlue border border-iBlue text-iWhite font-semibold py-2 px-4 rounded-[27px] ml-[135px] mt-[130px] hover:bg-iOrange hover:border-iOrange">Submit</button>
      </form>
        </div>
        </div>
    )
}

export default ContactUs
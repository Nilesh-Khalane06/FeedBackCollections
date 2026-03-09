import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFeedBack = () => {

  const [feedback,setFeedback] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    if(feedback.trim() === ""){
      alert("Please enter feedback");
      return;
    }

    try{

      await axios.post("http://localhost:8080/feedback/saveFeedback",{
        feedback,
        localDate:new Date().toISOString().split("T")[0]
      });

      alert("Feedback Added Successfully");

      navigate("/dashboard");

    }catch(error){
      console.log(error);
    }

  };

  return(

    <div className="flex justify-center items-center min-h-screen bg-gray-200">

      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h2 className="text-xl font-bold text-center mb-6">
          Feedback
        </h2>

        {/* Buttons */}
        <div className="flex justify-between mb-4">

          <button
            className="border-2 border-black px-4 py-2 rounded hover:bg-gray-100"
            onClick={()=>navigate("/add")}
          >
            Add Feedback
          </button>

          <button
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            onClick={()=>navigate("/dashboard")}
          >
            Edit Feedback
          </button>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          <label className="text-sm font-semibold">
            Your Feedback:
          </label>

          <textarea
            className="w-full border p-3 rounded mt-2 h-32 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e)=>setFeedback(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-gray-300 p-2 rounded mt-4 hover:bg-gray-400"
          >
            Submit
          </button>

        </form>

      </div>

    </div>

  )
}

export default AddFeedBack;
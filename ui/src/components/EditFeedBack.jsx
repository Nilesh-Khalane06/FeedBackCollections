import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditFeedBack = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    loadFeedback();
  }, []);

  const loadFeedback = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/feedback/${id}`);
      setFeedback(res.data.feedback);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFeedback = {
      feedback: feedback,
      localDate: new Date().toISOString().split("T")[0]
    };

    try {
      await axios.put(
        `http://localhost:8080/feedback/update/${id}`,
        updatedFeedback
      );

      alert("Feedback Updated Successfully");
      navigate("/dashboard");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">

      <div className="bg-white shadow-lg rounded-xl p-8 w-[420px]">

        <h2 className="text-2xl font-semibold text-center mb-6">
          Edit Feedback
        </h2>

        <form onSubmit={handleSubmit}>

          <label className="block mb-2 font-medium">
            Update Your Feedback
          </label>

          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full border rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-gray-300 hover:bg-gray-400 py-2 rounded-md mt-4 font-medium"
          >
            Update Feedback
          </button>

        </form>

      </div>

    </div>
  );
};

export default EditFeedBack;
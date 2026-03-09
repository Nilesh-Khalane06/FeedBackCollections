import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ViewFeedBack = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState({});

  useEffect(() => {

    axios.get(`http://localhost:8080/feedback/${id}`)
      .then(res => setFeedback(res.data));

  }, [id]);

  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-200">

      <div className="bg-white p-8 shadow rounded w-96">

        <h2 className="text-xl font-bold mb-4 text-center">
          View Feedback
        </h2>

        <p><b>ID :</b> {feedback.id}</p>

        <p><b>Feedback :</b> {feedback.feedback}</p>

        <p><b>Date :</b> {feedback.localDate}</p>

        <button
          className="mt-4 w-full bg-gray-300 p-2 rounded"
          onClick={() => navigate("/dashboard")}
        >
          Back
        </button>

      </div>

    </div>

  );

};

export default ViewFeedBack;
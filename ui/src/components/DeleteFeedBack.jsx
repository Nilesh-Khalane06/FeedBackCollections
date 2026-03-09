import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DeleteFeedBack = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {

    try {

      await axios.delete(`http://localhost:8080/feedback/delete/${id}`);

      alert("Feedback Deleted Successfully");

      navigate("/dashboard");

    } catch (error) {
      console.error(error);
    }

  };

  return (

    <div className="flex justify-center items-center min-h-screen">

      <div className="bg-white p-8 shadow rounded text-center">

        <h2 className="text-xl mb-4">Delete Feedback?</h2>

        <button
          className="bg-red-400 px-4 py-2 rounded"
          onClick={handleDelete}
        >
          Confirm Delete
        </button>

      </div>

    </div>

  );
};

export default DeleteFeedBack;
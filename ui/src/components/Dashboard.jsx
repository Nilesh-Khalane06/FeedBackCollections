import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const loadFeedback = () => {

    axios
      .get("http://localhost:8080/feedback/getAllFeedback")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

  };

  useEffect(() => {

    loadFeedback();

  }, []);

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">

      <div className="bg-white shadow-lg rounded-lg w-5/6 p-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-gray-700">
            Admin Feedback Dashboard
          </h2>

          <button
            onClick={() => navigate("/add")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Feedback
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full border border-gray-300 rounded">

            <thead className="bg-gray-200">

              <tr>

                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Feedback</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-center">Actions</th>

              </tr>

            </thead>

            <tbody>

              {data.map((f) => (

                <tr key={f.id} className="border-t hover:bg-gray-50">

                  <td className="p-3">{f.id}</td>

                  <td className="p-3">{f.feedback}</td>

                  <td className="p-3">{f.localDate}</td>

                  <td className="p-3 text-center space-x-2">

                    <button
                      onClick={() => navigate(`/view/${f.id}`)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      View
                    </button>

                    <button
                      onClick={() => navigate(`/edit/${f.id}`)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => navigate(`/delete/${f.id}`)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
};

export default Dashboard;
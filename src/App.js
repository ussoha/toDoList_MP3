import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [value, setValue] = useState("");
  const [content, setContent] = useState([]);
  const handleAdd = () => {
    if (content?.some((item) => item.id === value?.replace(/\s/g, ""))) {
      toast.warning("the job had added! pls add new one");
    } else {
      setContent((prev) => [
        ...prev,
        { id: value?.replace(/\s/g, ""), job: value },
      ]);
      setValue("");
    }
  };
  const handleDelete = (id) => {
    setContent((prev) => prev.filter((item) => item.id !== id));
  };

  console.log(content);
  return (
    <div>
      <div className="flex flex-col gap-8 h-screen items-center border border-red-500 justify-center ">
        <div className="flex gap-8">
          <input
            type="text"
            className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="button"
            className="outline-none px-4 py-2 bg-red-700 rounded-md text-white"
            onClick={handleAdd}
          >
            add
          </button>
        </div>
        <br />
        <h3 className="font-bold text-3xl">Content</h3>
        <ul>
          {content?.map((item) => {
            return (
              <li key={item.id} className="flex gap-10 items-center">
                <span className="my-4">{item.job}</span>
                <span
                  onClick={() => handleDelete(item.id)}
                  className="my-4 cursor-pointer"
                >
                  X
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BookLists from "./pages/booklist";
import Form1 from "./pages/form";
import { useEffect, useState } from 'react';
import RingLoader from "react-spinners/RingLoader";

export function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  // anvesh

  return (
    <div>
      {loading ?
        <div className='loading'>
          <RingLoader color={"#04c0c7"} loading={loading} size={150} />
        </div> :
        <Router>
          <Routes>
            <Route path="/form/" element={<Form1 />}></Route>
            <Route path="/form/:id" element={<Form1 />}></Route>
            <Route path="/" element={<BookLists />}></Route>
          </Routes>
        </Router>
      }
    </div>
  );
}

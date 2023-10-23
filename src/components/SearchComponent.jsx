import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import context from "../context";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = useState("");
  const {result,setResult} = useContext(context)
  const navigate = useNavigate()
  const handleQuery = async (e) => {
    setQuery(e.target.value);
    if(!query)
    {
      setResult(null)
    }
  };
  const fetchData = async (query) => {
    const { data } = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${query}`
    );
    setResult(data);
  };
  useEffect(() => {
    if (query.trim()) {
      fetchData(query.trim());
    }
  }, [query]);
  return (
    <>
      <div className="w-full mt-40 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-slate-300 mb-8">Search Hacker News</h1>
        <div className="w-full flex justify-center flex-col items-center">
          <form className="w-full flex items-center justify-center" action="">
            <input
              className="w-2/5 h-12 outline-none p-2 rounded-md bg-slate-300 text-slate-900"
              value={query}
              type="text"
              placeholder="enter the topic"
              onChange={handleQuery}
            />
            <button
              className="w-20 h-12 rounded-md outline-none bg-gradient-to-bl from-gray-700 via-purple-900 to-blue-900 text-slate-300"
              type="submit"
            >
              Search
            </button>
          </form>
          {query && result&& <div className="w-2/5 mr-20 bg-[#170640] rounded-md text-slate-400">
            <ul className="h-72 overflow-auto">
              {result?.hits?.map((item) => (
                <li key={item?.objectID} onClick={()=>navigate(`/${item?.objectID}`)} className="min-h-8 p-4 flex items-center cursor-pointer rounded-md hover:bg-[#120432] ">
                  <img className="h-6 mr-2" src="/images/search.svg" alt="" />{item?.title}
                </li>
              ))}
            </ul>
          </div>}
        </div>
      </div>
    </>
  );
}

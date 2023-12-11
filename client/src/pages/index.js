// Components
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <div className="w-full bg-indigo-100 h-screen flex flex-row flex-wrap justify-center ">
      <Navbar />
      <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
        <div className="bg-white w-full shadow rounded-lg p-5">
          <textarea
            className="bg-gray-200 w-full rounded-lg shadow border p-2"
            rows="2"
            placeholder="What do you think?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <div className="w-full flex flex-row flex-wrap mt-3">
            <div className="w-1/3">
              <select className="w-full p-2 rounded-lg bg-gray-200 shadow border float-left">
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
            <div className="w-2/3">
              <button
                type="button"
                className="float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg px-4"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-col">
          <div className="bg-white mt-3">
            <img
              className="border rounded-t-lg shadow-lg "
              src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
            <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
              A Pretty Cool photo from the mountains. Image credit to
              @danielmirlea on Unsplash.
            </div>
            <div className="bg-white p-1 border shadow flex flex-row flex-wrap">
              <div className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">
                Like
              </div>
              <div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">
                Share
              </div>
              <div className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">
                Comment
              </div>
            </div>

            <div className="bg-white border-4  border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
              <div className="w-full">
                <div className="w-full text-left text-xl text-gray-600">
                  @Some Person
                </div>
                A Pretty Cool photo from the mountains. Image credit to
                @danielmirlea on Unsplash. A Pretty Cool photo from the
                mountains. Image credit to @danielmirlea on Unsplash.
              </div>
            </div>
          </div>

          <div className="bg-white mt-3">
            <img
              className="border rounded-t-lg shadow-lg "
              src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
            <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
              A Pretty Cool photo from the mountains. Image credit to
              @danielmirlea on Unsplash.
            </div>
            <div className="bg-white p-1 rounded-b-lg border shadow flex flex-row flex-wrap">
              <div className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">
                Like
              </div>
              <div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">
                Share
              </div>
              <div className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">
                Comment
              </div>
            </div>
          </div>

          <div className="bg-white mt-3">
            <img
              className="border rounded-t-lg shadow-lg "
              src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
            <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
              A Pretty Cool photo from the mountains. Image credit to
              @danielmirlea on Unsplash.
            </div>
            <div className="bg-white p-1 rounded-b-lg border shadow flex flex-row flex-wrap">
              <div className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">
                Like
              </div>
              <div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">
                Share
              </div>
              <div className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">
                Comment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

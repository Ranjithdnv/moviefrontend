import React, { useEffect, useState } from "react";

function Follow({ followid }) {
  const [follow, setfollow] = useState("");
  useEffect(() => {
    setfollow(followid);
  }, []);
  return (
    <div>
      <div
        onClick={() => {
          setfollow(!follow);
        }}
        className=" mt-2"
      >
        {follow ? (
          <div className=" ">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2"
            >
              unfollow
            </button>
          </div>
        ) : (
          <div>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-2 mb-2"
            >
              {" "}
              follow{" "}
            </button>
          </div>
        )}
      </div>
      {/* <div>
                {followed.some((hero.name)=>(<>"kkk"</>))}
              </div> */}
    </div>
  );
}
export default Follow;

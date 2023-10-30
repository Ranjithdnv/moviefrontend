import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import Follow from "./follow";
import { Button } from "flowbite-react";

function Musician() {
  const [following, setfollowing] = useState([
    // {
    //   follow: false,
    //   img: "https://imgs.search.brave.com/Dm8mxOQRRgQB5J5fF-eiiHITcbbGbrRFC0X4KHC8pgA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk5/MzQyMjY5L3B0L2Zv/dG8vaW5kaWFuLWFj/dG9yLXNoYWhydWto/LWtoYW4td2Vhcmlu/Zy1zdW5nbGFzc2Vz/LTIwMDAuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVVuYmc3/Ti1wVHN5czVBTkh5/Q3A2aGgyWmFRcE9D/SkZCMmxidC1qdUY0/WVk9",
    //   name: "Sharukhkhan",
    // },
  ]);
  const [followed, setfollowed] = useState(["prabhas", "ntr", "surya"]);
  const [heroesindia, setheroesindia] = useState([
    {
      img: "https://imgs.search.brave.com/BkuGBVu0n49-Ta8-S3yzhou_fxhleM-sAm1oLLXvl_M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zMS5m/aWxteS50b2RheS9h/bGJ1bXMvS29sbHl3/b29kLzIwMjAvSmFu/LzAzL0RhcmJhcl9N/b3ZpZV9QcmVfUmVs/ZWFzZV9FdmVudF9B/dF9IeWRlcmFiYWRf/UGhvdG9zL3Byb2Zp/bGVfN2M3NTQ3YTNk/YTlmYTY5MWQyMjkx/OWY3NjNmNDM1ZmYu/anBn",
      name: "Anirudh",
      follow: false,
    },

    {
      img: "https://imgs.search.brave.com/scL8mkg-4N4JzzikKj8R4b316OMOSuLmQcBaA400vY8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U4L1MuX1RoYW1h/bl9hdF9EYW1hYWxf/RHVtZWVsX0F1ZGlv/X0xhdW5jaC5qcGc",
      name: "SS Thaman",
      follow: false,
    },
    {
      img: "https://imgs.search.brave.com/LaJ1PyTgaF2gzKx3rOLjUv8w4PzNo6gXeFJXyrYpM54/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hY3Rj/ZXZlbnRzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NS9BUlJfXy0xMDI0/eDEwMjQuanBn",
      name: "A R Rahman",
      follow: false,
    },
  ]);
  useEffect(() => {
    const addfollwed = () => {
      let followingarray = [];
      let aaaa = followed.map((follow) =>
        heroesindia.map((hero) => {
          if (hero.name === follow) {
            followingarray.push({ ...hero, follow: true });
          }
        })
      );
      console.log(heroesindia);

      heroesindia.map((hero) => {
        !followingarray.some((user) => user.name === hero.name) &&
          followingarray.push(hero);
      });
      console.log(followingarray);
      setfollowing([...followingarray]);
      // setfollowing([...coo]);
    };
    addfollwed();
  }, []);
  console.log(following);
  return (
    <div>
      <div className=" flex justify-center items-center">
        <div className=" flex justify-center items-center  flex-wrap   gap-5 h-screen ">
          {following?.map((hero) => (
            <div className=" flex flex-col justify-center items-center ">
              {" "}
              <div className=" w-28 h-28   md:w-48  md:h-48  overflow-hidden object-cover    rounded-full">
                <img src={hero.img} alt="" />
              </div>{" "}
              <div className=" text-black   font-semibold">{hero.name}</div>
              <Follow followid={hero.follow} />
              {/* <div className=" mt-2">
                {hero.follow ? (
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
              </div> */}
              {/* <div>
                {followed.some((hero.name)=>(<>"kkk"</>))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Musician;

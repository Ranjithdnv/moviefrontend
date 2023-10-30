import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import Follow from "./follow";
import { Button } from "flowbite-react";

function Director() {
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
      img: "https://imgs.search.brave.com/LjZr6_a1VVBIL5XxIQjqp5cCRDXel5bEGYblGiLz_jw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL1NTX1JhamFt/b3VsaSxfMjAyMS5q/cGc",
      name: "Rajamoli",
      follow: false,
    },
    {
      img: "https://imgs.search.brave.com/bDmrtIRCaPhHVPrXn0Z2kvoCaRp5OSEdLbA7O4zpCVI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/dGhld2Vlay5pbi9j/b250ZW50L2RhbS93/ZWVrL21hZ2F6aW5l/L3RoZXdlZWsvbGVp/c3VyZS9pbWFnZXMv/MjAyMi82LzE4LzEw/Ni1Mb2tlc2gtS2Fu/YWdhcmFqLmpwZw",
      name: "lokesh",
      follow: false,
    },
    {
      img: "https://imgs.search.brave.com/RNv5hOnPZLJbJL5n5X27fnVxOQoQA6aiyOynWe1HQIg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtaW4uYm1zY2Ru/LmNvbS9pZWRiL2Fy/dGlzdC9pbWFnZXMv/d2Vic2l0ZS9wb3N0/ZXIvbGFyZ2UvYXRs/ZWUta3VtYXItMzc3/OTctMjQtMDMtMjAx/Ny0xNy00OC00OC5q/cGc",
      name: "Atlee",
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
export default Director;

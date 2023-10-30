import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import Follow from "./follow";
import { Button } from "flowbite-react";

function Hero() {
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
      img: "https://imgs.search.brave.com/Dm8mxOQRRgQB5J5fF-eiiHITcbbGbrRFC0X4KHC8pgA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk5/MzQyMjY5L3B0L2Zv/dG8vaW5kaWFuLWFj/dG9yLXNoYWhydWto/LWtoYW4td2Vhcmlu/Zy1zdW5nbGFzc2Vz/LTIwMDAuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVVuYmc3/Ti1wVHN5czVBTkh5/Q3A2aGgyWmFRcE9D/SkZCMmxidC1qdUY0/WVk9",
      name: "Sharukhkhan",
      follow: false,
    },
    {
      img: "https://imgs.search.brave.com/wyDIeoUJ2cmb5CdcrmbAJ_s7ji6vwdNdaVpD-tZehos/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDU0ODU3/MDkuanBn",
      name: "prabhas",
      follow: false,
    },
    {
      img: "https://imgs.search.brave.com/duvgE8BmUCP-hdCsQoKQ8CAldpLZ61fogBxpm1HIUms/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzUzLzk2/LzE5LzUzOTYxOTZl/YjFhYmFiZTU5NTdj/N2NhZmUyOTcyNTMw/LmpwZw",
      name: "alluarjun",
      follow: false,
    },
    {
      img: "https://imgs.search.brave.com/D1ECbeG2Fi_BhvO-_7919z9WKe91cGG9zPTsfCVbn3c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlbW92aWVkYi5v/cmcvdC9wL3cyMjBf/YW5kX2gzMzBfZmFj/ZS85clVrdHpRT0Nk/QTF4b1RsQTl1TkRV/MG1sVjMuanBn",
      name: "ntr",
      follow: false,
    },
    {
      img: "https://imgs.search.brave.com/g6OylhmBGH2T8WxGxEaLVGqouHKmmBrfxI3IhM_Ehls/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FmL2Jl/LzdmL2FmYmU3ZjE2/N2Q4YzhhYmFjMjFk/YjljNGJjMDg5NmI4/LmpwZw",
      name: "ramchaaan",
      follow: false,
    },
    {
      img: "https://imgs.search.brave.com/Uqzb2OmmnMXbjt3D3Hx8EHLjqVpQ_f3a5W7vDrvxNN0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tb3Zp/ZWdhbGxlcmkubmV0/L3dwLWNvbnRlbnQv/Z2FsbGVyeS9qYWls/ZXIvY2FjaGUvSmFp/bGVyLU1vdmllLVBo/b3Rvcy1JbWFnZXMt/UGljcy1TdGlsbHMt/MWU2ZDU2Mi5qcGct/bmdnaWQwNzE1Nzgx/MDgtbmdnMGR5bi0z/MDB4MzAweDEwMC0w/MGYwdzAxMGMwMTBy/MTEwZjExMHIwMTB0/MDEwLmpwZw",
      name: "rajinikanth",
      follow: false,
    },
    {
      img: "https://imgs.search.brave.com/psscu-f0Lx50D47iudun8HNDkFj9WgljWfXzcsIEE6M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYWN0/b3ItdmlqYXktbmV3/LXBob3Rvc2hvb3Qt/OGpodWc1cGc4NjNx/Z3lndy5qcGc",
      name: "vijay",
      follow: false,
    },
    {
      img: "https://imgs.search.brave.com/JE7Wq9VllS8qd_V0HdzW0aeNlwCeQVLCqctaCRr0_mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVhaHViLmlvL3Bo/b3Rvcy9mdWxsLzEy/MC0xMjA1ODQ2X3N1/cnlhLXNvdXRoLWhl/cm8tcGhvdG8tZG93/bmxvYWQtYW5qYW4t/c3VyeWEtaGFpci5q/cGc",
      name: "surya",
      follow: false,
    },
    {
      img: "https://imgs.search.brave.com/4QNlhC8Wwgg_SuXvGmkF2aCWrg8IDw30tkxw1_zeptE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvaHJp/dGhpay1yb3NoYW4t/dGF0dGVyZWQtdGFu/ay10b3AtcXZxOGJj/a3JqcXl1YWRvNS5q/cGc",
      name: "hritik",
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
export default Hero;

import React from "react";
import axios from "axios";
import "../App.css";
import Moviestory from "./moviestory";
import { Button } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../context";
// import terms from "./components/terms";
// import Create from "./components/create";
// import Login from "./components/login";
// import Signup from "./components/signup";
// import Post from "./components/post";
import { useContext } from "react";
// import { CountContext } from "../context";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
// import { CountContext } from "./context";
// import Messagechat from "./components/messagechat";
// import Contact from "./components/contact";
// import Home from "./components/home";
function Home() {
  const Contexts = useContext(CountContext);
  const movienameref = useRef("");
  const Directornamenameref = useRef("");
  const [theatertowatch, settheatertowatch] = useState("");
  const [story_db, setstory_db] = useState([]);
  const [presentmoviestory, setpresentmoviestory] = useState([]);
  const [searchbox, setsearchbox] = useState("");
  const [textarea, settextarea] = useState("");
  const [sendmovie, setsendmovie] = useState(false);
  const [seachmovie, setseachmovie] = useState(false);
  const [movietowatch, setmovietowatch] = useState("");
  const [place, setplace] = useState("");
  const [movies, setmovies] = useState(["patan", "kgf2"]);
  const [story, setstory] = useState([]);
  const [theater, settheater] = useState([]);
  const places = ["bhimavaram", "tanuku", "hyderabad", "pune"];
  const place_theater = [
    { place: "bhimavaram", theater: "Avg Cinemas" },
    {
      place: "bhimavaram",
      theater: "multiplex",
    },
    {
      place: "bhimavaram",
      theater: "Kishore Cine Hub ",
    },
    {
      place: "bhimavaram",
      theater: "Vijaya lakshmi ",
    },
    { place: "bhimavaram", theater: "nataraj" },
    { place: "tanuku", theater: "Lakshmi theater" },
    { place: "tanuku", theater: "V Max " },
    { place: "hyderabad", theater: "PVR Cinemas" },
    { place: "hyderabad", theater: "Gokul Theater " },
  ];
  //---------------------------------------------------------------- get posts ------------------------
  useEffect(() => {
    const getstories = async (value) => {
      await axios
        .get("https://movieapi-39c5.onrender.com ") //https://movieapi-39c5.onrender.com //http://localhost:3003
        .then((res) => {
          console.log(res.data);
          // setstory(res.data);
          res.data.map((datafromdb) => {
            // let storyobject = datafromdb.desc;
            // let story = storyobject?.split("\n");
            // console.log(story);
            // setstory_db((prev) => [...prev, story]);
            // --------------------
            let storyobject = datafromdb.desc;
            let storynamedirectorname = [
              datafromdb.moviename,
              datafromdb.writtenby,
            ];
            let story = storyobject?.split("\n");
            // const children = storynamedirectorname.concat(story);
            // console.log(children);
            const finalstory = {
              moviename: datafromdb.moviename,
              writer: datafromdb.writtenby,
              storyof: story,
            };
            console.log(finalstory);
            setstory((prev) => [...prev, finalstory]);
            setstory_db((prev) => [...prev, story]);
            // --------------
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getstories();
  }, []);
  //----------------------------------------------------------------
  const settheaters = (value) => {
    settheater([]);
    setplace(value);
    place_theater.map((data) => {
      if (data.place === value) {
        settheater((prev) => [...prev, data.theater]);
        console.log(theater);
      } else {
        console.log(0);
      }
    });
  };
  const navi = useNavigate();
  const setpresentmoviestoryfunction = (value) => {
    setpresentmoviestory(value);
    Contexts.user(value);
    navi("/moviestory");
  };

  //----------------------------------------------------------------
  const poststory = async (value) => {
    await axios
      .post("https://movieapi-39c5.onrender.com ", {
        desc: textarea,
        moviename: movienameref?.current.value || "",
        writtenby: Directornamenameref?.current.value || "",
      })
      .then((res) => {
        // console.log(res.data);
        // let storyobject = res.data.desc;
        // let story = storyobject.split("\n");
        // console.log(story);
      })
      .catch((err) => {
        console.log(err);
      });

    //----------------------------------------------------------------
  };

  //----------------------------------------------------------------
  //----------------------------------------------------------------
  console.log(story);
  console.log(story_db);
  console.log(sendmovie);
  console.log(Directornamenameref?.current?.value);

  return (
    <div className=" flex  flex-col">
      <div className="headd flex  justify-between px-4  pt-16 pb-6  border-b-2 bg-black  w-full border-black">
        {/* <div className="logo h-3 w-4 bg-slate-950"></div> */}
        <div className="name text-4xl font-semibold bg-black   max-w-sm  w-3/4">
          <img
            src="./logo.png"
            alt=""
            height="20px"
            width="120px"
            className="logoimage"
          />
        </div>
        <div className="accountlogo h-8 w-8 ">
          {" "}
          <Link to="./login">
            {" "}
            <AccountCircleOutlinedIcon className="accountlogo h-8 w-8 " />{" "}
          </Link>
        </div>
      </div>
      <div className="ads"></div>
      <div className="location flex flex-col py-4   justify-center items-center bg-black">
        <div className=" flex   gap-4   w-full  items-center justify-around">
          <div
            className=" w-2/4 align-middle text-center "
            onClick={() => {
              setseachmovie(!seachmovie);
            }}
          >
            <SearchOutlinedIcon className="searchicon h-8 w-8 " />
          </div>
          <div>
            <input
              placeholder="search place"
              onChange={
                (e) => {
                  setsearchbox(e.target.value);
                }
                //(e) => {
                //setplace(e.target.value)
              }
              className=" rounded opacity-70 text-pink-500  bg-transparent placeholder:text-pink-500 text-center  m-1 p-2 pb-2 mr-6  font-semibold  border-2 border-white"
              list="searchbox"
              type="text"
            />

            <datalist id="searchbox">
              {/* ---------------------------------------change later down  ------------------------------- */}
              {movies.map((place, index) => {
                return (
                  <div key={index}>
                    {index}
                    <option value={place} />
                  </div>
                );
              })}
            </datalist>
          </div>
          <div
            className=" w-2/4 align-middle  text-center"
            onClick={() => {
              setsendmovie(true);
            }}
          >
            <SendOutlinedIcon className="sendicon h-8 w-8 " />
          </div>
        </div>
        <div>
          {seachmovie ? (
            <>
              {" "}
              <div>
                {" "}
                <input
                  placeholder="search movie"
                  onChange={
                    (e) => {
                      setmovietowatch(e.target.value);
                    }
                    //(e) => {
                    //setplace(e.target.value)
                  }
                  className=" rounded opacity-70  m-1 p-2 bg-white placeholder:text-black text-center pb-2 mr-6  text-black font-semibold bg-transparent border-2 border-white"
                  list="movie"
                  type="text"
                />
              </div>
              <div>
                <datalist id="movie">
                  {movies.map((place, index) => {
                    return (
                      <div key={index}>
                        {index}
                        <option value={place} />
                      </div>
                    );
                  })}
                </datalist>
              </div>
              {/* ---------------------------------------------search locatin------------------------------ */}
              <div>
                {movietowatch && (
                  <input
                    placeholder="search place"
                    onChange={
                      (e) => {
                        settheaters(e.target.value);
                      }
                      //(e) => {
                      //setplace(e.target.value)
                    }
                    className=" rounded opacity-70  bg-white placeholder:text-black text-center  m-1 p-2 pb-2 mr-6  text-black font-semibold bg-transparent border-2 border-white"
                    list="place"
                    type="text"
                  />
                )}
              </div>
              <div>
                <datalist id="place">
                  {places.map((place, index) => {
                    return (
                      <div key={index}>
                        {index}
                        <option value={place} />
                      </div>
                    );
                  })}
                </datalist>
                {/* ------------------------------------------------ theaters in locayion ------------------------ */}
                <div className="  bg-slate-50   flex flex-col items-center justify-center rounded    ">
                  {" "}
                  {theater?.map((theattermv) => (
                    <Button
                      pill
                      className=" font-semibold rounded m-2 p-1"
                      onClick={() => {
                        settheatertowatch(theattermv);
                      }}
                    >
                      {theattermv}
                    </Button>
                  ))}
                </div>
                {/* ----------------------------------------------------------- request button ------------------------ */}
                {theatertowatch ? (
                  <div className="   bg-white flex flex-col items-center justify-center rounded p-4 m-4">
                    {" "}
                    <div>
                      {" "}
                      Do you want to watch{" "}
                      <span className=" font-bold">
                        {movietowatch}{" "}
                      </span> at{" "}
                      <span className=" font-bold"> {theatertowatch}</span>{" "}
                    </div>
                    <Button
                      onClick={() => {
                        setseachmovie(!seachmovie);
                      }}
                      className=" rounded mt-2"
                      pill
                    >
                      request
                    </Button>
                  </div>
                ) : (
                  ""
                )}
              </div>{" "}
            </>
          ) : (
            ""
            // <div
            //   onClick={() => {
            //     setseachmovie(!seachmovie);
            //   }}
            // >
            //   <SearchOutlinedIcon />
            // </div>
          )}
        </div>
      </div>
      {/* <div className=" border-b-2 mt-4 border-black"></div>{" "}
      <div className=" border-b-2 border-black"></div> */}
      {/* -------------------------------------- STORIES------------------------- */}
      {/* <div>
      {story_db.map((t) =>
        t ? (
          <div className=" border-2 border-gray-200 m-4 my-6 rounded p-4">
            {t.map((val) => (val ? <div>{val}</div> : <br />))}{" "}
          </div>
        ) : (
          ""
          //<br />
        )
      )}
    </div> */}
      {/* --------------------------------------------SEND STORY TEXTAREA---------------- */}
      {sendmovie ? (
        <>
          <div className="write_story flex gap-4 p-4 m-4  flex-col items-center justify-center">
            <div>
              <input type="text" ref={movienameref} />
            </div>
            <div>
              <input type="text" ref={Directornamenameref} />
            </div>
            <textarea
              placeholder="write your story here"
              onChange={(e) => {
                settextarea(e.target.value);
              }}
              className="  textarea h-5/6"
              name=""
              id="textarea"
              cols="3"
              rows="5"
            ></textarea>
            <Button pill onClick={poststory}>
              <div
                onClick={() => {
                  setsendmovie(false);
                }}
              >
                submit
              </div>
            </Button>
            {/* ----------------------------------------------------------- */}
          </div>{" "}
        </>
      ) : (
        ""
        // <div
        //   onClick={() => {
        //     setsendmovie(true);
        //   }}
        // >
        //   <SendOutlinedIcon />
        // </div>
      )}
      <div className=" border-black border-b-2  "></div>
      {/* ----------------------------------------------------- */}
      <div className=" text-center  my-4  text-violet-400  font-semibold text-2xl">
        Trending Movies
      </div>
      <div className="newbox   ">
        {story?.map((t) => (
          <div
            onClick={() => {
              setpresentmoviestoryfunction(t);
            }}
            className=" boxcl  "
          >
            {" "}
            <div className=" fixedlines  border-2  border-gray-200 m-4 my-6  bg-white  rounded px-4">
              <div>
                <div className=" font-semibold text-violet-800 text-left  uppercase text-2xl">
                  {" "}
                  <span className=" text-pink-600"> MOVIE :</span> {t.moviename}
                </div>
                <div className=" font-semibold text-violet-600  text-left  uppercase mb-2 text-2xl">
                  <span className=" text-pink-500"> DIRECTOR :</span> {t.writer}{" "}
                </div>
                {t.storyof?.map((storylines) =>
                  storylines ? (
                    <div className=" text-left w-full bg-black   rounded p-2 text-gray-500">
                      {storylines}{" "}
                    </div>
                  ) : (
                    <br />
                  )
                )}{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* -------------- */}
      {/* <div className=" bg-slate-800 trending flex  ">
        <div className=" w-[60rem]">
          {" "}
          {story.map((t) => (
            <div className=" fixedliness  trendingstories border-2  border-gray-200 m-4 my-6  bg-white  rounded px-4">
              <div>
                <div className=" font-semibold text-orange-400 text-2xl">
                  {" "}
                  {t.moviename}
                </div>
                <div className=" font-semibold text-orange-300 text-2xl">
                  {t.writer}{" "}
                </div>
                {t.storyof?.map((storylines) =>
                  storylines ? <div>{storylines} </div> : <br />
                )}{" "}
              </div>
            </div>
          ))}
        </div>
      </div> */}
      {/* ----------------------------------------------------trending stories above */}
      <div className=" text-center    my-4  text-violet-400   font-semibold text-2xl">
        All Movies
      </div>
      <div className=" bg-slate-800">
        {story.map((t) => (
          <div className=" fixedlines border-2 border-gray-200 m-4 my-6 bg-white  rounded px-4">
            <div>
              <div className=" font-semibold text-orange-600 text-left  uppercase  text-2xl">
                {" "}
                <span className=" text-pink-600"> MOVIE :</span> {t.moviename}
              </div>
              <div className=" font-semibold text-orange-500 text-left  uppercase  text-2xl">
                <span className=" text-pink-500"> DIRECTOR :</span> {t.writer}{" "}
              </div>
              {t.storyof?.map((storylines) =>
                storylines ? (
                  <div className=" text-left    rounded p-2 text-gray-700">
                    {storylines}{" "}
                  </div>
                ) : (
                  <br />
                )
              )}{" "}
            </div>
          </div>
        ))}
      </div>
      {/* --------------------------------------------SEND DIRECTOR AND NAME ---------------- */}
      <div className="follow"></div>
      {/* <div className=" mt-5"> </div> */}
      {/* <div>{story_db.map((t) => (t ? <div>{t} </div> : <br />))}</div> */}
      {/* -----------------------------------------------look above -------------------------------------- */}
      <div className=" bg-black flex justify-center flex-col gap-4  items-center  box-content  py-4">
        <Link className="w-[90%] " to="heroes">
          {" "}
          <div className="hero_page w-[90%] mx-4 text-blue-400 font-bold text-lg   border-2 rounded p-4  border-pink-500">
            Vote a hero
          </div>{" "}
        </Link>
        <Link className="w-[90%] " to="directors">
          {" "}
          <div className="director_page w-[90%] mx-4 text-blue-400 font-bold text-lg   rounded p-4 border-2 border-pink-500">
            Vote a director
          </div>
        </Link>
        <Link className="w-[90%] " to="musicians">
          {" "}
          <div className="music_page w-[90%] rounded mx-4    text-blue-400 font-bold text-lg  p-4 border-2 border-pink-500">
            Vote a music director
          </div>
        </Link>
        <Link className="w-[90%] " to="heroines">
          {" "}
          <div className="heroine_page w-[90%] rounded p-4 mx-4 text-blue-400 font-bold text-lg   border-2 border-pink-500">
            {" "}
            Vote a heroine
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Home;

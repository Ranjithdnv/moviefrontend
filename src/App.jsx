import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Button } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

function App() {
  const movienameref = useRef("");
  const Directornamenameref = useRef("");
  const [theatertowatch, settheatertowatch] = useState("");
  const [story_db, setstory_db] = useState([]);
  const [textarea, settextarea] = useState("");
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
        .get("http://localhost:3003/")
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
  //----------------------------------------------------------------
  const poststory = async (value) => {
    await axios
      .post("http://localhost:3003/", {
        desc: textarea,
        moviename: movienameref?.current.value || "",
        writtenby: Directornamenameref?.current.value | "",
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
  console.log(Directornamenameref?.current.value);

  return (
    <div className=" flex  flex-col">
      <div className="headd flex  justify-between px-4  pt-12 pb-6  border-b-2  border-black">
        <div className="logo h-3 w-4 bg-slate-950"></div>
        <div className="name text-4xl font-semibold"> moviesbano</div>
        <div className="account logo h-3 w-4 bg-slate-950"></div>
      </div>
      <div className="ads"></div>
      <div className="location flex flex-col m-4 p-4 justify-center items-center bg-slate-400">
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
                <span className=" font-bold">{movietowatch} </span> at{" "}
                <span className=" font-bold"> {theatertowatch}</span>{" "}
              </div>
              <Button className=" rounded mt-2" pill>
                request
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className=" border-b-2 border-black"></div>{" "}
      <div className=" border-b-2 border-black"></div>
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
          submit
        </Button>
        {/* ----------------------------------------------------------- */}
      </div>{" "}
      <div className=" border-black border-b-2"></div>
      {/* ----------------------------------------------------- */}
      <div>
        {story.map((t) => (
          <div className="border-2 border-gray-200 m-4 my-6 rounded p-4">
            <div>
              <div className=" font-semibold text-orange-400 text-2xl">
                {" "}
                {t.moviename}
              </div>
              <div className=" font-semibold text-orange-300 text-2xl">
                {t.writer}{" "}
              </div>
              {t.storyof?.map((storylines) => (
                <div>{storylines} </div>
              ))}{" "}
            </div>
          </div>
        ))}
      </div>
      {/* --------------------------------------------SEND DIRECTOR AND NAME ---------------- */}
      <div className="follow"></div>
      <div className="contact_us"></div>
      <div className=" mt-5"> </div>
      {/* <div>{story_db.map((t) => (t ? <div>{t} </div> : <br />))}</div> */}
      {/* -----------------------------------------------look above -------------------------------------- */}
      <div className="hero_page"></div>
      <div className="director_page"></div>
      <div className="music_page"></div>
      <div className="heroinr_page"></div>
    </div>
  );
}

export default App;

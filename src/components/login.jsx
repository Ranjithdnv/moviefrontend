import React from "react";
import { useContext, useState } from "react";
import { CountContext } from "../context";

import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function Login({ story }) {
  const Contexts = useContext(CountContext);
  const [movie_story_present, setmovie_story_present] = useState(
    Contexts?.us.storyof || []
  );

  console.log(story);
  console.log(Contexts?.us);
  console.log(Contexts?.us.storyof);

  return (
    <div className=" flex justify-center h-screen items-center">
      {/* story
      {movie_story_present.map((storyline) => (
        <div>{storyline} </div>
      ))} */}

      <div className="  rounded justify-center items-center flex  p-2 bg-blue-500">
        {" "}
        <GoogleLogin
          className=" text-xl"
          onSuccess={(credentialResponse) => {
            var credentials = jwtDecode(credentialResponse.credential);
            console.log(credentials);
            console.log(credentials.email);
            let obj = JSON.stringify({
              ...Contexts.us,
              email: credentials.email,
            });

            if (credentials.email) {
              localStorage.setItem("movielogin", obj);
              Contexts.user({ ...Contexts.us, email: credentials.email });
            }
            console.log(Contexts.us);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
}
export default Login;

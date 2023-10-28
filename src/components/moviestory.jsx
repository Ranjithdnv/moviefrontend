import React from "react";
import { useContext, useState } from "react";
import { CountContext } from "../context";
function Moviestory({ story }) {
  const Contexts = useContext(CountContext);
  const [movie_story_present, setmovie_story_present] = useState(
    Contexts?.us.storyof || []
  );

  console.log(story);
  console.log(Contexts?.us);
  console.log(Contexts?.us.storyof);
  return (
    <div>
      story
      {movie_story_present.map((storyline) => (
        <div>{storyline} </div>
      ))}
    </div>
  );
}
export default Moviestory;

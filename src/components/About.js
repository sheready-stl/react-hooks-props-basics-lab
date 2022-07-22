import React from "react";
import Links from "./Links";

function About(props) {

  // const renderBio = (bio) => {
  //   if (bio && bio !== '') {
  //     return <p>{bio}</p>
  //   }
  //   return null
  // }

  return (
    <div id="about">
      <h2>About Me</h2>
      {/* {renderBio(props.bio)} */}
      {props.bio && props.bio !== '' ? <p>{props.bio}</p> : null}
      {/* {props.bio && props.bio !== '' && <p>{props.bio}</p>} */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;

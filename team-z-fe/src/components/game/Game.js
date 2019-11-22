import React, { useEffect, useState } from "react";
import axios from "axios";
import { props } from "bluebird";
import Movements from "./Movements";
import Map from "./Map";
function Game({ setUser, user, history, loginKey }) {
  const [rooms, setRooms] = useState([]);
  const [currentroom, setCurrentRoom] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      loginKey(localStorage.getItem("token"));
      //   setUser(user)
      console.log("true");
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://lambda-university.herokuapp.com/api/adv/init")
      .then(res => {
        console.log(res);
        setUser({ ...res.data });
      })
      .catch(res => {
        history.push("/");
      });
  }, [axios, setUser]);

  useEffect(() => {
    let grabber = async () => {
      try {
        let req = await axios.get(
          "https://lambda-university.herokuapp.com/api/adv/rooms/"
        );
        let data = await req.data;
        // data[78].title = "Career Building Back Hallway"
        // data[78].description = "Leads to the back of the Career Building"

        // for (let i=0; i< data.length; i++) {
        //     console.log(data[i].id + `: ${i}`)
        //     data[i].id = i
        // }
        setRooms(data);
      } catch (error) {
        console.error("couldn't fetch rooms", { ...error });
      }
    };
    if (rooms.length == 0) {
      grabber();
    }
  }, [rooms]);

  const logout = () => {
    console.log("hello");
    localStorage.removeItem("token");
    history.push("/");
  };

  console.log(rooms);
  let current = rooms.filter(
    room => room.title === user.title && room.description === user.description
  );

  current = current[0];

  current && localStorage.setItem("id", current.id);

  //current && setCurrentRoom(current)

  // if (current) {
  //     const currentroom = document.querySelector('.room-134')
  //     console.log(currentroom)
  //     console.log('hello')
  // }
  // let currentroom = document.querySelector(`.room-${current.id}`)
  // currentroom.classList.toggle('on')

  if (current && current.n_to === 0) {
    //if current room's 'n_to' points to 0, it is unavailable
    // using local storage as using a state cause an infinite loop
    localStorage.setItem("north", "false"); // set storage of north to false

    /// repeat pattern below
  } else {
    localStorage.setItem("north", "true");
  }

  if (current && current.s_to === 0) {
    localStorage.setItem("south", "false");
  } else {
    localStorage.setItem("south", "true");
  }

  if (current && current.e_to === 0) {
    localStorage.setItem("east", "false");
  } else {
    localStorage.setItem("east", "true");
  }

  if (current && current.w_to === 0) {
    localStorage.setItem("west", "false");
  } else {
    localStorage.setItem("west", "true");
  }

  return (
    <div className="outer-container">
      <div className="game-nav">
        <button onClick={logout} className="logout">
          Log Out
        </button>
      </div>
      <div className="outer-map-container">
        <Map rooms={rooms} current={current} />
      </div>
      <div class="game-bottom-container">
        <div className="left">
          <h2>{user.name}</h2>
          <h3>{user.title}</h3>
          <p>{user.description}</p>
        </div>
        <div className="right">
          <Movements setUser={setUser} />
        </div>
      </div>
    </div>
  );
}

export default Game;

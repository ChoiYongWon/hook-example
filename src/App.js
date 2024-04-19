import "./App.css";
import ProfilePageFunction from "./ProfileFunction";
import ProfilePageClass from "./ProfileClass";
import { useEffect, useRef, useState } from "react";

function App() {
  const [user, setUser] = useState({ user: "용원" });

  // const data = useRef(new Date().toString());

  return (
    <div className="Container">
      <label>
        <b>Choose profile to view: </b>
        <select
          value={user.user}
          onChange={(e) => setUser({ user: e.target.value })}
        >
          <option value="용원">용원</option>
          <option value="현민">현민</option>
          <option value="시영">시영</option>
          <option value="민주">민주</option>
        </select>
      </label>
      <h1>Welcome to {user.user}’s profile!</h1>
      <p>
        <ProfilePageFunction user={user.user} />
        <b> (function)</b>
      </p>
      <p>
        <ProfilePageClass user={user.user} />
        <b> (class)</b>
      </p>
      {/* <button onClick={() => (data.current = new Date().toString())}>
        ref 변경
      </button>
      <div>{data.current}</div> */}
    </div>
  );
}

export default App;

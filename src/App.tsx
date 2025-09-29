import {Fragment, type ReactNode } from "react";
import "./App.css";


export default function App(): ReactNode {
    const name = "faTemeh".toLowerCase();
    const user = {
        username:"ali"
    };
    const names = ['ali','fatemeh','hadis'];

    const empty = <div>no one is here...</div>;
    const filled = names.map((name) => <div>hi {name}</div>);
//  return names.length === 0 ? empty : filled ;
  return (
    <Fragment>
        <div className="counter">{name.toUpperCase()}</div>
        <div className="counter">{user.username}</div>
        <div className="counter">{JSON.stringify(user)}</div>
        {/* {
            names.map((name) => <div>hi {name}</div>)
        } */}

        {names.length === 0 ? empty : filled}
    </Fragment>
 );
}




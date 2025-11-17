import React from "react";
import './style.css';
// component = html + css + js
const MyComponent = () => {
    // const venn = "Bla bka";
    // const venn = 123;
    // const venn = true;
    const venn = [1, 2, 3];
    // const venn = {
    //     name: "hehe",
    //     age: 20
    // };
    return (
        <>
            <div> {JSON.stringify(venn)} Phan Hữu Phước & vennhuu update </div>
            <div>{console.log("Bùm")}</div>
            <div className="child" style={{ borderRadius: "10px" }}>Hello</div>
        </>
    );
}

export default MyComponent;
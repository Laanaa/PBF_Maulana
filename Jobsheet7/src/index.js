// import React from "react";
// import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "popper.js";
// import "./index.css";
// // import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// // import BlogPost from "./container/BlogPost/BlogPost";
// import BlogMahasiswa from "./container/BlogMahasiswa/BlogMahasiswa";

// ReactDOM.render(<BlogMahasiswa />, document.getElementById("content"));

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import { domainPath } from "./Config";

const GetAPI = (path) => {
    const promise = new Promise ((resolve, reject) => {
        fetch(`${domainPath}/${path}`)
            .then(response => response.json())
            .then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    })
    return promise
}

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

const API = {
    getNewsBlog
}

export default GetAPI;

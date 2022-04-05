import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header"
import MainContent from "./MainContent";
import Footer from "./foooter";
import "./index.css";




// const page = (
//     <div>
//         <img src="./logo512.png" width="40px" />
//         <h1>Fun facts about React</h1>
//       <ul>
//           <li>Was first released in 2013</li>
//           <li>Was originally created by Jordan Walke</li>
//           <li>Has well over 100K stars on GitHub</li>
//           <li>Is maintained by Facebook</li>
//           <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))



function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

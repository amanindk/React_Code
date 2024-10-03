import smartwatch from "./smartwatch.jpg";
import "./Content.css";
import rggroup from "./rggroup.png";
import rgshinelogo from "./rgshinelogo.png";

function Content() {
  return (
    <div className="content">
      <div className="content-inform">
        <h1>
          YOUR FEET <br /> DESERVE <br /> THE BEST
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nam
          voluptatum tempora dolores libero excepturi <br /> voluptatem.
          Recusandae reiciendis.
        </p>
        <div className="content-btn">
          <button className="shop">Shop Now</button>
          <button className="category">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
        </div>
        <div className="brand-icons">
          <img src={rggroup} style={{ width: "50px" }} alt="" />
          <img src={rgshinelogo} style={{ width: "50px" }} alt="" />
        </div>
      </div>
      <div className="content-image">
        <img src={smartwatch} style={{ width: "500px" }} alt="" />
      </div>
    </div>
  );
}

export default Content;

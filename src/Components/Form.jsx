import { useState } from "react";
import Header from "../Components/Header";
import "../Style/button.css";
import duck1 from "../Images/duck1.jpg";
import duck3 from "../Images/duck3.jpg";
import { useDispatch, useSelector } from "react-redux";
import { click, set } from "../Redux/Reducer";
import Swal from "sweetalert2";
export default function Form() {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const setimg = useSelector((state) => state.user.setid);
  const imgdes = useDispatch();
  const locemail = "kp@gmail.com";
  const locpass ="123456789";

  const clicker = useSelector((state) => state.user.click);

  const setclick = useDispatch();

  console.log("clicker", clicker);

  //  /////////////////////////////////////////////
  const button = document.getElementById("btn");
  // /////////////////////////////////////////////////////////////////////////////

  if (button) {
    if (locemail === email && locpass === password) {
      button.onmouseover = () => {
        button.style.left = `inherit`;
        button.style.top = `inherit`;
      };
      setclick(click(true));
      imgdes(set(duck1));
    } else if (locemail !== email) {
      button.onmouseover = () => {
        button.style.left = `${Math.ceil(Math.random() * 90)}%`;
        button.style.top = `${Math.ceil(Math.random() * 90)}%`;
      };
      setclick(click(false));
      imgdes(set(duck3));
    } else if (locpass !== password) {
      button.onmouseover = () => {
        button.style.left = `${Math.ceil(Math.random() * 90)}%`;
        button.style.top = `${Math.ceil(Math.random() * 90)}%`;
      };
      imgdes(set(duck3));
    }
  }
  // UTS
  // ////////////////////// clicked function//////////////////////////////
  const clicked = () => {
    Swal.fire({
      title: "Succesfully Click ✌️✌️✌️",
      text: "finally you clicked me   !!!!",
      icon: "success",
    });
  };
  // ///////////////////////////////////////  target value
  const handlechange = (event) => {
    const { name, value } = event.target;
    setstate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(state);
  return (
    <>
      <Header />

      {/* /////////////////////////////// */}
      <div className="container position-relative mt-5 pt-5">
        <div className="row">
          <div className="col-md-4 offset-md-4 bg-light p-3">
            <div className="form ">
              <div className="mb-3">
                <label className="form-label">Email </label>
                <input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handlechange}
                  className="form-control"
                />
              </div>
              {/* /////////////////////////// */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="text"
                  name="password"
                  value={state.password}
                  onChange={handlechange}
                  className="form-control"
                />
              </div>
              <button
                id="btn"
                onClick={clicker ? clicked : ""}
                type="button"
                className="bg-success btnmover text-light me-3 btn float-end"
              >
                Submit
              </button>
              <button className="bg-danger text-light btn float-end">
                Cancel
              </button>
            </div>
          </div>
          <div className="col-md-2">
            <div className="image">
              <img src={setimg} width={200} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

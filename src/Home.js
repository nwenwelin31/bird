import React from "react";
import homePicture from "./birdhomePicture.avif";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { RiFacebookLine } from "react-icons/ri";
import { RiContactsFill } from "react-icons/ri";

const Home = () => {
  return (
    <div>
      <div className="row">

          <div className="row">
            <div className="col-md-7 d-flex">
              <img
                src={homePicture}
                alt="bird"
                style={{ width: '250%', height: '80%' }}
              />
                <label className="fs-4">ဒီ ဆင်ပိန်ညှင်း အမျိုးအစားက ပိန်ညှင်းတွေထဲမှာ တော်တော်ကြီးတဲ့အထဲပါတယ်။ သူက အဲ့ဒီ သစ်ကိုင်းပေါ်မနားခင် သူ့ အသိုက်ထဲမှာ နားလေ့ရှိတယ်။ ပီးတော့မှ ဒီ သစ်ကိုင်းပေါ်လာနားပီး အောက်က ချောင်းထဲမှာ ရှိတဲ့ ငါးလေးတွေကို ဒိုင်ဗင်ထိုးပီး ဖမ်းလေ့ရှိတယ်။​ သူ ငါးတွေ့လို့ ဒိုင်ဗင်ထိုးခါနီးဆို</label>
            </div>
            <div className="col-md-4">
              <div className="row">

                    <p>ဒီ code မှာ ဆိုရင် share ဆိုသည့် function ဟာ Book class နဲ့ တိုက်ရိုက် တိုက်ဆိုင် ခြင်း မရှိပါဘူး။ </p>
              </div>
              <div className="row">
                <div className="contact-card" style={{ width: "14rem" }}>
                    <div className="card-body">
                    <RiFacebookLine className="rounded-circle bg-secondary p-2" size={40}/>
                    </div>

                  <div className="card-body d-flex justify-content-between">
                    <Link to="/"> Wikipedia</Link>
                    <FaArrowRightFromBracket />
                  </div>
                </div>
                <div className="contact-card" style={{ width: "16rem" }}>
                    <div className="card-body rounded">
                        <RiContactsFill className="rounded-circle bg-secondary p-2" size={40}/>
                        <RiFacebookLine className="rounded-circle bg-secondary p-2" size={40}/>
                    </div>
                  <div className="card-body d-flex justify-content-between">
                    <Link to="/">Birds In Nature </Link>
                    <FaArrowRightFromBracket />
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col bird-info">
              <span>8600</span>
              <p>label1</p>
            </div>
            <div className="col bird-info">
              <span>8600</span>
              <p>label1</p>
            </div>
            <div className="col bird-info">
              <span>8600</span>
              <p>label1</p>
            </div>
            <div className="col bird-info">
              <span>8600</span>
              <p>label1</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">

                <p className="p-2 fs-4">Let's <br/>explore<br/> together.</p>
                <FaArrowRightFromBracket />
        </div>
      </div>
    </div>
  );
};

export default Home;

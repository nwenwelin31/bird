import React from "react";
import homePicture from "./home.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaWikipediaW } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";



const Home = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="col-md-6">
          <div className="row home-img-text">
            <div className="col-md-6 mt-4">
              <img src={homePicture} alt="bird" className="img-fluid rounded" style={{ height:'90%' }} />
            </div>
            <div className="col-md-6">
              <p>
                မြန်မာနိုင်ငံ အတွင်း၌ တွေ့ရသော ကျေးငှက်များတွင်
                မျိုးတူမျိုးကွဲအားဖြင့် မှတ်တမ်းတင်ထားသော ငှက်မျိုးမှာ ၁,၂၄ဝ
                ခန့်ရှိသည်။ ယင်းတို့အနက် ငှက်မျိုး ၂ဝဝ ခန့်သည် ဆောင်းရာသီတွင်မှ
                ရောက်လာတတ်သည့် ဧည့်သည်ငှက်မျိုးဖြစ်၍၊ ကျန်ငှက်များကား
                မြန်မာနိုင်ငံတွင် အမြဲတမ်း နေသော ငှက်များဖြစ်၏။ သို့သော်လည်း
                ထိုသို့ အမြဲတမ်းနေသော ငှက်များထဲတွင် နိုင်ငံတွင်း၌ တစ်နေရာမှ
                တစ်နေရာသို့ လှည့်လည်သွားလာနေထိုင်တတ်သည့်
                ငှက်မျိုးအတော်များများလည်း ပါဝင်ပေသေးသည်။
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-10 mx-4 mt-4">
          <div className="row">
            <p className="btn btn-secondary">
              ငှက်တစ်မျိုးသည် ယင်းတို့ပေါက်ပွားရာ ဆိုက်ဗီးရီးယားဒေသများမှ
              မိုင်ပေါင်း ၄,ဝဝဝ ခန့်ကွာဝေးသည့် အင်ဒိုချိုင်းနားကျွန်းဆွယ်
              တိုင်းပြည်များ
            </p>
          </div>
          <div className="d-flex mt-4">
            <div className="contact-card" style={{ width: "10rem" }}>
              <div className="card-body">
                <GrTwitter 
                  className="rounded-circle mx-4" style={{ width:50, height:50, color: 'blue'}} />
              
              </div>

              <div className="card-body d-flex justify-content-between pt-4">
                <Link to="/"> Twitter </Link>
                <FaArrowRightFromBracket />
              </div>
            </div>
            <div className="contact-card" style={{ width: "10rem" }}>
              <div className="card-body rounded text-center">
                <FaFacebookF
                  className="rounded-circle p-2"
                  style={{ width:50, height:50, color: ''}}
                />
                <FaWikipediaW
                  className="rounded-circle p-2 mx-1"
                  style={{ width:50, height:50, color: ''}}
                />
              </div>
              <div className="card-body d-flex justify-content-between pt-4">
                <Link to="/">Birds In Nature </Link>
                <FaArrowRightFromBracket />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8 d-flex justify-content-between">
            <div className="col-lg-2 col-md-5 col-sm-4 bird-info">
              <label>၈၆၀၀</label>
              <p>ငှက်အမျိုးပေါင်း၊ မျိုးစိတ်ပေါင်း</p>
            </div>
            <div className="col-lg-2 col-md-5 col-sm-4 bird-info">
              <label>၁၆၀၀</label>
              <p>မျိုးစုစုပေါင်း</p>
            </div>
            <div className="col-lg-2 col-md-5 col-sm-4 bird-info">
              <label>၁၅၅</label>
              <p>မျိုးရင်းပေါင်း</p>
            </div>
            <div className="col-lg-2 col-md-5 col-sm-4 bird-info">
              <label>၂၇</label>
              <p>မျိုးစဉ်ပေါင်း</p>
            </div>
        </div>
        <div className="col-md-3 col-sm-7 bird-info">
          <p className="p-2 fs-4">
            Let's <br />
            explore together.
          </p>
          <FaArrowRightFromBracket />
        </div>
      </div>
    </div>
  );
};

export default Home;

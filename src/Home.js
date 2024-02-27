import React from "react";
import homePicture from "./birdhomePicture.avif";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Home = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-12">
          <div className="row">
            <div className="col-5">
              <img
                src={homePicture}
                alt="bird"
                style={{ width: 250, height: 150 }}
              />
            </div>
            <div className="col-5">
              <div className="row">
                <p>l jeef F KF JOF' FO PODFFJI MJ MFJFMMFJ FF MF F</p>
              </div>
              <div className="row">
                <div class="card" style={{ width: "10rem" }}>
                  <img class="card-img-top" src="..." alt="contact" />
                  <div class="card-body">
                    <Link href="#" class="btn btn-primary">
                      Wikipedia
                    </Link>
                  </div>
                </div>
                <div class="card" style={{ width: "10rem" }}>
                  <img class="card-img-top" src="..." alt="contact" />
                  <div class="card-body">
                    <Link href="#" class="btn btn-primary">
                      Wikipedia
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 d-flex">
          <div className="row">
            <div className="col-md-2">
              <span>8600</span>
              <p>label1</p>
            </div>
            <div className="col-md-2">
              <span>8600</span>
              <p>label1</p>
            </div>
            <div className="col-md-2">
              <span>8600</span>
              <p>label1</p>
            </div>
            <div className="col-md-2">
              <span>8600</span>
              <p>label1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

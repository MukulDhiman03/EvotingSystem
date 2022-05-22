import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <h1 className="m-5 text-decoration-underline">Dashboard</h1>
      <div className="container" id="dashboard-container">
        <div className="row mt-3 justify-content-end">
          <div className="col-5">
            <button type="button" className="btn btn-primary dashboard-btn">
              Vote Now
            </button>
          </div>
          <div className="col-5">
            <button type="button" className="btn btn-primary dashboard-btn">
              View Result
            </button>
          </div>
        </div>
        <div className="row mt-3 p-4" id="data-container">
          <div className="col-12">
            <h3 className="text-center">Election Data Center</h3>
          </div>
          <div className="col-12">
            <div className="row p-3 justify-content-between">
              <div className="col-3 p-2 text-center" id="box1">
                <span>Election Details: </span>
                <button type="button" className="btn btn-primary dashboard-btn">
                  View
                </button>
              </div>
              <div className="col-3 boxes p-2 text-center" id="box2">
                <span>Qualified Candidates: </span>
                <button type="button" className="btn btn-primary dashboard-btn">
                  View
                </button>
              </div>
              <div className="col-3 boxes p-2 text-center" id="box3">
                <span>Cleared Candidates: </span>
                <button type="button" className="btn btn-primary dashboard-btn">
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row p-3 justify-content-between">
              <div className="col-3 boxes p-2 text-center" id="box4">
                <span>Registered Voters: </span>
                <button type="button" className="btn btn-primary dashboard-btn">
                  View
                </button>
              </div>
              <div className="col-3 boxes p-2 text-center" id="box5">
                <span>Accredited Voters: </span>
                <button type="button" className="btn btn-primary dashboard-btn">
                  View
                </button>
              </div>
              <div className="col-3 boxes p-2 text-center" id="box6">
                <span>Election Statistics: </span>
                <button type="button" className="btn btn-primary dashboard-btn">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

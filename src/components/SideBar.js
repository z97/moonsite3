import React from "react";

export default function SideBar() {
  return (
    <div>
      <div className="offcanvas offcanvas-start" id="demo">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">Heading</h1>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <button className="btn btn-secondary" type="button">
            A Button
          </button>
        </div>
      </div>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#demo"
      >
        Open Offcanvas Sidebar
      </button>
    </div>
  );
}

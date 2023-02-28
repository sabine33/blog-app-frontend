import React from "react";

function DashboardTitleComponent() {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">My Articles</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button type="button" className="btn btn-sm btn-outline">
            Add New Article
          </button>
        </div>
      </div>
    </main>
  );
}

export default DashboardTitleComponent;

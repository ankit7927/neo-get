import React, { useState } from "react";

const Explorer = () => {
  const [newReqName, setNewReqName] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const onNewRequest = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <div>
        <button
          className="btn btn-secondary me-2"
          onClick={() => {
            setShowDialog(!showDialog);
            setNewReqName("")
          }}
        >
          <i className="fas fa-plus me-3"></i>
          new request
        </button>

        {showDialog ? (
          <div className="py-2">
            <form onSubmit={onNewRequest}>
              <input
              value={newReqName}
              onChange={(e)=>{setNewReqName(e.target.value)}}
                type="text"
                className="form-control"
                placeholder="message"
                aria-label="message"
                aria-describedby="message"
              />
            </form>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div>
        <ul className="list-group list-group-light">
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
    </div>
  );
};

export default Explorer;

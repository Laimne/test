import { useEffect, useState } from "react";


function Modal({ showModal, hide, modalInputs, edit }) {
    const [inputs, setInputs] = useState({
      id: "",
      Name: "",
      Class: "",
      Value: "",
    });
  
    const control = (e, what) => {
      const inputsCopy = { ...inputs };
      inputsCopy[what] = e.target.value;
      setInputs(inputsCopy);
    };
  
    useEffect(() => {
      setInputs({
        id: modalInputs.id,
        Name: modalInputs.Name,
        Class: modalInputs.Class,
        Value: modalInputs.Value,
      });
    }, [modalInputs]);
  
    const handleEdit = () => {
      edit(
        {
          id: inputs.id,
          Name: inputs.Name,
          Class: inputs.Class,
          Value: inputs.Value,
        },
        modalInputs.id
      );
    };
  
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{
          display: showModal ? "block" : "none",
          opacity: showModal ? "1" : "0",
        }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit X
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="th1" className="col-form-label">
                    id
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="th1"
                    value={inputs.Name}
                    onChange={(e) => control(e, "Name")}
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <label for="th2" className="col-form-label">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="th2"
                    value={inputs.Class}
                    onChange={(e) => control(e, "Class")}
                    placeholder="Enter Class"
                  />
                </div>
                <div className="form-group">
                  <label for="th3" className="col-form-label">
                    Class
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="th3"
                    value={inputs.th}
                    onChange={(e) => control(e, "th")}
                    placeholder="Enter th"
                  />
                </div>
  
                <div className="form-group">
                  <label for="th4" className="col-form-label">
                    Value
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="th4"
                    value={inputs.th}
                    onChange={(e) => control(e, "th")}
                    placeholder="Enter th"
                  />
                </div>
  
                <div class="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={hide}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleEdit}
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Modal;
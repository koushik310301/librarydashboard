
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
function App() {

  const [book, setBook] = useState([]);
  const [std, setStudent] = useState("");


  const fetchData = async () => {
    await axios.get("http://localhost:8000/library").then((resp) => {
      setBook(resp.data);
      console.log("Reading all the documents");
      console.log(resp.data);

    }).catch((e) => { console.log(e) });

  }

  useEffect(() => {
    fetchData();
  }, [])


  const issueStudent = async (key) => {

    //adding the student into students array of book.students

    const id = book[key]._id
    const roll = parseInt(std);
    const modData = {
      id: id,
      roll_no: roll
    }
    const url = "http://localhost:8000/update";

    try {
      axios.post(url, modData)
        .then(() => {
          console.log("Data successfully sent");
        })
        .catch((e) => {
          console.log(e);
        })
    } catch (e) {
      console.log(e);
    }

    setStudent("");

  }

  const deleteStudent = (key1, key2) => {
    console.log(book[key1].students[key2]);
    const details = {
      id: book[key1]._id,
      roll_no: book[key1].students[key2],
      key: key2
    }
    const url = "http://localhost:8000/remove";

    try {
      axios.post(url, details)
        .then(() => {
          console.log("Data successfully sent");
        })
        .catch((e) => {
          console.log(e);
        })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div>

        {
          book.map((bk, key) => (
            <div>
              <h1>{bk.book_name}</h1>
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Book Issued to following Students
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                      {bk.students.map((st, key2) => (
                        <h5>{st}</h5>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <input type="text" placeholder="Enter student roll no." onChange={(e) => (setStudent(e.target.value))} />
              <a href="#" className="btn btn-primary" onClick={() => issueStudent(key)}>Issue</a>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;

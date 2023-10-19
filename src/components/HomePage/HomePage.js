import React, { useState } from "react";
import { useEffect } from "react";
import "./HomePage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { getAllUsers } from "../../services/apiService";

const HomePage = (prop) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchGetAllUsers();
  }, []);

  const fetchGetAllUsers = async () => {
    let res = await getAllUsers(1);
    console.log("check res", res);
  };
  return (
    <>
      <div className="test"> Danh sach User </div>{" "}
      <Table striped bordered>
        <thead>
          <tr>
            <th> Id </th> <th> Email </th> <th> FirstName </th>{" "}
            <th> LastName </th> <th> Avatar </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          <tr>
            <td> 1 </td> <td> Mark </td> <td> Otto </td> <td> @mdo </td>{" "}
          </tr>{" "}
          <tr>
            <td> 2 </td> <td> Jacob </td> <td> Thornton </td> <td> @fat </td>{" "}
          </tr>{" "}
          <tr>
            <td> 3 </td> <td colSpan={2}> Larry the Bird </td>{" "}
            <td> @twitter </td>{" "}
          </tr>{" "}
        </tbody>{" "}
      </Table>{" "}
    </>
  );
};

export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
export default function Table() {
  return (
    <div className="container" style={{ padding: "1em" }}>
      <table className="table">
        <thead>
          <tr>
            <th>type of clothing</th>
            <th>available in store</th>
            <th>number of items in my cart</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shoes</td>
            <td></td>
            <td></td>
            <td>
              <Link type="button" className="btn btn-primary" to="/shoes">
                add
              </Link>
            </td>
          </tr>
          <tr>
            <td>Shirts</td>
            <td></td>
            <td></td>
            <td>
              <Link type="button" className="btn btn-primary" to="/shirt">
                add
              </Link>
            </td>
          </tr>
          <tr>
            <td>Pants</td>
            <td></td>
            <td></td>
            <td>
              <Link type="button" className="btn btn-primary" to="/pants">
                add
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

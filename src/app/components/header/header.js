import React, {Component} from "react";
import { Link } from "react-router-dom";
import WhiteLogo from "../../../resources/images/white-logo.png?sizes=64w";
import Picture from "../../../core/components/picture";

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid bg-primary">
        <div className="row p-2">
          <div className="col text-white h3 mb-0">
            <div className="d-inline-block" style={{ width: "32px" }}>
              <Link to="/">
                <Picture image={WhiteLogo} alt="ReactPWA" imgClassName="mw-100"/>
              </Link>
            </div>
            <Link to="/" className="d-none d-sm-inline text-white ml-2 align-bottom" style={{ textDecoration: "none"}}>React PWA</Link>
          </div>
          
          <Link to="/docs" className="d-none d-sm-block text-white pull-right" style={{ textDecoration: "none"}}>Documentation</Link>
          <Link to="/docs" className="d-sm-none text-white pull-right" style={{ textDecoration: "none"}}>Docs</Link>
        </div>
      </div>
    );
  }
}
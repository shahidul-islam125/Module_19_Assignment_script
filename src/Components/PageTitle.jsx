import  PropTypes  from "prop-types";
import { Breadcrumb, Container } from "react-bootstrap";
import "../assets/css/PageTitle.css";
import { NavLink } from "react-router-dom";

const PageTitle = (props) => {
  return (
    <div className="page-title-container">
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{props.title}</Breadcrumb.Item>
        </Breadcrumb>
        <h1>{props.title}</h1>
      </Container>
    </div>
  );
};
PageTitle.propTypes = {
  title: PropTypes.string.isRequired, // Validate title prop
};

export default PageTitle;

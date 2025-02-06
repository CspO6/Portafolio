import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <img src={imgUrl} style={{ width: '100%', height: 'auto' }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
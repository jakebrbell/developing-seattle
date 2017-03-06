import { Col, Image } from 'react-bootstrap';
import React from 'react';

const Testimonial = ({ testimonial }) => {
  const styles = {
    testimonial: {
      fontSize: '18px',
      padding: '10px 30px',
      textAlign: 'center'
    },
    testimonialImg: {
      display: 'block',
      margin: '40px auto 20px',
      width: '250px'
    },
    testimonialName: {
      fontSize: '18px',
      textAlign: 'center'
    }
  };

  return (
    <Col xs={12} md={4}>
      <Image
        circle
        src={`assets/images/${testimonial.image}`}
        style={styles.testimonialImg}
      />
      <p style={styles.testimonial}>{testimonial.text}</p>
      <p style={styles.testimonialName}>~ {testimonial.name}</p>
    </Col>
  );
}

export default Testimonial;

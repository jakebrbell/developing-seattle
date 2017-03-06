import { Col } from 'react-bootstrap';
import Radium from 'radium';
import React from 'react';

const Cause = ({ cause }) => {
  const styles = {
    col: {
      padding: 0
    },
    description: {
      padding: '0 30px'
    },
    image: {
      background: `url("assets/images/${cause.image}") center center / cover no-repeat`
    },
    name: {
      height: '50px',
      margin: 0,
      padding: '10px',
      textAlign: 'center'
    },
    overlay: {
      backgroundColor: 'rgba(34, 34, 34, 0.8)',
      bottom: 0,
      color: '#9D9D9D',
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      textAlign: 'left',
      top: '80%',
      transition: 'all 1s',

      ':hover': {
        color: '#fff',
        top: 0
      }
    },
    overlayContainer: {
      cursor: 'pointer',
      height: '250px',
      position: 'relative'
    }
  };

  return (
    <Col md={3} sm={6} style={styles.col} xs={12}>
      <div style={Object.assign(styles.image, styles.overlayContainer)}>
        <div style={styles.overlay}>
          <h3 style={styles.name}>
            {cause.name}
          </h3>
          <p style={styles.description}>{cause.desc}</p>
        </div>
      </div>
    </Col>
  );
};

// eslint-disable-next-line new-cap
export default Radium(Cause);

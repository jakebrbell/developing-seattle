import { Button, Col, Grid, Row } from 'react-bootstrap';
import Cause from './Cause';
import React from 'react';
import Testimonial from './Testimonial';

const Home = ({ causes, testimonials }) => {
  const styles = {
    button: {
      fontSize: '25px',
      height: '80px'
    },
    buttonRow: {
      margin: '40px 0 20px 0'
    },
    causeHeader: {
      fontSize: '30px',
      textAlign: 'center'
    },
    causeHeaderRow: {
      marginBottom: '30px'
    },
    hero: {
      // eslint-disable-next-line max-len
      background: 'url("assets/images/seattle-skyline.jpg") center center / cover no-repeat',
      height: '500px'
    },
    mainHeader: {
      color: '#fff',
      fontSize: '6rem',
      lineHeight: '6em',
      fontWeight: '500',
      textAlign: 'right',
      paddingRight: '100px'
    },
    subHeader: {
      textAlign: 'center'
    },
    testimonialHeader: {
      fontSize: '40px',
      textAlign: 'center'
    },
    testimonialRow: {
      margin: '40px 0'
    }
  };

  return <div>
    <div style={styles.hero}>
      <h1 style={styles.mainHeader}>Developing Seattle</h1>
    </div>
    <Grid>
      <h2 style={styles.subHeader}>
        Connecting web developers with nonprofit organizations that need help
      </h2>
      <Row style={styles.buttonRow}>
        <Col sm={6} smOffset={3} xs={12}>
          <Button
            block={true}
            bsSize="large"
            bsStyle="primary"
            style={styles.button}
          >
            Browse all volunteer opportunities
          </Button>
        </Col>
      </Row>
      <Row style={styles.causeHeaderRow}>
        <Col xs={12}>
          <h3 style={styles.causeHeader}>
            Or search by the causes you are most passionate about
          </h3>
        </Col>
      </Row>
      <Row>
        {causes.map((cause) => {
          return <Cause cause={cause} key={cause.name} />;
        })}
      </Row>
      <Row style={styles.testimonialRow}>
        <h2 style={styles.testimonialHeader}>
          Here's what other developers are saying:
        </h2>
        {testimonials.map((testimonial) => {
          return <Testimonial
            key={testimonial.name}
            testimonial={testimonial}
          />;
        })}
      </Row>
    </Grid>
  </div>;
};

// eslint-disable-next-line new-cap
export default Home;

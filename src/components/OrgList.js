import {
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Grid,
  Image,
  Label,
  Row } from 'react-bootstrap';
import OrgProfileShortContainer from './OrgProfileShortContainer';
import React, { Component } from 'react';

class OrgList extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const styles = {
      aside: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        margin: '0 10px',
        padding: '30px',
        position: 'fixed',
        width: '19%'
      },
      filterHeader: {
        marginTop: 0
      },
      grid: {
        marginTop: '100px'
      }
    };

    return (
      <div>
        <Grid style={styles.grid}>
          <Row>
            <Col xs={12} sm={3}>
              <aside style={styles.aside}>
                <h3 style={styles.filterHeader}>Filter by</h3>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Cause</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">Select</option>
                    <option value="animal-welfare">Animal Welfare</option>
                    <option value="education">Education</option>
                    <option value="environment">Environment</option>
                    <option value="gender-equality">Gender Equality</option>
                    <option value="homelessness">Homelessness</option>
                    <option value="human-trafficking">Human Trafficking</option>
                    <option value="lgbtq-issues">LGBTQ Issues</option>
                    <option value="refugees">Refugees</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Skills</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">Select</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                    <option value="postgresql">PostgreSQL</option>
                    <option value="nodejs">Node.js</option>
                    <option value="express">Express.js</option>
                    <option value="angular">Angular.js</option>
                    <option value="react">React</option>
                  </FormControl>
                </FormGroup>
              </aside>
            </Col>
            <Col xs={12} sm={9}>
              <OrgProfileShortContainer />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default OrgList;

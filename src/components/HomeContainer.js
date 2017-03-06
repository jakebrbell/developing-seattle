import React, { Component } from 'react';
import Home from './Home';

class HomeContainer extends Component {
  constructor() {
    super();

    this.state = {
      causes: [{
        name: 'Animal Welfare',
        image: 'animal-welfare.jpg',
        desc: 'Use your power to give a voice to the voiceless. Raising awareness of animal cruelty, whether by owners of mistreated animals, or by corporate entities in the agricultural, medical, and entertainment industries, can help ensure the rights of animals are respected.'
      }, {
        name: 'Education',
        image: 'education.jpg',
        desc: 'Every child has the right to a quality education yet thousands of students are disadvantaged due to circumstances beyond their control. Providing resources to students and teachers is the greatest investment we can make in our future.'
      }, {
        name: 'Environment',
        image: 'environment.jpg',
        desc: 'Time is running out to stave off the extreme consequences of global climate change.  Only together can we make a lasting difference.  Individual responsiblity must be coupled with support for sensible laws and policies if we hope to stem the tide of environmental decay.'
      }, {
        name: 'Gender Equality',
        image: 'gender-equality.jpg',
        desc: 'Imagine a world where rights and opportunities are unaffected by gender.  While progress has been made toward this goal, issues including women\'s health, violence against women, pay equity, paid family leave and others remain at the forefront of leveling the playing field for all.'
      }, {
        name: 'Homelessness',
        image: 'homelessness.jpg',
        desc: 'Everyday individuals who are unable to acquire and maintain safe and adequate housing are forced to seek out shelter in the most inhospitable of places.  Everyone has the right to a standard of living adequate for their own health and well-being.'
      }, {
        name: 'Human Trafficking',
        image: 'human-trafficking.jpg',
        desc: 'Human trafficking is the use of force to compel a person into any form of labor against their will. It is a form of modern-day slavery and one of the fastest growing criminal industries in the world with children accounting for half of the victims.'
      }, {
        name: 'LGBTQ Issues',
        image: 'lgbtq-issues.jpg',
        desc: 'That all individuals deserve to live openly without fear of discrimination, enjoying equal opportunities for freedom of expression and association, is at the center of the LGBTQ movement for civil rights.'
      }, {
        name: 'Refugees',
        image: 'refugees.jpg',
        desc: 'The number of refugees has exploded and the crisis is only getting worse. Across the globe, nearly 50 million children have fled their homes. More than half these children are escaping violence and war and today, one out of every 200 children worldwide is a refugee.'
      }],
      testimonials: [{
        name: 'Hien Dang',
        image: 'hien-dang.jpg',
        text: '"I was looking for a good cause to support and Developing Seattle helped pair me with a nonprofit that is working to solve the greatest issues of our time."'
      }, {
        name: 'Bryan Brophy',
        image: 'bryan-brophy.jpg',
        text: '"I always wanted to volunteer but never thought I had enough time. Developing Seattle showed me that even just a few hours on the weekend can make a world of difference."'
      }, {
        name: 'Michael Park',
        image: 'michael-park.jpg',
        text: '"There are so many worthy causes out there it\'s hard to pick just one. Developing Seattle made it easy by allowing me to search for the causes I am passionate about and the skills I have to offer."'
      }]
    };
  }

  render() {
    return (
      <Home
        causes={this.state.causes}
        testimonials={this.state.testimonials}
      />
    );
  }
}

export default HomeContainer;

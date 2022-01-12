import React from "react";
import "./Timeline.css";
import Icon from "../Icon/Icon";
import H2 from "../H2";

function Timeline() {
  return (
    <div className="timeline">
      <H2 text="About Me." />
      <div className="outer">
        <div className="card">
          <div className="info">
            <div className="title__row">
              <span className="title">
                Engineering <Icon icon="github" width="13" height="13" />
              </span>
              <span className="title__link">View Github</span>
            </div>
            <span className="text">
              When it comes to business, first impressions matter, and good
              website design is the key to capitalizing on them. An excellent
              site is not judged solely on its looks, but on its functionality
              and usability as well. My experience as a programmer allows me to
              come up with intelligent solutions to technical challenges, while
              at the same time designing sleek and visually appealing websites.
              Aside from having extensive knowledge of recognized technical
              standards, I am conversant with modern building practices.
            </span>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <div className="title__row">
              <span className="title">
                Product <Icon icon="globe" width="13" height="13" />
              </span>
              <span className="title__link">View Products</span>
            </div>
            <span className="text">
              In spite of not being an atypical product manager, I have strong
              backgrounds in research, product design, and product coordination
              that can help the product grow from 0 to 1. As a first-rate
              analytical thinker, I am able to maintain the product's vision
              from start to finish, both technically and product-wise.
            </span>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <div className="title__row">
              <span className="title">
                Design <Icon icon="dribbble" width="13" height="13" />
              </span>
              <span className="title__link">View Dribbble</span>
            </div>
            <span className="text">
              Although I am not the typical designer, I do possess excellent
              visual abilities, and this makes me an excellent presenter,
              allowing me to successfully communicate design ideas to
              stakeholders and design teams. With my strong conceptualization
              ability, I am able to visualize and create beautiful works.
              Lastly, you can find me mostly tweaking stylesheets and creating
              fluid user experiences.
            </span>
          </div>
        </div>
      </div>
      <h3>My Reads.</h3>
      <div className="outer">
        <div className="card">
          <div className="info">
            <div className="title__row">
              <span className="title">
                Human Centered Design 101.{" "}
                <span className="subtitle">Acumen</span>
              </span>
              <span className="title__link">
                <Icon icon="calendar" width="13" height="13" />
                2017-2018
              </span>
            </div>
            <span className="text">
              In spite of not being an atypical product manager, I have strong
              backgrounds in research, product design, and product coordination
              that can help the product grow from 0 to 1. As a first-rate
              analytical thinker, I am able to maintain the product's vision
              from start to finish, both technically and product-wise.
            </span>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <div className="title__row">
              <span className="title">
                Data Structure And Algorithm.{" "}
                <span className="subtitle">Udemy</span>
              </span>
              <span className="title__link">
                <Icon icon="calendar" width="13" height="13" />
                2019
              </span>
            </div>
            <span className="text">
              Many developers who are "self taught", feel that one of the main
              disadvantages they face compared to college educated graduates in
              computer science is the fact that they don't have knowledge about
              algorithms, data structures and the notorious Big-O Notation
            </span>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <div className="title__row">
              <span className="title">
                Adaptive Leadership. <span className="subtitle">edX</span>
              </span>
              <span className="title__link">
                <Icon icon="calendar" width="13" height="13" />
                2019
              </span>
            </div>
            <span className="text">
              This introductory course helps you identify and make progress on a
              leadership challenge in your own life, team, or community. You’ll
              apply the tools and techniques of Adaptive Leadership, a practical
              framework developed at Harvard Kennedy School of Government for
              leading change, particularly during times of uncertainty or when
              there are no easy answers.
            </span>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <div className="title__row">
              <span className="title">
                Learning to Learn [Efficient Learning]
                <span className="subtitle">Udemy</span>
              </span>
              <span className="title__link">
                <Icon icon="calendar" width="13" height="13" />
                2020
              </span>
            </div>
            <span className="text">
              Improve memory & productivity using the skills of the world's top
              performers and learning strategies proven by research.
            </span>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <div className="title__row">
              <span className="title">Learning Something Great😉</span>
              <span className="title__link">
                <Icon icon="calendar" width="13" height="13" />
                Currently
              </span>
            </div>
            <span className="text">We continue learning everyday</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;

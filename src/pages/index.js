import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
import pic9 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';
import pic11 from '../assets/images/pic11.jpg';
import pic12 from '../assets/images/pic12.jpg';
import pic13 from '../assets/images/pic13.jpg';
import pic14 from '../assets/images/pic14.jpg';
import portrait from '../assets/images/portrait.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'createtogether', name: 'Create together', icon: 'fa-laptop' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Manuel</strong>
              <br />
              <span style={{ display: 'block' }}>Web & Software developer</span>
            </h2>

            <p>
              I've made few things using code.
              <span style={{ display: 'block' }}>Check it out.</span>
            </p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#  " className="button">
                SHOW ME
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>Below you can see the most recent projects I either built from start to end or contributed features and knowledge. Read the listings below each project to find out more details about my project contributions. I've you've in-depth questions on any of those listings, please don't hesitate to drop me a line.</p>

          <div className="row">
            <div className="col-6 col-12-mobile">
              <article className="item">
                <a
                  href="/#"
                  className="image fit"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background:
                        'linear-gradient(rgba(226, 118, 137, .05), rgba(255, 255, 255, .0))',
                    }}
                  />
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>
                    AMAG leasing calculator
                  </h3>
                  <ul
                    style={{
                      textAlign: 'initial',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>Web Development (React, Redux, NodeJS)</li>
                    <li>Form and data handling/validations</li>
                    <li>Data API Frontend PROXY</li>
                  </ul>
                </header>
              </article>

              <article className="item">
                <a
                  href="/#"
                  className="image fit"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background:
                        'linear-gradient(rgba(226, 118, 137, .05), rgba(255, 255, 255, .0))',
                    }}
                  />
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>
                    Contact Form{':'}CRM connection
                  </h3>
                  <ul
                    style={{
                      textAlign: 'initial',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>Form submit handling and forwarding</li>
                    <li>Google Tag Manager triggers</li>
                    <li>Hubspot Form setup and settings</li>
                  </ul>
                </header>
              </article>
              <article className="item">
                <a
                  href="/#"
                  className="image fit"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background:
                        'linear-gradient(rgba(226, 118, 137, .05), rgba(255, 255, 255, .0))',
                    }}
                  />
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>
                    Shop The Look - Blue Tomato
                  </h3>
                  <ul
                    style={{
                      textAlign: 'initial',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>Frontend Development (React, create-react-app)</li>
                    <li>Product database connector</li>
                    <li>Google Tag Manager triggers and code blocks</li>
                  </ul>
                </header>
              </article>
              <article className="item">
                <a
                  href="/#"
                  className="image fit"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background:
                        'linear-gradient(rgba(226, 118, 137, .05), rgba(255, 255, 255, .0))',
                    }}
                  />
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>
                    Marketing Lead Forms - Statec Binder
                  </h3>
                  <ul
                    style={{
                      textAlign: 'initial',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>Frontend Development (HTML, CSS, JS)</li>
                    <li>Hubspot Form Feature Setup</li>
                    <li>Form Submit Handling</li>
                    <li>Google Tag Manager triggers and code blocks</li>
                  </ul>
                </header>
              </article>
              <article className="item">
                <a
                  href="/#"
                  className="image fit"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background:
                        'linear-gradient(rgba(226, 118, 137, .05), rgba(255, 255, 255, .0))',
                    }}
                  />
                  <img src={pic14} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>
                    Personal Business website V1 - Daniela Sohneg
                  </h3>
                  <ul
                    style={{
                      textAlign: 'initial',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>Static Site Seneration (GatsbyJS)</li>
                    <li>Backend Setup using Contentful</li>
                    <li>NodeJS-side implementation of Backend connector</li>
                    <li>Template Development (React)</li>
                  </ul>
                </header>
              </article>
              <article className="item">
                <a
                  href="/#"
                  className="image fit"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background:
                        'linear-gradient(rgba(226, 118, 137, .05), rgba(255, 255, 255, .0))',
                    }}
                  />
                  <img src={pic11} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>
                    Realtime Database Updates - Scheucher Parkett
                  </h3>
                  <ul
                    style={{
                      textAlign: 'initial',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>PostgreSQL sync processing OPC machine data</li>
                    <li>Runtime and stability checks</li>
                  </ul>
                </header>
              </article>
              <article className="item">
                <a
                  href="/#"
                  className="image fit"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background:
                        'linear-gradient(rgba(226, 118, 137, .05), rgba(255, 255, 255, .0))',
                    }}
                  />
                  <img src={pic10} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>
                    Project Management Setup - Statec Binder
                  </h3>
                  <ul
                    style={{
                      textAlign: 'initial',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>Jira Software/Helpdesk Setup</li>
                    <li>Implementation workflow rules</li>
                    <li>Create organization-specific guidelines</li>
                  </ul>
                </header>
              </article>
            </div>
            <div className="col-6 col-12-mobile">
              <article className="item">
                <a
                  href="/#"
                  className="image fit"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background:
                        'linear-gradient(rgba(226, 118, 137, .05), rgba(255, 255, 255, .0))',
                    }}
                  />
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>
                    Team Riders section - Blue Tomato
                  </h3>
                  <ul
                    style={{
                      textAlign: 'initial',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>Solution Architecture</li>
                    <li>Backend Development (PHP)</li>
                    <li>Frontenend Development (React, create-react-app)</li>
                    <li>CSS Grid implementation</li>
                  </ul>
                </header>
              </article>
              <article className="item">
                <a
                  href="/#"
                  className="image fit"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background:
                        'linear-gradient(rgba(226, 118, 137, .05), rgba(255, 255, 255, .0))',
                    }}
                  />
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>
                    Personal Business website V2 - Daniela Sohneg
                  </h3>
                  <ul
                    style={{
                      textAlign: 'initial',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>Backend Setup using Contentful</li>
                    <li>Implementation of Backend connector</li>
                    <li>Static Site Seneration (GatsbyJS)</li>
                    <li>Frontend Development (React)</li>
                  </ul>
                </header>
              </article>
              <article className="item">
                <a
                  href="/#"
                  className="image fit"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background:
                        'linear-gradient(rgba(226, 118, 137, .05), rgba(255, 255, 255, .0))',
                    }}
                  />
                  <img src={pic12} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>
                    Buyers Guides - Blue Tomato
                  </h3>
                  <ul
                    style={{
                      textAlign: 'initial',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>Backend Setup Elasticsearch</li>
                    <li>Frontend Development (HTML, CSS, SASS)</li>
                    <li>React partials rendering</li>
                  </ul>
                </header>
              </article>
              <article className="item">
                <a
                  href="/#"
                  className="image fit"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background:
                        'linear-gradient(rgba(226, 118, 137, .05), rgba(255, 255, 255, .0))',
                    }}
                  />
                  <img src={pic13} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>
                    Navigation of new docs - Open Source - Prisma
                  </h3>
                  <ul
                    style={{
                      textAlign: 'initial',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>Frontend Development (React)</li>
                    <li>Code base pushed to Github</li>
                  </ul>
                </header>
              </article>
              <article className="item">
                <a
                  href="/#"
                  className="image fit"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background:
                        'linear-gradient(rgba(226, 118, 137, .05), rgba(255, 255, 255, .0))',
                    }}
                  />
                  <img src={pic8} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>
                    Graphql API - Blue Tomato DataCloud
                  </h3>
                  <ul
                    style={{
                      textAlign: 'initial',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>Graphql Server (NodeJS)</li>
                    <li>Data Consolidation from serveral sources</li>
                    <li>Distribution handling using Apollo packages</li>
                  </ul>
                </header>
              </article>

              <article className="item">
                <a
                  href="/#"
                  className="image fit"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background:
                        'linear-gradient(rgba(226, 118, 137, .05), rgba(255, 255, 255, .0))',
                    }}
                  />
                  <img src={pic9} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>
                    Hubspot CRM Implementation - Statec Binder
                  </h3>
                  <ul
                    style={{
                      textAlign: 'initial',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>Base concept for company-wide usage</li>
                    <li>Technical responsibilities and API connectors</li>
                  </ul>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>
          <div
            className="row"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="col-4 col-8-mobile">
              <a href="/#" className="image featured">
                <img
                  src={portrait}
                  alt="Manuel Penaloza - Web & Software developer"
                  style={{ borderRadius: '100%' }}
                />
              </a>
            </div>
          </div>

          <p>
            I grew up in Upper Austria in a small village on the landside.
            Already at an early age I was fascinated by what computers and the
            internet enable us to do. Though it wasn't that I've already started
            coding at an early age, it was more using those gadgets to manage
            social media, play games, or create graphics for music events I've
            organized. But yeah, luckily besides that, there was also enough
            time to go skateboarding and break some bones.
          </p>
          <p>
            Time passed by, and through using software and the internet heavily
            in my late teens and early twenties, I more and more focused on
            creating and coding software and web applications on my own. My
            former Marketing studies - which I finished in 2013 - complete my
            ability to build software. Either in terms of "understanding clients
            better" or to better understand the software's market fit, which
            helps enormously to define a development strategy and plan.
          </p>
          <p>
            In the meantime, I've been writing code and creating business
            applications for over 10 years. In this way, I've gained experience
            with different technologies, different kinds of people, and several
            business cases. Exactly this amount and variation of knowledge are
            the lovely parts of building software that helps people and
            organizations solve problems and achieve goals. Also, this fact is
            the primary driver that keeps me going doing this in the future, get
            better, and thus leave my dent in the universe.
          </p>
        </div>
      </section>

      <section id="createtogether" className="two">
        <div className="container">
          <header>
            <h2>Create together</h2>
          </header>
          <div className="row">
            <div className="col-3 col-6-mobile" style={{ textAlign: 'center' }}>
              <span
                className={`icon fa-code`}
                style={{ color: 'rgb(142, 190, 188)' }}
              />
              <h3 style={{ lineHeight: 1, marginBottom: 12 }}>
                Technical Development
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>
                We can build whole webshops/websites and background jobs
                together, or just some parts that will make your already
                existing product better and more effective.
              </p>
            </div>
            <div className="col-3 col-6-mobile" style={{ textAlign: 'center' }}>
              <span
                className={`icon fa-sitemap`}
                style={{ color: 'rgb(142, 190, 188)' }}
              />
              <h3 style={{ lineHeight: 1, marginBottom: 12 }}>
                Solutions Architecture
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>
                My experience in thinking, designing and implementing large
                scale web and mobile applications will ensure long-term
                stability of your software.
              </p>
            </div>
            <div className="col-3 col-6-mobile" style={{ textAlign: 'center' }}>
              <span
                className={`icon fa-exclamation-circle`}
                style={{ color: 'rgb(142, 190, 188)' }}
              />
              <h3 style={{ lineHeight: 1, marginBottom: 12 }}>
                Problem Solver
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>
                Well, not always :). But most of the time there is a solution to
                all the software and business problems out there. I'll make sure
                to find the most appropriate solutions.
              </p>
            </div>
            <div className="col-3 col-6-mobile" style={{ textAlign: 'center' }}>
              <span
                className={`icon fa-exclamation-circle`}
                style={{ color: 'rgb(142, 190, 188)' }}
              />
              <h3 style={{ lineHeight: 1, marginBottom: 12 }}>
                Project Management
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>
                Sometimes people know how to manage project, sometimes people do
                not and projects become more hopeless than useful. I am part of
                the experienced and good people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            Contact me using the upcoming form if you have questions, want to
            say `Hello!` or if you're going to work together with me. I'll get
            back to you, though it might take some time, depending on my current
            workload. In case you want me to call back, please also send me your
            phone number in your message.
          </p>

          <form method="post" action="https://formspree.io/xoqkglzo">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Your name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="email" name="_replyto" placeholder="Email address" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="What's up?" />
              </div>
              <div className="col-12">
                <input type="submit" value="SEND MESSAGE" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;

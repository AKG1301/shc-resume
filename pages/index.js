import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import styles from "../styles/Home.module.css";
import Draggable from "react-draggable";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLocationOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoCloseOutline,
} from "react-icons/io5";

export default function Home() {
  let skills = [
    { skill: "HTML 5" },
    { skill: "CSS 3" },
    { skill: "SCSS" },
    { skill: "BOOTSTRAP 5" },
    { skill: "MUI" },
    { skill: "JAVASCRIPT" },
    { skill: "REACT" },
    { skill: "LARAVEL" },
  ];

  let [list, skillList] = useState(skills);

  let removeHandler = (e) =>{
    let x = e.target.getAttribute("remove");

    skillList(list.filter(items=>items.skill!==x));
    console.log(skillList);
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Shivam Chauhan - Front End Designer - Resume</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
      </Head>

      <main className={styles.main}>
        <div className="main-body">
          <div className="intro">
            <h1>This is an editable Resume. Just click on the text and edit and Create your own resume.</h1>
          </div>
          <div className="frame-res f-des">
            <h1 className="m-0">
              <EditText name="name" defaultValue="Shivam Chauhan" />
          </h1>
          <h2 className="gray-color">
            <EditText name="job-title" defaultValue="Front End Designer" />
          </h2>
          <div className="contact">
            <div className="sec-wrapper j-start">
              <div className="inline gray" style={{ fontSize: "14px" }}>
                <span>
                  <IoMailOutline />
                </span>
                <EditText
                  name="mail"
                  defaultValue="shivamchauhanksp@gmail.com"
                />
              </div>
              <div className="inline gray" style={{ fontSize: "14px" }}>
                <span>
                  <IoPhonePortraitOutline />
                </span>
                <EditText name="number" defaultValue="+91 7310795100" />
              </div>
              <div className="inline gray" style={{ fontSize: "14px" }}>
                <span>
                  <IoLocationOutline />
                </span>
                <EditText name="location" defaultValue="Dehradun, India" />
              </div>
            </div>
          </div>
          <div className="ext-links">
            <div className="sec-wrapper j-start">
              <div className="inline gray" style={{ fontSize: "14px" }}>
                <span>
                  <IoLogoLinkedin />
                </span>
                <div>
                  <Link href="https://noobtodev.com">
                    <a>Linkedin</a>
                  </Link>
                </div>
              </div>
              <div className="inline gray" style={{ fontSize: "14px" }}>
                <span>
                  <IoLogoGithub />
                </span>
                <div>
                  <Link href="https://noobtodev.com">
                    <a>Github</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-30">
            <EditText
              name="description"
              defaultValue="Motivated, team-work oriented, and responsible Front end Designer."
            />
          </div>
          <div className="sec-wrapper mt-30">
            <Draggable axis="x">
              <div className="sec">
                <div>
                  <EditText
                    name="high-school"
                    defaultValue="High School (2013)"
                  />
                </div>
                <div>
                  <EditText
                    name="school-name"
                    defaultValue="Templeton College, Kashipur"
                  />
                </div>
                <div>
                  <EditText name="grade" defaultValue="8.6 CGPA" />
                </div>
              </div>
            </Draggable>
            <Draggable axis="x">
              <div className="sec">
                <div>
                  <EditText
                    name="intermediate"
                    defaultValue="Intermediate (+2) (2015)"
                  />
                </div>
                <div>
                  <EditText
                    name="school-name2"
                    defaultValue="Templeton College, Kashipur"
                  />
                </div>
                <div>
                  <EditText name="grade2" defaultValue="71.2%" />
                </div>
              </div>
            </Draggable>
            <Draggable axis="x">
              <div className="sec">
                <div>
                  <EditText
                    name="College"
                    defaultValue="Graduation (2015-19)"
                  />
                </div>
                <div>
                  <EditText
                    name="college-name"
                    defaultValue="B.Tech, CS specialization in Cloud Computing,
                Graphic Era Deemed to be University, Dehradun"
                  />
                </div>
                <div>
                  <EditText name="grade3" defaultValue="6.89 CGPA" />
                </div>
              </div>
            </Draggable>
          </div>
          <Draggable axis="y">
            <div className="sec-wrapper n-flex mt-30">
              <h2>
                <EditText name="title1" defaultValue="Technical Skills" />
              </h2>
              <div className="badge-wrapper mt-20">
                {list.map(x => (
                  <div class="badge rounded-pill blue">
                    <EditText
                      name="skill"
                      style={{ minHeight: "auto" }}
                      defaultValue={x.skill}
                    />
                    <span
                      className="close"
                      remove={x.skill}
                      onClick={removeHandler}
                    >
                      <IoCloseOutline />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Draggable>
          <Draggable axis="y">
            <div className="wx-sec mt-30">
              <h2 className="mb-20">
                <EditText name="title2" defaultValue="Work Experience" />
              </h2>
              <h6 className="m-0">
                <EditText
                  name="job-title"
                  defaultValue="Web Developer Intern"
                />
              </h6>
              <div className="gray-color">
                <EditText
                  name="name"
                  style={{ fontSize: "14px" }}
                  defaultValue="Halexo Infotech, Dehradun"
                />
              </div>
              <div className="wx-info">
                <ul className="m-0">
                  <li>
                    <div className="mt-10">
                      Designed the project UI of the ERM web app using HTML/CSS
                      Javascript/Jquery that allows the schools to manage their
                      data.
                    </div>
                  </li>
                  <li>
                    <div className="mt-10">
                      Collabrated with the other interns and senior developers.
                      Gathered the requirements and designed the tool.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Draggable>
          <Draggable axis="y">
            <div className="wx-sec mt-30">
              <h2 className="mb-20">
                <EditText defaultValue="Projects" />
              </h2>
              <div className="mb-20">
                <EditTextarea
                  defaultValue="I've worked on more than 20+ projects using
              HTML/CSS/BOOTSTRAP/MUI, WORDPRESS, JQUERY/JAVASCRIPT, REACT,
              LARAVEL. Some of the amazing projects i've worked on are"
                />
              </div>
              <div className="project-des">
                <h6 className="m-0">
                  <EditText name="project-name" defaultValue="AlphaExtract.ca" />
                </h6>
                <div className="wx-info">
                  <ul className="m-0">
                    <li>
                      <div className="mt-10">
                        <EditText name="abt-project1" defaultValue="AlpaExtracts is organic medicine selling platform. Designed the user interface of the platform using Laravel Blade Template and Javascript." />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project-des mt-30">
                <h6 className="m-0">
                  <EditText name="project-name" defaultValue="Sociometrik Demand Sensing Engine" />
                </h6>
                <div className="wx-info">
                  <ul className="m-0">
                    <li>
                      <div className="mt-10">
                        <EditText name="abt-project1" defaultValue="Worked on Mapbox api's, CanvasJs Graphs in the app to show the data insights and created UI of the application. The App shows the Granular data insights at scale." />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project-des mt-30">
                <h6 className="m-0">
                  <EditText name="project-name" defaultValue="Locate (Location Tracker)" />
                </h6>
                <div className="wx-info">
                  <ul className="m-0">
                    <li>
                      <div className="mt-10">
                        <EditText name="abt-project1" defaultValue="A location tracker web application using geolocation api. Technology used HTML 5, CSS 3, Bootstrap, Jquery and PHP. This application is used by the parents to track the activity of their children's." />
                      </div>
                    </li> 
                  </ul>
                </div>
              </div>
              <div className="project-des mt-30">
                <h6 className="m-0">
                  <EditText name="project-name" defaultValue="vkfoodproducts.com" />
                </h6>
                <div className="wx-info">
                  <ul className="m-0">
                    <li>
                      <div className="mt-10">
                        <EditText name="abt-project1" defaultValue="VKFOOD Products company web app - Single page application using React. Used react packages and integrated all of them to create the app." />
                      </div>
                    </li> 
                  </ul>
                </div>
              </div>
            </div>
          </Draggable>
        </div>
          <div className="usage">
            <h2>Basic Usage</h2>
          </div>
          <footer>
            <div className="foo-des">
              <span className="f-hero">Designed By Shivam Chauhan</span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

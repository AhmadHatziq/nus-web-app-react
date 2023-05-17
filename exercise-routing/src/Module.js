import { useNavigate, useParams } from "react-router-dom";

const modules = {
  IS3106: {
    ModuleCode: "IS3106",
    ModuleTitle: "Enterprise Systems Interface Design and Development",
    Department: "Information Systems & Analytics",
    ModuleDescription:
      "This module aims to train students to be conversant in front-end development for Enterprise Systems. It complements IS2103 which focuses on backend development aspects for Enterprise Systems. Topics covered include: web development scripting languages, web templating design and component design, integrating with backend application, and basic mobile application development."
  },

  IS4103: {
    ModuleCode: "IS4103",
    ModuleTitle: "Information Systems Capstone Project",
    Department: "Information Systems & Analytics",
    ModuleDescription:
      "Students are required to work (in groups) through a complete Systems Development Life Cycle to develop a business information system based on techniques and tools taught in IS2102, IS2103 and IS3106. They will also sharpen their communication skills through closer team interactions, consultations, and formal presentations. Emphasis will be placed on architecture design and implementation, requirement analysis, system design, user interface design, database design and implementation efficiency. Students will be assessed based on their understanding and ability to apply software engineering knowledge on a real-life application system, as well as their communication skill."
  },

  MA1301: {
    ModuleCode: "MA1301",
    ModuleTitle: "Introductory Mathematics",
    Department: "Mathematics",
    ModuleDescription:
      "This module serves as a bridging module for students without 'A' - level mathematics. Its aim is to equip students with appropriate mathematical knowledge and skill so as to prepare them for further study of mathematics-related disciplines. At the end of the course, students are expected to attain a level of proficiency in algebra and calculus equivalent to the GCE Advanced Level. Major topics: Sets, functions and graphs, polynomials and rational functions, inequalities in one variable, logarithmic and exponential functions, trigonometric functions, sequences and series, techniques of differentiation, applications of differentiation, maxima and minima, increasing and decreasing functions, curve sketching, techniques of integration, applications of integration, areas, volumes of solids of revolution, solution of first order ordinary differential equations by separation of variables and by integrating factor, complex numbers, vectors."
  },

  MA1312: {
    ModuleCode: "MA1312",
    ModuleTitle: "Calculus with Applications",
    Department: "Mathematics",
    ModuleDescription:
      "This module contains the main ideas of calculus that are often encountered in the formulation and solution of practical problems. The approach of this course is intuitive and heuristic. The objective is to develop a competent working knowledge of the main concepts and methods introduced. This module is also designed for students who intend to do a minor in mathematics or for those who are keen to pick up some mathematical skills that might be useful in their own areas of studies. Major topics: Real numbers and elementary analytic geometry. Functions, limits, continuity and derivative. Trigonometric functions. Trigonometric functions. Applications of the derivative. Optimization problems. Inverse functions. The indefinite integral. The definite integral. Applications of the definite integral: arc length, volume and surface area of solid of revolution. Logarithmic and exponential functions. Techniques of Integration. Taylor's Formula. Differential equations. Some applications in Business, Economics and Social Sciences."
  }
};

export default function Module() {
  const { modulecode, type } = useParams();

  const navigate = useNavigate();
  function renderBody(data, type) {
    if (type) {
      //only want a specific field
      if (type === "title") {
        return (
          <p>
            <b>Title:</b> {data.ModuleTitle}
          </p>
        );
      } else if (type === "description") {
        return (
          <p>
            <b>Description:</b> {data.ModuleDescription}
          </p>
        );
      } else {
        return "";
      }
    } else {
      //want everything
      return (
        <div>
          <p>
            <b>Title:</b> {data.ModuleTitle}
          </p>
          <p>
            <b>Description:</b> {data.ModuleDescription}
          </p>
        </div>
      );
    }
  }

  const data = modules[modulecode];
  if (data) {
    var body = renderBody(data, type);
    return (
      <div>
        <p>
          <b>Module Code:</b> {data.ModuleCode}
        </p>
        {body}
        <div>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <b>Module not found!</b>
        <div>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    );
  }
}

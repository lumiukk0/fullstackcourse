// Course.jsx took some time to realize that it is not .js


const Header = ({ course }) => <h2>{course}</h2>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map((part, index) => (
      <Part key={index} part={part} />
    ))}
  </div>
);

const Total = ({ total }) => <b>Total of {total} exercises</b>;

const CoursePart = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total
      total={course.parts.reduce((sum, part) => sum + part.exercises, 0)}
    />
  </div>
);

export const Courses = ({ courses }) => (
  <div>
    <h1>Web development curriculum</h1>
    {courses.map((course, index) => (
      <CoursePart key={index} course={course} />
    ))}
  </div>
);

export default Courses
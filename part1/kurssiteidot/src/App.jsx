

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part = ({p, e}) => {
  return (
    <div>
      <p>{p} {e}</p>
    </div>
  );
};
const Content = ({parts}) => {
  return (
    <div>
      <Part p={parts[0].name} e={parts[0].exercises}/>
      <Part p={parts[1].name} e={parts[1].exercises}/>
      <Part p={parts[2].name} e={parts[2].exercises}/>
    </div>
  );
};

const Total = ({parts}) => {
  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  );
};

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App
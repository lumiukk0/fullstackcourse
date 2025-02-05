

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};
const Content = ({p1, e1, p2, e2, p3, e3}) => {
  return (
    <div>
      <p>{p1} {e1}</p>
      <p>{p2} {e2}</p>
      <p>{p3} {e3}</p>
    </div>
  );
};

const Total = ({e1, e2, e3}) => {
  return (
    <div>
      <p>Number of exercises {e1 + e2 + e3}</p>
    </div>
  );
};

const App = () => {



  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} e1={exercises1} p2={part2} e2={exercises2} p3={part3} e3={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  )
}

export default App

const Header = (props) => { 
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => { 
  return (
    <p>
      {props.content} {props.exercies}
    </p>
  )
}

const Content = (props) => {
  
    return (<div>
      <Part content = {props.data[0].name} exercies = {props.data[0].exercises} />
    <Part content = {props.data[1].name} exercies = {props.data[1].exercises} />
    <Part content = {props.data[2].name} exercies = {props.data[2].exercises} />
  </div>    )
  }

const Total = (props) => { 
  return (
    <p>Number of exercies {props.parts} </p>
  )
}

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
  let total = 0
  course.parts.forEach((elements) =>{ total = total + elements.exercises} )

  return (
  
    <div>
      <Header course={course.name} />
      <Content  data = {course.parts}/>
      <Total parts ={total} />
    </div>
  )
  
}

export default App

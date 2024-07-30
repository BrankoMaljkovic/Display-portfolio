//24.04.
import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

export default class App extends React.Component {
  render() {
    console.log("APP: ", this.props.number);
    return(
      <>
        <h3>Hello from App component</h3>
        <p>Hi again</p>
        <Header headerProp="Text from prop - App" />
        <hr />
        <Content content="Content from App" num={this.props.number}/>
        <hr/>
        <Content content="Content from second prop" num={this.props.number} />
      </>
    );
  }
}

//26.04.
import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

export  class App extends React.Component {
  constructor() {
    super();

    this.state = {
      header: "Header from state",
      content: "Content from state",
      number: 100
    }
  }

  render() {
    console.log(this);
    return(
      <>
        <h1>Hello from App - {this.state.header}</h1>
        <Header headerProp={this.state.header} />
        <Content content={this.state.content} num={this.state.number} />
      </>
    );
  }
}

import React from "react";
import TableRow from "./components/TableRow";

export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        { id: 1, name: "Foo", age: 20 },
        { id: 2, name: "Bar", age: 30 },
        { id: 3, name: "Baz", age: 40 },
        { id: 4, name: "FizBuz", age: 50 }
      ]
    };
  }

  render() {
    console.log(this.state.data);
    return (
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((person, i)=>
            <TableRow personProp={person}/>
          )}
        </tbody>
      </table>
    );
  }
}

import React from "react";

export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      students: [
        { firstName: "Jovan", lastName: "Jovanovic", year: 2023, mark: 9 },
        { firstName: "Petar", lastName: "Petrovic", year: 2024, mark: 8 },
        { firstName: "Ana", lastName: "Markovic", year: 2024, mark: 9.6 }
      ]
    };
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Godina</th>
            <th>Ocena</th>
          </tr>
        </thead>
        <tbody>
          {this.state.students.map((student, i)=>
            <tr key={i}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.year}</td>
              <td>{student.mark}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

import React from "react";

export  class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Title: {this.props.title}</h1>
        <h2>Content: {this.props.content}</h2>
      </div>
    );
  }
}

App.defaultProps={
  title: "Default prop title",
  content: "Default prop content"
}

import React from "react";

export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: "Initial value",
      dataArray: ["item..."]
    };
  }

  updateStateData = (text) => {
    console.log("call updateStateData ", text);
    var item = "newItem...";
    var myArray = this.state.dataArray.slice();
    console.log("before ", myArray);
    myArray.push(item);
    console.log("after ", myArray);

    this.setState({
      //data: "New state value"
      data: text,
      dataArray: myArray
    });
  }

  render() {
    console.log("state ", this.state.data);
    return (
      <div>
        <input type="button"
          value="Update state"
          onClick={() => this.updateStateData("Text from render")} />
        <h3>State value: {this.state.data}</h3>
        <h3>State array:</h3>
        <ul>
          {this.state.dataArray.map((item, i) => 
            <li key={i}>{item}</li>
          )}
        </ul>
      </div>
    );
  }
}

// function sum(a,b) {
//   return a + b;
// }

// sum(5,10)

//29.04
import React from "react";
import PropTypes from "prop-types";

export class App extends React.Component {
  render() {
    return (
      <div>
        <p>String: {this.props.propString}</p>
        <p>Number: {this.props.propNumber}</p>
        <p>Bool: {this.props.propBool? "Yes" : "No"}</p>
        <p>Array: {this.props.propArray.join("")}</p>
        <p>Object 1: {this.props.propObject.objectName1}</p>
        <p>Object 2: {this.props.propObject.objectName2}</p>
        <p>Object 3: {this.props.propObject.objectName3 ? "Yes" : "No"}</p>
        <p>Function: {this.props.propFunction(5)}</p>
      </div>
    );
  }
}

App.propTypes = {
  propString: PropTypes.string.isRequired,
  propNumber: PropTypes.number,
  propBool: PropTypes.bool,
  propArray: PropTypes.array,
  propObject: PropTypes.object,
  propFunction: PropTypes.func
};

App.defaultProps = {
  propString: "String text",
  propNumber: 10,
  propBool: true,
  propArray: [1, 2, 3],
  propObject: {
    objectName1: "Object text",
    objectName2: 15,
    objectName3: false
  },
  propFunction: function (e) { return e }
};

//uslov ? true : false
//this.props.propBool ? "Yes" : "No"

import React from "react";
import Inventors from "./components/Inventors";

export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inventors: [
        { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
        { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
        { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
        { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
        { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
        { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
        { first: "Max", last: "Planck", year: 1858, passed: 1947 },
        { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
        { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
        { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
        { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
        { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
      ],
      isActive: true
    }
  }

  handleToggleClass = () => {
    console.log("handleToggleClass");
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <div>
        <h2 className="title">Table data</h2>
        <h3 style={{
          border: "1px solid blue",
          color: "#888",
          backgroundColor: "yellow",
          padding: "15px"
        }}>Inline css rules</h3>
        <div 
          className={`main-heading ${this.state.isActive ? "active" : ""}`}
        >Main heading</div>
        <input type="button" value="Toggle active class" onClick={this.handleToggleClass} />
        {this.state.isActive && 
            <Inventors propInventors={this.state.inventors} />}
      </div>
    );
  }
}

//08.05
import React from "react";
import Increment from "./components/Increment";

export class App extends React.Component {
  constructor() {
    super();

    console.log("Metoda constructor - App");
    this.state = {
      number: 0
    }
  }

  componentDidMount() {
    //poziva se nakon prvog rendera (Ajax)
    console.log("Metoda componentDidMount - App");
  }

  handleAddNumber = () => {
    console.log("Metoda handleAddNumber - App");
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    console.log("Metoda render - App");
    return (
      <div>
        <input type="button" value="Increment" onClick={this.handleAddNumber} />
        {/* <h3>Number: {this.state.number}</h3> */}
        <Increment propNumber={this.state.number} />
      </div>
    );
  }
}

//
import React from "react";
import Input from "./components/Input";

export class App extends React.Component {
  state = {
    inputValueA: "",
    inputValueB: ""
  }

  handleChangeInputValueA = (event) => {
    console.log("handleChangeInputValue ", event.target.value);
    this.setState({
      inputValueA: event.target.value
    });
  }

  handleChangeInputValueB = (e) => {
    this.setState({
      inputValueB: e.target.value
    });
  }

  render() {
    return (
      <div>
        {/* <input type="text"
          value={this.state.inputValueA}
          onChange={this.handleChangeInputValueA} />
        <h3>Text value A: {this.state.inputValueA}</h3>
        <input type="text"
          value={this.state.inputValueB}
          onChange={this.handleChangeInputValueB}
        />
        <h3>Text value B: {this.state.inputValueB}</h3> */}
        <Input
          value={this.state.inputValueA}
          onChange={this.handleChangeInputValueA}
          label="Text value A"
          placeholder="Text A"
          className="form-text-red" />
        <Input
          value={this.state.inputValueB}
          onChange={this.handleChangeInputValueB}
          label="Text value B"
          placeholder="Text B"
          className="form-text-blue" />
      </div>
    );
  }
}

//---
import React from "react";
import NewButton from "./components/NewButton";

export class App extends React.Component {
  state = {
    data: "initial string"
  }

  handleUpdateData = (text)=> {
    console.log("handleUpdateData");
    this.setState({
      //data: "State updated from child component"
      data: text
    });
  }

  render() {
    return (
      <div>
        <NewButton 
          data={this.state.data}
          handleUpdateData={this.handleUpdateData}/>
      </div>
    );
  }
}

//10.05
import React from "react";
import * as $ from "jquery";
import Loader from "./components/Loader";

export class App extends React.Component {
  state = {
    posts: [],
    isLoading: true
  }

  componentDidMount() {
    //this.newJSFeatures();
    //this.promiseFeature();
    this.getPosts();
  }

  getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    //I nacin, jquery
    /*$.get(url, response => {
      console.log("response ", response);
      this.setState({
        posts: response
      });
    })*/

    //II nacin, fetch/async/await
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("res ", data);
      this.setState({
        posts: data,
        isLoading: false
      });
    } catch (error) {
      console.error("Something went wrong");
      this.setState({
        isLoading: false
      });
    }
  }

  newJSFeatures = () => {
    //var
    var firstName = "Milan";
    //var firstName = "Jovan";
    firstName = "Jovan";
    console.log(firstName);

    //ES6 (2015)
    //let
    let lastName = "Petrovic";
    //let lastName = "Jovanovic";
    lastName = "Jovanovic";
    //console.log(lastName);

    let number = 1;
    console.log(number); //var => 1 ; let => 1
    if (true) {
      let number = 10;
      console.log(number); //var => 10; let => 10
    }
    console.log(number); //var => 10; let => 1

    //const
    const name = "Milan";
    console.log(name);
  }
  promiseFeature = async () => {
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        let sum = 1 + 2;
        if (sum === 2) {
          resolve("Success"); //resolvuje promise
        } else {
          reject("Failed"); //rejectovan promise
        }
      }, 2000)
    });

    //console.log(p);
    //I nacin - then/catch
    /*p.then(response => {
      console.log("Call from then " + response);
    }).catch(error => {
      console.log("Call from catch " + error);
    })*/

    //II nacin - async/await
    try {
      let response = await p;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.posts);
    if (this.state.isLoading) {
      return (
        <Loader />
      );
    }

    return (
      <div>
        {this.state.posts.map((post) =>
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    );
  }
}

import Header from "./components/Header";
//I nacin
//export default function App() {
//II nacin  
const App = (props) => {
  console.log(props);
  return(
    <div>
      <h1>Hi from App component!</h1>
      <h3>Title: {props.title}</h3>
      <p>Content: {props.content}</p>
      <Header headerProp="Header prop from App" />
    </div>
  );
}

import { useState } from "react";

export default function App() {
  //React hook - useState
  //[naziv state-a, setter metoda kojom se update-uje state]
  const [text, setText] = useState("Initial text value");

  const handleUpdateText = () => {
    console.log("handleUpdateText");
    setText("New value");
  };

  return (
    <div>
      <input type="button"
        value="Update text"
        onClick={handleUpdateText} />
      <h2>Text value: {text}</h2>
    </div>
  );
}

import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  const handleAddNumber = (newValue) => {
    console.log("handleAddNumber");
    setNumber(number + newValue);
  };

  return (
    <div>
      <input type="button" 
        value="Increment" 
        onClick={()=> handleAddNumber(5)}/>
      <h1 className="custom-num">Number value: {number}</h1>
    </div>
  );
}

import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (e) => {
    console.log("handleChange: " + e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChangeInputValue}/>
      <h3>Text value: {inputValue}</h3>
    </div>
  );
}

import { useState } from "react";

export default function App() {
  const [dataArray, setDataArray] = useState(["Item..."]);

  const handleAddItem = () => {
    console.log("handleAddItem");
    const myArray = dataArray.slice();
    myArray.push("New item...");
    console.log(myArray);
    setDataArray(myArray);
  };

  console.log(dataArray);

  return (
    <div>
      <input type="button" value="Add item" onClick={handleAddItem} />
      <ul>
        {dataArray.map((item, i)=>
          <li key={i}>{item}</li>
        )}
      </ul>
    </div>
  );
}

//13.05
import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [number, setNumber] = useState(0);

  const handleAddNumber = () => {
    setNumber(number + 1);
  };

  const handleSubtractNumber = () => {
    //if (number > 0) {
    setNumber(number - 1);
    //}
  };

  const handleResetNumber = () => {
    setNumber(0);
  };

  return (
    <div>
      <Button
        value="Add"
        classname="btn"
        disabled={false}
        onclick={handleAddNumber} />
      <Button
        value="Subtract"
        classname="btn"
        disabled={number === 0}
        onclick={handleSubtractNumber} />
      <Button
        value="Reset"
        classname="btn btn-warning"
        disabled={number === 0}
        onclick={handleResetNumber} />
      <h2>Number: {number}</h2>
    </div>
  );
}

//15.05
export default function App() {
  return (
    <div className="title-container">
      <h2 className="main-title">Styling with Sass</h2>
    </div>
  );
}

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Router>
        {/* Navigacija */}
        <nav className="top-navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Rute */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Router>
    </div>
  );
}

//
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import axios from "axios";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect 1");
    getTodos();

    return (() => {
      //poziva se prilikom napustanja komponente
    });
  }, []);

  useEffect(()=>{
    console.log("useEffect 2");
  }, [counter]);

  const getTodos = async () => {
    //console.log("getTodos");
    const url = "https://jsonplaceholder.typicode.com/todos";
    //I nacin -> fetch/async/await
    //const response = await fetch(url);
    //const data = await response.json();
    //console.log("data", data);
    //setTodos(data);
    //setIsLoading(false);

    //II nacin => axios/async/await
    const response = await axios.get(url);
    //console.log("response", response.data);
    setTodos(response.data);
    setIsLoading(false);
  };

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };

  console.log("render");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <input type="button" value="Increment" onClick={handleIncrementCounter} />
      <h2>Number: {counter}</h2>
      {todos.map((todo) => {
        //console.log(todo);
        return (
          <div key={todo.id}>
            <h3>Title: {todo.title}</h3>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          </div>
        );
      })}
    </div>
  );
}

//17.05
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Comments from "./components/Comments";
import CommentDetails from "./components/CommentDetails";

export default function App() {
  return (
    <div>
      <Router>
        <nav className="top-navigation">
          <ul>
            <li>
              <Link to="/">Comments</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Comments />} />
          <Route path="/details/:id" element={<CommentDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

//
import { Button, Flex } from 'antd';

export default function App() {
  const handleClick = () => {
    console.log("handleClick");
  }

  return (
    <div>
      <Flex gap="small" wrap>
        <Button type="primary" onClick={handleClick}>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </div>
  );
}

//
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function App() {
  const handleClick = () => {
    console.log("handleClick");
  }

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text" onClick={handleClick}>Incremenmt</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
}

/* ToDO app */

import { useEffect, useState } from "react";
import AddNewTask from "./components/AddNewTask";
import TodoList from "./components/TodoList";
import { notification } from "antd";

const LOCAL_STORAGE_KEY = "TODOS";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(value === null) return [];
    return JSON.parse(value);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTask = (taskName) => {
    const taskExists = todos.includes(taskName);
    //console.log(taskExists);
    if (!taskExists) {
      //console.log("addTask", taskName);
      const todoList = todos.slice();
      //todoList.push(taskName); //stavlja el na kraj niza
      todoList.unshift(taskName); //stavlja el na pocetak niza
      setTodos(todoList);
      notification.success({
        message: "Success",
        description: "Task successfuly added!"
      });
    } else {
      //alert("Task already exists");
      notification.error({
        message: "Error",
        description: "Task already exists"
      });
    }
  };

  const deleteTask = (position) => {
    //console.log("deleteTask ", position);
    const todoList = todos.slice();
    todoList.splice(position, 1);
    setTodos(todoList);
    notification.success({
      message: "Success",
      description: "Task successfuly deleted!",
      placement: "bottomLeft"
    });
  };

  return (
    <div>
      <h2>Todo list</h2>
      <AddNewTask
        addTask={addTask} />
      <TodoList
        todos={todos}
        deleteTask={deleteTask} />
    </div>
  );
}
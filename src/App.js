import React, { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  // return React.createElement("h1", {}, "Hi", "This is React!");

  //return <h1 title="this is works">Hi, This is ReactJS!</h1>; // =>React.createElement('h1',{title:'This works!'},"Hi","This is React!")

  const [courseGoallist, setcourseGoallist] = useState([
    {
      id: "cg1",
      text: "Finish the Course",
    },
    {
      id: "cg2",
      text: "Learn all about the Course Main Topic",
    },
    {
      id: "cg3",
      text: "Help other students in the Course Q&amp;A",
    },
  ]);

  const addNewGoalHandler = (NewGoal) => {
    // courseGoallist.push(NewGoal);
    // setcourseGoallist(courseGoallist.concat(NewGoal));

    setcourseGoallist((prevcourseGoallist) =>
      prevcourseGoallist.concat(NewGoal)
    );
    // console.log(courseGoallist, "Hello");
  };
  return (
    <>
      <div className="course-goal">
        <h2>Course Goals</h2>
        <div>
          <NewGoal onaddGoal={addNewGoalHandler} />
        </div>
        <GoalList goals={courseGoallist} />
      </div>
    </>
  );
};

export default App;

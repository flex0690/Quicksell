import React, { useEffect, useState } from "react";
import "./component.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuListTodo } from "react-icons/lu";
import { IoReloadCircleOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

import Card from "./Card";

const Status = (data) => {
  let arr = data.data;

  let [c1, setc1] = useState(0);
  let [c2, setc2] = useState(0);
  let [c3, setc3] = useState(0);
  let [c4, setc4] = useState(0);
  let [c5, setc5] = useState(0);
  useEffect(() => {
    // Count the number of 'Todo' items in the array
    const Backlog = arr.filter((item) => item.status === "Backlog").length;
    const todoCount = arr.filter((item) => item.status === "Todo").length;
    const progress = arr.filter((item) => item.status === "In progress").length;
    const Done = arr.filter((item) => item.status === "Done").length;
    const Canceled = arr.filter((item) => item.status === "Canceled").length;

    // Update the state with the count
    setc1(Backlog);
    setc2(todoCount);
    setc3(progress);
    setc4(Done);
    setc5(Canceled);
  }, [arr]); // Add arr as a dependency to the useEffect hook

  return (
    <div className="status-main">
      <div className="status-cards">
        <div className="status-title">
          <div className="status-title-1">
            <RiDeleteBinLine />
            <h4>Backlog</h4>
            {c1}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.status === "Backlog") {
            return <Card data={item} />;
          }
        })}
      </div>

      <div className="status-cards">
        <div className="status-title">
          <LuListTodo color="orange" />
          <div className="status-title-1">
            <h4>Todo</h4>
            {c2}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.status === "Todo") {
            return <Card data={item} />;
          }
        })}
      </div>

      <div className="status-cards">
        <div className="status-title">
          <IoReloadCircleOutline color="yellow" />
          <div className="status-title-1">
          <h4>In Progress</h4>
          {c3}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.status === "In progress") {
            return <Card data={item} />;
          }
        })}
      </div>

      <div className="status-cards">
        <div className="status-title">
          <div className="status-title-1">
          <FaRegCheckCircle color="blue" />
          <h4>Done</h4>
          {c4}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.status === "Done") {
            return <Card data={item} />;
          }
        })}
      </div>

      <div className="status-cards">
        <div className="status-title">
          <div className="status-title-1">
          <FaRegTimesCircle />
          <h4>Canceled</h4>
          {c5}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.status === "Canceled") {
            return <Card data={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default Status;

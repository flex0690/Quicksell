import React, { useEffect, useState } from "react";
import "./component.css";

import { HiDotsHorizontal } from "react-icons/hi";
import { BsExclamationSquareFill } from "react-icons/bs";
import { MdSignalCellular4Bar } from "react-icons/md";
import { MdSignalCellular3Bar } from "react-icons/md";
import { MdSignalCellular1Bar } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

import Card from "./Card";

const Priority = (data) => {
  let arr = data.data;

  let [c1, setc1] = useState(0);
  let [c2, setc2] = useState(0);
  let [c3, setc3] = useState(0);
  let [c4, setc4] = useState(0);
  let [c5, setc5] = useState(0);
  useEffect(() => {
    // Count the number of 'Todo' items in the array
    const Backlog = arr.filter((item) => item.priority == 0).length;
    const todoCount = arr.filter((item) => item.priority == 4).length;
    const progress = arr.filter((item) => item.priority == 3).length;
    const Done = arr.filter((item) => item.priority == 2).length;
    const Canceled = arr.filter((item) => item.priority == 1).length;

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
            <HiDotsHorizontal />
            <h4>No priority</h4>
            {c1}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.priority === 0) {
            return <Card data={item} />;
          }
        })}
      </div>

      <div className="status-cards">
        <div className="status-title">
          <div className="status-title-1">
            <BsExclamationSquareFill color="orange" />
            <h4>Urgent</h4>
            {c2}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.priority === 4) {
            return <Card data={item} />;
          }
        })}
      </div>

      <div className="status-cards">
        <div className="status-title">
          <div className="status-title-1">
            <MdSignalCellular4Bar />
            <h4>High</h4>
            {c3}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.priority === 3) {
            return <Card data={item} />;
          }
        })}
      </div>

      <div className="status-cards">
        <div className="status-title">
          <div className="status-title-1">
            <MdSignalCellular3Bar />
            <h4>Medium</h4>
            {c4}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.priority === 2) {
            return <Card data={item} />;
          }
        })}
      </div>

      <div className="status-cards">
        <div className="status-title">
          <div className="status-title-1">
            <MdSignalCellular1Bar />
            <h4>Low</h4>
            {c5}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.priority == 1) {
            return <Card data={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default Priority;

import React, { useEffect, useState } from "react";
import "./component.css";

import { HiDotsHorizontal } from "react-icons/hi";
import { BsExclamationSquareFill } from "react-icons/bs";
import { MdSignalCellular4Bar } from "react-icons/md";
import { MdSignalCellular3Bar } from "react-icons/md";
import { MdSignalCellular1Bar } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";


import Card from "./Card";

const Users = (props) => {
  let arr = props.data.d1.data1;
  let arr2=props.data.d2.data2;
 
  

  let [c1, setc1] = useState(0);
  let [c2, setc2] = useState(0);
  let [c3, setc3] = useState(0);
  let [c4, setc4] = useState(0);
  let [c5, setc5] = useState(0);
  useEffect(() => {
    // Count the number of 'Todo' items in the array
    const Backlog = arr.filter((item) => item.userId== 'usr-1').length;
    const todoCount = arr.filter((item) => item.userId== 'usr-2').length;
    const progress = arr.filter((item) => item.userId== 'usr-3').length;
    const Done = arr.filter((item) => item.userId== 'usr-4').length;
    const Canceled = arr.filter((item) => item.userId== 'usr-5').length;

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
          <RiAccountCircleFill color="red" />
            <h4>{arr2[0].name}</h4>
            {c1}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.userId== 'usr-1') {
            return <Card data={item} />;
          }
        })}
      </div>

      <div className="status-cards">
        <div className="status-title">
          <div className="status-title-1">
          <RiAccountCircleFill color="blue" />
            <h4>{arr2[1].name}</h4>
            {c2}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.userId== 'usr-2') {
            return <Card data={item} />;
          }
        })}
      </div>

      <div className="status-cards">
        <div className="status-title">
          <div className="status-title-1">
          <RiAccountCircleFill color="ogrange" />
            <h4>{arr2[2].name}</h4>

            {c3}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.userId== 'usr-3') {
            return <Card data={item} />;
          }
        })}
      </div>

      <div className="status-cards">
        <div className="status-title">
          <div className="status-title-1">
          <RiAccountCircleFill color="purple" />
            <h4>{arr2[3].name}</h4>
            {c4}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.userId== 'usr-4') {
            return <Card data={item} />;
          }
        })}
      </div>

      <div className="status-cards">
        <div className="status-title">
          <div className="status-title-1">
          <RiAccountCircleFill color="pink" />
            <h4>{arr2[4].name}</h4>
            {c5}
          </div>
          <div className="status-title-2">
            <FaPlus />
            <HiDotsHorizontal />
          </div>
        </div>
        {arr.map((item) => {
          if (item.userId== 'usr-5') {
            return <Card data={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default Users;

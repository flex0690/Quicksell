import React from "react";
import "./component.css";
import { RiVerifiedBadgeLine } from "react-icons/ri";

import { HiDotsHorizontal } from "react-icons/hi";
import { BsExclamationSquareFill } from "react-icons/bs";
import { MdSignalCellular4Bar } from "react-icons/md";
import { MdSignalCellular3Bar } from "react-icons/md";
import { MdSignalCellular1Bar } from "react-icons/md";

import { RiDeleteBinLine } from "react-icons/ri";
import { LuListTodo } from "react-icons/lu";
import { IoReloadCircleOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

import { RiAccountCircleFill } from "react-icons/ri";

const Card = (data) => {
  let info = data.data;
  //id, title , feature requtest
  let priority = info.priority;
  let status = info.status;
  let id=info.userId;
  return (
    <div className="card-main">
      <div className="card">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> 
        <p
            style={{ color: "#c0c2c5", paddingTop: "5px", paddingBottom: "5px" }}
          >
            {info.id}{" "}
          </p>
          <div>
          {(() => {
            if (id === "usr-1") {
              return <RiAccountCircleFill color="red" />
            } else if (id === "usr-2") {
              return <RiAccountCircleFill color="blue" />;
            } else if (id === "usr-3") {
              return <RiAccountCircleFill color="ogrange" />;
            } else if (id === "usr-4") {
              return <RiAccountCircleFill color="purple" />;
            } else {
              return <RiAccountCircleFill color="pink" />;
            }
          })()}
          </div>
        </div>
        
        <div class="cardtitle" style={{display:'flex',alignItems:'center'}}>
          {(() => {
            if (status === "Backlog") {
              return <RiDeleteBinLine  />;
            } else if (status === "Todo") {
              return <LuListTodo color="orange" />;
            } else if (status === "In progress") {
              return <IoReloadCircleOutline color="yellow"  size={20}/>;
            } else if (status === "Done") {
              return <FaRegCheckCircle color="blue" />;
            } else {
              return <FaRegTimesCircle />;
            }
          })()}
          <h4 style={{ paddingTop: "5px", paddingBottom: "5px",  paddingLeft:"5px"}}>
            {info.title}
          </h4>
        </div>
        <p
          style={{ color: "#c0c2c5", paddingBottom: "5px", paddingTop: "5px" }}
        >
          {(() => {
            if (priority === 0) {
              return <HiDotsHorizontal size={14} color="black" />;
            } else if (priority === 1) {
              return <MdSignalCellular1Bar size={14} color="black" />;
            } else if (priority === 2) {
              return <MdSignalCellular3Bar size={14} color="black" />;
            } else if (priority === 3) {
              return <MdSignalCellular4Bar size={14} color="black" />;
            } else {
              return <BsExclamationSquareFill size={14} color="orange" />;
            }
          })()}{" "}
          feature request
        </p>
      </div>
    </div>
  );
};

export default Card;

"use client";
import React from "react";

type toggleCheckType = {
  toggleTodo: (id: string, checkValue: boolean) => void;
};

type propsType = toggleCheckType & todoType;

const TodoItem = (props: propsType) => {
  return (
    <li>
      <input
        type="checkbox"
        id={props.id}
        className="peer"
        onChange={(e) => props.toggleTodo(props.id, e.target.checked)}
      />
      <label htmlFor={props.id} className=" peer-checked:line-through">
        {props.title}
      </label>
    </li>
  );
};

export default TodoItem;

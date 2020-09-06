import React, { useState, useCallback, useRef } from "react";
import { Table, Button } from "antd";
import { DndProvider, useDrag, useDrop, createDndContext } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import AddRowForm from "./AddRowForm";

const RNDContext = createDndContext(HTML5Backend);

const type = "DragableBodyRow";

const DragableBodyRow = ({
  index,
  moveRow,
  handleVisible,
  data,
  visibleForm,
  handleAddRow,
  handleChange,
  className,
  style,
  ...restProps
}) => {
  const ref = React.useRef();
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: (monitor) => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName:
          dragIndex < index ? " drop-over-downward" : " drop-over-upward",
      };
    },
    drop: (item) => {
      moveRow(item.index, index);
    },
  });
  const [, drag] = useDrag({
    item: { type, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));
  if (index === restProps.children.length - 1) {
    return (
      <AddButton
        handleVisible={handleVisible}
        data={data}
        handleAddRow={handleAddRow}
        visibleForm={visibleForm}
        handleChange={handleChange}
      />
    );
  }
  return (
    <tr
      ref={ref}
      className={`${className}${isOver ? dropClassName : ""}`}
      style={{ cursor: "move", ...style }}
      {...restProps}
    />
  );
};

const columns = [
  {
    dataIndex: "taskName",
    key: "taskName",
  },
];

function DndTable() {
  const [data, setData] = useState(
    sessionStorage.getItem("taskDetails")
      ? JSON.parse(sessionStorage.getItem("taskDetails"))
      : [
          {
            taskName: "Task1",
          },
          {
            taskName: "Task2",
          },

          {
            taskName: "Task3",
          },
        ]
  );
  sessionStorage.setItem("taskDetails", JSON.stringify(data));
  const [visibleForm, setVisibleForm] = useState(false);
  const [formValue, setFormValue] = useState([]);
  function handleVisible() {
    setVisibleForm(!visibleForm);
  }
  function handleChange({ target: { name, value } }) {
    setFormValue({ [name]: value });
  }
  function handleAddRow(data) {
    setData([...data, formValue]);

    setVisibleForm(!visibleForm);
  }
  function handleNewData(task) {
    setData(task);
    sessionStorage.setItem("taskDetails", JSON.stringify(task));
  }

  const components = {
    body: {
      row: DragableBodyRow,
    },
  };

  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = data[dragIndex];
      handleNewData(
        update(data, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        })
      );
    },
    [data]
  );

  const manager = useRef(RNDContext);

  return (
    <DndProvider manager={manager.current.dragDropManager}>
      <Table
        columns={columns}
        dataSource={data}
        components={components}
        onRow={(record, index) => ({
          index,
          moveRow,
          handleVisible,
          handleChange,
          handleAddRow,
          visibleForm,
          data,
        })}
        pagination={false}
      />
    </DndProvider>
  );
}
export default DndTable;

function AddButton(props) {
  return (
    <div style={{ padding: 10 }}>
      {props.visibleForm ? (
        <AddRowForm
          handleChange={props.handleChange}
          data={props.data}
          handleAddRow={props.handleAddRow}
          handleVisible={props.handleVisible}
        />
      ) : (
        <Button type="primary" onClick={() => props.handleVisible()}>
          + Add
        </Button>
      )}
    </div>
  );
}

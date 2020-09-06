import React from "react";
import { Input, Button } from "antd";
function AddRowForm(props) {
  return (
    <div style={{ width: "25%" }}>
      <Input
        placeholder="Add Task Name"
        name="taskName"
        onChange={props.handleChange}
        width={"50%"}
      />

      <div style={{ display: "flex", marginTop: "5px" }}>
        <Button
          style={{
            border: "1px solid #1890ff",
            color: "#1890ff",
          }}
          htmlType="submit"
          onClick={() => props.handleAddRow(props.data)}
        >
          Save
        </Button>
        &nbsp;
        <Button
          style={{
            border: "1px solid #1890ff",
            color: "#1890ff",
          }}
          onClick={props.handleVisible}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
export default AddRowForm;

import React from "react";
import ParagraphField from "./ParagraphField";
import ImageField from "./ImageField";
import ListFields from "./ListFiels";
import TableField from "./DynamicTable";
import PlacementPartner from "./PlacementPartner";
import Approval from "./Approval";
import SampleCertificate from "./SampleCertificate";
import AccordionFields from "./Acoordian";

const SequenceFormat = ({
  item,
  setSequence,
  addSequenceAfterId,
}) => {
  const updateTableTitle = (id, title) => {
    setSequence((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title } : item))
    );
  };

  const removeItem = (id) => {
    setSequence((prev) => prev.filter((item) => item.id !== id));
  };

  const updateItem = (id, newData) => {
    setSequence((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...newData } : item))
    );
  };

  const updateTableData = (id, newData) => {
    setSequence((prev) =>
      prev.map((item) => (item.id === id ? { ...item, table: newData } : item))
    );
  };

  switch (item.type) {
    case "text":
      return (
        <ParagraphField
          deleteField={() => removeItem(item.id)}
          id={item.id}
          key={item.id}
          updateItem={updateItem}
          heading={item.heading}
          paragraph={item.paragraph}
          addSequenceAfterId={addSequenceAfterId}
        />
      );
    case "img":
      return (
        <ImageField
          deleteField={() => removeItem(item.id)}
          id={item.id}
          updateItem={updateItem}
          url={item.url}
          addSequenceAfterId={addSequenceAfterId}
        />
      );
    case "list":
      return (
        <ListFields
          key={item.id}
          deleteField={() => removeItem(item.id)}
          id={item.id}
          updateItem={updateItem}
          data={item}
          addSequenceAfterId={addSequenceAfterId}
        />
      );
    case "accordion":
      return (
        <AccordionFields
          key={item.id}
          deleteField={() => removeItem(item.id)}
          id={item.id}
          updateItem={updateItem}
          data={item}
          addSequenceAfterId={addSequenceAfterId}
        />
      );
    case "table":
      return (
        <React.Fragment key={item.id}>
          <TableField
            id={item.id}
            title={item.title}
            tableData={item.table}
            updateTableTitle={updateTableTitle}
            updateTableData={updateTableData}
            addSequenceAfterId={addSequenceAfterId}
            deleteField={() => removeItem(item.id)}
          />
        </React.Fragment>
      );
    case "placement_partner":
      return (
        <React.Fragment key={item.id}>
          <PlacementPartner
            id={item.id}
            data={item}
            updateItem={updateItem}
            deleteField={() => removeItem(item.id)}
            addSequenceAfterId={addSequenceAfterId}
          />
        </React.Fragment>
      );
    case "approvals":
      return (
        <React.Fragment key={item.id}>
          <Approval
            id={item.id}
            data={item}
            updateItem={updateItem}
            deleteField={() => removeItem(item.id)}
            addSequenceAfterId={addSequenceAfterId}
          />
        </React.Fragment>
      );
    case "sample_certificate":
      return (
        <React.Fragment key={item.id}>
          <SampleCertificate
            id={item.id}
            data={item}
            updateItem={updateItem}
            deleteField={() => removeItem(item.id)}
            addSequenceAfterId={addSequenceAfterId}
          />
        </React.Fragment>
      );
    default:
      return null;
  }
};

export default SequenceFormat;

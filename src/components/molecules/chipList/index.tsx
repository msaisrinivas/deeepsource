import React from "react";
import Chips from "../../atoms/chips";

interface ChipListProps {
  labelList: string[];
}

const ChipList = ({ labelList }: ChipListProps) => {
  return (
    <div>
      {labelList.map((label, key) => {
        return <Chips label={label} key={key} />;
      })}
    </div>
  );
};

export default ChipList;

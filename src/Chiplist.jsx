import React from "react";

function ChipList({ chips , maxChipsDisplayed }) {
   
   
    // console.log(maxChipsDisplayed)
    const chiplist = chips.map(chip => <label key={chip.label}>{chip.label}</label>)
    const trunc_chips = chiplist.slice(0,maxChipsDisplayed)
  
  return (
    <>
        <div>{trunc_chips}</div>
    </>
  );
}

export default ChipList;
import React from "react";

function ChipList({ chips , maxChipsDisplayed, maxTextLength }) {
   
    const chiplist = chips.map(chip => 
                    {
                        let stripped = chip.label.slice(0,maxTextLength)
                
                        if(chip.label.length > maxTextLength){
                            let new_chip = stripped + "..."

                            return <label key={chip.label}>{new_chip}</label>
                        }
                        else{
                            return <label key={chip.label}>{chip.label}</label>
                        }
                    })

    const truncated_chips = chiplist.slice(0,maxChipsDisplayed)
    const exceedingText = chiplist.slice(maxChipsDisplayed)

    const chipsToDisplay = chiplist.length > maxChipsDisplayed ? 
                            <div>
                                <p>{truncated_chips}</p>
                                <aside data-testid="exceeding-text"> + {exceedingText.length} more items </aside>
                            </div> : chiplist
    
  
  return (
    <>
        {chipsToDisplay}
    </>
  );
}

export default ChipList;
import React from 'react';
import SdgBox from './sdg-box';

interface SDG {
  goal: string;
  image: string;
  number: number;
  description: string;
  color: string;
}

interface SDGData {
  SDGs: SDG[];
}

interface SDGsGridProps {
  rowConfig: number[]; // Each number defines how many items go in that row
  sdgData: SDGData;
}

const SDGsGrid: React.FC<SDGsGridProps> = ({ rowConfig, sdgData }) => {
  const sdgs = sdgData.SDGs;
  
  // Create a function to slice the SDGs data into rows based on rowConfig
  const createRows = () => {
    const rows = [];
    let startIndex = 0;
    
    for (const itemsInRow of rowConfig) {
      // Get the SDGs for this row
      const endIndex = Math.min(startIndex + itemsInRow, sdgs.length);
      const rowItems = sdgs.slice(startIndex, endIndex);
      
      rows.push(rowItems);
      startIndex = endIndex;
      
      // Break if we've used all SDGs
      if (endIndex >= sdgs.length) break;
    }
    
    return rows;
  };
  
  const rows = createRows();
  
  return (
    <div className="space-y-4 w-full">
      {rows.map((row, rowIndex) => {
        const totalItems = rowConfig[rowIndex];
        
        // Calculate appropriate spacing and alignment based on row position
        const justifyClass = rowIndex < 2 
          ? "justify-end" 
          : rowIndex === rows.length - 1 
            ? "justify-end" 
            : "justify-end";
        
        // For intermediate rows, add left margin that decreases as we go down
        const marginLeftClass = rowIndex < rows.length - 1 
          ? `ml-${Math.max(0, rows.length - rowIndex - 1) * 16}` 
          : "";
            
        return (
          <div key={rowIndex} className={`flex gap-4 ${justifyClass} ${marginLeftClass}`}>
            {row.map((sdg) => (
              <SdgBox key={sdg.number} color={sdg.color} data={sdg} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default SDGsGrid;
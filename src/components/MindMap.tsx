
import React from 'react';

const MindMap = () => {
  // This defines all the mind map data based on the image provided
  const mindMapData = {
    root: "M. Adaikkalavan Property Valuations Hub",
    branches: [
      {
        name: "License / Membership",
        nodes: ["CMDA", "DTI", "TNRERA"]
      },
      {
        name: "Clients",
        nodes: ["Individual / Home Buyers", "Panacea Housing", "Chennai Metropolitan Development Authority"]
      },
      {
        name: "Professional Activities",
        nodes: [
          "Property Value Assessment for Home Loans",
          "Certificate Issuance for Government Entity",
          "Private Building Assessment for Public Construction Project",
          "Encroachment Assessment of Industrial Buildings",
          "Technical Assessment of Distressed Assets"
        ]
      },
      {
        name: "Documentation and approvals",
        nodes: [
          "Panel of empaneled valuers",
          "Experience in",
          "Case law"
        ]
      },
      {
        name: "Deliverables",
        nodes: [
          "One Year warranty and support",
          "Market research",
          "Site analysis",
          "Risk Identification & mitigation",
          "Customized Client-Specific Methodology",
          "Valuation methods"
        ]
      },
      {
        name: "Valuation Expertise",
        nodes: [
          {
            name: "Expedient Travel",
            subnodes: ["Competitive TNHB", "Gandhi Nagar", "Avadi Market"]
          },
          {
            name: "Land and Buildings",
            subnodes: [
              "Royam Real Estate Consultation",
              "Balance Sheet Preparation",
              "Alter As Per Government",
              "Mortgage Plan for Assets"
            ]
          }
        ]
      },
      {
        name: "Recognition",
        nodes: [
          "Customers",
          "Bank & Legal Entities Easier with our assistance"
        ]
      },
      {
        name: "Niche Specialities",
        nodes: [
          "Real Estate Hub", 
          "CMDA / EC", 
          "PTA",
          "Agricultural Land", 
          "DTCP",
          "TNHB",
          "ESI / Provident Fund",
          "Industrial",
          "Land Distribution",
          "EC other Cities", 
          "UDS / Land", 
          "Special Economic Zone",
          "Land with Central Corporation", 
          "Schools and Small Learning",
          "Factory"
        ]
      },
      {
        name: "Key Values",
        nodes: [
          "CMDA / EC",
          "Planning",
          "Design", 
          "Construction",
          "Valuation"
        ]
      }
    ]
  };

  return (
    <div className="overflow-auto min-w-[1200px] min-h-[800px] flex items-center justify-center">
      <div className="relative">
        {/* Root Node */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200 px-4 py-2 rounded-md border border-blue-300 shadow-md text-blue-900 font-medium z-10">
          {mindMapData.root}
        </div>
        
        {/* Branches */}
        {mindMapData.branches.map((branch, index) => {
          // Calculate position based on index to arrange branches around the root
          const angle = (index * (360 / mindMapData.branches.length)) * (Math.PI / 180);
          const distance = 300; // Distance from root
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          
          return (
            <React.Fragment key={branch.name}>
              {/* Draw connection line */}
              <div 
                className="absolute left-1/2 top-1/2 h-0.5 bg-gray-300 origin-left"
                style={{ 
                  width: distance, 
                  transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI)}deg)` 
                }}
              />
              
              {/* Branch node */}
              <div 
                className="absolute bg-blue-200 px-3 py-1.5 rounded-md border border-blue-300 shadow-md text-blue-800 font-medium text-sm whitespace-nowrap"
                style={{ 
                  left: `calc(50% + ${x}px)`, 
                  top: `calc(50% + ${y}px)`, 
                  transform: 'translate(-50%, -50%)' 
                }}
              >
                {branch.name}
              </div>
              
              {/* Branch nodes */}
              {Array.isArray(branch.nodes) && branch.nodes.map((node, nodeIndex) => {
                const nodeDistance = 100;
                const nodeSpread = 30;
                const nodeOffsetY = (nodeIndex - (branch.nodes.length - 1) / 2) * nodeSpread;
                
                // Calculate node position relative to branch
                const nodeAngle = angle + (nodeOffsetY * 0.005);
                const nodeX = Math.cos(angle) * (distance + nodeDistance);
                const nodeY = Math.sin(angle) * (distance + nodeDistance) + nodeOffsetY;
                
                // Check if node is an object (has subnodes)
                const nodeName = typeof node === 'string' ? node : node.name;
                
                return (
                  <React.Fragment key={`${branch.name}-${nodeIndex}`}>
                    {/* Draw connection line */}
                    <div 
                      className="absolute h-0.5 bg-gray-300"
                      style={{
                        width: nodeDistance,
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: `translate(-50%, -50%) rotate(${nodeAngle * (180 / Math.PI)}deg)`,
                        transformOrigin: 'left center'
                      }}
                    />
                    
                    {/* Node */}
                    <div 
                      className="absolute bg-green-200 px-2.5 py-1 rounded-md border border-green-300 shadow-sm text-green-900 text-xs whitespace-nowrap"
                      style={{ 
                        left: `calc(50% + ${nodeX}px)`, 
                        top: `calc(50% + ${nodeY}px)`, 
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {nodeName}
                    </div>
                    
                    {/* Render subnodes if they exist */}
                    {typeof node === 'object' && node.subnodes && node.subnodes.map((subnode, subnodeIndex) => {
                      const subnodeDistance = 80;
                      const subnodeSpread = 25;
                      const subnodeOffsetY = (subnodeIndex - (node.subnodes.length - 1) / 2) * subnodeSpread;
                      
                      const subnodeX = nodeX + Math.cos(angle) * subnodeDistance;
                      const subnodeY = nodeY + Math.sin(angle) * subnodeDistance + subnodeOffsetY;
                      
                      return (
                        <React.Fragment key={`${branch.name}-${nodeIndex}-${subnodeIndex}`}>
                          {/* Draw connection line */}
                          <div 
                            className="absolute h-0.5 bg-gray-300"
                            style={{
                              width: subnodeDistance * 0.8,
                              left: `calc(50% + ${nodeX}px)`,
                              top: `calc(50% + ${nodeY}px)`,
                              transform: `translate(-50%, -50%) rotate(${nodeAngle * (180 / Math.PI)}deg)`,
                              transformOrigin: 'left center'
                            }}
                          />
                          
                          {/* Subnode */}
                          <div 
                            className="absolute bg-green-200 px-2 py-0.5 rounded-md border border-green-300 shadow-sm text-green-900 text-xs whitespace-nowrap"
                            style={{ 
                              left: `calc(50% + ${subnodeX}px)`, 
                              top: `calc(50% + ${subnodeY}px)`, 
                              transform: 'translate(-50%, -50%)'
                            }}
                          >
                            {subnode}
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MindMap;

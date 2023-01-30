import React, { useState } from "react";
import { TabsList, TabsButton } from "./styles.js";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TabsList>
        {tabs &&
          tabs.length &&
          tabs.map((tab, index) => {
            if (index === activeTab) {
              return (
                <TabsButton active key={tab.title}>
                  {tab.title}
                </TabsButton>
              );
            }
            return (
              <TabsButton key={tab.title} onClick={() => setActiveTab(index)}>
                {tab.title}
              </TabsButton>
            );
          })}
      </TabsList>
      {tabs[activeTab].content}
    </>
  );
}

export default Tabs;

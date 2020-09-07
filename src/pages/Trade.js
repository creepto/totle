import React, {useState, useEffect} from 'react';

export default () => {
  const totleWidgetNodeId = 'totle-widget';
  
  useEffect(() => {
    const loadWidget = () => {
      if(!window.TotleWidget) {
        setTimeout(loadWidget, 200);
        return;
      }
      const widgetConfig = {
        sourceAssetAddress: null,
        sourceAmountDecimal: null,
        destinationAssetAddress: null,
        destinationAmountDecimal: null,
        apiKey: null,
        partnerContractAddress: null,
      }
      window.TotleWidget.default.run(widgetConfig, document.getElementById(totleWidgetNodeId))
    }
    loadWidget();
  });

  return (
    <div>
      <h2>Trade</h2>
      <div id={totleWidgetNodeId}/>
      <h2>Additional content</h2>
    </div>
  );
};

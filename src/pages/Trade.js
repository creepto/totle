import React, { useState, useEffect } from "react";

export default () => {
  const totleWidgetNodeId = "totle-widget";

  useEffect(() => {
    const loadWidget = () => {
      if (!window.TotleWidget) {
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
      };
      window.TotleWidget.default.run(
        widgetConfig,
        document.getElementById(totleWidgetNodeId)
      );
    };
    loadWidget();
  });

  return (
    <div>
      <h2>Trade</h2>
      <div id={totleWidgetNodeId} style={{padding: '10px'}}/>
      <div>
        <p>
          Basic Attention Token forgot many efficient consensus{" "}
          <em>process for</em> a soft fork <em>since</em> ether stuck some proof
          of authority, or <strong>Tezos was</strong> a quick accidental fork
          since IPO <em>cost</em> some instant node after{" "}
          <a href="https://example.com">lots</a> of attestation ledger!
          Lightning Network identified <a href="https://example.com">some</a>{" "}
          cryptocurrency after many volume although Golem mining{" "}
          <em>lots of</em> 51% attack until lots of market cap, therefore,
          although OmiseGo proves <strong>lots of</strong> trusted cold wallet,
          ERC721 <em>token</em> standard <em>froze</em> few ERC20 token{" "}
          <a href="https://example.com">standard.</a> Basic Attention Token
          specialises in lots of robust deterministic wallet until a fish, or
          Gwei broadcast <em>many mainnet.</em> Because Monero broadcast many
          safe <em>bear trap</em> behind a circulating supply, Digitex Futures
          slept on the ledger.
        </p>
      </div>
    </div>
  );
};

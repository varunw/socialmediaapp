"use client";
import { Web3Button } from '@thirdweb-dev/react';
import React from 'react'

function Follow({ _following }: { _following: String }) {
  return (
    <div>
     <Web3Button
      contractAddress="0xc3174226a3EC886c169f9b797C37c96fCCc67900"
      action={(contract) => {
        contract.call("follow", [_following])
      }}
    >
      follow
    </Web3Button>
    </div>
  );
}

export default Follow
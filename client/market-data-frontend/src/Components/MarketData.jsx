import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const MarketData = () => {
  useEffect(() => {
    const socket = io(`ws://159.89.15.214:8080/`);

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <p> Hello!</p>
    </div>
  );
};

export default MarketData;

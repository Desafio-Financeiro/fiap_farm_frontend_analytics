import React from "react";
import "./AnalyticsComponent.css";

const AnalyticsProvider: React.FC = () => {
  return (
    <div className="container">
      <div className="icon-container">
        <h2>📊</h2>
      </div>
      <h1 className="title">Fiap Farm Analytics</h1>
    </div>
  );
};

export default AnalyticsProvider;

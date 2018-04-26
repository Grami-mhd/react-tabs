/**
 * framework imports
 */
import React  from "react";
/**
 * plugin imports
 */
import {Tabs, Tab} from "react-bootstrap";
/**
 * project imports
 */
import IntentRecognition from "./IntentRecognition";

export const App = () => (
  <div className="app">
      <img src="/mic.png" alt="logo" className="logo" />
      <h1 className="title">WELCOME TO TABS</h1>
      <Tabs defaultActiveKey={1} id="app-tabs">
          <Tab eventKey={1} title="Intent Recognition">
              <IntentRecognition />
          </Tab>
          <Tab eventKey={2} title="Wake Word">
              <IntentRecognition />
          </Tab>
      </Tabs>
  </div>
);
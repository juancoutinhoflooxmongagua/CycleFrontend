import React, { Component } from "react";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";

export default class BillingCycle extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <TabsHeader />
          <TabsContent />
        </Tabs>
      </div>
    );
  }
}

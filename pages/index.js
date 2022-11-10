import {useState} from "react";
import {Card} from "antd";
import {tabList,contentList} from "../utils";
export default function Home() {
  const [activeTabKey, setActiveTabKey] = useState('user-lists');
  const onTab2Change = (key) => {
    setActiveTabKey(key);
  };
  return (
      <Card
        style={{
          width: '100%',
        }}
        tabList={tabList}
        activeTabKey={activeTabKey}
         
        onTabChange={(key) => {
          onTab2Change(key);
        }}
      >
        {contentList[activeTabKey]}
      </Card>
  );
}

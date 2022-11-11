import {useState} from "react";
import {useUserContext} from "../context/user";
import {Card} from "antd";
import {tabList,contentList} from "../utils";
import Head from "next/head";
export default function Home() {
  const [activeTabKey, setActiveTabKey] = useState('user-lists');
  const {users} = useUserContext();
  const favCount = users?.favorites?.length;
  const onTab2Change = (key) => {
    setActiveTabKey(key);
  };

  return (
    <>
      <Head>
        <title>User Listing App</title>
      </Head>
      <Card
        style={{
          width: '100%',
        }}
        tabList={tabList(favCount)}
        activeTabKey={activeTabKey}
        onTabChange={(key) => {
          onTab2Change(key);
        }}
      >
        {contentList[activeTabKey]}
      </Card>
      </>
  );
}

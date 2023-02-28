
import React from "react";
import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
const items = [
  {
    label:(<Link to='/Notifications/prod'><h1>Notifications</h1></Link>),
    key: "2001",
  },
  {
    label:(<Link to='/Subscribers'><h1>Subscribers</h1></Link>),
    key: "2002",
  },
  {
    label:(<Link to='/ActivityFeed/prod'><h1>Activity Feed</h1></Link>),
    key: "2003",
  },
  {
    label:(<Link to='/Integrations'><h1>Integrations</h1></Link>),
    key: "2004",
  },
  {
    label:(<Link to='/Settings/prod'><h1>Settings</h1></Link>),
    key: "2005",
  },
  {
    label:(<Link to='/TeamMembers'><h1>Team Members</h1></Link>),
    key: "2006",
  }
];
const MenuProduction = () => {
const [current, setCurrent] = useState("mail");
const onClick = (e:any) => {
  console.log("click ", e);
  setCurrent(e.key);
};
return (
  <Menu
    onClick={onClick}
    selectedKeys={[current]}
    mode="inline"
    
    items={items}
    style={{backgroundColor:'black',color:'white'}}
  />
);
};
export default MenuProduction;
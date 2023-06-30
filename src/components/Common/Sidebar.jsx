import React from "react";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
 
} from "@material-tailwind/react";
import "../styles/sidebar.css"
import { Icon } from "@iconify/react";

function Sidebar() {
  return (
    <div className="flex flex-col justify-between">
      <Card className=" bar w-full max-w-[20rem]  pr-20 shadow-xl shadow-blue-gray-900/5 border-2 rounded-s-lg">
        <List>
          <div>
            <ListItem>
              <ListItemPrefix>
                <Icon icon="iconamoon:profile" className="h-5 w-5 m-1" />
              </ListItemPrefix>
              My Profile
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Icon icon="ri:book-line" className="h-5 w-5 m-1" />
              </ListItemPrefix>
              Enrolled Courses
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Icon icon="mingcute:bookmark-line" className="h-5 w-5 m-1" />
              </ListItemPrefix>
              WishList
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Icon icon="grommet-icons:cart" className="h-5 w-5 m-1" />
              </ListItemPrefix>
              Purchase History
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Icon
                  icon="solar:square-academic-cap-linear"
                  className="h-5 w-5 m-1"
                />
              </ListItemPrefix>
              Courses
            </ListItem>
          </div>
          <div className="list">
            <ListItem>
              <ListItemPrefix>
                <Icon icon="uil:setting" className="h-5 w-5 m-1" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Icon icon="lucide:log-out" className="h-5 w-5 m-1" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </div>
        </List>
      </Card>
    </div>
  );
}

export default Sidebar;

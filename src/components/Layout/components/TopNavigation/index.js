import React from "react";

import { navigate } from "gatsby";

import { Wrapper, MenuItem, Menu } from "./styles";

export default function TopNavigation() {
  return (
    <Wrapper>
      <Menu>
        <MenuItem onClick={() => navigate("/needHelp")}>Need Help?</MenuItem>
        <MenuItem onClick={() => navigate("/guest-portal")}>
          Guest Portal
        </MenuItem>
        <MenuItem onClick={() => navigate("/stories")}>Blog</MenuItem>
      </Menu>
      <Menu>
        <MenuItem onClick={() => navigate("/contact")}>Contact Us</MenuItem>
        <MenuItem onClick={() => navigate("/staff-portal")}>
          Staff Portal
        </MenuItem>
        <MenuItem onClick={() => navigate("/board-portal")}>
          Board Portal
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem onClick={() => navigate("/careers")}>Careers</MenuItem>
      </Menu>
    </Wrapper>
  );
}

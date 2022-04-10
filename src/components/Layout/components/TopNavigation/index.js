import React from "react";

import { Wrapper, MenuItem, Menu } from "./styles";

export default function TopNavigation() {
  return (
    <Wrapper>
      <Menu>
        <MenuItem>Need Help?</MenuItem>
        <MenuItem>Guest Portal</MenuItem>
        <MenuItem>Blog</MenuItem>
      </Menu>
      <Menu>
        <MenuItem>Contact Us</MenuItem>
        <MenuItem>Staff Portal</MenuItem>
        <MenuItem>Board Portal</MenuItem>
      </Menu>
      <Menu>
        <MenuItem>Careers</MenuItem>
      </Menu>
    </Wrapper>
  );
}

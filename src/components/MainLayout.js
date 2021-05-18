import React, { Component } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default class MenuExampleSizeMassive extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="massive">
        <Menu.Item
          name="Algo-Visualizer"
          icon="dna"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Dropdown item text="Mode">
            <Dropdown.Menu>
              <Dropdown.Item>Dark Mode</Dropdown.Item>
              <Dropdown.Item>Light Mode</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Questions</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

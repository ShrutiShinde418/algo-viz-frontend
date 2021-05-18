import React from "react";
import {
  Button,
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import AlgoDisplay from "../Algorithms/AlgoDisplay";

const SidebarMenu = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Grid columns={1}>
      <Grid.Column style={{ height: "100vh" }}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="scale down"
            icon="labeled"
            inverted
            direction="right"
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="bar chart outline" />
              Sorting
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="search" />
              Searching
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="chart line" />
              Pathfinding
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              <Header size="huge" textAlign="center">
                Visualizer
                <Button
                  floated="right"
                  active
                  onClick={(e, data) => setVisible(data.active)}
                >
                  <Icon name="arrow alternate circle left" />
                  Algorithms
                </Button>
              </Header>

              <AlgoDisplay />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default SidebarMenu;

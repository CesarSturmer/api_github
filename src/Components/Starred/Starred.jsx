import React from "react";
import { List } from "semantic-ui-react";

const Starred = (props) => {
  const { listStarred } = props;

  const listStarredUser =
    listStarred.length !== 0
      ? listStarred.data.map(
          (item) => (
            <List divided relaxed className="list-content">
              <List.Item className="list-item">
                <List.Icon name="github" size="large" verticalAlign="middle"/>
                <List.Content>
                  <List.Header as="a">{item.name}</List.Header>
                </List.Content>
              </List.Item>
            </List>
          )      
        )
      : ''

  return (
    <div>
      <ul>{listStarredUser}</ul>
    </div>
  );
};
export default Starred;

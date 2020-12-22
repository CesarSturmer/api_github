import React from "react";
import { List, Icon } from "semantic-ui-react";
import "./Repo.css";

const Repo = (props) => {
  const { listRepo } = props;

  const listRepoUser =
    listRepo.length !== 0
      ? listRepo.data.map((item) => (
          <List divided relaxed className="list-content" key={item.id}>
            <List.Item className="list-item">
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">{item.name}</List.Header>
                <List.Description as="a">
                  Linguagem: {item.language}
                </List.Description>
                <List.Description as="a">Forks: {item.forks}</List.Description>
                <List.Description as="a">
                  Stars: {item.stargazers_count}
                </List.Description>
                <List.Description as="a">
                  Link:{" "}
                  <a href={item.html_url}>
                    <Icon Icon name="world">
                      {" "}
                    </Icon>
                  </a>
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        ))
      : "";

  return (
    <div>
      <ul>{listRepoUser}</ul>
    </div>
  );
};
export default Repo;

import React, { useState } from "react";
import axios from "axios";
import { Form, Card, Image, Icon, Button } from "semantic-ui-react";
import "./Search.css";
import Repo from "../Repo/Repo.jsx";
import Starred from "../Starred/Starred.jsx";

const Search = () => {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setErros] = useState("");
  const [listRepo, setListRepo] = useState([]);
  const [listStarred, setListStarred] = useState([]);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    location,
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setLocation(location);
  };


  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    axios.get(`https://api.github.com/users/${userInput}`).then((response) => {
      if (response.message) {
       
        setErros(response.messsage);
      } else {
        setData(response.data);
      }
    });
  };

  const handleListRepo = async () => {
    try {
      const resultRepos = await axios.get(
        `https://api.github.com/users/${userInput}/repos`
      );

      setListRepo(resultRepos);
    } catch (err) {
      console.log(err);
    }
  };

  const handleListStarred = async () => {
    try {
      const resultStarred = await axios.get(
        `https://api.github.com/users/${userInput}/starred`
      );

      setListStarred(resultStarred);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="header-content">
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Github User"
              name="githubUser"
              onChange={handleSearch}
            />
            <Form.Button content="Search" />
          </Form.Group>
        </Form>
      </div>
      {error ? (
        
        <h1>{error}</h1>
      ) : (
        <div className="card">
          <Card>
            <Image src={avatar} wrapped ui={false} alt={avatar}></Image>
            <Card.Content className="card-conteudo">
              <Card.Header>{name}</Card.Header>
              <Card.Meta>{userName}</Card.Meta>
              <Card.Meta>{location}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Icon name="user" verticalAlign="middle" />
              {followers} Followers
            </Card.Content>
            <Card.Content extra>
              <Icon name="user" verticalAlign="middle" />
              {repos} Repositorios
            </Card.Content>
            <Card.Content extra>
              <Icon name="user" verticalAlign="middle" />
              {following} Following
            </Card.Content>
          </Card>
        </div>
      )}
      <div className="buttons">
        <Button basic inverted onClick={handleListRepo}>
          Repositorio
        </Button>
        <Button basic inverted onClick={handleListStarred}>
          Starred
        </Button>
      </div>

      <Repo listRepo={listRepo} />
      <Starred listStarred={listStarred} />
    </div>
  );
};

export default Search;

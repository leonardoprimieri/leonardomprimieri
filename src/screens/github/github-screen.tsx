import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

import "./style.css";

// import github from "../../";
import SectionTitle from "../../components/section-title/section-title";
import RepoCard from "../../components/repo-card/repo-card";

const GitHub = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getRepos() {
      const response = await fetch("https://api.github.com/users/leonardoprimieri/repos");

      const json = await response.json();

      setRepos(json);
    }

    getRepos();
  }, []);

  return (
    <div
      className='repo-main show-container'
      id='github'
      style={{
        backgroundImage: `url(/images/svg/github.png)`,
      }}
    >
      <SectionTitle>Repositórios</SectionTitle>
      <div className='repo-main__content'>
        {repos.map((item, index) => (
          <Tilt className='tilt-container' style={{ transformStyle: "preserve-3d" }} key={index}>
            <RepoCard data={item} key={index} />
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default GitHub;

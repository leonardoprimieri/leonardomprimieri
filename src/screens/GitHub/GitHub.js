import { useEffect, useState } from 'react';
import RepoCard from '../../components/RepoCard/RepoCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Tilt from 'react-parallax-tilt';

import './style.css';

import github from '../../assets/svg/github.png';

const GitHub = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getRepos() {
      const response = await fetch(
        'https://api.github.com/users/leonardoprimieri/repos'
      );

      const json = await response.json();

      setRepos(json);
    }

    getRepos();
  }, []);

  return (
    <div
      className="repo-main show-container"
      id="github"
      style={{
        backgroundImage: `url("${github}")`,
      }}
    >
      <SectionTitle>Repositórios</SectionTitle>
      <div className="repo-main__content">
        {repos.map((item, index) => (
          <Tilt
            className="tilt-container"
            style={{ transformStyle: 'preserve-3d' }}
            key={index}
          >
            <RepoCard data={item} key={index} />
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default GitHub;

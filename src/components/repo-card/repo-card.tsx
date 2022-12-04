import './style.css';

const RepoCard = ({ data }) => {
  return (
    <a href={data.svn_url} target="_blak">
      <div className="repo-container">
        <hr />
        <div className="project-card__info">
          <h1>{data.name}</h1>
          <p>
            {data.description ? data.description : 'Projeto sem descrição 😣'}
          </p>
        </div>
      </div>
    </a>
  );
};

export default RepoCard;

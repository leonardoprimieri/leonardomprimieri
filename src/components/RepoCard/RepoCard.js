import './style.css';

const RepoCard = ({ data }) => {
  return (
    <a href={data.url} target="_blak">
      <div className="repo-container">
        <hr />
        <div className="project-card__info">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>
      </div>
    </a>
  );
};

export default RepoCard;

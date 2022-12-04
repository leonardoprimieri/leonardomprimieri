import { RepoModel } from "@/models/repo-model";
import "./style.css";

type Props = {
  data: RepoModel;
};

const RepoCard = ({ data }: Props) => {
  return (
    <a href={data.svn_url} target='_blank'>
      <div className='repo-container'>
        <hr />
        <div className='project-card__info'>
          <h1>{data.name}</h1>
          <p>{data.description ? data.description : "Projeto sem descrição 😣"}</p>
        </div>
      </div>
    </a>
  );
};

export default RepoCard;

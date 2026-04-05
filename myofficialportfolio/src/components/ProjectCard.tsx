
import "./projectcard.css";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  projtitle: string;
  alias: string;
  position: string;
  year: string;
  desc: string;
  tags: string[];
  link: string;
}

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps): any => (
  <>
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {tags.map((item, key) => (
        <wa-badge key={key} variant="neutral" appearance="filled" pill>
          {item}
        </wa-badge>
      ))}
    </div>
  </>
);

const ProjectCard = ({
  projtitle,
  alias,
  position,
  year,
  desc,
  tags,
  link,
}: ProjectCardProps) => {
  return (
    <>

      <Link to={link}>
        <div className={`card-container `}>
          <div className={`thumbnail-container ${alias}`}>
            <img src={`../../../public/${alias}.png`} alt={`${projtitle} Thumbnail`} />
          </div>
          <div className="details">
            <div>
              <div>
                <div className="project-details font-title">{projtitle}</div>
                <div className="subtitle">
                  <div>{year}</div>
                  <div>{position}</div>
                </div>
              </div>
              <div className="desc">{desc}</div>
            </div>
            <div className="project-tags">
              <Tags tags={tags} />
            </div>
          </div>
        </div>

      </Link>
    </>
  );
};

export default ProjectCard;

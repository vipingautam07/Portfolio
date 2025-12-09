import { LazyImage } from './LazyImage';

export const ProjectCard = ({ title, description, imgUrl, projectLink, isEmpty }) => {
  const cardContent = (
    <div className={`project-card ${isEmpty ? 'project-card--empty' : ''}`}>
      <div className="project-card__glow" />
      <div className="project-card__content">
        <div className="project-card__image">
          {imgUrl ? (
            <LazyImage 
              src={imgUrl} 
              alt={title}
              className="project-card__lazy-image"
            />
          ) : (
            <div className="project-card__placeholder">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
              </svg>
            </div>
          )}
        </div>
        <div className="project-card__info">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );

  if (isEmpty) {
    return (
      <div className="project-card-link project-card-link--empty">
        {cardContent}
      </div>
    );
  }

  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
      {cardContent}
    </a>
  );
}

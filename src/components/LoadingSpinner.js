export const LoadingSpinner = ({ size = 'medium', fullScreen = false }) => {
  const sizeClasses = {
    small: 'spinner--small',
    medium: 'spinner--medium',
    large: 'spinner--large',
  };

  return (
    <div className={`loading-spinner-container ${fullScreen ? 'loading-spinner-container--fullscreen' : ''}`}>
      <div className={`loading-spinner ${sizeClasses[size] || sizeClasses.medium}`}>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      <div className="loading-spinner-text">Loading...</div>
    </div>
  );
};


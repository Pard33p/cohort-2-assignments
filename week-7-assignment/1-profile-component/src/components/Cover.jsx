export const Cover = ({ imagePath }) => {
  return (
    <div className="cover">
      <img src={imagePath} alt="no-cover-found" />
    </div>
  );
};

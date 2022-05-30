import ArtListItem from "./ArtListItem";

export default function ArtList({ art, setArt }) {
  return (
    <div className="scroll-container">
      <ul className="art-list">
        {art.map((item, index) => {
          return <ArtListItem item={item} key={index} />;
        })}
      </ul>
    </div>
  );
}

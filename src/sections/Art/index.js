//Hooks
import { useEffect, useState } from "react";

//Components
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.artic.edu/api/v1/artworks?fields=title,artist_title,subject_titles,image_id&limit=5"
    )
      .then((res) => res.json())
      .then((parsedData) => setArt(parsedData.data));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <ArtList art={art} setArt={setArt} />
    </section>
  );
}

export default ArtsSection;

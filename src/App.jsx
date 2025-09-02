import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  // Selecting an Episode and previewing details.
  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="episode-details">
          <h2>Select an episode</h2>
          <p>Please select an episode to view details.</p>
        </section>
      );
    }
    return (
      <section className="episode-details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  function EpisodeList() {
    return (
      <section className="show-list">
        <h2> Episodes</h2>
        <ul className="show-list">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main className="main-layout">
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}

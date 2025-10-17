import { useState } from "react";
import { queries } from "./data/data";
export const Query = () => {
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [tone, setTone] = useState("");

  const handleTopicChange = (e) => setTopic(e.target.value);
  const handleToneChange = (e) => setTone(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    queries.push({
      topic: topic,
      tone: tone,
      category: category,
    });
    console.log(queries);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="topic"
            value={topic}
            className="p-3 rounded border"
            placeholder="enter your topic"
            onChange={handleTopicChange}
          />
          <input
            type="text"
            name="category"
            value={category}
            className="p-3 rounded border"
            placeholder="enter your category"
            onChange={handleCategoryChange}
          />
          <input
            type="text"
            name="tone"
            value={tone}
            className="p-3 rounded border"
            placeholder="enter your ai tone"
            onChange={handleToneChange}
          />
          <button className="p-3 border rounded bg-blue-400">generate</button>
        </form>

        <ul className="list-none">
          {queries.map((query) => {
            return (
              <li>
                <span>Topic : {query.topic}</span>
                <span>category : {query.category}</span>
                <span>Tone : {query.tone}</span>
              </li>
            );
          })}
        </ul>
        {topic}
      </div>
    </>
  );
};

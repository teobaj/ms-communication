import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEnvVars } from "../../hooks/useEnvVars";
import { useChatStore } from "../../store/useChatStore";
import { useUserStore } from "../../store/useUserStore";
import "./SearchBar.css";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const serviceUrl = import.meta.env.VITE_SERVICE_URL;
  const [results, setResults] = useState<ResultsProps["results"]>([]);

  useEffect(() => {
    if (search === "") return;
    const fetchData = setTimeout(() => {
      const url = new URL("user/search", serviceUrl);
      url.searchParams.set("name", search);
      fetch(url.href)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setResults([data.user]);
          }
        });
    }, 2000);

    return () => clearTimeout(fetchData);
  }, [search]);

  const reset = () => {
    setSearch("");
    setResults([]);
  };

  return (
    <div className="search-bar__wrapper">
      <input
        type={"search"}
        placeholder={"Look for messages, files and more."}
        className="search-bar"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <Results results={results} reset={reset} />
    </div>
  );
};

interface ResultsProps {
  results: Array<{ name: string; id: number }>;
  reset?: () => void;
}

const Results: FC<ResultsProps> = ({ results, reset }) => {
  const currentUserId = useUserStore((state) => state.id);
  const initateChat = useChatStore((state) => state.initateChat);
  const navigate = useNavigate();
  return results.length ? (
    <ul className="search-bar__results">
      {results.map(({ name, id }) => (
        <li key={id}>
          <span>{name}</span>
          <button
            onClick={() => {
              if (reset) {
                reset();
              }
              initateChat(id);
              navigate(`chat/room/${currentUserId}/${id}`);
            }}
          >
            Chat
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );
};

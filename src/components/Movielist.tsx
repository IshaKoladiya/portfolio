import { useEffect, useState } from "react";

// const TMDB_API_KEY = "a36fc5084ac2125d7be99ba991b621f4";
const TMDB_API_KEY = "ba8e45268a7f0a694af137056c5b0fe4";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function Movielist() {
  const [tab, setTab] = useState<"movie" | "tv" | "person">("movie");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("en");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      let url = "";

      if (search) {
        url = `https://api.themoviedb.org/3/search/${tab}?api_key=${TMDB_API_KEY}&query=${search}&page=${page}`;
      } else {
        if (tab === "movie") {
          url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=${language}&page=${page}`;
        }
        if (tab === "tv") {
          url = `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&with_original_language=${language}&page=${page}`;
        }
        if (tab === "person") {
          url = `https://api.themoviedb.org/3/person/popular?api_key=${TMDB_API_KEY}&page=${page}`;
        }
      }

      const res = await fetch(url);
      const json = await res.json();
      setData(json.results || []);
    } catch (e) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tab, page, language ,search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Explore TMDB</h1>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-6">
        {["movie", "tv", "person"].map((t) => (
          <button
            key={t}
            onClick={() => {
              setTab(t as any);
              setPage(1);
              setSearch("");
            }}
            className={`px-5 py-2 rounded-full ${tab === t ? "bg-red-600" : "bg-gray-700"}`}
          >
            {t === "movie" && "Movies"}
            {t === "tv" && "TV Shows"}
            {t === "person" && "Artists"}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search ${tab}...`}
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg"
        />

        {tab !== "person" && (
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setPage(1);
            }}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="gu">Gujarati</option>
          </select>
        )}

        {/* <button
          onClick={() => {
            setPage(1);
            fetchData();
          }}
          className="px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700"
        >
          Search
        </button> */}
      </div>

      {/* Status */}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition">
            <img
              src={item.poster_path || item.profile_path ? IMAGE_BASE + (item.poster_path || item.profile_path) : "https://via.placeholder.com/300x450"}
              className="w-full h-[320px] object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold line-clamp-2">
                {item.title || item.name}
              </h3>
              <p className="text-xs text-gray-400">
                {item.release_date || item.first_air_date || ""}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-6 mt-10">
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-5 py-2 bg-gray-700 rounded-lg">Prev</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)} className="px-5 py-2 bg-gray-700 rounded-lg">Next</button>
      </div>
    </div>
  );
}
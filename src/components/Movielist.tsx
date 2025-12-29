import { useEffect, useState } from "react";

const API_KEY = "937bd7f3";

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
};

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("movie");
  const [language, setLanguage] = useState<"all" | "english" | "gujarati">("all");

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError("");

      let query = search;
      if (language === "gujarati") query = `${search} gujarati`;
      if (language === "english") query = `${search} english`;

      const res = await fetch(
        `https://www.omdbapi.com/?s=${query}&page=${page}&apikey=${API_KEY}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page, language]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Movie Explorer</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
        />

        <select
          value={language}
          onChange={(e) => {
            setPage(1);
            setLanguage(e.target.value as any);
          }}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700"
        >
          <option value="all">All Movies</option>
          <option value="english">English</option>
          <option value="gujarati">Gujarati</option>
        </select>

        <button
          onClick={() => {
            setPage(1);
            fetchMovies();
          }}
          className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
        >
          Search
        </button>
      </div>

      {/* Status */}
      {loading && <p className="text-center">Loading movies...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
              alt={movie.Title}
              className="w-full h-[320px] object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-sm line-clamp-2">{movie.Title}</h3>
              <p className="text-xs text-gray-400">{movie.Year} • {movie.Type}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-5 py-2 rounded-lg bg-gray-700 disabled:opacity-40"
        >
          Prev
        </button>
        <span className="text-sm">Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-5 py-2 rounded-lg bg-gray-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}

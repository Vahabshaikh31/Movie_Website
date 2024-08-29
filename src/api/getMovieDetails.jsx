export const getMovieDetails = async ({ params }) => {
  try {
    const { MovieId } = params; 

    const res = await fetch(
      `http://www.omdbapi.com/?i=${MovieId}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movie data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching movie data:", error);
    return null;
  }
};

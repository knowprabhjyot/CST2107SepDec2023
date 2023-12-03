export const parseTitle = (title) => {
  switch (title) {
    case "popular":
      return "Popular Movies";
    case "now_playing":
      return "Now Playing";
    case "top_rated":
      return "Top Rated";
    case "upcoming":
      return "Upcoming";
    default:
        return "Popular Movies";
  }
};

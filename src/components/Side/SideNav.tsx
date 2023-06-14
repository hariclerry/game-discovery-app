import { Genre } from "../../hooks/useGenres";
import Genres from "./Genres";

const SideNav = ({
  onSelectGenre,
  selectedGenreId,
}: {
  onSelectGenre: (value: Genre) => void;
  selectedGenreId?: number;
}) => {
  return (
    <Genres onSelectGenre={onSelectGenre} selectedGenreId={selectedGenreId} />
  );
};

export default SideNav;

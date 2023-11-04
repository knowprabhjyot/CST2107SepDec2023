import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { PropTypes } from 'prop-types';

export default function SearchBar({ keyword, setKeyword, handleButtonClick }) {
  return (
    <Box display="flex" alignItems="center">
      <FormControl fullWidth variant="outlined">
        <OutlinedInput
          style={{ border: "1px solid black", margin: 48, color: "black" }}
          color="secondary"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon color="secondary" />
            </InputAdornment>
          }
          placeholder="Enter User Name"
        />
      </FormControl>
      {keyword.length > 0 && (
        <Button onClick={handleButtonClick} variant="contained">
          Search
        </Button>
      )}
    </Box>
  );
}

SearchBar.propTypes=  {
    keyword: PropTypes.string,
    setKeyword: PropTypes.func,
    handleButtonClick: PropTypes.func
}


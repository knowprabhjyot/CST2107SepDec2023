import { useState } from "react";
import "./App.css";
import GitContext from "./context/GitContext";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import { darkTheme, lightTheme } from "./themeConfig";
import { AppBar, Button, Toolbar } from "@mui/material";
import SearchBar from "./components/SearchBar";
import { RepoList } from "./components/RepoList";

const API_URL = 'https://api.github.com/users';

function App() {
  const [appTheme, setAppTheme] = useState("dark");
  const [repoList, setRepoList] = useState([]);
  const [keyword, setKeyword] = useState('');

  const toggleTheme = () => {
    setAppTheme(appTheme === "dark" ? "light" : "dark");
  };


  const getRepos = async () => {  
    const response = await fetch(`${API_URL}/${keyword}/repos`);
    const data = await response.json();
    setRepoList(data);
  }

  const handleButtonClick = () => {
    getRepos();
  }
  

  return (
    <>
      <GitContext.Provider value={repoList}>
        <ThemeProvider theme={appTheme === "dark" ? darkTheme : lightTheme}>
          <AppBar position="static">
            <Toolbar>
              <Box display='flex' justifyContent='space-between' width="100%">
                <Box display="flex" gap="8px">
                  <Button color="secondary" variant="contained">Home</Button>
                  <Button color="secondary" variant="contained">About</Button>
                </Box>
                <Switch onChange={toggleTheme} defaultChecked />
              </Box>
            </Toolbar>
          </AppBar>
          <SearchBar handleButtonClick={handleButtonClick} keyword={keyword} setKeyword={(value) => setKeyword(value)} />
          <RepoList />
        </ThemeProvider>
      </GitContext.Provider>
    </>
  );
}

export default App;

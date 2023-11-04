import { useContext } from 'react'
import GitContext from '../context/GitContext'
import { RepoCard } from './RepoCard';
import { Box } from '@mui/material';

export const RepoList = () => {
    const repoList = useContext(GitContext);
  
    return (
        <Box margin="48px" display='grid' gridTemplateColumns={'auto auto auto'} gap='8px'>
            { repoList.map((data, index) =>  <RepoCard data={data} key={index} />)}
        </Box>
    )
}

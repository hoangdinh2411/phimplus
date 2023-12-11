'use client';
import React from 'react';
import Player from '~/components/UI/Player';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { IMovieDetail } from '~/types/movie';
import Typography from '@mui/material/Typography';
type Props = {
  movie: IMovieDetail;
};

export default function Screen({ movie }: Props) {
  const [currentServer, setCurrentServer] = React.useState<number>(0);
  const [currentEpisode, setCurrentEpisode] = React.useState<number>(0);
  const changeEpisode = (
    selectedServerIndex: number,
    selectedEpisodeIndex: number
  ) => {
    if (!movie?.episodes) return;
    if (movie.type === 'single') return;
    if (currentServer !== selectedServerIndex) {
      setCurrentServer(selectedServerIndex);
    }

    if (currentEpisode !== selectedEpisodeIndex) {
      setCurrentEpisode(selectedEpisodeIndex);
    }
  };

  const getEpisodeMovieUrl = React.useCallback(() => {
    if (!movie?.episodes) return;
    const serverData = movie?.episodes[currentServer]?.server_data;
    const episodeData = serverData[currentEpisode];
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    return episodeData.link_embed;
  }, [movie?.episodes, currentEpisode, currentServer]);

  const isSelected = React.useCallback(
    (serverIndex: number, episodeIndex: number) => {
      return currentServer === serverIndex && currentEpisode === episodeIndex;
    },
    [currentServer, currentEpisode]
  );

  if (!getEpisodeMovieUrl()) {
    return (
      <Box
        height={300}
        width='100%'
        mt={32}
        display='flex'
        bgcolor='background.paper'
      >
        <Typography variant='body1' m='auto' color='primary'>
          Hiện tại phim đang được cập nhật, vui lòng quay lại sau
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Player src={getEpisodeMovieUrl()} />
      <Box
        component='section'
        my={8}
        borderRadius={8}
        minHeight={300}
        pb={{
          xs: 8,
          md: 0,
        }}
      >
        <List
          component='nav'
          aria-label='main mailbox folders'
          sx={{
            mb: 8,
          }}
        >
          {getEpisodeMovieUrl() &&
            movie?.episodes &&
            movie?.episodes.map((server, serverIndex) => {
              return (
                <ListItem
                  key={server.server_name}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    backgroundColor: 'background.paper',
                  }}
                >
                  <Typography variant='body1' pb={8} color='primary'>
                    {server.server_name}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'left',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    {server.server_data.map((episode, episodeIndex) => {
                      return (
                        <ListItemButton
                          sx={{
                            borderRadius: 2,
                            mr: 8,
                            mb: 8,
                            maxWidth: 42,
                            height: 42,
                            overflow: 'hidden',
                            color: 'primary.dark',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: 18,
                            justifyContent: 'center',
                            backgroundColor: 'background.default',
                            ':hover': {
                              backgroundColor: 'primary.dark',
                              color: 'text.primary',
                            },

                            '&.Mui-selected': {
                              backgroundColor: 'primary.dark',
                              color: 'text.primary',
                              '&:hover': {
                                color: 'text.primary',
                                backgroundColor: 'primary.dark',
                              },
                            },
                          }}
                          key={episode.slug}
                          selected={isSelected(serverIndex, episodeIndex)}
                          onClick={() =>
                            changeEpisode(serverIndex, episodeIndex)
                          }
                        >
                          {episode.name}
                        </ListItemButton>
                      );
                    })}
                  </Box>
                </ListItem>
              );
            })}
        </List>
      </Box>
    </>
  );
}

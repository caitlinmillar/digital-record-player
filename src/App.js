import React, { useState, useEffect } from 'react';
import RecordPlayer from './components/RecordPlayer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import RecordStack from './components/RecordStack';
import axios from 'axios';
import { MUSICBRAINZ_API_BASE_URL } from './constants';

const App = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(
          'https://musicbrainz.org/ws/2/release/?query=artist:beatles&fmt=json'
        );

        const fetchedRecords = response.data.releases.map((release, index) => ({
          id: index + 1,
          title: release.title,
          audio: `https://example.com/audio/${release.id}`, 
        }));

        console.log('Fetched Records:', fetchedRecords); 
        setRecords(fetchedRecords); 
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
  }, []);
  // const fetchAlbums = async (albumQuery) => {
  //   try {
  //     const response = await axios.get(`${MUSICBRAINZ_API_BASE_URL}`, {
  //       params: {
  //         query: `album:${albumQuery}`, // Search by album name
  //         fmt: 'json' // Return data in JSON format
  //       }
  //     });
  //     const albums = response.data.releases.map((album, index) => ({
  //       id: index + 1,
  //       title: album.title,
  //       artist: album['artist-credit'][0].artist.name,
  //       // You can integrate real audio links if available from another service
  //       audio: 'https://example.com/sample-audio.mp3',
  //       cover: album['cover-art-archive'].front
  //         ? `https://coverartarchive.org/release/${album.id}/front`
  //         : null, // Fetch cover art from MusicBrainz's cover art archive
  //     }));

  //     setRecords(albums);
  //   } catch (error) {
  //     console.error('Error fetching albums:', error);
  //   }
  // };

  //   useEffect(() => {
  //     fetchAlbums('Abbey Road'); // Default search album (e.g., 'Abbey Road')
  //   }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        <RecordStack records={records} />
        <RecordPlayer records={records} />
      </div>
    </DndProvider>
  );
};

export default App;

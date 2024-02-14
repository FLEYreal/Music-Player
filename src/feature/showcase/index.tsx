import { useEffect, useRef, useState } from 'react';
import { ListPlayer, track, listInfo } from '../player'
import { ListPlayerContext } from '../../player-list-context';

import './styles.css'

// This is just a sample listInfo object, you can use your own
const testListInfo: listInfo = {
  type: 'playlist',
  name: 'Lofi Playlist',
  creationDate: "3/16/2023",
  numTracks: 4,
  duration: "10 min"
}

// This is just a sample track array, you can use your own
const testTracks: track[] = [
  {
    title: [
      {
        type: 'text',
        content: 'Inertia',
        className: 'title'
      }
    ],
    artist: [
      {
        type: 'text',
        content: 'squeeda x tonbo',
        className: 'artist',
        link: 'https://youtu.be/dBUL_gwYzRI'
      }
    ],
    album: [
      {
        type: 'text',
        content: 'Lofi Playlist',
        className: 'album'
      }
    ],
    duration: "2:05",
    imageSrc: "https://s6.imgcdn.dev/tn7lw.th.jpg"
  },
  {
    title: [
      {
        type: 'text',
        content: 'Autumn Camp',
        className: 'title'
      }
    ],
    artist: [
      {
        type: 'text',
        content: 'xander',
        className: 'artist',
        link: 'https://youtu.be/VlP8c8XV24c'
      }
    ],
    album: [
      {
        type: 'text',
        content: 'Lofi Playlist',
        className: 'album'
      }
    ],
    duration: "2:44",
    imageSrc: "https://s6.imgcdn.dev/tn7lw.th.jpg"
  },
  {
    title: [
      {
        type: 'text',
        content: 'Card Games',
        className: 'title'
      }
    ],
    artist: [
      {
        type: 'text',
        content: 'azayaka',
        className: 'artist',
        link: 'https://youtu.be/0YAuUgRFS2U'
      }
    ],
    album: [
      {
        type: 'text',
        content: 'Lofi Playlist',
        className: 'album'
      }
    ],
    duration: "2:27",
    imageSrc: "https://s6.imgcdn.dev/tn7lw.th.jpg"
  },
  {
    title: [
      {
        type: 'text',
        content: 'Moonrise',
        className: 'title'
      }
    ],
    artist: [
      {
        type: 'text',
        content: 'brillion',
        className: 'artist',
        link: 'https://youtu.be/n9dK_byJzXw'
      }
    ],
    album: [
      {
        type: 'text',
        content: 'Lofi Playlist',
        className: 'album'
      }
    ],
    duration: "2:24",
    imageSrc: "https://s6.imgcdn.dev/tn7lw.th.jpg"
  },

]

const skipIntroduction = false;

export const Showcase = () => {
  const [selectedTrack, setSelectedTrack] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [explanitoryText, setExplanitoryText] = useState("Fley's Music-Player");
  const [playerMode, setPlayerMode] = useState("large");
  const [forceSmallWidth, setForceSmallWidth] = useState(false);
  const [replaceHeader, setReplaceHeader] = useState(false);
  const [headLess, setHeadLess] = useState(false);
  const [intro, setIntro] = useState(!skipIntroduction);

  const audioRef = useRef<HTMLAudioElement>(null);

  const durationIncrement = 1000;
  const audioSrcs = [
    "/free-audio/inertia.mp3",
    "/free-audio/autumn-camp.mp3",
    "/free-audio/card-games.mp3",
    "/free-audio/moonrise.mp3"
  ];

  const handleOnPlay = (index: number, resume: boolean) => {
    if (index === selectedTrack && !resume) {
      audioRef.current?.load();
      audioRef.current?.play();
    } else {
      audioRef.current?.play();
    }
  }

  const handleOnPause = () => {
    audioRef.current?.pause();
  }

  useEffect(() => {
    if (skipIntroduction || !intro) return;

    const timer = setTimeout(() => {
      setExplanitoryText("A flexible Music-Player");
    }, 3 * durationIncrement);

    const timer1 = setTimeout(() => {
      setExplanitoryText("That's fully controllable using context ... playing track 4th now ...");
    }, 7 * durationIncrement);

    const timer2 = setTimeout(() => {
      setSelectedTrack(3);
    }, 8 * durationIncrement);

    const timer3 = setTimeout(() => {
      setExplanitoryText("Ops! Stopping playback ...");
    }, 12 * durationIncrement);

    const timer4 = setTimeout(() => {
      setIsPlaying(false);
      audioRef.current?.pause();
    }, 13 * durationIncrement);

    const timer5 = setTimeout(() => {
      setExplanitoryText("List-Player is also fully responsive! It can adapt to various screen sizes! Check it out!");
    }, 15 * durationIncrement);

    const timer5a = setTimeout(() => {
      setForceSmallWidth(true);
    }, 19 * durationIncrement);

    const timer6 = setTimeout(() => {
      setExplanitoryText("It can transform into a small widget called 'miniplayer'");
    }, 23 * durationIncrement);

    const timer7 = setTimeout(() => {
      setPlayerMode("miniplayer");
    }, 25 * durationIncrement);

    const timer7a = setTimeout(() => {
      setExplanitoryText("Player can get even smaller than that, I call it - 'tinyplayer'");
    }, 30 * durationIncrement);

    const timer7b = setTimeout(() => {
      setPlayerMode("tinyplayer");
    }, 31 * durationIncrement);

    const timer8 = setTimeout(() => {
      setExplanitoryText("The player doesn't play media, it just provides a UI to control playback. Everything else is up to you!");
    }, 35 * durationIncrement);

    const timer9 = setTimeout(() => {
      setForceSmallWidth(false);
      setIsPlaying(true);
      audioRef.current?.play();
      setIsMuted(true);
      setExplanitoryText("This implies that you can combine it with any media player you like, for example: \"react-player\".");
    }, 40 * durationIncrement);

    const timer10 = setTimeout(() => {
      setIsPlaying(false);
      audioRef.current?.pause();
      setIsMuted(false);
      setExplanitoryText("Since \"ListPlayer\" accepts a child component, you can use it to wrap your media player");
    }, 45 * durationIncrement);

    const timer11 = setTimeout(() => {
      setExplanitoryText("Or you can provide your own header component to replace the default one.");
    }, 51 * durationIncrement);

    const timer12 = setTimeout(() => {
      setPlayerMode("medium");
    }, 54 * durationIncrement);

    const timer13 = setTimeout(() => {
      setReplaceHeader(true);
    }, 57 * durationIncrement);

    const timer14 = setTimeout(() => {
      setExplanitoryText("But what if you want to put your header/controls somewhere away from the playlist?");
    }, 62 * durationIncrement);

    const timer15 = setTimeout(() => {
      setExplanitoryText("It's possible! To make the \"ListPlayer\" headless, just set the \"noHeader\" attribute to true.");
    }, 68 * durationIncrement);

    const timer16 = setTimeout(() => {
      setHeadLess(true);
    }, 72 * durationIncrement);

    const timer17 = setTimeout(() => {
      setExplanitoryText("That's it! Feel free to play around with the \"ListPlayer\" the way you want!");
      setReplaceHeader(false);
    }, 78 * durationIncrement);

    const timer18 = setTimeout(() => {
      setExplanitoryText("Fley's Music-Player");
      setHeadLess(false);
    }, 82 * durationIncrement);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer5a);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer7a);
      clearTimeout(timer7b);
      clearTimeout(timer8);
      clearTimeout(timer9);
      clearTimeout(timer10);
      clearTimeout(timer11);
      clearTimeout(timer12);
      clearTimeout(timer13);
      clearTimeout(timer14);
      clearTimeout(timer15);
      clearTimeout(timer16);
      clearTimeout(timer17);
      clearTimeout(timer18);
    }
  }, [intro]);

  return (
    <ListPlayerContext.Provider value={{ selectedTrack, setSelectedTrack, isPlaying, setIsPlaying, isMuted, setIsMuted }}>
      <div className="app">
        <div key={explanitoryText} className="explanitory-text" style={{ animation: "fadeIn 1s ease-in-out" }}>
          {explanitoryText}
        </div>
        <div className='listplayer-cont' style={forceSmallWidth ? { paddingLeft: "20%", paddingRight: "20%" } : undefined}>
          <ListPlayer
            tracks={testTracks}
            listInfo={testListInfo}
            playerMode={playerMode}
            noControls={replaceHeader}
            noHeader={headLess}
            playCallback={handleOnPlay}
            pauseCallback={handleOnPause}
            loop
            kbdShortcuts
          >
            {
              replaceHeader
                ? <div className="custom-hdr-placeholder" style={{ animation: "fadeIn 1s ease-in-out", background: "repeating-linear-gradient( 45deg, #22222255, #22222255 10px, #22222200 10px, #22222200 20px)" }}>
                  [your custom header here]
                </div>
                : undefined
            }
          </ListPlayer>
        </div>
      </div>
      <audio ref={audioRef}
        src={selectedTrack < audioSrcs.length ? audioSrcs[selectedTrack % audioSrcs.length] : undefined}
        muted={isMuted}
        onEnded={() => { setSelectedTrack(selectedTrack + 1) }}
      />
      <button
        className="skip-intro"
        onClick={() => { setExplanitoryText("Fley's Music-Player"); setPlayerMode("large"); setHeadLess(false); setReplaceHeader(false); setForceSmallWidth(false); setIntro(false); }}
        style={intro ? { animation: "fadeInUnfocused 1s ease-in-out" } : { display: "none" }}
      >
        SKIP INTRO
      </button>
    </ListPlayerContext.Provider>
  )
}

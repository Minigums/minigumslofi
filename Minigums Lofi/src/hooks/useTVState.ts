import { useState, useRef } from 'react';

export const useTVState = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [channel, setChannel] = useState(1);
  const [isScreenOff, setIsScreenOff] = useState(true);
  const powerButtonRef = useRef<NodeJS.Timeout | null>(null);
  const [isPowerPressed, setIsPowerPressed] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleChannelChange = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      setChannel(prev => prev < 11 ? prev + 1 : 1);
    } else {
      setChannel(prev => prev > 1 ? prev - 1 : 11);
    }
  };

  const handlePowerMouseDown = () => {
    setIsPowerPressed(true);
    powerButtonRef.current = setTimeout(() => {
      // Long press - turn screen off/on
      setIsScreenOff(!isScreenOff);
      setIsPowerPressed(false);
    }, 500); // 500ms for long press
  };

  const handlePowerMouseUp = () => {
    if (powerButtonRef.current) {
      clearTimeout(powerButtonRef.current);
      powerButtonRef.current = null;
    }
    
    if (isPowerPressed) {
      // Quick press - pause/play video
      if (!isScreenOff) {
        togglePlay();
      }
      setIsPowerPressed(false);
    }
  };

  return {
    videoRef,
    isPlaying,
    channel,
    isScreenOff,
    isPowerPressed,
    handleChannelChange,
    handlePowerMouseDown,
    handlePowerMouseUp
  };
};


import React from 'react';
import { useTVState } from '../hooks/useTVState';
import { channels } from '../types/tv';
import CRTScreen from './CRTScreen';
import TVControls from './TVControls';

const CRTVideoPlayer = () => {
  const {
    channel,
    isScreenOff,
    isPowerPressed,
    handleChannelChange,
    handlePowerMouseDown,
    handlePowerMouseUp
  } = useTVState();

  const currentChannel = channels[channel];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 p-8">
      {/* CRT TV Container */}
      <div className="relative">
        {/* TV Body - Darker colors */}
        <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-2xl border border-gray-600" style={{ padding: '15px 15px 20px 15px' }}>
          {/* Brand Label at Top */}
          <div className="text-center mb-3">
            <div className="text-gray-400 font-bold text-sm tracking-[0.3em] opacity-70">Minigums Lofi</div>
          </div>

          {/* Screen Container */}
          <CRTScreen 
            channel={currentChannel}
            isScreenOff={isScreenOff}
            channelNumber={channel}
          />

          {/* Physical TV Controls */}
          <TVControls
            channel={channel}
            isScreenOff={isScreenOff}
            isPowerPressed={isPowerPressed}
            onPowerMouseDown={handlePowerMouseDown}
            onPowerMouseUp={handlePowerMouseUp}
            onChannelChange={handleChannelChange}
          />
        </div>
      </div>

      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default CRTVideoPlayer;

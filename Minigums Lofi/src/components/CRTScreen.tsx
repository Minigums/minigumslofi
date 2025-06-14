
import React from 'react';
import { Channel } from '../types/tv';

interface CRTScreenProps {
  channel: Channel | undefined;
  isScreenOff: boolean;
  channelNumber: number;
}

const CRTScreen: React.FC<CRTScreenProps> = ({ channel, isScreenOff, channelNumber }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-3 rounded-lg shadow-inner">
      {/* CRT Screen */}
      <div className="relative bg-black rounded-lg overflow-hidden shadow-xl border-2 border-gray-800" style={{
        aspectRatio: '16/10',
        width: '600px',
        maxWidth: '85vw'
      }}>
        {/* Screen Curve Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-20 pointer-events-none z-10"></div>
        
        {/* Scan Lines Effect */}
        <div className="absolute inset-0 pointer-events-none z-20" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)',
          animation: 'scanlines 0.1s linear infinite'
        }}></div>

        {/* Screen Off Overlay */}
        {isScreenOff && (
          <div className="absolute inset-0 bg-black z-25 flex items-center justify-center">
            <div className="text-gray-600 text-sm font-mono animate-pulse opacity-60">
              Press power button to turn on
            </div>
          </div>
        )}

        {/* Channel Content */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {channel && !isScreenOff ? (
            <iframe
              src={channel.src}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              title={`Channel ${channelNumber}`}
            />
          ) : !isScreenOff ? (
            <div className="w-full h-full flex items-center justify-center bg-black">
              <div className="text-gray-500 text-xl font-mono animate-pulse">
                No Signal
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CRTScreen;


import React from 'react';
import { Power } from 'lucide-react';

interface TVControlsProps {
  channel: number;
  isScreenOff: boolean;
  isPowerPressed: boolean;
  onPowerMouseDown: () => void;
  onPowerMouseUp: () => void;
  onChannelChange: (direction: 'up' | 'down') => void;
}

const TVControls: React.FC<TVControlsProps> = ({
  channel,
  isScreenOff,
  isPowerPressed,
  onPowerMouseDown,
  onPowerMouseUp,
  onChannelChange
}) => {
  return (
    <div className="flex items-center justify-between mt-4 px-3">
      {/* Power Button */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div 
            className={`w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full border border-gray-500 shadow-lg cursor-pointer transform hover:scale-105 transition-all ${isPowerPressed ? 'scale-95' : ''} flex items-center justify-center`}
            onMouseDown={onPowerMouseDown}
            onMouseUp={onPowerMouseUp}
            onMouseLeave={onPowerMouseUp}
          >
            <Power size={14} className="text-gray-800" />
          </div>
        </div>
        <span className="text-gray-500 text-xs mt-1 font-mono tracking-wider">PWR</span>
      </div>

      {/* Digital Display */}
      <div className="bg-black border border-red-800 rounded px-2 py-0.5 shadow-lg">
        <div className="text-red-500 font-mono text-sm font-bold tracking-wider">
          {isScreenOff ? '--' : channel}
        </div>
      </div>

      {/* Channel Knob */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div 
            className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full border border-gray-500 shadow-lg cursor-pointer transform hover:scale-105 transition-all flex items-center justify-center"
            onClick={() => onChannelChange('up')}
            onContextMenu={(e) => {
              e.preventDefault();
              onChannelChange('down');
            }}
          >
            <div className="w-0.5 h-1 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        <span className="text-gray-500 text-xs mt-1 font-mono tracking-wider">CH</span>
      </div>
    </div>
  );
};

export default TVControls;

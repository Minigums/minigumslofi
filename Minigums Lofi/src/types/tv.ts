export type YouTubeChannel = {
  type: 'youtube';
  src: string;
};

export type Channel = YouTubeChannel;

export const channels: Record<number, Channel> = {
  1: {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/GAYpcF96rlo?si=OQrPQXn9JzOjCtmD&controls=0&autoplay=1&loop=1&playlist=GAYpcF96rlo'
  },
  2: {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/p53rW6sMfqw?si=GdYkW3H5v8dnlVSZ&controls=0&autoplay=1&loop=1&playlist=p53rW6sMfqw'
  },
  3: {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/lxDHHDmFXFo?si=pYnxSyYhdam27Kej&controls=0&autoplay=1&loop=1&playlist=lxDHHDmFXFo'
  },
  4: {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/sWtEYPva4A0?si=oN32OwHel8dH_ACm&controls=0&autoplay=1&loop=1&playlist=sWtEYPva4A0'
  },
  5: {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/WctVCLsRpWI?si=SmqZoHagxF-Zd4vK&controls=0&autoplay=1&loop=1&playlist=WctVCLsRpWI&start=3'
  },
  6: {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/zPyg4N7bcHM?si=-M1GYKu7_sD0jg9j&controls=0&autoplay=1&loop=1&playlist=zPyg4N7bcHM'
  },
  7: {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/s9vuqDenNgI?si=uRWCZ_wAXJoCS-W7&controls=0&autoplay=1&loop=1&playlist=s9vuqDenNgI&start=240'
  },
  8: {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/JqMYmrRIlaU?si=jFQaX8poQFFDRbSc&controls=0&autoplay=1&loop=1&playlist=JqMYmrRIlaU'
  },
  9: {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/Gmjtbb2oLcc?si=whWdAHzjg5dlI1pI&controls=0&autoplay=1&loop=1&playlist=Gmjtbb2oLcc'
  },
  10: {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/EykOsPxir8k?si=e7lyL-vVuTRf1Fcm&controls=0&autoplay=1&loop=1&playlist=EykOsPxir8k'
  },
  11: {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/GW3B30KQczs?si=eGKk1uquAffs9i7R&controls=0&autoplay=1&loop=1&playlist=GW3B30KQczs'
  }
};

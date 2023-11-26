import React from 'react';
import Player from '~/components/UI/Player';

type Props = {
  src: string;
};

export default function Trailer({ src }: Props) {
  return <Player src={src} />;
}

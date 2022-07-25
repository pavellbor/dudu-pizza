import cn from 'classnames';
import React from 'react';
import { DoughMap, SizesMap } from '../../const';

interface OptionsProps {
  map: typeof SizesMap | typeof DoughMap;
  state: any;
  onClick: any;
}

const Options: React.FC<OptionsProps> = ({ map, state, onClick }) => {
  return (
    <>
      {Object.entries(map).map(([type, obj]) => (
        <button
          key={type}
          className={cn('button', '--outline', { '--active': state === obj })}
          disabled={state === obj}
          onClick={() => onClick(obj)}>
          {obj.name}
        </button>
      ))}
    </>
  );
};

export default Options;

import toast from 'cogo-toast';
import copy from 'copy-to-clipboard';
import React from 'react';
import { INode, parse } from 'svgson';

import { Icon } from './Icon';

const copyToClipboard = (name: string) => {
  copy(name);
  toast.success(`Copied '${name}' to clipboard`, {
    position: 'bottom-center',
  });
};

export const Default = () => {
  const [icons, setIcons] = React.useState<string[]>([]);

  React.useEffect(() => {
    const iconsList: string[] = [];

    fetch('/icons.svg')
      .then((response) => response.text())
      .then((svg) => parse(svg))
      .then((json) => {
        json.children.forEach((child: INode) => {
          if (child.attributes?.id) {
            iconsList.push(child.attributes.id as string);
          }
        });
        setIcons(iconsList);
      });
  }, []);

  return (
    <div>
      <ul
        className='col-start-1 row-start-2 grid gap-8 text-center text-xs leading-4'
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(132px, 1fr))',
        }}
      >
        {icons.map((iconName, key) => {
          return (
            <li key={key} className='relative flex flex-col-reverse'>
              <h3 className='truncate'>{iconName}</h3>
              <div className='relative mb-3 h-24'>
                <button
                  type='button'
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => copyToClipboard(iconName)}
                  className='absolute inset-0 flex w-full cursor-auto items-center justify-center rounded-lg border border-gray-200 text-black'
                >
                  <Icon id={iconName} width='34' height='34' />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// eslint-disable-next-line
export default {
  title: 'Components/Icon',
  component: Icon,
};

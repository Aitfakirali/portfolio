import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Layer } from './Layer';
import { Button } from '../button/Button';

const meta: Meta<typeof Layer> = {
  title: 'Components/Layer',
  component: Layer,
};
export default meta;
type Story = StoryObj<typeof Layer>;

export const LayerModale: Story = {
  render: () => {
    const [showLayer, setShowLayer] = React.useState(false);
    return (
      <div className='relative flex h-screen items-center justify-center'>
        <Button
          variant={showLayer ? 'primary' : 'secondary'}
          onClick={() => setShowLayer(!showLayer)}
        >
          {showLayer ? 'Cacher le layer' : 'Afficher le layer'}
        </Button>
        <Layer
          isShow={showLayer}
          overlayBackground='bg-black'
          overlayOpacity='bg-opacity-70'
          // onEsc={() => setShowLayer(false)}
          onClose={() => setShowLayer(false)}
          onCloseCallback={() => {
            //console.log("this get executed after the unmount of the layer")
          }}
          // isShowing={showLayer}
          modal={true}
        >
          <div className='z-50 w-96 bg-white px-6 py-12 shadow shadow-black'>
            This is the layer injected on App.js
          </div>
        </Layer>
      </div>
    );
  },
};

export const LayerBottomLeft: Story = {
  render: () => {
    const [showLayer, setShowLayer] = React.useState(false);
    return (
      <div className='relative flex h-screen items-center justify-center'>
        <Button
          variant={showLayer ? 'primary' : 'secondary'}
          onClick={() => setShowLayer(!showLayer)}
        >
          {showLayer ? 'Cacher le layer' : 'Afficher le layer'}
        </Button>
        <Layer
          isShow={showLayer}
          overlayBackground='bg-black'
          overlayOpacity='bg-opacity-70'
          // onEsc={() => setShowLayer(false)}
          onClose={() => setShowLayer(false)}
          onCloseCallback={() => {
            //console.log("this get executed after the unmount of the layer")
          }}
          // isShowing={showLayer}
          position='bottom-left'
        >
          <div className='z-50 w-96 bg-white px-6 py-12 shadow shadow-black'>
            This is the layer injected on App.js
          </div>
        </Layer>
      </div>
    );
  },
};

export const LayerBottomRight: Story = {
  render: () => {
    const [showLayer, setShowLayer] = React.useState(false);
    return (
      <div className='relative flex h-screen items-center justify-center'>
        <Button
          variant={showLayer ? 'primary' : 'secondary'}
          onClick={() => setShowLayer(!showLayer)}
        >
          {showLayer ? 'Cacher le layer' : 'Afficher le layer'}
        </Button>
        <Layer
          isShow={showLayer}
          overlayBackground='bg-black'
          overlayOpacity='bg-opacity-70'
          // onEsc={() => setShowLayer(false)}
          onClose={() => setShowLayer(false)}
          onCloseCallback={() => {
            //console.log("this get executed after the unmount of the layer")
          }}
          // isShowing={showLayer}
          position='bottom-right'
        >
          <div className='z-50 w-96 bg-white px-6 py-12 shadow shadow-black'>
            This is the layer injected on App.js
          </div>
        </Layer>
      </div>
    );
  },
};

export const LayerTopLeft: Story = {
  render: () => {
    const [showLayer, setShowLayer] = React.useState(false);
    return (
      <div className='relative flex h-screen items-center justify-center'>
        <Button
          variant={showLayer ? 'primary' : 'secondary'}
          onClick={() => setShowLayer(!showLayer)}
        >
          {showLayer ? 'Cacher le layer' : 'Afficher le layer'}
        </Button>
        <Layer
          isShow={showLayer}
          overlayBackground='bg-black'
          overlayOpacity='bg-opacity-70'
          // onEsc={() => setShowLayer(false)}
          onClose={() => setShowLayer(false)}
          onCloseCallback={() => {
            //console.log("this get executed after the unmount of the layer")
          }}
          // isShowing={showLayer}
          position='top-left'
        >
          <div className='z-50 w-96 bg-white px-6 py-12 shadow shadow-black'>
            This is the layer injected on App.js
          </div>
        </Layer>
      </div>
    );
  },
};

export const LayerTopRight: Story = {
  render: () => {
    const [showLayer, setShowLayer] = React.useState(false);
    return (
      <div className='relative flex h-screen items-center justify-center'>
        <Button
          variant={showLayer ? 'primary' : 'secondary'}
          onClick={() => setShowLayer(!showLayer)}
        >
          {showLayer ? 'Cacher le layer' : 'Afficher le layer'}
        </Button>
        <Layer
          isShow={showLayer}
          overlayBackground='bg-black'
          overlayOpacity='bg-opacity-70'
          // onEsc={() => setShowLayer(false)}
          onClose={() => setShowLayer(false)}
          onCloseCallback={() => {
            //console.log("this get executed after the unmount of the layer")
          }}
          position='top-right'
        >
          <div className='z-50 w-96 bg-white px-6 py-12 shadow shadow-black'>
            This is the layer injected on App.js
          </div>
        </Layer>
      </div>
    );
  },
};

export const LayerTopCenter: Story = {
  render: () => {
    const [showLayer, setShowLayer] = React.useState(false);
    return (
      <div className='relative flex h-screen items-center justify-center'>
        <Button
          variant={showLayer ? 'primary' : 'secondary'}
          onClick={() => setShowLayer(!showLayer)}
        >
          {showLayer ? 'Cacher le layer' : 'Afficher le layer'}
        </Button>
        <Layer
          isShow={showLayer}
          overlayBackground='bg-black'
          overlayOpacity='bg-opacity-70'
          // onEsc={() => setShowLayer(false)}
          onClose={() => setShowLayer(false)}
          onCloseCallback={() => {
            //console.log("this get executed after the unmount of the layer")
          }}
          // isShowing={showLayer}
          position='top-center'
        >
          <div className='z-50 w-96 bg-white px-6 py-12 shadow shadow-black'>
            This is the layer injected on App.js
          </div>
        </Layer>
      </div>
    );
  },
};

export const LayerBottomCenter: Story = {
  render: () => {
    const [showLayer, setShowLayer] = React.useState(false);
    return (
      <div className='relative flex h-screen items-center justify-center'>
        <Button
          variant={showLayer ? 'primary' : 'secondary'}
          onClick={() => setShowLayer(!showLayer)}
        >
          {showLayer ? 'Cacher le layer' : 'Afficher le layer'}
        </Button>
        <Layer
          isShow={showLayer}
          overlayBackground='bg-black'
          overlayOpacity='bg-opacity-70'
          // onEsc={() => setShowLayer(false)}
          onClose={() => setShowLayer(false)}
          onCloseCallback={() => {
            //console.log("this get executed after the unmount of the layer")
          }}
          // isShowing={showLayer}
          position='bottom-center'
        >
          <div className='z-50 w-96 bg-white px-6 py-12 shadow shadow-black'>
            This is the layer injected on App.js
          </div>
        </Layer>
      </div>
    );
  },
};

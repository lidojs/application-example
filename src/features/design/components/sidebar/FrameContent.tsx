import XIcon from '@duyank/icons/regular/X';
import type { LayerId, LayerType, SerializedLayers } from '@lidojs/design-core';
import { useEditor } from '@lidojs/design-editor';
import axios from 'axios';
import { type FC, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useAsync } from 'react-use';

interface Frame {
  id: string;
  img: string;
  clipPath: string;
  width: number;
  height: number;
}

export const FrameContent: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [frames, setFrames] = useState<Frame[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { actions, query } = useEditor();
  useAsync(async () => {
    const response = await axios.get<Frame[]>('/frames');
    setFrames(response.data);
    setIsLoading(false);
  }, []);
  const addFrame = async (data: Frame) => {
    actions.addFrameLayer(data, data.clipPath);
    if (isMobile) {
      onClose();
    }
  };

  const handleDrag = (event: React.DragEvent, frame: Frame) => {
    const { clientX, clientY } = event;
    const pageSize = query.getPageSize(query.activePage());
    const ratio = pageSize.width / pageSize.height;
    const frameRatio = frame.width / frame.height;
    const scale =
      ratio > frameRatio
        ? (pageSize.height * 0.5) / frame.height
        : (pageSize.width * 0.5) / frame.width;
    const data: {
      layer: LayerType;
      data: { rootId: LayerId; layers: SerializedLayers };
    } = {
      layer: 'Frame',
      data: {
        rootId: frame.id,
        layers: {
          [frame.id]: {
            type: {
              resolvedName: 'FrameLayer',
            },
            props: {
              clipPath: frame.clipPath,
              position: {
                x: 0,
                y: 0,
              },
              boxSize: {
                width: frame.width * scale,
                height: frame.height * scale,
              },
              rotate: 0,
              scale,
            },
            locked: false,
            parent: 'ROOT',
            child: [],
          },
        },
      },
    };
    actions.startDragNDrop(data, { x: clientX, y: clientY });
    event.dataTransfer.clearData('text/plain');
    event.dataTransfer.setData('text/plain', JSON.stringify(data));
    event.dataTransfer.setDragImage(new Image(), 0, 0);
  };

  return (
    <div
      css={{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        overflowY: 'auto',
        display: 'flex',
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          height: 48,
          borderBottom: '1px solid rgba(57,76,96,.15)',
          padding: '0 20px',
        }}
      >
        <p
          css={{
            lineHeight: '48px',
            fontWeight: 600,
            color: '#181C32',
            flexGrow: 1,
          }}
        >
          Frames
        </p>
        <div
          css={{
            fontSize: 20,
            flexShrink: 0,
            width: 32,
            height: 32,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={onClose}
        >
          <XIcon />
        </div>
      </div>
      <div
        css={{ flexDirection: 'column', overflowY: 'auto', display: 'flex' }}
      >
        <div
          css={{
            flexGrow: 1,
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
            gridGap: 8,
            padding: '16px',
          }}
        >
          {isLoading && <div>Loading...</div>}
          {frames.map((item, index) => (
            <div
              key={index}
              css={{
                cursor: 'pointer',
                position: 'relative',
                '-webkit-user-drag': 'element',
              }}
              onClick={() => addFrame(item)}
              onDragStart={(e) => handleDrag(e, item)}
            >
              <div css={{ paddingBottom: '100%' }} />
              <div
                css={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  alt={item.img}
                  css={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                  }}
                  src={item.img}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

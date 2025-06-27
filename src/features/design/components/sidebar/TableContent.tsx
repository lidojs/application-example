import XIcon from '@duyank/icons/regular/X';
import type { LayerId, LayerType, SerializedLayers } from '@lidojs/design-core';
import { useEditor } from '@lidojs/design-editor';
import type { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { v4 } from 'uuid';

const tableLayer = {
  type: {
    resolvedName: 'TableLayer',
  },
  props: {
    position: {
      x: 458.2781364561637,
      y: 229.60681114551085,
    },
    boxSize: {
      width: 838.5314463859182,
      height: 282,
      x: 344.41332869685516,
      y: 226.56694426649582,
    },
    rotate: 0,
    scale: 1,
    format: {
      cellSpacing: 0,
      cellPadding: 10,
      rowHeight: [100, 120, 180, 202.38026124818578],
      colWidth: [400, 400, 300, 252.3802612481859],
      rows: [
        {
          index: 1,
          height: 70,
        },
        {
          index: 2,
          height: 70,
        },
        {
          index: 3,
          height: 70,
        },
        {
          index: 4,
          height: 70,
        },
      ],
      columns: [
        {
          index: 1,
          width: 226.64958360025628,
        },
        {
          index: 2,
          width: 209.83984625240237,
        },
        {
          index: 3,
          width: 200.19218449711718,
        },
        {
          index: 4,
          width: 199.8498320361424,
        },
      ],
    },
    cells: [
      {
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(84, 84, 84)',
                fontFamily: 'Acme',
                fontSize: '18px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'bold',
                    },
                    {
                      type: 'color',
                      attrs: {
                        color: 'rgb(84, 84, 84)',
                      },
                    },
                  ],
                  text: 'Header 1',
                },
              ],
            },
          ],
        },
        row: 1,
        col: 1,
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(84, 84, 84)',
                fontFamily: 'Acme',
                fontSize: '18px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'bold',
                    },
                    {
                      type: 'color',
                      attrs: {
                        color: 'rgb(84, 84, 84)',
                      },
                    },
                  ],
                  text: 'Header 1',
                },
              ],
            },
          ],
        },
        row: 1,
        col: 2,
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(84, 84, 84)',
                fontFamily: 'Acme',
                fontSize: '18px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'bold',
                    },
                    {
                      type: 'color',
                      attrs: {
                        color: 'rgb(84, 84, 84)',
                      },
                    },
                  ],
                  text: 'Header 3',
                },
              ],
            },
          ],
        },
        row: 1,
        col: 3,
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(84, 84, 84)',
                fontFamily: 'Acme',
                fontSize: '18px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'bold',
                    },
                    {
                      type: 'color',
                      attrs: {
                        color: 'rgb(84, 84, 84)',
                      },
                    },
                  ],
                  text: 'Header 4',
                },
              ],
            },
          ],
        },
        row: 1,
        col: 4,
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(0, 0, 0)',
                fontFamily: 'Akatab',
                fontSize: '10px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'color',
                      attrs: {
                        color: 'rgb(0, 0, 0)',
                      },
                    },
                  ],
                  text: 'Content For Column 1',
                },
              ],
            },
          ],
        },
        row: 2,
        col: 1,
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(228, 5, 5)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(0, 0, 0)',
                fontFamily: 'Akatab',
                fontSize: '10px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  text: 'Content For Column 2',
                },
              ],
            },
          ],
        },
        row: 2,
        col: 2,
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(96, 25, 211)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(0, 0, 0)',
                fontFamily: 'Akatab',
                fontSize: '10px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'color',
                      attrs: {
                        color: 'rgb(0, 0, 0)',
                      },
                    },
                  ],
                  text: 'Content For Column 3',
                },
              ],
            },
          ],
        },
        row: 2,
        col: 3,
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        row: 2,
        col: 4,
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(0, 0, 0)',
                fontFamily: 'Akatab',
                fontSize: '10px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  text: 'Content For Column 4',
                },
              ],
            },
          ],
        },
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        row: 3,
        col: 3,
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(0, 0, 0)',
                fontFamily: 'Akatab',
                fontSize: '10px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  text: 'Content For Column 3',
                },
              ],
            },
          ],
        },
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        row: 3,
        col: 4,
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(0, 0, 0)',
                fontFamily: 'Akatab',
                fontSize: '10px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  text: 'Content For Column 4',
                },
              ],
            },
          ],
        },
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(0, 0, 0)',
                fontFamily: 'Akatab',
                fontSize: '10px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  text: 'Content For Column 1',
                },
              ],
            },
          ],
        },
        row: 3,
        col: 1,
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(0, 0, 0)',
                fontFamily: 'Akatab',
                fontSize: '10px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  text: 'Content For Column 2',
                },
              ],
            },
          ],
        },
        row: 3,
        col: 2,
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(0, 0, 0)',
                fontFamily: 'Akatab',
                fontSize: '10px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  text: 'Content For Column 1',
                },
              ],
            },
          ],
        },
        col: 1,
        row: 4,
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 2,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        row: 4,
        col: 2,
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(0, 0, 0)',
                fontFamily: 'Akatab',
                fontSize: '10px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  text: 'Content For Column 2',
                },
              ],
            },
          ],
        },
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 2,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        row: 4,
        col: 3,
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(0, 0, 0)',
                fontFamily: 'Akatab',
                fontSize: '10px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  text: 'Content For Column 3',
                },
              ],
            },
          ],
        },
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 2,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
      {
        value: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'center',
                color: 'rgb(0, 0, 0)',
                fontFamily: 'Akatab',
                fontSize: '10px',
                lineHeight: '1.4',
                letterSpacing: 0,
                textTransform: 'uppercase',
                marginLeft: null,
                indent: 0,
                listType: '',
              },
              content: [
                {
                  type: 'text',
                  text: 'Content For Column 4',
                },
              ],
            },
          ],
        },
        col: 4,
        row: 4,
        background: 'rgb(255,255,255)',
        border: {
          top: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          left: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          right: {
            width: 1,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
          bottom: {
            width: 2,
            color: 'rgb(0, 0, 0)',
            style: 'solid',
          },
        },
      },
    ],
    fonts: [
      {
        name: 'Acme',
        fonts: [
          {
            urls: [
              'https://fonts.gstatic.com/s/acme/v25/RrQfboBx-C5_bx3Lb23lzLk.ttf',
            ],
          },
        ],
      },
      {
        name: 'Akatab',
        fonts: [
          {
            style: 'Bold',
            urls: [
              'https://fonts.gstatic.com/s/akatab/v7/VuJzdNrK3Z7gqJE3gKLdPKNiaRpFvg.ttf',
            ],
          },
          {
            urls: [
              'https://fonts.gstatic.com/s/akatab/v7/VuJwdNrK3Z7gqJEPWIz5NIh-YA.ttf',
            ],
          },
        ],
      },
    ],
  },
};

export const TableContent: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { actions } = useEditor();

  const addTable = () => {
    actions.addLayer(tableLayer);
    if (isMobile) {
      onClose();
    }
  };
  const handleDrag = (event: React.DragEvent) => {
    const { clientX, clientY } = event;
    const id = v4();
    const data: {
      layer: LayerType;
      data: { rootId: LayerId; layers: SerializedLayers };
    } = {
      layer: 'Table',
      data: {
        rootId: id,
        layers: {
          [id]: {
            ...tableLayer,
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
          Table
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
      <div css={{ padding: '16px' }}>
        <div
          css={{ cursor: 'pointer', '-webkit-user-drag': 'element' }}
          onClick={addTable}
          onDragStart={(e) => handleDrag(e)}
        >
          <div>
            <img src="/assets/images/table/table-1.png" alt="Table" />
          </div>
        </div>
      </div>
    </div>
  );
};

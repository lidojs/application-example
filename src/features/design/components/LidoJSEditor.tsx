'use client';

import type { FontData } from '@lidojs/design-core';
import { Editor, type GetFontQuery, PageControl } from '@lidojs/design-editor';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { EditorContent } from './editor-content';
import { EditorHeader } from './editor-header';
import { LayerSettings } from './layer-settings';
import { PreviewModal } from './preview';
import { Sidebar } from './sidebar';

export const LidoJSEditor = ({
  googleFontList,
}: { googleFontList: FontData[] }) => {
  const leftSidebarRef = useRef<HTMLDivElement>(null);
  const [openPreview, setOpenPreview] = useState(false);

  const getFonts = useCallback(
    async (query: GetFontQuery) => {
      return googleFontList
        .filter((i) => !query.q || i.name.toLowerCase().includes(query.q))
        .slice(
          Number.parseInt(query?.offset ?? '', 10),
          Number.parseInt(query?.offset ?? '', 10) +
            Number.parseInt(query?.limit || '', 10),
        );
    },
    [googleFontList],
  );
  const [viewPortHeight, setViewPortHeight] = useState<number>();
  useEffect(() => {
    if (!window) return;
    const windowHeight = () => {
      setViewPortHeight(window.innerHeight);
    };
    window.addEventListener('resize', windowHeight);
    windowHeight();
    return () => {
      window.removeEventListener('resize', windowHeight);
    };
  }, []);
  const config = useMemo(
    () => ({
      assetPath: './assets',
      frame: {
        defaultImage: {
          url: './assets/images/frame-placeholder.png',
          width: 1200,
          height: 800,
        },
      },
    }),
    [],
  );

  const uploadImage = async (file: File) => {
    // TODO: to integrate with image manipulation then need update this
    return new Promise<{ url: string; thumb: string }>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve({
          url: reader.result as string,
          thumb: reader.result as string,
        });
      };
      reader.onerror = reject;
    });
  };

  return (
    <Editor config={config} getFonts={getFonts} uploadImage={uploadImage}>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
          maxHeight: viewPortHeight ? `${viewPortHeight}px` : 'auto',
        }}
      >
        <EditorHeader openPreview={() => setOpenPreview(true)} />
        {openPreview && <PreviewModal onClose={() => setOpenPreview(false)} />}
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            flex: 'auto',
            overflow: 'auto',
            background: '#EBECF0',
            '@media (max-width: 900px)': {
              flexDirection: 'column-reverse',
            },
          }}
        >
          <div
            ref={leftSidebarRef}
            css={{
              display: 'flex',
              background: 'white',
            }}
          >
            <Sidebar />
          </div>
          <div
            css={{
              flexGrow: 1,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'auto',
            }}
          >
            <LayerSettings />
            <div
              css={{
                flexGrow: 1,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <EditorContent />
            </div>
            <div
              css={{
                height: 40,
                background: '#fff',
                borderTop: '1px solid rgba(57,76,96,.15)',
                display: 'grid',
                alignItems: 'center',
                flexShrink: 0,
                '@media (max-width: 900px)': {
                  display: 'none',
                },
              }}
            >
              <PageControl />
            </div>
          </div>
        </div>
      </div>
    </Editor>
  );
};

import {
  LayerSettings as EditorLayerSettings,
  useSelectedLayers,
} from '@lidojs/design-editor';

export const LayerSettings = () => {
  const { selectedLayerIds } = useSelectedLayers();
  return (
    <div
      css={{
        background: 'white',
        borderBottom: '1px solid rgba(57,76,96,.15)',
        height: 50,
        overflowX: 'auto',
        flexShrink: 0,
        '@media (max-width: 900px)': {
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#fff',
          display: selectedLayerIds.length > 0 ? 'flex' : 'none',
          justifyContent: 'center',
          zIndex: 20,
          height: 72,
        },
      }}
    >
      <EditorLayerSettings />
    </div>
  );
};

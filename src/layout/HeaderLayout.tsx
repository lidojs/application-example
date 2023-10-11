import React, { ChangeEvent, forwardRef, ForwardRefRenderFunction, useRef } from 'react';
import PlayCircleIcon from '@duyank/icons/regular/PlayCircle';
import { downloadObjectAsJson } from '../utils/download';
import { useEditor } from '@lidojs/editor';
import Logo from '../../public/assets/logo.svg';
interface HeaderLayoutProps {
    openPreview: () => void;
}
const HeaderLayout: ForwardRefRenderFunction<HTMLDivElement, HeaderLayoutProps> = ({ openPreview }, ref) => {
    const uploadRef = useRef<HTMLInputElement>(null);
    const { actions, query } = useEditor();
    const handleExport = () => {
        downloadObjectAsJson('file', query.serialize());
    };

    const handleImport = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                const fileContent = JSON.parse(reader.result as string);
                actions.setData(fileContent);
            };
            reader.readAsText(file);
            e.target.value = '';
        }
    };
    return (
        <div
            ref={ref}
            css={{
                background: '#1E1E2D',
                padding: '12px 32px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '@media (max-width: 900px)': {
                    padding: 12,
                },
            }}
        >
            <div
                css={{
                    color: '#3d8eff',
                    fontSize: 36,
                }}
            >
                <div css={{ color: 'white', height: 46 }}>
                    <img src={Logo} css={{ maxHeight: '100%' }} />
                </div>
            </div>
            <div css={{ display: 'flex', alignItems: 'center' }}>
                <div
                    css={{
                        margin: '0 16px',
                        cursor: 'pointer',
                        color: '#fff',
                        fontWeight: 700,
                        ':hover': {
                            textDecoration: 'underline',
                        },
                    }}
                    onClick={() => uploadRef.current?.click()}
                >
                    <input
                        ref={uploadRef}
                        type="file"
                        accept="application/json"
                        onChange={handleImport}
                        css={{ display: 'none' }}
                    />
                    Import
                </div>
                <div
                    css={{
                        margin: '0 16px',
                        cursor: 'pointer',
                        color: '#fff',
                        fontWeight: 700,
                        ':hover': {
                            textDecoration: 'underline',
                        },
                    }}
                    onClick={() => handleExport()}
                >
                    Export
                </div>
                <div
                    css={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#fff',
                        lineHeight: 1,
                        background: '#3a3a4c',
                        padding: '8px 14px',
                        borderRadius: 8,
                        cursor: 'pointer',
                        ':hover': {
                            background: 'rgba(58,58,76,0.5)',
                        },
                    }}
                    onClick={openPreview}
                >
                    <div css={{ marginRight: 4, fontSize: 20 }}>
                        <PlayCircleIcon />
                    </div>{' '}
                    Preview
                </div>
            </div>
        </div>
    );
};

export default forwardRef(HeaderLayout);

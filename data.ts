import { SerializedPage } from '@lidojs/core';

export const data: SerializedPage[] = [
    {
        locked: false,
        layers: {
            ROOT: {
                type: {
                    resolvedName: 'RootLayer',
                },
                props: {
                    boxSize: {
                        width: 1640,
                        height: 924,
                    },
                    position: {
                        x: 0,
                        y: 0,
                    },
                    rotate: 0,
                    color: 'rgb(255, 255, 255)',
                    image: {
                        url: 'https://i.imgur.com/vbBynfJ.jpg',
                        thumb: 'https://i.imgur.com/vbBynfJm.jpg',
                        boxSize: {
                            width: 1640,
                            height: 1230,
                        },
                        position: {
                            x: 0,
                            y: -153,
                        },
                        rotate: 0,
                        transparency: 0.26,
                    },
                },

                locked: false,
                child: [
                    'f6761b08-a5c0-41c2-b926-8dac486ed52b',
                    'b2ef63df-aae1-446a-8f8f-9a459cbd3bf2',
                    '0db18d57-383a-4ef7-8759-2738e4b2e662',
                    'f68c4af6-7fbc-48c7-b768-8e8dd49b4e33',
                    '1c998ea6-b5de-4ecf-8952-ad582cbf047b',
                    'cf462f31-e1d8-48b5-9398-3fedd9e61fb9',
                ],
                parent: null,
            },
            'f6761b08-a5c0-41c2-b926-8dac486ed52b': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Akronim; color: rgb(84, 84, 84); font-size: 104px; text-transform: uppercase; text-align: center">LIQUID EDITOR</p>',
                    position: {
                        x: 410.6113744075829,
                        y: 71.30173775671405,
                    },
                    boxSize: {
                        width: 857.1176935229068,
                        height: 145,
                        x: 581.6066350710901,
                        y: 115.34597156398104,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Akronim',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Akronim/Akronim-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(84, 84, 84)'],
                    fontSizes: [104],
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'b2ef63df-aae1-446a-8f8f-9a459cbd3bf2': {
                type: {
                    resolvedName: 'ShapeLayer',
                },
                props: {
                    shape: 'rectangle',
                    position: {
                        x: -57.251184834123144,
                        y: 411.2259083728278,
                    },
                    boxSize: {
                        width: 1746.7298578199052,
                        height: 326.9510268562401,
                        x: -54.66034755134274,
                        y: 316.6603475513428,
                    },
                    rotate: 0,
                    color: 'rgb(166, 166, 166)',
                    transparency: 0.43,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '0db18d57-383a-4ef7-8759-2738e4b2e662': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath:
                        'path("M 0 458.6 V 41.4 C 0 18.5 18.5 0 41.4 0 h 806 c 22.9 0 41.4 18.5 41.4 41.4 v 417.1 c 0 22.9 -18.5 41.4 -41.4 41.4 h -806 C 18.6 500 0 481.5 0 458.6 C 0 458.6 0 458.6 0 458.6 Z")',
                    position: {
                        x: 21.37440758293844,
                        y: 430.8695404533589,
                    },
                    boxSize: {
                        width: 513.705464770932,
                        height: 288.95896273494594,
                        x: 25.260663507109,
                        y: 342.78107283882497,
                    },
                    rotate: 0,
                    scale: 0.577917925469892,
                    image: {
                        url: 'https://i.imgur.com/2MvVGbT.jpg',
                        thumb: 'https://i.imgur.com/2MvVGbTm.jpg',
                        boxSize: {
                            width: 888.8899999999996,
                            height: 666.6674999999998,
                        },
                        rotate: 0,
                        position: {
                            x: 0,
                            y: -134.49162079583496,
                        },
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'f68c4af6-7fbc-48c7-b768-8e8dd49b4e33': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath:
                        'path("M 0 458.6 V 41.4 C 0 18.5 18.5 0 41.4 0 h 806 c 22.9 0 41.4 18.5 41.4 41.4 v 417.1 c 0 22.9 -18.5 41.4 -41.4 41.4 h -806 C 18.6 500 0 481.5 0 458.6 C 0 458.6 0 458.6 0 458.6 Z")',
                    position: {
                        x: 563.7914691943129,
                        y: 431.80160996362747,
                    },
                    boxSize: {
                        width: 513.705464770932,
                        height: 288.95896273494594,
                        x: 25.260663507109,
                        y: 342.78107283882497,
                    },
                    rotate: 0,
                    scale: 0.577917925469892,
                    image: {
                        url: 'https://i.imgur.com/xqLlVks.jpg',
                        thumb: 'https://i.imgur.com/xqLlVksm.jpg',
                        boxSize: {
                            width: 888.8899999999996,
                            height: 1185.1866666666663,
                        },
                        rotate: 0,
                        position: {
                            x: 0,
                            y: -573.8309153955626,
                        },
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '1c998ea6-b5de-4ecf-8952-ad582cbf047b': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath:
                        'path("M 0 458.6 V 41.4 C 0 18.5 18.5 0 41.4 0 h 806 c 22.9 0 41.4 18.5 41.4 41.4 v 417.1 c 0 22.9 -18.5 41.4 -41.4 41.4 h -806 C 18.6 500 0 481.5 0 458.6 C 0 458.6 0 458.6 0 458.6 Z")',
                    position: {
                        x: 1107.5039494470773,
                        y: 432.733679473896,
                    },
                    boxSize: {
                        width: 513.705464770932,
                        height: 288.95896273494594,
                        x: 25.260663507109,
                        y: 342.78107283882497,
                    },
                    rotate: 0,
                    scale: 0.577917925469892,
                    image: {
                        url: 'https://i.imgur.com/IHTcWOG.jpg',
                        thumb: 'https://i.imgur.com/IHTcWOGm.jpg',
                        boxSize: {
                            width: 888.8899999999996,
                            height: 666.6674999999998,
                        },
                        rotate: 0,
                        position: {
                            x: 0,
                            y: 0,
                        },
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'cf462f31-e1d8-48b5-9398-3fedd9e61fb9': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Alatsi; color: rgb(84, 84, 84); font-size: 24px; text-transform: uppercase; text-align: center">NHA TRANG BEACH</p>',
                    position: {
                        x: 387.86255924170615,
                        y: 210.48025276461317,
                    },
                    boxSize: {
                        width: 857.1176935229068,
                        height: 31,
                        x: 581.6066350710901,
                        y: 115.34597156398104,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Alatsi',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Alatsi/Alatsi-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(84, 84, 84)'],
                    fontSizes: [24],
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
        },
    },
];
export const fulldata: SerializedPage[] = [
    {
        locked: false,
        layers: {
            ROOT: {
                type: {
                    resolvedName: 'RootLayer',
                },
                props: {
                    boxSize: {
                        width: 1640,
                        height: 924,
                    },
                    position: {
                        x: 0,
                        y: 0,
                    },
                    rotate: 0,
                    color: 'rgb(255, 255, 255)',
                    image: {
                        url: 'https://i.imgur.com/vbBynfJ.jpg',
                        thumb: 'https://i.imgur.com/vbBynfJm.jpg',
                        boxSize: {
                            width: 1640,
                            height: 1230,
                        },
                        position: {
                            x: 0,
                            y: -153,
                        },
                        rotate: 0,
                        transparency: 0.26,
                    },
                },
                locked: false,
                child: [
                    'f6761b08-a5c0-41c2-b926-8dac486ed52b',
                    'b2ef63df-aae1-446a-8f8f-9a459cbd3bf2',
                    '0db18d57-383a-4ef7-8759-2738e4b2e662',
                    'f68c4af6-7fbc-48c7-b768-8e8dd49b4e33',
                    '1c998ea6-b5de-4ecf-8952-ad582cbf047b',
                    'cf462f31-e1d8-48b5-9398-3fedd9e61fb9',
                ],
                parent: null,
            },
            'f6761b08-a5c0-41c2-b926-8dac486ed52b': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Akronim; color: rgb(84, 84, 84); font-size: 104px; text-transform: uppercase; text-align: center">LIQUID EDITOR</p>',
                    position: {
                        x: 410.6113744075829,
                        y: 71.30173775671405,
                    },
                    boxSize: {
                        width: 857.1176935229068,
                        height: 145,
                        x: 581.6066350710901,
                        y: 115.34597156398104,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Akronim',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Akronim/Akronim-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(84, 84, 84)'],
                    fontSizes: [104],
                },
                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'b2ef63df-aae1-446a-8f8f-9a459cbd3bf2': {
                type: {
                    resolvedName: 'ShapeLayer',
                },
                props: {
                    shape: 'rectangle',
                    position: {
                        x: -57.251184834123144,
                        y: 411.2259083728278,
                    },
                    boxSize: {
                        width: 1746.7298578199052,
                        height: 326.9510268562401,
                        x: -54.66034755134274,
                        y: 316.6603475513428,
                    },
                    rotate: 0,
                    color: 'rgb(166, 166, 166)',
                    transparency: 0.43,
                },
                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '0db18d57-383a-4ef7-8759-2738e4b2e662': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath:
                        'path("M 0 458.6 V 41.4 C 0 18.5 18.5 0 41.4 0 h 806 c 22.9 0 41.4 18.5 41.4 41.4 v 417.1 c 0 22.9 -18.5 41.4 -41.4 41.4 h -806 C 18.6 500 0 481.5 0 458.6 C 0 458.6 0 458.6 0 458.6 Z")',
                    position: {
                        x: 21.37440758293844,
                        y: 430.8695404533589,
                    },
                    boxSize: {
                        width: 513.705464770932,
                        height: 288.95896273494594,
                        x: 25.260663507109,
                        y: 342.78107283882497,
                    },
                    rotate: 0,
                    scale: 0.577917925469892,
                    image: {
                        url: 'https://i.imgur.com/2MvVGbT.jpg',
                        thumb: 'https://i.imgur.com/2MvVGbTm.jpg',
                        boxSize: {
                            width: 888.8899999999996,
                            height: 666.6674999999998,
                        },
                        rotate: 0,
                        position: {
                            x: 0,
                            y: -134.49162079583496,
                        },
                    },
                },
                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'f68c4af6-7fbc-48c7-b768-8e8dd49b4e33': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath:
                        'path("M 0 458.6 V 41.4 C 0 18.5 18.5 0 41.4 0 h 806 c 22.9 0 41.4 18.5 41.4 41.4 v 417.1 c 0 22.9 -18.5 41.4 -41.4 41.4 h -806 C 18.6 500 0 481.5 0 458.6 C 0 458.6 0 458.6 0 458.6 Z")',
                    position: {
                        x: 563.7914691943129,
                        y: 431.80160996362747,
                    },
                    boxSize: {
                        width: 513.705464770932,
                        height: 288.95896273494594,
                        x: 25.260663507109,
                        y: 342.78107283882497,
                    },
                    rotate: 0,
                    scale: 0.577917925469892,
                    image: {
                        url: 'https://i.imgur.com/xqLlVks.jpg',
                        thumb: 'https://i.imgur.com/xqLlVksm.jpg',
                        boxSize: {
                            width: 888.8899999999996,
                            height: 1185.1866666666663,
                        },
                        rotate: 0,
                        position: {
                            x: 0,
                            y: -573.8309153955626,
                        },
                    },
                },
                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '1c998ea6-b5de-4ecf-8952-ad582cbf047b': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath:
                        'path("M 0 458.6 V 41.4 C 0 18.5 18.5 0 41.4 0 h 806 c 22.9 0 41.4 18.5 41.4 41.4 v 417.1 c 0 22.9 -18.5 41.4 -41.4 41.4 h -806 C 18.6 500 0 481.5 0 458.6 C 0 458.6 0 458.6 0 458.6 Z")',
                    position: {
                        x: 1107.5039494470773,
                        y: 432.733679473896,
                    },
                    boxSize: {
                        width: 513.705464770932,
                        height: 288.95896273494594,
                        x: 25.260663507109,
                        y: 342.78107283882497,
                    },
                    rotate: 0,
                    scale: 0.577917925469892,
                    image: {
                        url: 'https://i.imgur.com/IHTcWOG.jpg',
                        thumb: 'https://i.imgur.com/IHTcWOGm.jpg',
                        boxSize: {
                            width: 888.8899999999996,
                            height: 666.6674999999998,
                        },
                        rotate: 0,
                        position: {
                            x: 0,
                            y: 0,
                        },
                    },
                },
                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'cf462f31-e1d8-48b5-9398-3fedd9e61fb9': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Alatsi; color: rgb(84, 84, 84); font-size: 24px; text-transform: uppercase; text-align: center">NHA TRANG BEACH</p>',
                    position: {
                        x: 387.86255924170615,
                        y: 210.48025276461317,
                    },
                    boxSize: {
                        width: 857.1176935229068,
                        height: 31,
                        x: 581.6066350710901,
                        y: 115.34597156398104,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Alatsi',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Alatsi/Alatsi-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(84, 84, 84)'],
                    fontSizes: [24],
                },
                locked: false,
                child: [],
                parent: 'ROOT',
            },
        },
    },
    {
        locked: false,
        layers: {
            ROOT: {
                type: {
                    resolvedName: 'RootLayer',
                },
                props: {
                    boxSize: {
                        width: 1640,
                        height: 924,
                    },
                    position: {
                        x: 0,
                        y: 0,
                    },
                    rotate: 0,
                    color: 'rgb(84, 101, 116)',
                    image: {
                        url: 'https://i.imgur.com/s7d65tS.jpg',
                        thumb: 'https://i.imgur.com/s7d65tSm.jpg',
                        boxSize: {
                            width: 1640,
                            height: 2050,
                        },
                        position: {
                            x: 0,
                            y: -563,
                        },
                        rotate: 0,
                        transparency: 0.26,
                    },
                },
                locked: false,
                child: [
                    'dee1c69a-a0a8-4d80-a862-7a4d9b712a0f',
                    '7706ae8c-7b8e-4a06-81d4-ff9d25cb8520',
                    '4b8451aa-f68f-40b0-a6cb-5259537026f3',
                    'cd0bb481-5fa5-4b56-9448-3e40d90ac897',
                    'a2002516-0acf-4dd8-a074-6dc879333be9',
                ],
                parent: null,
            },
            'dee1c69a-a0a8-4d80-a862-7a4d9b712a0f': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath:
                        'path("M 57.3 267.8 c 10.8 3.5 22.3 5.2 34.2 5.2 c 13.1 0 25.4 -1.6 36.4 -4.6 c 11.5 -3.2 21.6 -8.4 29.9 -15.4 c 8.5 -7.1 15.1 -16.4 19.8 -27.6 c 4.6 -11 6.9 -24.3 6.9 -39.5 c 0 -12.5 -1.9 -23.3 -5.7 -32.2 s -8.9 -16.4 -15.1 -22.5 c -6.1 -5.9 -13 -10.9 -20.8 -14.7 c -7.2 -3.6 -14.7 -6.8 -22.3 -9.5 c -7.3 -2.6 -14.5 -5 -21.6 -7.2 c -6.4 -2 -12.2 -4.3 -17.2 -7 c -4.4 -2.3 -8 -5.1 -10.6 -8.3 C 69 82 68 78.7 68 74.5 c 0 -5.1 1.8 -9.1 5.6 -12.4 c 4.1 -3.5 10.7 -5.3 19.5 -5.3 c 7.8 0 13.7 2.1 17.8 6.5 c 4.3 4.6 6.3 10.8 6.3 19.1 v 11.8 H 180 V 81.3 c 0 -13.8 -2.4 -26 -7 -36.3 c -4.7 -10.3 -11.1 -19 -19.1 -25.7 c -7.9 -6.6 -17.3 -11.6 -27.8 -14.7 C 115.9 1.5 105 0 93.5 0 C 82.2 0 71.1 1.5 60.7 4.6 C 50 7.7 40.5 12.5 32.3 18.9 c -8.3 6.5 -15 14.7 -19.9 24.5 c -5 9.8 -7.5 21.4 -7.5 34.4 c 0 10.2 1.2 19.3 3.6 27.1 s 5.8 14.8 10.2 20.6 c 4.3 5.8 9.3 10.8 14.9 14.9 c 5.4 3.9 11.1 7.4 17.2 10.2 c 5.8 2.8 12 5.2 18.2 7.3 c 5.9 2 11.6 3.9 17.2 5.9 c 5.3 1.9 10.4 3.8 15.2 5.9 c 4.3 1.9 8 4.1 11.2 6.6 c 2.8 2.3 5 4.9 6.6 8 c 1.5 2.9 2.3 6.7 2.3 11.1 c 0 2.7 -0.4 5.2 -1.4 7.7 c -0.8 2.3 -2.1 4.3 -4.1 6.1 c -2 1.9 -4.7 3.5 -8.3 4.8 c -3.7 1.4 -8.5 2 -14.2 2 c -5 0 -9.5 -0.7 -13.2 -2.2 c -3.6 -1.4 -6.6 -3.4 -9 -6 c -2.5 -2.6 -4.3 -5.7 -5.6 -9.4 c -1.4 -3.9 -2.1 -8.3 -2.1 -13.2 c 0 -0.7 0 -1.6 0.1 -2.6 c 0.1 -1.7 0.2 -2.7 0.2 -3.2 v -8.5 H 0.3 v 8.5 c 0 0.8 -0.1 1.8 -0.1 2.9 c -0.1 1.7 -0.2 3.4 -0.2 5 c 0 13.9 2.5 26.3 7.5 37 s 11.9 19.8 20.4 27 c 8.4 7.5 18.3 12.9 29.4 16.5 Z")',
                    position: {
                        x: 135.44688662048853,
                        y: 212.86413902053712,
                    },
                    boxSize: {
                        width: 312.0446153846154,
                        height: 462,
                    },
                    rotate: 0,
                    scale: 1.6923076923076923,
                    image: {
                        url: 'https://i.imgur.com/hjGyWbU.jpg',
                        thumb: 'https://i.imgur.com/hjGyWbUm.jpg',
                        boxSize: {
                            width: 409.46534653465346,
                            height: 273,
                        },
                        position: {
                            x: -190.61608774384547,
                            y: 0,
                        },
                        rotate: 0,
                    },
                },
                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '7706ae8c-7b8e-4a06-81d4-ff9d25cb8520': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath:
                        'path("M 75.6 215.7 h 75.7 l 14.7 48.6 h 63.6 L 147.2 0 H 82.6 L 0 264.2 h 61.3 l 14.3 -48.5 Z m 38 -128.2 l 20.4 70 H 92.9 l 20.7 -70 Z")',
                    position: {
                        x: 470.280083084443,
                        y: 214.15955766192735,
                    },
                    boxSize: {
                        width: 401.49354631136686,
                        height: 462,
                    },
                    rotate: 0,
                    scale: 1.7487414360876643,
                    image: {
                        url: 'https://i.imgur.com/cgjMEhr.jpg',
                        thumb: 'https://i.imgur.com/cgjMEhrm.jpg',
                        boxSize: {
                            width: 655.1848040663917,
                            height: 436.78986937759447,
                        },
                        position: {
                            x: -192.98175179349352,
                            y: -168.8960095197062,
                        },
                        rotate: 0,
                    },
                },
                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '4b8451aa-f68f-40b0-a6cb-5259537026f3': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath: 'path("M 0 0 v 264.2 h 163.1 v -60.3 H 61.7 V 0 Z")',
                    position: {
                        x: 902.8017231961272,
                        y: 214.15955766192735,
                    },
                    boxSize: {
                        width: 285.2022408115372,
                        height: 462,
                    },
                    rotate: 0,
                    scale: 1.7487414360876643,
                    image: {
                        url: 'https://i.imgur.com/P9Rnk1v.jpg',
                        thumb: 'https://i.imgur.com/P9Rnk1vm.jpg',
                        boxSize: {
                            width: 307.24330563591224,
                            height: 460.8649584538684,
                        },
                        position: {
                            x: -144.15330563591223,
                            y: -135.56127079871155,
                        },
                        rotate: 0,
                    },
                    color: 'rgb(241, 192, 191)',
                },
                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'cd0bb481-5fa5-4b56-9448-3e40d90ac897': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath:
                        'path("M 171.8 206.2 H 61.7 v -47.9 h 92.7 v -58.2 H 61.7 V 58.2 h 108.1 V 0 H 0 v 264.2 h 171.8 Z")',
                    position: {
                        x: 1219.0406145895167,
                        y: 211.56872037914695,
                    },
                    boxSize: {
                        width: 300.43377871986075,
                        height: 462,
                    },
                    rotate: 0,
                    scale: 1.7487414360876643,
                    image: {
                        url: 'https://i.imgur.com/UfLwAPI.jpg',
                        thumb: 'https://i.imgur.com/UfLwAPIm.jpg',
                        boxSize: {
                            width: 229.91186415363785,
                            height: 343.9896606382033,
                        },
                        position: {
                            x: -46.83445939468279,
                            y: -54.81712589674675,
                        },
                        rotate: 0,
                    },
                },
                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'a2002516-0acf-4dd8-a074-6dc879333be9': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Chewy; color: rgb(22, 22, 22); font-size: 42px; text-align: center"><strong>Shop now at www.website.com</strong></p>',
                    position: {
                        x: 502.5860979462875,
                        y: 788.9636650868879,
                    },
                    boxSize: {
                        width: 613.5789889415482,
                        height: 55,
                        x: 641.1958925750395,
                        y: 677.5576619273302,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Chewy',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Chewy/Chewy-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(22, 22, 22)'],
                    fontSizes: [42],
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
        },
    },
    {
        locked: false,
        layers: {
            ROOT: {
                type: {
                    resolvedName: 'RootLayer',
                },
                props: {
                    boxSize: {
                        width: 1640,
                        height: 924,
                    },
                    position: {
                        x: 0,
                        y: 0,
                    },
                    rotate: 0,
                    color: 'rgb(255, 220, 181)',
                    image: null,
                },

                locked: false,
                child: [
                    'f0607011-8bd7-433d-b76a-9e6cbd250b27',
                    'e3c1568b-4fb6-4912-962f-b5de186911dd',
                    '0640be17-f565-428f-b04c-a4ebdcbaf3cf',
                    'e9575524-a04a-4567-bb0a-b37341f9d7f3',
                    '99f9bc1e-02bd-42ae-ad34-22f238bbbfea',
                    '7e5dfdc3-1352-43a3-b141-e0f328800715',
                    '7fb9044c-ac31-433b-94d2-703fe4eec2ad',
                    '5e45e774-89ea-4a59-9773-02388c626e91',
                    'fa28d6fc-6ab1-4c1b-ba83-1566ce681cc9',
                    '3c68e44d-9a4a-4876-a16f-8c059dc29fb9',
                    '3218b0de-46fb-4672-923c-d62777fc0ad3',
                    '8ba66aa7-5cf3-4489-94bf-a4b7d4f91c15',
                    'dabd1f17-9580-4a83-9258-b74c176f1423',
                    'b63d7f5a-f023-4767-abff-353a738840b9',
                    'a1984724-6e18-4eea-a55a-be690ad13cdc',
                    'd1e5ddcc-07b8-4fc6-a134-977faa7848fd',
                    '556adf1b-73a0-4e1c-a5ec-923402965f21',
                    'b9811534-78c6-47a4-a0c5-40cd2383f361',
                    '9b06e1d3-c0ef-4f16-8e01-30395962aa75',
                    '2fa23792-b588-43bc-81e9-f5633737d8c6',
                    '91ee6411-3068-4824-beb8-3c4f43a12e8e',
                    'f7c90645-00e8-4e5e-8f14-a8042a558207',
                    '4ba3900d-9712-4318-8f3d-b3d83d708783',
                ],
                parent: null,
            },
            'f0607011-8bd7-433d-b76a-9e6cbd250b27': {
                type: {
                    resolvedName: 'ShapeLayer',
                },
                props: {
                    shape: 'rectangle',
                    position: {
                        x: -62.43285939968404,
                        y: -27.921011058451796,
                    },
                    boxSize: {
                        width: 891.7535545023696,
                        height: 1038.135860979463,
                        x: -15.797788309636644,
                        y: -9.78515007898892,
                    },
                    rotate: 0,
                    color: 'rgb(102, 58, 34)',
                    roundedCorners: 0,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'e3c1568b-4fb6-4912-962f-b5de186911dd': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath:
                        'path("M 500 250.002 c 0 138.065 -111.931 249.996 -250 249.996 c -138.071 0 -250 -111.931 -250 -249.996 C 0 111.93 111.929 0 250 0 s 250 111.93 250 250.002 Z")',
                    position: {
                        x: 41.037914691943115,
                        y: 565.2180094786729,
                    },
                    boxSize: {
                        width: 346.70774091627175,
                        height: 346.70774091627175,
                        x: 41.037914691943115,
                        y: 593.7172195892574,
                    },
                    rotate: 0,
                    scale: 0.6934154818325435,
                    image: {
                        url: 'https://i.imgur.com/CFJ0AJ3.jpg',
                        thumb: 'https://i.imgur.com/CFJ0AJ3m.jpg',
                        boxSize: {
                            width: 1157.5230982813919,
                            height: 1736.2846474220883,
                        },
                        rotate: 0,
                        position: {
                            x: -335.0704061604536,
                            y: -593.0325598572044,
                        },
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '0640be17-f565-428f-b04c-a4ebdcbaf3cf': {
                type: {
                    resolvedName: 'GroupLayer',
                },
                props: {
                    position: {
                        x: 48.75671406003164,
                        y: 144.73459715639808,
                    },
                    boxSize: {
                        width: 643.3605845181668,
                        height: 154.03949447077412,
                    },
                    scale: 1,
                    rotate: 0,
                },

                locked: false,
                child: ['e968878e-7ac5-471d-b183-5d1fcbc31db6', '38bfc967-8756-40d0-8beb-c3572d91670e'],
                parent: 'ROOT',
            },
            'e968878e-7ac5-471d-b183-5d1fcbc31db6': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Alata; color: rgb(255, 255, 255); font-size: 36px">Drink &amp; Refreshment</p>',
                    position: {
                        x: 0.43285939968411924,
                        y: 104.03949447077409,
                    },
                    boxSize: {
                        width: 472.3783570300159,
                        height: 50,
                        x: 60.84834123222761,
                        y: 184.00315955766192,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Alata',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Alata/Alata-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(255, 255, 255)'],
                    fontSizes: [36],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: '0640be17-f565-428f-b04c-a4ebdcbaf3cf',
            },
            '38bfc967-8756-40d0-8beb-c3572d91670e': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Alatsi; color: rgb(255, 255, 255); font-size: 80px">LIQUID COFFEE</p>',
                    position: {
                        x: -2.1316282072803006e-14,
                        y: 0,
                    },
                    boxSize: {
                        width: 643.3605845181668,
                        height: 102,
                        x: 51.34755134281203,
                        y: 65.71406003159557,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Alatsi',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Alatsi/Alatsi-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(255, 255, 255)'],
                    fontSizes: [80],
                    effect: {
                        name: 'lift',
                        settings: {
                            intensity: 50,
                        },
                    },
                },

                locked: false,
                child: [],
                parent: '0640be17-f565-428f-b04c-a4ebdcbaf3cf',
            },
            'e9575524-a04a-4567-bb0a-b37341f9d7f3': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Alata; color: rgb(255, 255, 255); font-size: 36px">+123456789</p>',
                    position: {
                        x: 52.712480252764735,
                        y: 423.2922590837282,
                    },
                    boxSize: {
                        width: 341.5410742496051,
                        height: 50,
                        x: 47.530805687203916,
                        y: 348.1579778830963,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Alata',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Alata/Alata-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(255, 255, 255)'],
                    fontSizes: [36],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '99f9bc1e-02bd-42ae-ad34-22f238bbbfea': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aleo; color: rgb(102, 58, 34); font-size: 36px"><strong>SHAKE</strong></p>',
                    position: {
                        x: 928.052132701422,
                        y: 117.21011058451812,
                    },
                    boxSize: {
                        width: 341.5410742496051,
                        height: 43,
                        x: 47.530805687203916,
                        y: 348.1579778830963,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aleo',
                            fonts: [
                                {
                                    style: 'Bold',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aleo/Aleo-Bold.woff2',
                                    ],
                                },
                                {
                                    style: 'Bold_Italic',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aleo/Aleo-Bold.woff2',
                                    ],
                                },
                                {
                                    style: 'Bold',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aleo/Aleo-Bold.woff2',
                                    ],
                                },
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aleo/Aleo-Regular.woff2',
                                    ],
                                },
                                {
                                    style: 'Italic',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aleo/Aleo-Regular.woff2',
                                    ],
                                },
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aleo/Aleo-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [36],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '7e5dfdc3-1352-43a3-b141-e0f328800715': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: justify">Strawberry</p>',
                    position: {
                        x: 930.2796208530807,
                        y: 184.20853080568716,
                    },
                    boxSize: {
                        width: 439.9928909952607,
                        height: 32,
                        x: 931.575039494471,
                        y: 182.91311216429693,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '7fb9044c-ac31-433b-94d2-703fe4eec2ad': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: right">$17</p>',
                    position: {
                        x: 1362.586097946288,
                        y: 185.1406003159557,
                    },
                    boxSize: {
                        width: 196.45418641390214,
                        height: 34,
                        x: 1350.927330173776,
                        y: 182.5497630331753,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '5e45e774-89ea-4a59-9773-02388c626e91': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: justify">Peach</p>',
                    position: {
                        x: 934.7345971563982,
                        y: 241.7756714060031,
                    },
                    boxSize: {
                        width: 439.9928909952607,
                        height: 34,
                        x: 931.575039494471,
                        y: 182.91311216429693,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'fa28d6fc-6ab1-4c1b-ba83-1566ce681cc9': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: right">$17</p>',
                    position: {
                        x: 1363.1548183254347,
                        y: 242.7077409162717,
                    },
                    boxSize: {
                        width: 196.45418641390214,
                        height: 34,
                        x: 1350.927330173776,
                        y: 182.5497630331753,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '3c68e44d-9a4a-4876-a16f-8c059dc29fb9': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: justify">Peach</p>',
                    position: {
                        x: 936.5987361769354,
                        y: 309.70616113744074,
                    },
                    boxSize: {
                        width: 439.9928909952607,
                        height: 34,
                        x: 931.575039494471,
                        y: 182.91311216429693,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '3218b0de-46fb-4672-923c-d62777fc0ad3': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: right">$17</p>',
                    position: {
                        x: 1359.8372827804112,
                        y: 309.3428120063191,
                    },
                    boxSize: {
                        width: 196.45418641390214,
                        height: 34,
                        x: 1350.927330173776,
                        y: 182.5497630331753,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '8ba66aa7-5cf3-4489-94bf-a4b7d4f91c15': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: justify">Mango</p>',
                    position: {
                        x: 933.2812006319116,
                        y: 373.7503949447077,
                    },
                    boxSize: {
                        width: 439.9928909952607,
                        height: 34,
                        x: 931.575039494471,
                        y: 182.91311216429693,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'dabd1f17-9580-4a83-9258-b74c176f1423': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: right">$17</p>',
                    position: {
                        x: 1360.4060031595582,
                        y: 374.68246445497624,
                    },
                    boxSize: {
                        width: 196.45418641390214,
                        height: 34,
                        x: 1350.927330173776,
                        y: 182.5497630331753,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'b63d7f5a-f023-4767-abff-353a738840b9': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: justify">Green Tea</p>',
                    position: {
                        x: 931.2590837282781,
                        y: 436.49921011058444,
                    },
                    boxSize: {
                        width: 439.9928909952607,
                        height: 34,
                        x: 931.575039494471,
                        y: 182.91311216429693,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'a1984724-6e18-4eea-a55a-be690ad13cdc': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: right">$17</p>',
                    position: {
                        x: 1359.6793048973145,
                        y: 437.431279620853,
                    },
                    boxSize: {
                        width: 196.45418641390214,
                        height: 34,
                        x: 1350.927330173776,
                        y: 182.5497630331753,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'd1e5ddcc-07b8-4fc6-a134-977faa7848fd': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aleo; color: rgb(102, 58, 34); font-size: 36px"><strong>COFFEE</strong></p>',
                    position: {
                        x: 925.0979462875199,
                        y: 526.1990521327014,
                    },
                    boxSize: {
                        width: 341.5410742496051,
                        height: 43,
                        x: 47.530805687203916,
                        y: 348.1579778830963,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aleo',
                            fonts: [
                                {
                                    style: 'Bold',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aleo/Aleo-Bold.woff2',
                                    ],
                                },
                                {
                                    style: 'Bold_Italic',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aleo/Aleo-Bold.woff2',
                                    ],
                                },
                                {
                                    style: 'Bold',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aleo/Aleo-Bold.woff2',
                                    ],
                                },
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aleo/Aleo-Regular.woff2',
                                    ],
                                },
                                {
                                    style: 'Italic',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aleo/Aleo-Regular.woff2',
                                    ],
                                },
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aleo/Aleo-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [36],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '556adf1b-73a0-4e1c-a5ec-923402965f21': {
                type: {
                    resolvedName: 'GroupLayer',
                },
                props: {
                    position: {
                        x: 935.0979462875199,
                        y: 593.1974723538704,
                    },
                    boxSize: {
                        width: 618.3973143759878,
                        height: 34.93206951026866,
                    },
                    scale: 1,
                    rotate: 0,
                },

                locked: false,
                child: ['53988c1b-b13f-4565-a184-05c4c56827eb', '668c7b7c-f53c-4756-9520-ad0267a81f40'],
                parent: 'ROOT',
            },
            '53988c1b-b13f-4565-a184-05c4c56827eb': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: justify">Espresso</p>',
                    position: {
                        x: 0,
                        y: 0,
                    },
                    boxSize: {
                        width: 439.9928909952607,
                        height: 34,
                        x: 931.575039494471,
                        y: 182.91311216429693,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: '556adf1b-73a0-4e1c-a5ec-923402965f21',
            },
            '668c7b7c-f53c-4756-9520-ad0267a81f40': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: right">$17</p>',
                    position: {
                        x: 421.94312796208567,
                        y: 0.9320695102686614,
                    },
                    boxSize: {
                        width: 196.45418641390214,
                        height: 34,
                        x: 1350.927330173776,
                        y: 182.5497630331753,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: '556adf1b-73a0-4e1c-a5ec-923402965f21',
            },
            'b9811534-78c6-47a4-a0c5-40cd2383f361': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: justify">Americano</p>',
                    position: {
                        x: 932.1437598736178,
                        y: 656.3096366508688,
                    },
                    boxSize: {
                        width: 439.9928909952607,
                        height: 32,
                        x: 931.575039494471,
                        y: 182.91311216429693,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '9b06e1d3-c0ef-4f16-8e01-30395962aa75': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: justify">Late</p>',
                    position: {
                        x: 934.3712480252766,
                        y: 720.7172195892575,
                    },
                    boxSize: {
                        width: 439.9928909952607,
                        height: 32,
                        x: 931.575039494471,
                        y: 182.91311216429693,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '2fa23792-b588-43bc-81e9-f5633737d8c6': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: justify">Cortado</p>',
                    position: {
                        x: 930.1216429699844,
                        y: 783.8293838862559,
                    },
                    boxSize: {
                        width: 439.9928909952607,
                        height: 32,
                        x: 931.575039494471,
                        y: 182.91311216429693,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '91ee6411-3068-4824-beb8-3c4f43a12e8e': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: right">$17</p>',
                    position: {
                        x: 1360.5639810426544,
                        y: 655.9462875197472,
                    },
                    boxSize: {
                        width: 196.45418641390214,
                        height: 32,
                        x: 1350.927330173776,
                        y: 182.5497630331753,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'f7c90645-00e8-4e5e-8f14-a8042a558207': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: right">$17</p>',
                    position: {
                        x: 1361.496050552923,
                        y: 720.3538704581357,
                    },
                    boxSize: {
                        width: 196.45418641390214,
                        height: 32,
                        x: 1350.927330173776,
                        y: 182.5497630331753,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '4ba3900d-9712-4318-8f3d-b3d83d708783': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Aldrich; color: rgb(102, 58, 34); font-size: 28px; text-align: right">$17</p>',
                    position: {
                        x: 1361.1327014218016,
                        y: 783.4660347551342,
                    },
                    boxSize: {
                        width: 196.45418641390214,
                        height: 32,
                        x: 1350.927330173776,
                        y: 182.5497630331753,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Aldrich',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Aldrich/Aldrich-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(102, 58, 34)'],
                    fontSizes: [28],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
        },
    },
    {
        locked: false,
        layers: {
            ROOT: {
                type: {
                    resolvedName: 'RootLayer',
                },
                props: {
                    boxSize: {
                        width: 1640,
                        height: 924,
                    },
                    position: {
                        x: 0,
                        y: 0,
                    },
                    rotate: 0,
                    color: 'rgb(35, 31, 32)',
                    image: null,
                },

                locked: false,
                child: [
                    '9febed47-ba8e-4f5a-b11b-bd64c0fd008a',
                    '26271552-1724-46d1-ac10-ad4a65fabdd7',
                    '90874ad4-579a-48bc-9376-d43be4831726',
                    '5ece12a7-5eab-41f6-a4c7-dc191a56f282',
                    '843c2238-c470-461c-90f7-666efb9230eb',
                    'ea8db774-ceef-4fb0-9f13-e8df163fc442',
                ],
                parent: null,
            },
            '9febed47-ba8e-4f5a-b11b-bd64c0fd008a': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Anton; color: rgb(255, 223, 43); font-size: 100px; text-align: center">SPECIAL PROMOTION</p>',
                    position: {
                        x: 36,
                        y: 102,
                    },
                    boxSize: {
                        width: 676.5,
                        height: 302,
                        x: 36,
                        y: 57,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Anton',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Anton/Anton-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(255, 223, 43)'],
                    fontSizes: [100],
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '26271552-1724-46d1-ac10-ad4a65fabdd7': {
                type: {
                    resolvedName: 'GroupLayer',
                },
                props: {
                    position: {
                        x: 1196,
                        y: 246,
                    },
                    boxSize: {
                        width: 284,
                        height: 284,
                    },
                    scale: 1,
                    rotate: 0,
                },

                locked: false,
                child: [
                    'e02e001a-8641-4e3e-9dd1-b7f403eb1ef9',
                    'e41739b4-a232-4616-925e-bf59849f8419',
                    '9f2e6a40-a37f-4763-9088-ffee601f63e0',
                ],
                parent: 'ROOT',
            },
            'e02e001a-8641-4e3e-9dd1-b7f403eb1ef9': {
                type: {
                    resolvedName: 'ShapeLayer',
                },
                props: {
                    shape: 'circle',
                    position: {
                        x: 0,
                        y: 0,
                    },
                    boxSize: {
                        width: 284,
                        height: 284,
                        x: 155,
                        y: 328,
                    },
                    rotate: 0,
                    color: 'rgb(168, 65, 54)',
                },

                locked: false,
                child: [],
                parent: '26271552-1724-46d1-ac10-ad4a65fabdd7',
            },
            'e41739b4-a232-4616-925e-bf59849f8419': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Oswald; color: rgb(255, 223, 43); font-size: 40px; text-align: center">DISCOUNTS</p>',
                    position: {
                        x: 30,
                        y: 78.39119496855346,
                    },
                    boxSize: {
                        width: 226.49999999999997,
                        height: 60,
                        x: 1231,
                        y: 295.39119496855346,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Oswald',
                            fonts: [
                                {
                                    style: 'Bold',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Oswald/Oswald-Bold.woff2',
                                    ],
                                },
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Oswald/Oswald-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(255, 223, 43)'],
                    fontSizes: [40],
                },

                locked: false,
                child: [],
                parent: '26271552-1724-46d1-ac10-ad4a65fabdd7',
            },
            '9f2e6a40-a37f-4763-9088-ffee601f63e0': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Anton; color: rgb(255, 223, 43); font-size: 100px; text-align: center">20%</p>',
                    position: {
                        x: 46,
                        y: 131.39119496855346,
                    },
                    boxSize: {
                        width: 203.49999999999997,
                        height: 77.30440251572325,
                        x: 1045,
                        y: 241.99999999999997,
                    },
                    scale: 0.5119496855345911,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Anton',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Anton/Anton-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(255, 223, 43)'],
                    fontSizes: [100],
                },

                locked: false,
                child: [],
                parent: '26271552-1724-46d1-ac10-ad4a65fabdd7',
            },
            '90874ad4-579a-48bc-9376-d43be4831726': {
                type: {
                    resolvedName: 'ImageLayer',
                },
                props: {
                    image: {
                        url: 'https://i.imgur.com/RqfoZjE.png',
                        thumb: 'https://i.imgur.com/RqfoZjEm.png',
                        boxSize: {
                            width: 1112.4117263843648,
                            height: 739.1999999999999,
                        },
                        position: {
                            x: 0,
                            y: 0,
                        },
                        rotate: 0,
                    },
                    position: {
                        x: 559.7941368078176,
                        y: 351.40000000000003,
                    },
                    boxSize: {
                        width: 1112.4117263843648,
                        height: 739.1999999999999,
                    },
                    rotate: 0,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '5ece12a7-5eab-41f6-a4c7-dc191a56f282': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Lato; color: rgb(255, 255, 255); font-size: 32px">Only for this weekend</p>',
                    position: {
                        x: 32,
                        y: 859,
                    },
                    boxSize: {
                        width: 676.5,
                        height: 39,
                        x: 36,
                        y: 57,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Lato',
                            fonts: [
                                {
                                    style: 'Bold',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Lato/Lato-Bold.woff2',
                                    ],
                                },
                                {
                                    style: 'Bold_Italic',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Lato/Lato-Bold.woff2',
                                    ],
                                },
                                {
                                    style: 'Bold',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Lato/Lato-Bold.woff2',
                                    ],
                                },
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Lato/Lato-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(255, 255, 255)'],
                    fontSizes: [32],
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '843c2238-c470-461c-90f7-666efb9230eb': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: \'Lilita One\'; color: rgb(255, 255, 255); font-size: 80px; text-align: center">BANH MI</p>',
                    position: {
                        x: 23,
                        y: 528,
                    },
                    boxSize: {
                        width: 676.5,
                        height: 92,
                        x: 36,
                        y: 57,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Lilita One',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/LilitaOne/LilitaOne-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(255, 255, 255)'],
                    fontSizes: [80],
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'ea8db774-ceef-4fb0-9f13-e8df163fc442': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: \'Lilita One\'; color: rgb(168, 65, 54); font-size: 60px; text-align: center">DAC BIET</p>',
                    position: {
                        x: 64,
                        y: 600,
                    },
                    boxSize: {
                        width: 676.5,
                        height: 68,
                        x: 36,
                        y: 57,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Lilita One',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/LilitaOne/LilitaOne-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(168, 65, 54)'],
                    fontSizes: [60],
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
        },
    },
    {
        locked: false,
        layers: {
            ROOT: {
                type: {
                    resolvedName: 'RootLayer',
                },
                props: {
                    boxSize: {
                        width: 1640,
                        height: 924,
                    },
                    position: {
                        x: 0,
                        y: 0,
                    },
                    rotate: 0,
                    color: 'rgb(255, 255, 255)',
                    image: null,
                },

                locked: false,
                child: [
                    '963204ad-1753-497a-983c-fe3d0b36b47b',
                    '408715f6-37ea-40fb-950b-d1fafda49390',
                    'e221db5d-57fb-486f-b72a-4e62068468a0',
                    '1c89601f-a661-46ae-803e-c8557a2aa22e',
                    'a49b679e-2ce4-4c00-bd08-89ccedce3393',
                    '7f36c4e1-5d8b-45b0-a4b6-242a6b778c9e',
                    '4eef8282-219b-41bd-99f7-bfd2bcb25369',
                    '98937425-98bb-4341-8e7c-b7319162d313',
                    'dc9b2375-a843-470e-9759-32fb58b119af',
                    '2e33bb4f-fbdb-495b-8804-ce68866a9afc',
                ],
                parent: null,
            },
            '963204ad-1753-497a-983c-fe3d0b36b47b': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Chewy; color: rgb(229, 107, 18); font-size: 95px; text-transform: uppercase; text-align: center">SALE</p>',
                    position: {
                        x: 218,
                        y: 127.23836126629425,
                    },
                    boxSize: {
                        width: 510.5,
                        height: 235.76163873370575,
                        x: 71,
                        y: 206,
                    },
                    scale: 1.9013035381750465,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Chewy',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Chewy/Chewy-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(229, 107, 18)'],
                    fontSizes: [95],
                    effect: {
                        name: 'hollow',
                        settings: {
                            thickness: 50,
                        },
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '408715f6-37ea-40fb-950b-d1fafda49390': {
                type: {
                    resolvedName: 'ShapeLayer',
                },
                props: {
                    shape: 'rectangle',
                    position: {
                        x: 317.96284829721355,
                        y: 522.4829721362229,
                    },
                    boxSize: {
                        width: 277.17647058823525,
                        height: 81.1888544891641,
                        x: 635.7151702786377,
                        y: 765.1455108359132,
                    },
                    rotate: 0,
                    color: 'rgb(229, 107, 18)',
                    roundedCorners: 100,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'e221db5d-57fb-486f-b72a-4e62068468a0': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: \'Bebas Neue\'; color: rgb(255, 255, 255); font-size: 40px; text-transform: uppercase; text-align: center">ORDER NOW</p>',
                    position: {
                        x: 333.2693498452013,
                        y: 535.0309597523219,
                    },
                    boxSize: {
                        width: 247.60560305896215,
                        height: 63.1702786377709,
                        x: 651.0216718266255,
                        y: 575.6130030959752,
                    },
                    scale: 1.2148130507263635,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Bebas Neue',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/BebasNeue/BebasNeue-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(255, 255, 255)'],
                    fontSizes: [40],
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '1c89601f-a661-46ae-803e-c8557a2aa22e': {
                type: {
                    resolvedName: 'ShapeLayer',
                },
                props: {
                    shape: 'rectangle',
                    position: {
                        x: -56,
                        y: -136,
                    },
                    boxSize: {
                        width: 1781,
                        height: 200,
                        x: -65,
                        y: -80,
                    },
                    rotate: 0,
                    color: 'rgb(229, 107, 18)',
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'a49b679e-2ce4-4c00-bd08-89ccedce3393': {
                type: {
                    resolvedName: 'ShapeLayer',
                },
                props: {
                    shape: 'rectangle',
                    position: {
                        x: -25,
                        y: 870,
                    },
                    boxSize: {
                        width: 1781,
                        height: 200,
                        x: -65,
                        y: -80,
                    },
                    rotate: 0,
                    color: 'rgb(229, 107, 18)',
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '7f36c4e1-5d8b-45b0-a4b6-242a6b778c9e': {
                type: {
                    resolvedName: 'ImageLayer',
                },
                props: {
                    image: {
                        url: 'https://i.imgur.com/6L0yer5.png',
                        thumb: 'https://i.imgur.com/6L0yer5m.png',
                        boxSize: {
                            width: 805.2287581699347,
                            height: 739.2,
                        },
                        position: {
                            x: 0,
                            y: 0,
                        },
                        rotate: 0,
                    },
                    position: {
                        x: 855.3856209150326,
                        y: 85.39999999999998,
                    },
                    boxSize: {
                        width: 805.2287581699347,
                        height: 739.2,
                    },
                    rotate: 0,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '4eef8282-219b-41bd-99f7-bfd2bcb25369': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Chewy; color: rgb(229, 107, 18); font-size: 120px; text-transform: uppercase; text-align: center">Special Food</p>',
                    position: {
                        x: 69,
                        y: 307.23836126629425,
                    },
                    boxSize: {
                        width: 794.5,
                        height: 157,
                        x: -65,
                        y: 155.23836126629425,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Chewy',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Chewy/Chewy-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(229, 107, 18)'],
                    fontSizes: [120],
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '98937425-98bb-4341-8e7c-b7319162d313': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Oswald; color: rgb(0, 0, 0); font-size: 18px; text-transform: uppercase"><strong>+123-456-789</strong></p>',
                    position: {
                        x: 25.99083371843642,
                        y: 798.9999579887586,
                    },
                    boxSize: {
                        width: 259.91666666666606,
                        height: 26,
                        x: 41,
                        y: 275,
                    },
                    scale: 1,
                    rotate: 0.5251966021647263,
                    fonts: [
                        {
                            name: 'Oswald',
                            fonts: [
                                {
                                    style: 'Bold',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Oswald/Oswald-Bold.woff2',
                                    ],
                                },
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Oswald/Oswald-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(0, 0, 0)'],
                    fontSizes: [18],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'dc9b2375-a843-470e-9759-32fb58b119af': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Ultra; color: rgb(229, 107, 18); font-size: 22px">More Info:</p>',
                    position: {
                        x: 27.00000000000003,
                        y: 759,
                    },
                    boxSize: {
                        width: 259.91666666666606,
                        height: 28,
                        x: 41,
                        y: 275,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Ultra',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Ultra/Ultra-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(229, 107, 18)'],
                    fontSizes: [22],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '2e33bb4f-fbdb-495b-8804-ce68866a9afc': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: \'Lilita One\'; color: rgb(0, 0, 0); font-size: 18px">www.food.com</p>',
                    position: {
                        x: 25.013749422345455,
                        y: 833.000063016862,
                    },
                    boxSize: {
                        width: 259.91666666666606,
                        height: 21,
                        x: 41,
                        y: 275,
                    },
                    scale: 1,
                    rotate: 0.5251966021647263,
                    fonts: [
                        {
                            name: 'Lilita One',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/LilitaOne/LilitaOne-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(0, 0, 0)'],
                    fontSizes: [18],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
        },
    },
    {
        locked: false,
        layers: {
            ROOT: {
                type: {
                    resolvedName: 'RootLayer',
                },
                props: {
                    boxSize: {
                        width: 1640,
                        height: 924,
                    },
                    position: {
                        x: 0,
                        y: 0,
                    },
                    rotate: 0,
                    color: 'rgb(239, 238, 238)',
                    image: null,
                },

                locked: false,
                child: [
                    'fdcc1576-7367-4c4a-96c1-2e34289afb86',
                    '18c76c30-6793-48ee-bdb5-57ef9cfcac7a',
                    'e8802327-040c-4b9a-b420-2c7725a62506',
                    '866eedfd-39e8-4590-a8d5-f39e5068974c',
                    '99113852-72c0-4e8c-bc7c-32bc6b11e69b',
                    '01c7107b-54ec-403b-b660-67fdb55db100',
                    '54d128df-b062-44cb-8ab6-59a7c678568f',
                    'f6761b08-a5c0-41c2-b926-8dac486ed52b',
                    '9e2b32e7-b184-45ae-8353-f4740d75536d',
                ],
                parent: null,
            },
            'fdcc1576-7367-4c4a-96c1-2e34289afb86': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath: 'path("M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z")',
                    position: {
                        x: 94.50197778830972,
                        y: 327.30330430989534,
                    },
                    boxSize: {
                        width: 284.9049278671006,
                        height: 423.19736173479777,
                        x: 93.20655914691943,
                        y: 260.7946287519747,
                    },
                    rotate: 0,
                    scale: 0.8463947234695957,
                    image: {
                        url: 'https://i.imgur.com/Vm0PVfp.jpg',
                        thumb: 'https://i.imgur.com/Vm0PVfpm.jpg',
                        boxSize: {
                            width: 440.6849252942363,
                            height: 661.0273879413545,
                        },
                        position: {
                            x: -101.73995880314791,
                            y: -49.808885516534986,
                        },
                        rotate: 0,
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '18c76c30-6793-48ee-bdb5-57ef9cfcac7a': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath: 'path("M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z")',
                    position: {
                        x: 308.2838349864708,
                        y: 239.6814311816677,
                    },
                    boxSize: {
                        width: 284.9049278671006,
                        height: 423.19736173479777,
                        x: 93.20655914691943,
                        y: 260.7946287519747,
                    },
                    rotate: 0,
                    scale: 0.8463947234695957,
                    image: {
                        url: 'https://i.imgur.com/iZ2cmsm.jpg',
                        thumb: 'https://i.imgur.com/iZ2cmsmm.jpg',
                        boxSize: {
                            width: 336.61,
                            height: 506.89505882352944,
                        },
                        position: {
                            x: 0,
                            y: 0,
                        },
                        rotate: 0,
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'e8802327-040c-4b9a-b420-2c7725a62506': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath: 'path("M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z")',
                    position: {
                        x: 478.7227693377513,
                        y: 325.6425566030247,
                    },
                    boxSize: {
                        width: 284.9049278671006,
                        height: 423.19736173479777,
                        x: 93.20655914691943,
                        y: 260.7946287519747,
                    },
                    rotate: 0,
                    scale: 0.8463947234695957,
                    image: {
                        url: 'https://i.imgur.com/9pHKSeF.jpg',
                        thumb: 'https://i.imgur.com/9pHKSeFm.jpg',
                        boxSize: {
                            width: 394.5026104349234,
                            height: 591.753915652385,
                        },
                        position: {
                            x: 0,
                            y: -34.26297352270976,
                        },
                        rotate: 0,
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '866eedfd-39e8-4590-a8d5-f39e5068974c': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath: 'path("M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z")',
                    position: {
                        x: 691.460328861764,
                        y: 238.8138601817034,
                    },
                    boxSize: {
                        width: 284.9049278671006,
                        height: 423.19736173479777,
                        x: 93.20655914691943,
                        y: 260.7946287519747,
                    },
                    rotate: 0,
                    scale: 0.8463947234695957,
                    image: {
                        url: 'https://i.imgur.com/uSa1yQV.jpg',
                        thumb: 'https://i.imgur.com/uSa1yQVm.jpg',
                        boxSize: {
                            width: 404.6205159655355,
                            height: 541.0783159403112,
                        },
                        position: {
                            x: -18.645993989828895,
                            y: 0,
                        },
                        rotate: 0,
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '99113852-72c0-4e8c-bc7c-32bc6b11e69b': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath: 'path("M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z")',
                    position: {
                        x: 862.692439919951,
                        y: 324.4840508306378,
                    },
                    boxSize: {
                        width: 284.9049278671006,
                        height: 423.19736173479777,
                        x: 93.20655914691943,
                        y: 260.7946287519747,
                    },
                    rotate: 0,
                    scale: 0.8463947234695957,
                    image: {
                        url: 'https://i.imgur.com/wXPmETk.jpg',
                        thumb: 'https://i.imgur.com/wXPmETkm.jpg',
                        boxSize: {
                            width: 367.3285279858777,
                            height: 550.2610618433865,
                        },
                        position: {
                            x: -30.71852798587771,
                            y: -40.17038275076316,
                        },
                        rotate: 0,
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '01c7107b-54ec-403b-b660-67fdb55db100': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath: 'path("M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z")',
                    position: {
                        x: 1074.1345808025735,
                        y: 242.5859080076356,
                    },
                    boxSize: {
                        width: 285.25136786710056,
                        height: 423.7119632023715,
                        x: 1074.1345808025735,
                        y: 242.5859080076356,
                    },
                    rotate: 0,
                    scale: 0.847423926404743,
                    image: {
                        url: 'https://i.imgur.com/XsIiZRC.jpg',
                        thumb: 'https://i.imgur.com/XsIiZRCm.jpg',
                        boxSize: {
                            width: 495.9196813647603,
                            height: 743.8174855596042,
                        },
                        position: {
                            x: 0,
                            y: -118.00469267401643,
                        },
                        rotate: 0,
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '54d128df-b062-44cb-8ab6-59a7c678568f': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath: 'path("M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z")',
                    position: {
                        x: 1246.9132314693925,
                        y: 327.21180098242166,
                    },
                    boxSize: {
                        width: 284.9049278671006,
                        height: 423.19736173479777,
                        x: 93.20655914691943,
                        y: 260.7946287519747,
                    },
                    rotate: 0,
                    scale: 0.8463947234695957,
                    image: {
                        url: 'https://i.imgur.com/ZQ4CBCt.jpg',
                        thumb: 'https://i.imgur.com/ZQ4CBCtm.jpg',
                        boxSize: {
                            width: 386.2322375156486,
                            height: 579.3483562734729,
                        },
                        position: {
                            x: 0,
                            y: -41.351864596373844,
                        },
                        rotate: 0,
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'f6761b08-a5c0-41c2-b926-8dac486ed52b': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Almarai; color: rgb(52, 49, 47); font-size: 104px; text-transform: uppercase; text-align: center">Modern room</p>',
                    position: {
                        x: 410.6113744075829,
                        y: 70.00631911532385,
                    },
                    boxSize: {
                        width: 857.1176935229068,
                        height: 116,
                        x: 581.6066350710901,
                        y: 115.34597156398104,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Almarai',
                            fonts: [
                                {
                                    style: 'Bold',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Almarai/Almarai-Bold.woff2',
                                    ],
                                },
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Almarai/Almarai-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(52, 49, 47)'],
                    fontSizes: [104],
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '9e2b32e7-b184-45ae-8353-f4740d75536d': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Almarai; color: rgb(52, 49, 47); font-size: 24px; text-transform: uppercase; text-align: center">Save time and money while satisfying all your fashion, clothing and accessory needs by visiting these best showroom</p>',
                    position: {
                        x: 384.33965244865715,
                        y: 814.5086887835704,
                    },
                    boxSize: {
                        width: 857.1176935229068,
                        height: 54,
                        x: 581.6066350710901,
                        y: 115.34597156398104,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Almarai',
                            fonts: [
                                {
                                    style: 'Bold',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Almarai/Almarai-Bold.woff2',
                                    ],
                                },
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Almarai/Almarai-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(52, 49, 47)'],
                    fontSizes: [24],
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
        },
    },
    {
        locked: false,
        layers: {
            ROOT: {
                type: {
                    resolvedName: 'RootLayer',
                },
                props: {
                    boxSize: {
                        width: 1640,
                        height: 924,
                    },
                    position: {
                        x: 0,
                        y: 0,
                    },
                    rotate: 0,
                    color: 'rgb(255, 255, 255)',
                    image: null,
                },

                locked: false,
                child: [
                    'df759d0d-9ccf-49b6-97bf-d6e2bb457f6d',
                    '9a9264bf-e103-4898-a525-89ab3b846cd0',
                    'a6a30b1d-b4e0-4c5f-88a3-6a4eb2310952',
                    '1d98f49c-01c4-4aef-b383-501eaab8e69d',
                    'b7eaf86e-0524-4807-9ee5-1b5b38dda7ae',
                    '141c0350-e27c-4e5d-926d-23378b678943',
                    'e8cbba8e-e7bb-42d9-b355-32e96cf2b83a',
                    '8daacf52-1546-489f-aea1-eba04d6d0421',
                    '35bb2e3b-63e4-46f4-a07a-5260800682db',
                ],
                parent: null,
            },
            'df759d0d-9ccf-49b6-97bf-d6e2bb457f6d': {
                type: {
                    resolvedName: 'ShapeLayer',
                },
                props: {
                    shape: 'rectangle',
                    position: {
                        x: 802.7328654484733,
                        y: 412.03914957572647,
                    },
                    boxSize: {
                        width: 895.8202501148279,
                        height: 104.65215681269899,
                        x: 735.6649925410832,
                        y: 410.2049023395328,
                    },
                    rotate: 50.61800892926624,
                    color: 'rgb(252, 191, 1)',
                    roundedCorners: 100,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '9a9264bf-e103-4898-a525-89ab3b846cd0': {
                type: {
                    resolvedName: 'ShapeLayer',
                },
                props: {
                    shape: 'rectangle',
                    position: {
                        x: 773.3781341199224,
                        y: 489.18593313960133,
                    },
                    boxSize: {
                        width: 725.6499178542341,
                        height: 104.65215681269899,
                        x: 752.3569645187401,
                        y: 480.4849835370161,
                    },
                    rotate: 50.61800892926624,
                    color: 'rgb(252, 191, 1)',
                    roundedCorners: 100,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'a6a30b1d-b4e0-4c5f-88a3-6a4eb2310952': {
                type: {
                    resolvedName: 'ShapeLayer',
                },
                props: {
                    shape: 'rectangle',
                    position: {
                        x: 1012.750139157596,
                        y: 341.72641748454055,
                    },
                    boxSize: {
                        width: 720.7931524242068,
                        height: 104.65215681269899,
                        x: 957.6402702331276,
                        y: 329.85307200463063,
                    },
                    rotate: 50.61800892926624,
                    color: 'rgb(252, 191, 1)',
                    roundedCorners: 100,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '1d98f49c-01c4-4aef-b383-501eaab8e69d': {
                type: {
                    resolvedName: 'FrameLayer',
                },
                props: {
                    clipPath:
                        'path("M 500 250.002 c 0 138.065 -111.931 249.996 -250 249.996 c -138.071 0 -250 -111.931 -250 -249.996 C 0 111.93 111.929 0 250 0 s 250 111.93 250 250.002 Z")',
                    position: {
                        x: 953.0126382306477,
                        y: 170.11532385466023,
                    },
                    boxSize: {
                        width: 577.2922590837284,
                        height: 577.2922590837284,
                        x: 888.2417061611374,
                        y: 120.88941548183263,
                    },
                    rotate: 0,
                    scale: 1.1545845181674568,
                    image: {
                        url: 'https://i.imgur.com/uSa1yQV.jpg',
                        thumb: 'https://i.imgur.com/uSa1yQVm.jpg',
                        boxSize: {
                            width: 500,
                            height: 668.6244204018548,
                        },
                        rotate: 0,
                        position: {
                            x: 0,
                            y: 0,
                        },
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'b7eaf86e-0524-4807-9ee5-1b5b38dda7ae': {
                type: {
                    resolvedName: 'ShapeLayer',
                },
                props: {
                    shape: 'rectangle',
                    position: {
                        x: -360.5248703642174,
                        y: 459.27436951488346,
                    },
                    boxSize: {
                        width: 982.230864942439,
                        height: 498.5238023828933,
                        x: -331.66416060648993,
                        y: 476.23578334121237,
                    },
                    rotate: 60.885433016338084,
                    color: 'rgb(255, 145, 77)',
                    roundedCorners: 0,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '141c0350-e27c-4e5d-926d-23378b678943': {
                type: {
                    resolvedName: 'ShapeLayer',
                },
                props: {
                    shape: 'rectangle',
                    position: {
                        x: -221.0109403106412,
                        y: 248.27503490456564,
                    },
                    boxSize: {
                        width: 1327.6580527675085,
                        height: 536.4080410683518,
                        x: -231.47576949079837,
                        y: 253.22447187503784,
                    },
                    rotate: 64.0442490257555,
                    color: 'rgb(252, 191, 1)',
                    roundedCorners: 0,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'e8cbba8e-e7bb-42d9-b355-32e96cf2b83a': {
                type: {
                    resolvedName: 'GroupLayer',
                },
                props: {
                    position: {
                        x: 186.50394944707745,
                        y: 88.14218009478674,
                    },
                    boxSize: {
                        width: 557.8759873617694,
                        height: 317.92733017377566,
                    },
                    scale: 1,
                    rotate: 0,
                },

                locked: false,
                child: ['310014bd-5382-4d18-9743-81976caaf1f9', '9750a8d3-2f8f-40ac-9142-a4e89a95df88'],
                parent: 'ROOT',
            },
            '310014bd-5382-4d18-9743-81976caaf1f9': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Oswald; color: rgb(0, 0, 0); font-size: 42px"><strong>GROW ONLINE BUSINESS</strong></p>',
                    position: {
                        x: 0,
                        y: 0,
                    },
                    boxSize: {
                        width: 557.8759873617694,
                        height: 271.4648379841794,
                        x: 231.84360189573462,
                        y: 27.25750394944709,
                    },
                    scale: 2.1892325643885435,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Oswald',
                            fonts: [
                                {
                                    style: 'Bold',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Oswald/Oswald-Bold.woff2',
                                    ],
                                },
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Oswald/Oswald-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(0, 0, 0)'],
                    fontSizes: [42],
                },

                locked: false,
                child: [],
                parent: 'e8cbba8e-e7bb-42d9-b355-32e96cf2b83a',
            },
            '9750a8d3-2f8f-40ac-9142-a4e89a95df88': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Armata; color: rgb(0, 0, 0); font-size: 36px">With Liquid editor</p>',
                    position: {
                        x: 7.339652448657148,
                        y: 272.92733017377566,
                    },
                    boxSize: {
                        width: 389.45853080568656,
                        height: 45,
                        x: 193.8436018957346,
                        y: 357.1832543443918,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Armata',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Armata/Armata-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(0, 0, 0)'],
                    fontSizes: [36],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'e8cbba8e-e7bb-42d9-b355-32e96cf2b83a',
            },
            '8daacf52-1546-489f-aea1-eba04d6d0421': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Armata; color: rgb(0, 0, 0); font-size: 36px">Boost your online store business endeavors SEO and online advertising</p>',
                    position: {
                        x: 189.59399684044232,
                        y: 468.22590837282763,
                    },
                    boxSize: {
                        width: 642.0651658767766,
                        height: 135,
                        x: 192.18483412322274,
                        y: 538.1785150078988,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Armata',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Armata/Armata-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(0, 0, 0)'],
                    fontSizes: [36],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '35bb2e3b-63e4-46f4-a07a-5260800682db': {
                type: {
                    resolvedName: 'GroupLayer',
                },
                props: {
                    position: {
                        x: 188.87835703001582,
                        y: 701.3996840442338,
                    },
                    boxSize: {
                        width: 350.9482622432853,
                        height: 146.68088467614507,
                    },
                    scale: 1,
                    rotate: 0,
                },

                locked: false,
                child: [
                    '6e4edc23-6a90-41b8-a72d-2e87caa77000',
                    '5dcdec76-fb26-45f4-bf56-9609cddb5c02',
                    '8a352679-7c9b-4bf2-92fb-fa45aebeb91d',
                ],
                parent: 'ROOT',
            },
            '6e4edc23-6a90-41b8-a72d-2e87caa77000': {
                type: {
                    resolvedName: 'ShapeLayer',
                },
                props: {
                    shape: 'rectangle',
                    position: {
                        x: 0,
                        y: 0,
                    },
                    boxSize: {
                        width: 324.3601895734597,
                        height: 69.16271721958924,
                        x: 445.3712480252765,
                        y: 542.0631911532386,
                    },
                    rotate: 0,
                    color: 'rgb(255, 255, 255)',
                    roundedCorners: 63,
                },

                locked: false,
                child: [],
                parent: '35bb2e3b-63e4-46f4-a07a-5260800682db',
            },
            '5dcdec76-fb26-45f4-bf56-9609cddb5c02': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Alfa Slab One; color: rgb(0, 0, 0); font-size: 36px; text-align: center">Learn More</p>',
                    position: {
                        x: 34.0331753554502,
                        y: 11.29699842022103,
                    },
                    boxSize: {
                        width: 246.96248025276407,
                        height: 49,
                        x: 191.8214849921011,
                        y: 699.7424960505527,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Alfa Slab One',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/AlfaSlabOne/AlfaSlabOne-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(0, 0, 0)'],
                    fontSizes: [36],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: '35bb2e3b-63e4-46f4-a07a-5260800682db',
            },
            '8a352679-7c9b-4bf2-92fb-fa45aebeb91d': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Acme; color: rgb(0, 0, 0); font-size: 36px">www.website.com</p>',
                    position: {
                        x: 5.533965244865669,
                        y: 100.68088467614507,
                    },
                    boxSize: {
                        width: 345.4142969984196,
                        height: 46,
                        x: 193.1169036334913,
                        y: 844.8293838862556,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Acme',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Acme/Acme-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(0, 0, 0)'],
                    fontSizes: [36],
                    effect: null,
                },

                locked: false,
                child: [],
                parent: '35bb2e3b-63e4-46f4-a07a-5260800682db',
            },
        },
    },
    {
        locked: false,
        layers: {
            ROOT: {
                type: {
                    resolvedName: 'RootLayer',
                },
                props: {
                    boxSize: {
                        width: 1640,
                        height: 924,
                    },
                    position: {
                        x: 0,
                        y: 0,
                    },
                    rotate: 0,
                    color: '#fff',
                    image: {
                        url: 'https://i.imgur.com/CcFOSpE.jpg',
                        thumb: 'https://i.imgur.com/CcFOSpEm.jpg',
                        boxSize: {
                            width: 1642.6666666666665,
                            height: 924,
                        },
                        position: {
                            x: -1.3333333333332575,
                            y: 0,
                        },
                        rotate: 0,
                    },
                },

                locked: false,
                child: ['e968878e-7ac5-471d-b183-5d1fcbc31db6', '38bfc967-8756-40d0-8beb-c3572d91670e'],
                parent: null,
            },
            'e968878e-7ac5-471d-b183-5d1fcbc31db6': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Acme; color: rgb(10, 46, 68); font-size: 144px; text-align: center">Welcome</p>',
                    position: {
                        x: 419.6793048973144,
                        y: 211.20695102685622,
                    },
                    boxSize: {
                        width: 801.414691943128,
                        height: 182,
                        x: 750.0110584518168,
                        y: 278.5687203791469,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Acme',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Acme/Acme-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(10, 46, 68)'],
                    fontSizes: [144],
                    effect: {
                        name: 'shadow',
                        settings: {
                            offset: 50,
                            direction: 45,
                            blur: 0,
                            transparency: 40,
                            color: 'black',
                        },
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '38bfc967-8756-40d0-8beb-c3572d91670e': {
                type: {
                    resolvedName: 'TextLayer',
                },
                props: {
                    text: '<p style="font-family: Joti One; color: rgb(10, 46, 68); font-size: 180px; text-align: center">Summer</p>',
                    position: {
                        x: 411.4739336492891,
                        y: 459.521327014218,
                    },
                    boxSize: {
                        width: 851.9229857819898,
                        height: 241,
                        x: 520.2890995260664,
                        y: 390.8641390205371,
                    },
                    scale: 1,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Joti One',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/JotiOne/JotiOne-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(10, 46, 68)'],
                    fontSizes: [180],
                    effect: {
                        name: 'lift',
                        settings: {
                            intensity: 50,
                        },
                    },
                },

                locked: false,
                child: [],
                parent: 'ROOT',
            },
        },
    },
];

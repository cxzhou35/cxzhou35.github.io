# Zicx's Homepage

Homepage 🏠: [zicx.top](https://zicx.top)

This website is built based on the <a href='https://www.craftz.dog/' target='_blank'>Takuya Matsuyama's website</a>. Thanks the author for open source.

## TODOs

- [ ] Create a 3D model just like the voxel dog used in Takuya's homepage.
- [ ] Add support for paper lists (cover, button, hover, links).
- [ ] Update my portrait.

## File structure

```bash
$PROJECT_ROOT
│   # Static files for images and 3d model file
├── public
│   # React component files
├── components
│   # Non-react third-party modules
├── lib
│   # Page files
└── pages
```

## Setup

```bash
npm i @chakra-ui/react @chakra-ui/icons @emotion/react @emotion/styled framer-motion next react react-dom
npm i -D eslint eslint-config-next prettier
npm i gh-pages --save-dev
```

## License

Please refer to [LICENSE](./LICENSE) for more information.

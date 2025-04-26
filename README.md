# Zicx's Homepage

Homepage 🏠: [zicx.top](https://zicx.top)

This website is built based on the <a href='https://www.craftz.dog/' target='_blank'>Takuya Matsuyama's website</a>. Thanks to Takuya for open source.

## TODOs

- [x] ~~Create a 3D model just like the voxel dog used in Takuya's homepage.~~
  > The Hollow Knight 3D model is designed by [@Guilherme Lé](https://sketchfab.com/3d-models/hollow-knight-fanart-aee54b0967114f4699ba25a77d467eac) ️💙
- [x] ~~Add support for paper lists (cover, button, hover, links).~~
- [x] ~~Update my portrait.~~
- [ ] Upspeed the loading of the 3D model.
- [ ] Update posts content.

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
git clone git@github.com:cxzhou35/homepage.git .
npm install # or yarn install

# develop
npm run dev

# build
npm run build
```

## License

Please refer to [LICENSE](./LICENSE) for more information.

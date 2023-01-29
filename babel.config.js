module.exports = api => {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/env',
        {
          useBuiltIns: 'usage',
          corejs: 3,
          targets: {
            browsers: ['defaults', 'ie >= 11, iOS >= 7, Android >= 4'],
            node: 'current'
          }
        }
      ],
      [
        '@babel/preset-react',
        {
          development: process.env.BABEL_ENV !== 'build'
        }
      ],
      '@babel/preset-typescript'
    ],
    env: {
      build: {
        ignore: [
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.story.tsx',
          '__snapshots__',
          '__tests__',
          '__stories__'
        ]
      }
    },
    ignore: ['node_modules']
  }
}

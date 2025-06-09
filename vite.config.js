// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'resolve-alias',
          setup(build) {
            build.onResolve({ filter: /@react-three\/drei/ }, (args) => {
              const importer = args.importer
              const resolvedPath = path.resolve('node_modules', '@react-three/drei')
              return {
                path: resolvedPath,
                namespace: 'file',
              }
            })
          },
        },
      ],
    },
  },
})
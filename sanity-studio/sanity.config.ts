import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'wos-can-code-2025',

  projectId: '5oob6xe3',
  dataset: 'lecture-recordings',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

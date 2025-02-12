import { type SchemaTypeDefinition } from 'sanity'
import novels from './novels'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [novels],
}

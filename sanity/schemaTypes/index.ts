import products  from './products'
import  user  from './user'
import { type SchemaTypeDefinition } from 'sanity'
import address from './address'
import cartItem from './cartItem'
import comments from './comments'
import favorites from './favorites'
import order from './order'
import review from './review'
import shipment from './shipment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, address, products, cartItem, order, review, shipment,comments,favorites],
}

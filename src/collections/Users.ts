import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: () => true
  },
  fields: [
     {
        name: "username",
        type: "text",
        unique: true
     }
  ],
}

export default Users

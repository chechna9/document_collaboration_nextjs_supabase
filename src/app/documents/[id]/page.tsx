import { Room } from '@/app/editor/Room'
import { CollaborativeEditor } from '@/components/liveblocks_init/CollaborativeEditor'
import React from 'react'

const EditDocument = () => {
  return (
    <main>
    <Room>
      <CollaborativeEditor />
    </Room>
  </main>
  )
}

export default EditDocument
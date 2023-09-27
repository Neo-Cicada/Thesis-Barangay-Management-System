import React from 'react'

export default function Aform() {
  return (
    <div>
      <form onSubmit={handlePost}>
        <div style={{ width: '100%', height: '10%' }}>Create Post</div>
        <textarea
          style={{ width: '100%', maxWidth: '100%', minWidth: '100%', height: '30%' }}
          placeholder='Enter Announcement'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type='file'
          accept='image/*'
          onChange={handleImageUpload}
        />
        <Divider />
        <Button sx={{ width: '100%' }} type='submit'>
          Post
        </Button>
      </form>
    </div>
  )
}

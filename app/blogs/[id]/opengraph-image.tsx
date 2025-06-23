import { ImageResponse } from 'next/og'
import { getPostMetadataForEdge } from '@/lib/blog-edge'

export const runtime = 'edge'

export const alt = 'Blog Post'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { id: string } }) {
  const post = await getPostMetadataForEdge(params.id)

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          color: '#fff',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '20px',
              lineHeight: '1.2',
              maxWidth: '900px',
            }}
          >
            {post.title || 'Blog Post'}
          </h1>
          <p
            style={{
              fontSize: '24px',
              opacity: 0.8,
              marginBottom: '30px',
              maxWidth: '800px',
              lineHeight: '1.4',
            }}
          >
            {post.description || 'Read more on Ayush Kumar Anand\'s blog'}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              fontSize: '20px',
              opacity: 0.7,
            }}
          >
            <span>By Ayush Kumar Anand</span>
            <span>•</span>
            <span>{post.date || new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

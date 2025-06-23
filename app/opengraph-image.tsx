import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Ayush Kumar Anand - Full Stack Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
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
              fontSize: '64px',
              fontWeight: 'bold',
              marginBottom: '20px',
              background: 'linear-gradient(45deg, #fff, #ccc)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Ayush Kumar Anand
          </h1>
          <p
            style={{
              fontSize: '32px',
              opacity: 0.9,
              marginBottom: '20px',
              fontWeight: '500',
            }}
          >
            Full Stack Developer
          </p>
          <p
            style={{
              fontSize: '24px',
              opacity: 0.7,
              maxWidth: '800px',
              lineHeight: '1.4',
            }}
          >
            19y/o CSAI undergrad at IIIT Delhi building useful and scalable products
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '30px',
              fontSize: '18px',
              opacity: 0.8,
            }}
          >
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Node.js</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Ayush Kumar Anand';
    const description = searchParams.get('description') || 'Full Stack Developer';

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
                fontSize: title.length > 30 ? '40px' : '48px',
                fontWeight: 'bold',
                marginBottom: '20px',
                lineHeight: '1.2',
                maxWidth: '900px',
                background: 'linear-gradient(45deg, #fff, #ccc)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {title}
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
              {description}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                fontSize: '18px',
                opacity: 0.7,
              }}
            >
              <span>www.ayushk.me</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

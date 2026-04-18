import { Title } from '../lib/data'

/**
 * Generative "key art" per title — SVG illustration with the title's
 * accent color, used as the hero image inside product tiles. Gives each
 * tile its own cinematic identity without needing bitmap assets.
 */
export default function TileArt({ title }: { title: Title }) {
  const c = title.hex
  const cd = title.hexDark

  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
      <defs>
        <radialGradient id={`g-${title.key}`} cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor={c} stopOpacity="0.9" />
          <stop offset="55%" stopColor={cd} stopOpacity="0.6" />
          <stop offset="100%" stopColor="#000" stopOpacity="1" />
        </radialGradient>
        <linearGradient id={`l-${title.key}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="85%" stopColor="#000" stopOpacity="0.85" />
        </linearGradient>
        <filter id={`n-${title.key}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0" />
        </filter>
        <pattern id={`p-${title.key}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d={`M0,12 L24,12 M12,0 L12,24`} stroke={c} strokeWidth="0.5" strokeOpacity="0.25" />
        </pattern>
      </defs>

      <rect width="800" height="600" fill={`url(#g-${title.key})`} />
      <rect width="800" height="600" fill={`url(#p-${title.key})`} opacity="0.5" />

      {/* motif layer per title */}
      <g opacity="0.9">
        {title.key === 'audience' && (
          <g fill="none" stroke={c} strokeWidth="1">
            {Array.from({ length: 14 }).map((_, i) => (
              <circle key={i} cx="400" cy="320" r={40 + i * 20} opacity={0.18 + (i % 3) * 0.08} />
            ))}
            <circle cx="400" cy="320" r="28" fill={c} />
            {Array.from({ length: 40 }).map((_, i) => {
              const a = (i / 40) * Math.PI * 2
              const r = 140 + (i % 4) * 40
              return (
                <circle
                  key={i + 'd'}
                  cx={400 + Math.cos(a) * r}
                  cy={320 + Math.sin(a) * r}
                  r="3"
                  fill={c}
                  opacity={0.4 + (i % 3) * 0.2}
                />
              )
            })}
          </g>
        )}

        {title.key === 'creative' && (
          <g>
            {[0, 30, 60, 90, 120, 150].map((a, i) => (
              <rect
                key={i}
                x={400 - 120}
                y={320 - 120}
                width="240"
                height="240"
                fill="none"
                stroke={c}
                strokeOpacity={0.6 - i * 0.08}
                transform={`rotate(${a} 400 320)`}
              />
            ))}
            <rect x={400 - 60} y={320 - 60} width="120" height="120" fill={c} />
            <circle cx="400" cy="320" r="22" fill="#000" />
          </g>
        )}

        {title.key === 'media' && (
          <g>
            {Array.from({ length: 9 }).map((_, row) => (
              <g key={row}>
                {Array.from({ length: 10 }).map((_, col) => {
                  const x = 100 + col * 70
                  const y = 120 + row * 50
                  return <rect key={col} x={x} y={y} width="4" height={8 + (col % 3) * 6} fill={c} opacity={0.3 + ((row + col) % 4) * 0.18} />
                })}
              </g>
            ))}
            <circle cx="400" cy="320" r="48" fill={c} />
            <circle cx="400" cy="320" r="80" fill="none" stroke={c} strokeOpacity="0.5">
              <animate attributeName="r" from="80" to="220" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.7" to="0" dur="2.4s" repeatCount="indefinite" />
            </circle>
          </g>
        )}

        {title.key === 'happy-hour' && (
          <g>
            {/* cocktail glass silhouette */}
            <path
              d="M260,180 L540,180 L430,360 L430,460 L500,470 L500,490 L300,490 L300,470 L370,460 L370,360 Z"
              fill={c}
              opacity="0.9"
            />
            {/* olive/garnish */}
            <circle cx="360" cy="250" r="14" fill="#000" />
            <circle cx="360" cy="250" r="5" fill={c} />
            {/* bubbles */}
            {Array.from({ length: 18 }).map((_, i) => (
              <circle
                key={i}
                cx={200 + (i * 23) % 400}
                cy={500 - (i * 17) % 400}
                r={2 + (i % 3)}
                fill={c}
                opacity={0.4 + (i % 3) * 0.2}
              />
            ))}
          </g>
        )}

        {title.key === 'content-cabal' && (
          <g>
            {/* nested vertical frames suggesting shorts/reels */}
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={i}
                x={400 - 60 + i * 60 - 90}
                y={220}
                width="120"
                height="200"
                rx="10"
                fill="none"
                stroke={c}
                strokeWidth="2"
                strokeOpacity={0.5 - i * 0.08}
                transform={`rotate(${-8 + i * 5} ${400 - 60 + i * 60 - 30} 320)`}
              />
            ))}
            <rect x="340" y="220" width="120" height="200" rx="10" fill={c} />
            <polygon points="385,290 385,350 430,320" fill="#000" />
          </g>
        )}

        {title.key === 'chlorophyll' && (
          <g>
            {/* wheat-like fronds */}
            {Array.from({ length: 7 }).map((_, i) => {
              const x = 180 + i * 75
              return (
                <g key={i}>
                  <line x1={x} y1="490" x2={x + 8} y2="180" stroke={c} strokeWidth="2" />
                  {Array.from({ length: 5 }).map((_, j) => (
                    <ellipse
                      key={j}
                      cx={x + 4}
                      cy={220 + j * 40}
                      rx="14"
                      ry="6"
                      fill={c}
                      opacity={0.5 + j * 0.08}
                      transform={`rotate(${j % 2 ? 20 : -20} ${x + 4} ${220 + j * 40})`}
                    />
                  ))}
                </g>
              )
            })}
          </g>
        )}
      </g>

      {/* noise overlay */}
      <rect width="800" height="600" filter={`url(#n-${title.key})`} opacity="0.35" />
      {/* bottom scrim for legibility */}
      <rect width="800" height="600" fill={`url(#l-${title.key})`} />
    </svg>
  )
}

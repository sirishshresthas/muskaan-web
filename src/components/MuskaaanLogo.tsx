export function MuskaaanLogo({ height = 32, className = '' }: { height?: number; className?: string }) {
  const width = Math.round(height * (296.58 / 79.38))
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 296.58 79.38"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="müskaan"
      role="img"
    >
      <text
        transform="translate(0 62.32)"
        style={{ fill: 'currentColor', fontFamily: "'Quicksand', sans-serif", fontSize: 72, fontWeight: 400 }}
      >
        <tspan x="0" y="0">m</tspan>
      </text>
      <text
        transform="translate(62 62.32)"
        style={{ fill: '#27aae1', fontFamily: "'Dosis', sans-serif", fontSize: 72, fontWeight: 500 }}
      >
        <tspan x="0" y="0">u</tspan>
      </text>
      <circle cx="71" cy="19.32" r="4" fill="#f59e0b" />
      <circle cx="90" cy="19.32" r="4" fill="#f59e0b" />
      <text
        transform="translate(97.5 62.32)"
        style={{ fill: 'currentColor', fontFamily: "'Quicksand', sans-serif", fontSize: 72, fontWeight: 400 }}
      >
        <tspan x="0" y="0">s</tspan>
        <tspan x="33.48" y="0">k</tspan>
        <tspan x="70.92" y="0" style={{ letterSpacing: '0.01em' }}>a</tspan>
        <tspan x="114.77" y="0">an</tspan>
      </text>
    </svg>
  )
}

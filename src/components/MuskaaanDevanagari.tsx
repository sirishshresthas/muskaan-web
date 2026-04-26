interface Props {
  className?: string
}

export function MuskaaanDevanagari({ className }: Props) {
  return (
    <svg
      viewBox="0 0 580 160"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none overflow-visible ${className ?? ''}`}
      aria-hidden="true"
    >
      <circle cx="40" cy="0" r="12" fill="#f59e0b" fillOpacity="0.12" />
      <circle cx="120" cy="0" r="12" fill="#f59e0b" fillOpacity="0.12" />
      {/* foreignObject uses the browser's HTML text shaper — required for Devanagari conjuncts */}
      <foreignObject x="0" y="0" width="580" height="160">
        <div
          // @ts-ignore — xmlns required for foreignObject HTML content
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            fontFamily: "'Noto Sans Devanagari', system-ui, sans-serif",
            fontSize: '140px',
            fontWeight: 600,
            lineHeight: 1,
            whiteSpace: 'nowrap',
            overflow: 'visible',
          }}
        >
          <span style={{ color: '#27aae1', opacity: 0.12 }}>मु</span>
          <span style={{ color: 'currentColor', opacity: 0.06 }}>स्कान</span>
        </div>
      </foreignObject>
    </svg>
  )
}

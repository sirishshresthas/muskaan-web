interface Props {
  className?: string
}

export function MuskaaanDevanagari({ className }: Props) {
  return (
    <div
      className={`select-none pointer-events-none relative overflow-visible ${className ?? ''}`}
      aria-hidden="true"
    >
      <div style={{ position: 'absolute', top: -10, left: 8, width: 15, height: 15, borderRadius: '50%', background: 'rgba(245,158,11,0.18)' }} />
      <div style={{ position: 'absolute', top: -10, left: 40, width: 15, height: 15, borderRadius: '50%', background: 'rgba(245,158,11,0.18)' }} />
      <div style={{
        fontFamily: "'Noto Sans Devanagari', system-ui, sans-serif",
        fontSize: '5.5rem',
        fontWeight: 600,
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}>
        <span style={{ color: '#27aae1', opacity: 0.22 }}>मु</span>
        <span style={{ color: 'currentColor', opacity: 0.06 }}>स्कान</span>
      </div>
    </div>
  )
}

const LOGO_URL = 'https://5dm.africa/wp-content/uploads/2025/05/Isolation_Mode.webp'

export default function Logo({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <img
      src={LOGO_URL}
      alt="5DM"
      className={className}
      style={{ height: size, width: 'auto' }}
    />
  )
}

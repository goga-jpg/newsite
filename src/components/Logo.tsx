const LOGO_URL = 'https://5dm.africa/wp-content/uploads/2025/05/Isolation_Mode.webp'

export default function Logo({ className = '', size = 36 }: { className?: string; size?: number }) {
  return (
    <img
      src={LOGO_URL}
      alt="5DM"
      width={size}
      height={size}
      className={className}
      style={{ height: size, width: 'auto' }}
    />
  )
}

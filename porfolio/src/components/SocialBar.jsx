import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { me } from '../data/data'

const socials = [
  { icon: FaGithub, href: me.socials.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: me.socials.linkedin, label: 'LinkedIn' },
  { icon: FaXTwitter, href: me.socials.twitter, label: 'Twitter' },
  { icon: FaInstagram, href: me.socials.instagram, label: 'Instagram' },
]

const SocialBar = () => {
  return (
    <>
      <div id="social-bar" style={{
        position: 'fixed', left: 20, bottom: 0,
        zIndex: 50, display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 0,
      }}>
        {socials.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            aria-label={label} data-cursor="link"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 44, height: 44,
              fontSize: 18, color: 'var(--grey)',
              transition: 'all 0.3s', borderRadius: 8,
              position: 'relative',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.textShadow = '0 0 20px rgba(0,229,255,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--grey)'
              e.currentTarget.style.textShadow = 'none'
            }}
          >
            <Icon />
          </a>
        ))}
        {/* Vertical line */}
        <div style={{
          width: 1, height: 80, marginTop: 12,
          background: 'linear-gradient(to bottom, var(--grey2), transparent)',
        }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          #social-bar { display: none !important; }
        }
      `}</style>
    </>
  )
}

export default SocialBar

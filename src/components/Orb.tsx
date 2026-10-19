// Animated orbit lines behind the page hero.
export default function Orb() {
  return (
    <div className="orb" aria-hidden="true">
      <svg aria-hidden="true" viewBox="-640 -460 1280 920">
        <ellipse rx="470" ry="146" />
        <g transform="rotate(62)">
          <ellipse rx="470" ry="146" />
        </g>
        <g transform="rotate(-62)">
          <ellipse rx="470" ry="146" />
        </g>
        <circle r="6">
          <animateMotion dur="30s" repeatCount="indefinite" path="M470 0A470 146 0 1 1 -470 0A470 146 0 1 1 470 0" />
        </circle>
        <g transform="rotate(62)">
          <circle r="5.5">
            <animateMotion dur="36s" begin="-10s" repeatCount="indefinite" path="M-470 0A470 146 0 1 1 470 0A470 146 0 1 1 -470 0" />
          </circle>
        </g>
        <g transform="rotate(-62)">
          <circle r="6">
            <animateMotion dur="42s" begin="-20s" repeatCount="indefinite" path="M470 0A470 146 0 1 0 -470 0A470 146 0 1 0 470 0" />
          </circle>
        </g>
        <circle r="5">
          <animateMotion dur="30s" begin="-15s" repeatCount="indefinite" path="M470 0A470 146 0 1 1 -470 0A470 146 0 1 1 470 0" />
        </circle>
      </svg>
    </div>
  )
}

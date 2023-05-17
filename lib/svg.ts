export function generateMusicRecordSvg(songName: string, albumUrl: string) {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
    >
      <title>${songName}</title>
      <defs>
        <radialGradient
          id="gradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="90%" stop-color="#3A3A3A" stop-opacity="0.7" />
          <stop offset="100%" stop-color="#1F1F1F" stop-opacity="0.65" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="90" fill="url(#gradient)" />
      <circle cx="100" cy="100" r="86" fill="#1F1F1F" />
      <circle cx="100" cy="100" r="79" fill="#3A3A3A" />
      <circle cx="100" cy="100" r="78" fill="#1F1F1F" />
      <circle cx="100" cy="100" r="74" fill="#3A3A3A" />
      <circle cx="100" cy="100" r="73" fill="#1F1F1F" />
      <circle cx="100" cy="100" r="69" fill="#3A3A3A" />
      <circle cx="100" cy="100" r="68" fill="#1F1F1F" />
      <clipPath id="circle-clip">
        <circle cx="100" cy="100" r="61.8" />
      </clipPath>
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 0 0"
        to="360 0 0"
        dur="10s"
        repeatCount="indefinite"
      />
      <image
        href="${albumUrl}"
        x="30"
        y="30"
        width="140"
        height="140"
        clip-path="url(#circle-clip)"
      />
    </svg>
    `;
}

const getFlagEmoji = (countryCode) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

export const FlagEmoji = ({ countryCode }) => (
  <span role="img" aria-label={`flag-${countryCode}`}>
    {getFlagEmoji(countryCode)}
  </span>
)

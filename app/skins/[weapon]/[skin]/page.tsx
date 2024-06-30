export default function Page({
  params,
}: {
  params: { weapon: string; skin: string }
}) {
  return (
    <div>
      <h1>Weapon: {params.weapon}</h1>
      <h2>Skin: {params.skin}</h2>
    </div>
  )
}

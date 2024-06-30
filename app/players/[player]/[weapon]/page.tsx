export default function Page({
  params,
}: {
  params: { player: string; weapon: string }
}) {
  return (
    <h1>
      {params.player} - {params.weapon}
    </h1>
  )
}

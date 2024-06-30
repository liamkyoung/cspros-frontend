export default function Page({ params }: { params: { weapon: string } }) {
  return <h1>Weapon: {params.weapon}</h1>
}

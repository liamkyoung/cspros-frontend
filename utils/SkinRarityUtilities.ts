import { SkinRarity } from '../types'

export function GetSkinRarityTextColor(Rarity: SkinRarity): string {
  switch (Rarity) {
    case SkinRarity.CONSUMER: // white
      return 'text-consumer'
    case SkinRarity.INDUSTRIAL: // light blue
      return 'text-industrial'
    case SkinRarity.MILSPEC: // blue
      return 'text-milspec'
    case SkinRarity.RESTRICTED: // purple
      return 'text-restricted'
    case SkinRarity.CLASSIFIED: // pink
      return 'text-classified'
    case SkinRarity.COVERT || SkinRarity.EXTRAORDINARY: // red
      return 'text-covert'
    case SkinRarity.CONTRABAND: // orange
      return 'text-contraband'
    default:
      return ''
  }

  return ''
}

export function GetSkinRarityName(Rarity: SkinRarity): string {
  switch (Rarity) {
    case SkinRarity.CONSUMER: // white
      return 'Consumer Grade'
    case SkinRarity.INDUSTRIAL: // light blue
      return 'Industrial Grade'
    case SkinRarity.MILSPEC: // blue
      return 'Mil-Spec Grade'
    case SkinRarity.RESTRICTED: // purple
      return 'Restricted'
    case SkinRarity.CLASSIFIED: // pink
      return 'Classified'
    case SkinRarity.COVERT: // red
      return 'Covert'
    case SkinRarity.EXTRAORDINARY:
      return 'Extraordinary'
    case SkinRarity.CONTRABAND: // orange
      return 'Contraband'
    default:
      return ''
  }

  return ''
}

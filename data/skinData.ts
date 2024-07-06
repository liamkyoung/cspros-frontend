import { SkinProfile, SkinRarity } from '@/types/viewmodels/types'

export const AK_REDLINE: SkinProfile = {
  uri: '/skins/ak47/redline',
  imageSrc:
    'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEmyVS7cYg3LuT94qm21GyqUpsa2j7IIDDJwI7YwvRrFi7lOa5hpfpvs_A1zI97fpmYHCU/360fx360f',
  weaponName: 'AK47',
  skinName: 'Redline',
  skinRarity: SkinRarity.CLASSIFIED,
  numberOfKills: 99,
}

export const M4_HOWL: SkinProfile = {
  uri: '/skins/m4a4/howl',
  imageSrc:
    'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f6pIl2-yYp9SnjA23-BBuNW-iLI-XJgFsZQyG_VW2lOq918e8uszLn2wj5HeAvkVdtQ/360fx360f',
  weaponName: 'M4A4',
  skinName: 'Howl',
  skinRarity: SkinRarity.CONTRABAND,
  numberOfKills: 1234,
}

export const AWP_ASIIMOV: SkinProfile = {
  uri: '/skins/awp/asiimov',
  imageSrc:
    'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7c2DMBupQn2eqVotqkiwHiqhdlMmigJtOWJwE5Zw3X8wS-yea8jcDo7c7XiSw0g89L9us/360fx360f',
  weaponName: 'AWP',
  skinName: 'Asiimov',
  skinRarity: SkinRarity.COVERT,
  numberOfKills: 5,
}

export const DEAGLE_PRINTSTREAM: SkinProfile = {
  uri: '/skins/desert-eagle/printstream',
  imageSrc:
    'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJhJKCmePnJ6nUl2Zu5Mx2gv2P9o-t21fj-RI_Nz2ncYbDcFNoYArYrgDql-3m08PptcjBn3tgs3Yis2GdwUJr9IfvpA/360fx360f',
  weaponName: 'Desert Eagle',
  skinName: 'Printstream',
  skinRarity: SkinRarity.COVERT,
  numberOfKills: 19,
}

export const DummySkins: SkinProfile[] = [
  AK_REDLINE,
  M4_HOWL,
  AWP_ASIIMOV,
  DEAGLE_PRINTSTREAM,
]

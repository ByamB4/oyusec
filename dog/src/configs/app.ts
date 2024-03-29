/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
import { ICompetition } from 'interfaces'
import { competitionTabContentTypes, competitionTabTypes } from 'utils/fake'
import { v4 } from 'uuid'
import { faker } from '@faker-js/faker'
import { IUser } from 'services/types'

export const APP_NAME = 'OyuSec'

// TODO
export const APP = {
  name: APP_NAME,
  version: '1.0.0',
  // description: 'OyuSec is a platform for the management of the competitions of the University of Oyu.',
  description: {
    mn: 'OyuSec - Make it better place to learn, practice, compete in security field in 🇲🇳',
    en: 'OyuSec - Make it better place to learn, practice, compete in security field in 🇲🇳',
  },
  category: 'ctf,oyu,security,oyusec,hz,haruulzangi,writeup,byamb4',
  subject: {
    mn: 'CTF Competition Management',
    en: 'CTF Competition Management',
  },
  author: 'ByamB4',
  creator: 'ByamB4',
  publisher: 'ByamB4',
  keywords: 'ctf,oyu,security,oyusec,hz,haruulzangi,writeup,byamb4',
}

interface IDEFAULT {
  title: string
  user: Partial<IUser>
  competition: Partial<ICompetition>
}

export const TITLE = {
  DEFAULT: 'OyuSec - Compete, Rank, Learn',
  homepage: {
    index: 'Нүүр хуудас',
  },
  challenges: {
    index: 'Бодлогууд',
  },
  competitions: {
    index: 'Тэмцээн',
  },
  account: {
    profile: 'Профайл',
  },
}

export const DEFAULT: IDEFAULT = {
  title: 'OyuSec',
  user: {
    // firstName: 'Byambadalai',
    // lastName: 'Sumiya',
    // username: 'ByamB4',
    // avatar: '/img/users/me.jpg',
    // rank: 'Hecker',
    // cover: '/img/users/cover.png',
    // socialLinks: {
    //   facebookLink: 'https://facebook.com/byamb4',
    //   instagramLink: 'https://facebook.com/byamb4',
    //   twitterLink: 'https://facebook.com/byamb4',
    //   linkedinLink: 'https://facebook.com/byamb4',
    //   githubLink: 'https://facebook.com/byamb4',
    //   youtubeLink: 'https://facebook.com/byamb4',
    // },
    // tags: [
    //   { label: 'Contributor', id: v4() },
    //   { label: 'Core', id: v4() },
    //   { label: 'Developer', id: v4() },
    // ],
  },
  competition: {
    id: v4(),
    name: 'First Blood #2',
    image: '/img/competitions/default.png',
    thumbnailImage: '/img/competitions/thumbnail.png',
    // state: {},
    slug: 'first-blood-2',
    tags: [
      { label: 'Шагналтай', id: v4() },
      { label: 'Веб', id: v4() },
    ],
    tabs: Array.from({ length: 10 }, () => ({
      id: v4(),
      visible: true,
      loginRequired: false,
      participantRequired: false,
      name: faker.name.findName(),
      // type: Math.random(  ),
      type: competitionTabTypes[Math.floor(Math.random() * competitionTabTypes.length)],
      contents: Array.from({ length: 10 }, () => ({
        id: v4(),
        type: competitionTabContentTypes[Math.floor(Math.random() * competitionTabContentTypes.length)],
        rules: Array.from({ length: 4 }, () => faker.lorem.paragraph()),
        title: faker.name.findName(),
        description: faker.lorem.paragraphs(),
      })),
    })),
    authors: Array.from({ length: 6 }, () => ({
      user: {
        id: v4(),
        firstName: 'Byambadalai',
        lastName: 'Sumiya',
        username: 'ByamB4',
        avatar: '/img/users/me.jpg',
        rank: 'Hecker',
        tags: [],
        cover: '',
      },
      competition: {
        id: v4(),
        name: 'First Blood #2',
        image: '/img/competitions/default.png',
        thumbnailImage: '/img/competitions/thumbnail.png',
        // state: {},
        slug: 'first-blood-2',
        // createdAt: ,
        createdAt: '' as any,
        endDate: '' as any,
        startDate: '' as any,
        authors: [],
        state: {} as any,
        updatedAt: '' as any,
        tags: [],
        tabs: [],
      },
    })),
  },
}

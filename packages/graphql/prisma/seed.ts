import { PrismaClient, Prisma, User } from './client'
import { db } from '../src/db'
import { faker } from '@faker-js/faker'

const userData: Prisma.UserCreateInput[] = [
  {
    address: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    nonce: 'temp',
    challenge: 'temp',
    projects: {
      create: [
        {
          title: 'Join the Prisma Slack',
          isActive: true,
        },
      ],
    },
  },
  {
    address: '0x95cED938F7991cd0dFcb48F0a06a40FA1aF46EBC',
    nonce: 'temp',
    challenge: 'temp',
    projects: {
      create: [
        {
          title: 'Join the Prisma Slack',
          isActive: true,
        },
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const data of userData) {
    const user = await db.user.create({
      data,
    })
    console.log(`Created user with address: ${user.address}`)
    await seedProjects(user)
  }
  console.log(`Seeding finished.`)
}

async function seedProjects(user: User) {
  console.log(`Seeding projects ...`)
  for (let i = 1; i <= 100; i++) {
    await db.project.create({
      data: {
        title: faker.word.words(3),
        user: { connect: { address: user.address } }
      }
    })
  }
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })

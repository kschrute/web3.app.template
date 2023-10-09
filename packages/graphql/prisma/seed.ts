import { PrismaClient, Prisma } from './client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
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
    const user = await prisma.user.create({
      data,
    })
    console.log(`Created user with address: ${user.address}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

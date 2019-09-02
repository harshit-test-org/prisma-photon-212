import Photon from '@generated/photon'

const photon = new Photon()

// A `main` function so that we can use async/await
async function main() {
  // Seed the database with users and posts
  const user = await photon.users.create({
    data: {
      date: '2015',
      email: 'pantharshit00@gmail.com',
      name: 'Harshit',
    },
  })
  console.log(user)
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })

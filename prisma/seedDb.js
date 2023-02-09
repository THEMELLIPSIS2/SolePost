const prisma = require('./prismaClient.js');
const { faker } = require('@faker-js/faker');

const tags = [
  'Nike',
  'Adidas',
  'Puma',
  'Converse',
  'Reebok',
  'New-Balance',
  'Vans',
  'Jordan',
  'Yeezy',
  'Asics',
  'Basketball',
  'Sneakers',
  'HipHop',
  'Misc',
  'Funny',
  'Event',
  'Release',
  'Rumor',
  'Collabs',
  'Retro'
];

const users = [];
const articles = [];

function mostlyTrue() {
  let num = Math.floor(Math.random() * 10) + 1;
  if (num < 8) {
    return false;
  } else {
    return true;
  }
}
function mostlyFalse() {
  let num = Math.floor(Math.random() * 10) + 1;
  if (num < 8) {
    return true;
  } else {
    return false;
  }
}

function pickTags(num = 2) {
  let assigned = [];
  let x = 0;

  while (x < num) {
    let tag = tags[Math.floor(Math.random() * tags.length)];
    if (assigned.includes(tag)) continue;
    assigned.push(tag);
    x++;
  }
  return assigned;
}

function createData(num) {
  let x = 0;

  while (x < num) {
    const user = {
      email: faker.internet.email(),
      name: faker.name.fullName(),
      user_type: faker.helpers.arrayElement(['admin', 'editor', 'contributor']),
      articles: {
        create: {
          title: faker.lorem.words(5),
          content: faker.lorem.paragraphs(5, '\n'),
          category: faker.helpers.arrayElement([
            'article',
            'interview',
            'editorial'
          ]),
          published: mostlyTrue(),
          featured: mostlyFalse(),
          release_date: mostlyFalse()
            ? faker.date.between(
                '2020-01-01T00:00:00.000Z',
                '2030-01-01T00:00:00.000Z'
              )
            : null,
          article_tag: {
            create: {
              tags: {
                connect: {
                  id: Math.floor(Math.random() * tags.length)
                }
              }
            }
          }
        }
      }
    };
    users.push(user);
    x++;
  }
}

async function seedDb() {
  for (let user of users) {
    await prisma.user.create({
      data: user,
      include: {
        articles: {
          include: {
            article_tag: {
              include: {
                tags: true
              }
            }
          }
        }
      }
    });
  }
}

async function main() {
  const genTags = tags.map((tag) => {
    return {
      name: tag
    };
  });
  await prisma.tags.createMany({
    data: genTags,
    skipDuplicates: true
  });

  createData(30);
  await seedDb();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

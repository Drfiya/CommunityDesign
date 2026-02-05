import { PrismaClient } from '../src/generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { config } from 'dotenv';

// Load environment variables
config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    const email = 'lmiller.phd.dabt@gmail.com';

    const user = await prisma.user.update({
        where: { email },
        data: { role: 'admin' },
        select: { id: true, email: true, name: true, role: true }
    });

    console.log('User role updated to admin:');
    console.log(JSON.stringify(user, null, 2));
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());

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
    const admins = await prisma.user.findMany({
        where: { role: { in: ['admin', 'owner'] } },
        select: { id: true, email: true, name: true, role: true }
    });
    console.log('Admin users:');
    console.log(JSON.stringify(admins, null, 2));
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());

import prisma from "$lib/prisma";
import { InitCache } from "$lib/server/cache";

await InitCache(prisma)
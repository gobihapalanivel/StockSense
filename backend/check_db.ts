import { prisma } from './src/config/prisma.js';

async function main() {
  // Find any DRAFT discount
  const draftDiscount = await prisma.discount.findFirst({
    where: { approvalStatus: 'DRAFT' },
    orderBy: { createdAt: 'desc' }
  });
  
  if (!draftDiscount) {
    console.log('No DRAFT discounts found to test.');
    process.exit(0);
  }

  console.log(`Found DRAFT discount: "${draftDiscount.name}" (${draftDiscount.id})`);
  console.log(`Current status: approvalStatus=${draftDiscount.approvalStatus}, isActive=${draftDiscount.isActive}`);
  
  // Try directly updating to APPROVED
  const updated = await prisma.discount.update({
    where: { id: draftDiscount.id },
    data: {
      approvalStatus: 'APPROVED',
      isActive: true
    }
  });
  
  console.log(`After update: approvalStatus=${updated.approvalStatus}, isActive=${updated.isActive}`);
  
  // Revert back to DRAFT
  await prisma.discount.update({
    where: { id: draftDiscount.id },
    data: {
      approvalStatus: 'DRAFT',
      isActive: draftDiscount.isActive
    }
  });
  console.log('Reverted back to DRAFT.');
  
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

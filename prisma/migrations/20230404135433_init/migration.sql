/*
  Warnings:

  - Added the required column `bankId` to the `land_title` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `land_title_userId_fkey` ON `land_title`;

-- DropIndex
DROP INDEX `user_has_bank_bankId_fkey` ON `user_has_bank`;

-- DropIndex
DROP INDEX `user_has_bank_userId_fkey` ON `user_has_bank`;

-- AlterTable
ALTER TABLE `land_title` ADD COLUMN `bankId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `land_title` ADD CONSTRAINT `land_title_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `land_title` ADD CONSTRAINT `land_title_bankId_fkey` FOREIGN KEY (`bankId`) REFERENCES `bank`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_bank` ADD CONSTRAINT `user_has_bank_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_bank` ADD CONSTRAINT `user_has_bank_bankId_fkey` FOREIGN KEY (`bankId`) REFERENCES `bank`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

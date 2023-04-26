/*
  Warnings:

  - You are about to drop the `user_has_land_title` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `land_title` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `user_has_bank_bankId_fkey` ON `user_has_bank`;

-- DropIndex
DROP INDEX `user_has_bank_userId_fkey` ON `user_has_bank`;

-- AlterTable
ALTER TABLE `land_title` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `user_has_land_title`;

-- AddForeignKey
ALTER TABLE `land_title` ADD CONSTRAINT `land_title_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_bank` ADD CONSTRAINT `user_has_bank_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_bank` ADD CONSTRAINT `user_has_bank_bankId_fkey` FOREIGN KEY (`bankId`) REFERENCES `bank`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

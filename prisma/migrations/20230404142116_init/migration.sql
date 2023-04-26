/*
  Warnings:

  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emailUser]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `emailUser` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `land_title_bankId_fkey` ON `land_title`;

-- DropIndex
DROP INDEX `land_title_userId_fkey` ON `land_title`;

-- DropIndex
DROP INDEX `user_email_key` ON `user`;

-- DropIndex
DROP INDEX `user_has_bank_bankId_fkey` ON `user_has_bank`;

-- DropIndex
DROP INDEX `user_has_bank_userId_fkey` ON `user_has_bank`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `email`,
    ADD COLUMN `emailUser` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_emailUser_key` ON `user`(`emailUser`);

-- AddForeignKey
ALTER TABLE `land_title` ADD CONSTRAINT `land_title_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `land_title` ADD CONSTRAINT `land_title_bankId_fkey` FOREIGN KEY (`bankId`) REFERENCES `bank`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_bank` ADD CONSTRAINT `user_has_bank_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_bank` ADD CONSTRAINT `user_has_bank_bankId_fkey` FOREIGN KEY (`bankId`) REFERENCES `bank`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

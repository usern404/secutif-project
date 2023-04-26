/*
  Warnings:

  - You are about to drop the column `name` on the `land_title` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[folio]` on the table `land_title` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `department` to the `land_title` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `land_title_bankId_fkey` ON `land_title`;

-- DropIndex
DROP INDEX `land_title_userId_fkey` ON `land_title`;

-- DropIndex
DROP INDEX `user_has_bank_bankId_fkey` ON `user_has_bank`;

-- DropIndex
DROP INDEX `user_has_bank_userId_fkey` ON `user_has_bank`;

-- AlterTable
ALTER TABLE `land_title` DROP COLUMN `name`,
    ADD COLUMN `department` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `land_title_folio_key` ON `land_title`(`folio`);

-- AddForeignKey
ALTER TABLE `land_title` ADD CONSTRAINT `land_title_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `land_title` ADD CONSTRAINT `land_title_bankId_fkey` FOREIGN KEY (`bankId`) REFERENCES `bank`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_bank` ADD CONSTRAINT `user_has_bank_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_bank` ADD CONSTRAINT `user_has_bank_bankId_fkey` FOREIGN KEY (`bankId`) REFERENCES `bank`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

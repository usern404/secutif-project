/*
  Warnings:

  - You are about to alter the column `status` on the `land_title` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

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
ALTER TABLE `land_title` MODIFY `status` ENUM('OCCUPE', 'DISPONIBLE') NOT NULL DEFAULT 'DISPONIBLE';

-- AddForeignKey
ALTER TABLE `land_title` ADD CONSTRAINT `land_title_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `land_title` ADD CONSTRAINT `land_title_bankId_fkey` FOREIGN KEY (`bankId`) REFERENCES `bank`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_bank` ADD CONSTRAINT `user_has_bank_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_bank` ADD CONSTRAINT `user_has_bank_bankId_fkey` FOREIGN KEY (`bankId`) REFERENCES `bank`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

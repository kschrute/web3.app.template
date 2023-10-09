-- CreateTable
CREATE TABLE `User` (
    `address` VARCHAR(191) NOT NULL,
    `nonce` VARCHAR(191) NOT NULL,
    `challenge` TEXT NOT NULL,
    `signature` VARCHAR(191) NULL,
    `requestCount` INTEGER NOT NULL DEFAULT 0,
    `isAuthenticated` BOOLEAN NOT NULL DEFAULT false,
    `isSubscribed` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `authenticatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`address`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `requestCount` INTEGER NOT NULL DEFAULT 0,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userAddress` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` VARCHAR(191) NOT NULL,
    `prevEventId` VARCHAR(191) NULL,
    `blockNumber` INTEGER NOT NULL,
    `logIndex` INTEGER NOT NULL,
    `blockHash` VARCHAR(191) NOT NULL,
    `transactionHash` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `args` JSON NOT NULL,
    `event` JSON NOT NULL,
    `isProcessed` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Event_blockNumber_logIndex_idx`(`blockNumber`, `logIndex`),
    INDEX `Event_blockNumber_idx`(`blockNumber`),
    INDEX `Event_logIndex_idx`(`logIndex`),
    INDEX `Event_blockHash_idx`(`blockHash`),
    INDEX `Event_transactionHash_idx`(`transactionHash`),
    INDEX `Event_name_idx`(`name`),
    INDEX `Event_address_idx`(`address`),
    INDEX `Event_isProcessed_idx`(`isProcessed`),
    INDEX `Event_address_transactionHash_idx`(`address`, `transactionHash`),
    INDEX `Event_name_address_isProcessed_blockNumber_logIndex_idx`(`name`, `address`, `isProcessed`, `blockNumber`, `logIndex`),
    INDEX `Event_name_address_isProcessed_idx`(`name`, `address`, `isProcessed`),
    INDEX `Event_name_address_transactionHash_idx`(`name`, `address`, `transactionHash`),
    INDEX `Event_name_isProcessed_blockNumber_logIndex_idx`(`name`, `isProcessed`, `blockNumber`, `logIndex`),
    INDEX `Event_name_isProcessed_createdAt_idx`(`name`, `isProcessed`, `createdAt`),
    INDEX `Event_name_isProcessed_idx`(`name`, `isProcessed`),
    UNIQUE INDEX `Event_blockHash_transactionHash_logIndex_key`(`blockHash`, `transactionHash`, `logIndex`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_userAddress_fkey` FOREIGN KEY (`userAddress`) REFERENCES `User`(`address`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_prevEventId_fkey` FOREIGN KEY (`prevEventId`) REFERENCES `Event`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

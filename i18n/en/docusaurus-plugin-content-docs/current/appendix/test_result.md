---
sidebar_position: 2
---

# Performance description

This article tests the backup and recovery performance of NineData. Through the test results, you can understand the performance data of NineData products more intuitively.

### Precautions

Database specifications, parameter configuration and other factors will affect the final test results. This test is only used as an order of magnitude reference for product performance, not as a performance standard for NineData products.

### test environment

| test object <div style={{width: '50pt'}}> | Version      | Specification                                                | Remark                                                       |
| ----------------------------------------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Alibaba Cloud ECS self-built library      | MySQL 8.0.28 | Configuration information:Specification code: ecs.c7.xlargeCPU: 4 cores 8 GBStorage: 500 GB ESSD AutoPL cloud disk (26800 IOPS) | MySQL parameter configuration:BufferPool: 4 GBskip-log-bin: 1innodb_flush_log_at_trx_commit: 0 |

### Test data volume

Generate 14 tables through Sysbench, each with 30 million pieces of data. Physical file size 100 GB. Sysbench data generation command:

```
sysbench --db-driver=mysql --mysql-host=1.1.1.1 --mysql-port=3306 --mysql-user=sysbench --mysql-password=sysbench --mysql-db=backup_test --table_size=30000000 --tables=14 --events=0 --time=300  --threads=8 oltp_read_write prepare
```

### testing method

- Full backup: perform full logical backup of the database through the NineData platform, and record the backup duration and data volume per second. For the operation process, see [Backing Up Data (Logical Backup)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/backup_and_restore/backup/logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .
- Full recovery: Full recovery of backed up files to the database through the NineData platform, recording recovery time and data volume per second. For the operation process, see [Restoring Logical Backup Data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/backup_and_restore/restore/restore_logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .

### Test Results

| test item     | performance | time consuming | File size               |
| ------------- | ----------- | -------------- | ----------------------- |
| full backup   | 38MB/s      | 46 minutes     | Backup file: 65.9 GB    |
| full recovery | 27MB/s      | 63 minutes     | Recovery files: 65.9 GB |

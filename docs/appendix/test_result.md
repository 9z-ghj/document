---
sidebar_position: 2
---

# 性能说明

本文针对 NineData 的备份恢复性能进行测试，通过测试结果，您可以更直观地了解到 NineData 产品的性能数据。

### 注意事项

数据库规格、参数配置等因素都会影响最终的测试结果，本测试仅作为产品性能的量级参考，并不作为 NineData 产品的性能标准。

### 测试环境

| 测试对象<div style={{width: '55pt'}}></div> | 版本         | 规格                                                         | 备注<div style={{width: '170pt'}}></div>                     |
| ------------------------------------------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 阿里云 ECS 自建库                           | MySQL 8.0.28 | 配置信息：<ul><li>规格代码：ecs.c7.xlarge </li><li>CPU：4 核 8 GB</li><li>存储：500 GB ESSD AutoPL云盘（26800 IOPS）</li></ul> | MySQL 参数配置：<ul><li>BufferPool：4 GB</li><li>skip-log-bin：1</li><li>innodb_flush_log_at_trx_commit：0</li></ul> |

### 测试数据量

通过 Sysbench 生成 14 张表，每张表 3000 万条数据。物理文件大小 100 GB。Sysbench 的数据生成命令：

```
sysbench --db-driver=mysql --mysql-host=1.1.1.1 --mysql-port=3306 --mysql-user=sysbench --mysql-password=sysbench --mysql-db=backup_test --table_size=30000000 --tables=14 --events=0 --time=300  --threads=8 oltp_read_write prepare
```

### 测试方法

- 全量备份：通过 NineData 平台对数据库进行全量备份。
- 全量恢复：通过 NineData 平台将备份后的文件全量恢复至数据库。

### 测试结果

| 测试项   | 性能    | 耗时    | 文件大小          |
| -------- | ------- | ------- | ----------------- |
| 全量备份 | 38 MB/s | 46 分钟 | 备份文件：65.9 GB |
| 全量恢复 | 27 MB/s | 63 分钟 | 恢复文件：65.9 GB |


---
sidebar_position: 1
---

# Introduction to Data Backup

Data backup is a data backup and recovery service based on cloud native architecture launched by NineData. It supports multi-cloud and self-built databases and other environments, and easily realizes scenarios such as disaster recovery, incremental and full data backup between multiple environments.

### Background Information

Data security is the lifeblood of a business in the digital age and the foundation for ensuring business continuity and brand reputation. Problems such as network attacks and misoperations will pose a major threat to data security.

NineData data backup service is a data protection product launched on the basis of a deep understanding of modern enterprise data characteristics and data protection needs. By making full use of cloud infrastructure, it provides users with real-time available, persistent online, and low-cost data backup services.

### Product Architecture

[![structure](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/backup_and_restore/image/structure.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/image/structure.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

### Features

| **Function**                                                 | **illustrate**                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **backup**                                                   | [Logical backup](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/logical_backup?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) : A backup method that uses database objects (such as tables, indexes, etc.) as backup objects. Support full backup, incremental backup, structure backup and other backup types. |
| [Physical backup](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/physical_backup?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) : A backup method that takes the files in the database as the backup object. |                                                              |
| **recover**                                                  | [Recovery of logical backup sets](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_logical_backup?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) and [physical backup sets](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_physical_backup?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) is supported . For logical backup sets, NineData data backup has the following recovery capabilities:Second-level RPO: After the data source node fails, the node can be restored to the data state several seconds before the failure occurred, and the data loss rate is second-level.Fine-grained recovery: supports fast recovery of row-level data. |
| **Online query of backup data**                              | Online SQL queries are supported for data in logical backup sets. Related Documentation: [Querying Backup Data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup_data_query?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) . |

### Advantage

NineData data backup products are based on cloud-native architecture. Compared with traditional backup products, they have huge advantages in security, performance, cost and other aspects:

- **Out-of-the- box** : Open an account and start protecting your data immediately, billed by usage, with no other costs.
- **Simple and easy** to use : The interface is simple and easy to understand, and it only needs simple configuration to use. There is no need to understand more terminology or learn new technologies. You can allocate more time and resources to more important business.
- **Multi-environment support** : Supports databases in multiple environments. Including public cloud, proprietary cloud, hybrid cloud, self-built database; support public or private network access.
- **Security compliance** : The backup frequency, backup cycle, and backup storage duration can be configured, and remote backup and hot and cold backup are supported. Effectively meet various security audit compliance requirements. At the same time, it supports backup data encryption and backup data transmission encryption to effectively ensure data security.
- **High availability** : Based on the distributed high-availability storage provided by mature cloud vendors, it can realize redundant data storage with multiple copies and cross-region (availability zone) disaster recovery.
- **Second-level RPO** : By monitoring and backing up database change logs in real time, RPO close to the second level can be achieved, and the integrity of business data can be protected to the greatest extent.
- **Real-time query of backup data** : Based on the self-developed computing storage engine, it can realize fast query of backup data at any point in time. When the service database fails and data is lost, data query and recovery can be completed in minutes.

### Typical usage scenarios

- **Self- built database backup in the cloud** : For reasons such as cost or control capability, enterprises may choose to build their own database on the cloud. The NineData data backup service can provide real-time backup capabilities, reduce self-built costs and improve data protection capabilities.
- **Local database backup** : The backup data is stored locally, and as the amount of data increases, a lot of costs may be incurred. You can use the NineData data backup service to back up your local database to the cloud to reduce costs and enjoy an efficient backup experience.
- **Backup to multi-cloud or multi-region** : For the sake of data reliability and security compliance, enterprises usually have business requirements for backup data to be stored in off-site or multi-cloud storage. NineData data backup supports multiple cloud vendors and covers dozens of storage regions around the world, which can help users quickly build cross-region and cross-cloud remote disaster recovery.
- **Minute-level quick recovery and emergency recovery** : Due to business logic errors, customer operation errors, etc., some data needs to be rolled back to a certain time before the wrong operation. Through the online query function of backup data, minute-level backup data recovery can be achieved to minimize losses.
- **Data Change Track Tracking** : In order to troubleshoot program bugs or other requirements, it is necessary to find the historical change track of a certain piece of data. Online query of backup data can easily realize backtracking of the complete life cycle of data and eliminate risks in time.

### Related Documentation

- [perform logical backup](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Perform physical backups](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/physical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Restoring logical backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Restoring physical backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_physical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [View backup sets](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/view_backup_sets.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Query backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup_data_query.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

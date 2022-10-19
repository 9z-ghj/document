---
sidebar_position: 0
slug: /
---



# What is Nine Data6

Nine Data is a cloud service that integrates multiple modules of SQL development, data replication, data backup, and data comparison. It supports enterprise data management in hybrid cloud (self-built database + cloud database) and multi-cloud (cloud database of different cloud vendors) architectures, greatly reducing the difficulty and cost of data operation and maintenance for enterprises.

### Background information

With the development of cloud computing, hybrid cloud and multi-cloud architecture have become the mainstream IT architecture of many enterprises. Under this IT architecture, the unified and standardized management of multiple data sources under hybrid cloud and multi-cloud architecture has become a new topic for enterprises.

NineData upgraded its data management concept and launched a set of multi-cloud, fully managed data management services. The service includes SQL development, data replication, data backup and data comparison functions. With these functions, the core application scenarios such as daily database development, data security access, production database change and release, database backup and recovery, data migration, Dr Multi-live, data warehouse and data lake construction can be easily completed.

### Functions overview

| Functions<div style={{width:'50pt'}}></div>      | instructions<div style={{width:'400pt'}}></div>              |
| ------------------------------------------------ | ------------------------------------------------------------ |
| [Data Query](/sqldev/intro_sqldev.md)            | A cloud native SQL development tool for online query and management of data, which supports multiple database types and provides capabilities such as data query, SQL development, SQL scheduled tasks and data export. Anytime, anywhere team collaboration mechanism, to achieve efficient and safe SQL development. |
| [Data Backup](/backup_and_restore/intro_back.md) | Supports backup and recovery of multiple environments and multiple types of databases. Second-level RPO, fine-grained data recovery, and online query of backup data are available. |
| [Data Replication](/replication/intro_repli.md)  | Supports real-time and batch data replication between homogeneous and heterogeneous data sources. It implements service scenarios such as data migration, remote disaster recovery, database multi-activity, and data integration between data warehouses and data lakes. |
| [Data Comparation](/compare/intro_comp.md)       | Compare the structure definition of the two data sources and the consistency of the data. In case of inconsistency, the data change SQL statement can be automatically executed on the target side to ensure the consistency of the two data sources. Database objects supported by data comparison include tables, stored procedures, functions, triggers, views, and so on. |

### Advantages

* **Multi-environment, multi-cloud seamless connection**: Support seamless data flow and management between multiple cloud vendors and self-built databases. It supports cloud platforms such as AWS, Ali Cloud, Huawei Cloud, and Tencent Cloud. Based on the self-developed network technology, users can securely access data sources in the VPC network through private networks. Through the exclusive cluster and data gateway of Jiuzhangyun, secure access and management of self-built data sources are realized.
* **Rich data sources**: supports unified management of homogeneous and heterogeneous data sources. With the development of enterprise business, a single database architecture is difficult to meet the business needs, and the combination of multiple types of database data management methods usually need to use a lot of different tools, virtually raise the operation and maintenance threshold and cost. Through the Jiuzhang Cloud platform, you can get rid of complex tools and easily manage different database types.
* **Full link Data security**: Data is the core production factor of an enterprise, and data security is the lifeblood of an enterprise. Jiuzhangyun focuses on the entire data life cycle and provides end-to-end data encryption capabilities to effectively prevent unauthorized data queries and operations and avoid service impacts caused by data leakage.
* **SAAS model**: ready-to-use, enterprise-level data management can be quickly started without server planning and pre-installation software. At the same time, Jiuzhangyun also provides complete task management capabilities, including full-link monitoring, alarm, abnormal location, and autonomous repair capabilities, which can greatly reduce the operation and maintenance investment of enterprises.
* **High availability**: All services adopt a high availability architecture with multiple nodes. In case of any node failure, requests or tasks can be quickly switched to normal nodes. In addition, lossless resumable breakpoint transmission is supported for long-running tasks such as replication, backup, and comparison. If the node on which the task is running is abnormal, data can be transferred after node switchover.


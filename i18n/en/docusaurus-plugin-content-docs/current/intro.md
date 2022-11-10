---
sidebar_position: 0
slug: /
---

# What is NineData

NineData is a cloud service that integrates multiple modules of SQL development, data replication, data backup, and data comparison. It supports enterprise data management under hybrid cloud (self-built database + cloud database) and multi-cloud (multiple different cloud vendors) architectures. Reduce the difficulty and cost of data operation and maintenance for enterprises.

### Video introduction

<iframe class="video-frame" src="https://docs.ninedata.cloud/video/NineData.mp4" sandbox="" width="100%" height="437" allowfullscreen="true" style="box-sizing: border-box; border: 0px; color-scheme: auto; color: rgb(28, 30, 33); font-family: system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"></iframe>

### Background information

With the development of cloud computing, hybrid cloud and multi-cloud architecture have become the mainstream IT architecture of many enterprises. Under this IT architecture, realizing the unified and standardized management of multiple data sources under the hybrid cloud and multi-cloud architecture has become a new topic for enterprises.

NineData upgraded the data management concept and launched a set of multi-cloud, fully managed data management services. The service includes SQL development, data replication, data backup and data comparison functions. Through these functions, core application scenarios such as daily database development, data security access, production database change and release, database backup and recovery, data migration, disaster recovery and multi-activity, data warehouse and data lake construction can be easily completed.

### Feature overview

![architecture-global](https://docs.ninedata.cloud/assets/images/architecture-global-fbab24e1edf08facd0c55989eb883303.png)

| Function                                                     | introduce                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [SQL development](https://docs-ninedata-cloud.translate.goog/sqldev/intro_sqldev?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) | A cloud-native SQL development tool for online query and management of data, supports multiple database types, and provides capabilities for data query, SQL development, SQL scheduled tasks, and data export. Team collaboration mechanism anytime, anywhere to achieve efficient and secure SQL development. |
| [Backup and restore](https://docs-ninedata-cloud.translate.goog/backup_and_restore/intro_back?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) | It supports the backup and recovery function of multi-environment and multi-type databases. It has the capabilities of second-level RPO, fine-grained data recovery, and online query of backup data. |
| [data replication](https://docs-ninedata-cloud.translate.goog/replication/intro_repli?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) | Support real-time and batch data replication between homogeneous and heterogeneous data sources. Realize business scenarios such as data migration, remote disaster recovery, database multi-activity, data warehouse and data lake data integration. |
| [Data comparison](https://docs-ninedata-cloud.translate.goog/compare/intro_comp?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) | Compare the structure definitions and data consistency of the two data sources. When there is inconsistency, the data change SQL statement can be automatically executed on the target side to ensure the consistency of the two data sources. Database objects supported by data comparison include tables, stored procedures, functions, triggers, and views. |

### Advantage

- **Multi-environment and multi-cloud seamless connection** : It supports seamless data flow and management between multiple cloud vendors and self-built databases. Cloud platforms such as AWS, Alibaba Cloud, Huawei Cloud and Tencent Cloud are supported. Based on the self-developed network technology, users' data sources in the VPC network can be securely accessed through the private network. Secure access and management of self-built data sources can be achieved through NineData's exclusive cluster and data gateway.
- **Rich data sources** : Support unified management of homogeneous and heterogeneous data sources. With the business development of an enterprise, it is difficult for a single database architecture to meet business needs, and data management methods that combine multiple types of databases usually require the use of many different tools, which virtually raises the threshold and cost of operation and maintenance. Through the NineData platform, you can easily manage different database types without complicated tools.
- **Full-link data security** : Data is the core production factor of an enterprise, and data security controls the lifeblood of an enterprise. Around the entire life cycle of data, NineData provides end-to-end data encryption capabilities to effectively prevent unauthorized data queries and operations, and avoid business impacts caused by data leakage.
- **SAAS Mode** : Out-of-the-box, quickly turn on enterprise-level data management without planning servers and pre-installing software. At the same time, NineData also provides complete task management capabilities, including full-link monitoring, alarming, anomaly location and self-repair capabilities, which can greatly reduce the operation and maintenance investment of enterprises.
- **High availability** : All services adopt a high-availability architecture with multiple nodes, which can quickly switch requests or tasks to normal nodes for running in the event of any node failure. At the same time, long-running tasks such as replication, backup, and comparison support non-destructive breakpoint resuming. Once the node where the task is running is abnormal, data can continue to be transmitted after the node is switched.

### How to use

[Quick start](https://docs-ninedata-cloud.translate.goog/quick_start/registration?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

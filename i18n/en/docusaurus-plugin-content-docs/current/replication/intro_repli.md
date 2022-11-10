---
sidebar_position: 1
---

# Introduction to Data Replication

NineData data replication supports offline and real-time data replication between multiple homogeneous and heterogeneous data sources. It is suitable for various business scenarios such as data migration, database expansion and contraction, database version upgrade, remote disaster recovery, remote multi-activity, data warehouse and data lake data integration.

### Product Architecture

[![quickstart1](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/replication/image/replication_overview.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/replication/image/replication_overview.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

### Product advantages

NineData data replication products are based on cloud-native architecture. Compared with traditional data replication products, they have huge advantages in security, performance, cost and other aspects.

- Simple and easy to use: SaaS model, out-of-the-box, without complicated deployment and configuration.
- High performance: Combined with many core technologies such as real-time log capture, intelligent sharding, transactional concurrency, and hotspot merging, it achieves strong replication performance with incremental replication latency as low as seconds.
- High reliability: Comprehensive monitoring and alarm mechanism, built-in task anomaly detection, self-healing mechanism, and intervenable capabilities to improve task availability. Mechanisms such as incremental replication, multi-version metadata, and seamless task restarts ensure the reliability of tasks.
- Strong Consistency: The industry's innovative breakpoint resuming technology and transaction consistency synchronization capability can effectively ensure the consistency of replicated data, and cooperate with NineData's data comparison function to ensure your data quality.
- Multi-cloud and multi-database: Provide enterprises with data replication capabilities of various databases in a multi-cloud environment, and also support data replication of local self-built and cloud vendor databases; at the same time, it supports a variety of common databases, including MySQL, SQLServer, and ClickHouse.

### Application scenarios

- Database migration: Data migration across regions, clouds, or data sources is required, and scenarios such as self-built databases are migrated to the cloud.
- Real-time data warehouse synchronization: Supports real-time integration of data from multiple data sources and multiple environments into a unified data warehouse for analysis.
- Cross-cloud and cross-region disaster recovery: Supports continuous data synchronization between the business center and the disaster recovery center. If a failure occurs in the primary region, you can switch user requests to the disaster recovery region to achieve cross-cloud and cross-region disaster recovery.
- Remote multi-active: It supports two-way real-time synchronization between business nodes in multiple regions to ensure the consistency of global data.
  - When any unit fails, it is only necessary to switch the traffic of this unit to other units, which can realize the second-level recovery of the business and effectively ensure the high availability of the service.
  - Distribute business traffic to various business units according to a certain dimension of the business. For example, the traffic of each unit is divided according to the area to which the user belongs, so that users can access nearby, reduce network delay, and improve user experience. At the same time, each business unit is distributed in different regions, which can effectively solve the problem that the infrastructure of a single region limits business expansion.

### Related Documentation

[perform data replication](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/replication/data_replication.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

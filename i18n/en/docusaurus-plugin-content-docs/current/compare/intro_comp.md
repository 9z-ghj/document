---
sidebar_position: 1
---

# Introduction to Database Comparison

The NineData database comparison function supports the consistency comparison between two data sources. In case of inconsistency, it also supports automatic generation of change SQL. You can directly copy and execute it on the target side to achieve data and structure consistency.

### Features

- [Structural comparison](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/compare/structure_comparation.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) : Structural comparison is the comparison of metadata (MetaData), which is used to compare whether the definitions of objects in the two databases are consistent. For example, compare whether the columns, indexes, and constraints (primary keys, foreign keys, and constraints) in the two tables are consistent.
- [Data comparison](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/compare/data_comparation.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) : Data comparison is the comparison of user data (UserData), which is used to compare whether the data in the two databases are consistent. It is usually used for backup and recovery, data migration, and data consistency comparison between the two ends after data synchronization.

### Product Architecture

[![structure](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/compare/image/structure.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/compare/image/structure.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

### scenes to be used

| Scenes                                                       | illustrate                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Check database schema consistency across departments and regions | When enterprise users manage multi-project or multi-module databases of the same type, due to the dispersion or independence of organizations or teams, changes in database structures and objects are not synchronized to all data centers or sub-projects in time, and application errors are reported only after they are discovered. **The NineData data structure comparison** service regularly compares the metadata of the source and target ends to ensure the consistency of the data structure of all database nodes, and provides repair suggestions to avoid business crashes. |
| Cross-region, cross-cloud multi-active data verification     | In order to achieve low-latency reading and writing at the nearest location, and the ability of databases to be active and reused, enterprises usually build data replication and synchronization between different regions or cloud platforms. However, due to the limitations of the system architecture and other factors, data inconsistency may occur, so periodic data verification is essential. In the case of a huge amount of data, full comparison is a more expensive and inefficient method. **NineData data structure comparison** service is based on **group mixed inspection** and **fast hashing** , which provides efficient data consistency check. At the same time, for inconsistencies, it provides SQL change scripts, which can be executed on the target side to ensure the consistency of data at both ends. |
| Integrity of data during ELT/ETL process                     | Both classic ETL and ELT in the cloud-native era require data from multiple data sources to be imported into a data warehouse to support OLAP and BI analysis. However, the source and destination are usually heterogeneous, and data consistency may be affected during data aggregation and schema transformation. **NineData data structure comparison** service supports data comparison between homogeneous and heterogeneous databases, which greatly reduces the risk of data inconsistency in the process. |

### Related Documentation

- [Perform data comparison](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/compare/data_comparation.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Execution structure comparison](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/compare/structure_comparation.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

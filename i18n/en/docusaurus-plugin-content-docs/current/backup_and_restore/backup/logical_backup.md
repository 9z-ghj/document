---
sidebar_position: 2
---

# Backup data (logical backup)

The logical backup of NineData data backup service supports second-level RPO, row-level data recovery, and online backup data query functions. This article describes how to perform a logical backup of a database.

### Preconditions

- Added data source to NineData. For how to add, see [Adding Data Sources](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/datasource.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .
- The version of the MySQL data source is 8.0, 5.7, 5.6.
- The version of the SQL Server data source is 2019, 2017, 2016, 2014, 2012, 2008R2.

### usage restrictions

Currently, only MySQL supports full and incremental backups, and SQL Server only supports full backups.

### Steps

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. On the left navigation bar, click **Backup & Restore** > **Data Backup** .

3. On the **Backup Tasks** page, click **Create Backup** in the upper right corner .

4. On the **Data Sources and Targets** page, configure according to the table below and click **Next** .

   | Parameters <div style={{width:'50pt'}}>          | illustrate                                                   |
   | ------------------------------------------------ | ------------------------------------------------------------ |
   | **mission name**                                 | Enter the name of the backup task. For the convenience of subsequent search and management, please try to use a meaningful name. Up to 64 characters are supported. |
   | **data source**                                  | Select the data source you want to back up. If you just added a new data source, you can click **Refresh** on the right to get the latest list of data sources. |
   | **Backup method** (only supported by SQL Server) | Select **Logical Backup** .**Logical backup** : A backup method that uses database objects (such as tables, indexes, etc.) as backup objects. Support full backup, incremental backup, structure backup and other backup types.**Physical backup** : A backup method that takes the files in the database as the backup object. |
   | **Backup type**                                  | The following backup types are supported:**Table structure + full data + log data** (only supported by MySQL): The backup data includes full and incremental data.**Table structure + full data** : The backup data contains full data.**Table Structure** : Only the table structure is backed up. |
   | **storage target**                               | Select the storage location of the backup data, according to the location of the data source. NineData provides multiple cloud vendors and multiple regions, and supports Alibaba **Cloud** , **Tencent Cloud** , **Huawei Cloud** , and **AWS** . For the supported regions, see the console. |

5. On the **Backup Objects and Periods** page, configure according to the following table, and click **Save and Precheck** .

   | Parameters <div style={{width:'50pt'}}> | illustrate                                                   |
   | --------------------------------------- | ------------------------------------------------------------ |
   | **Backup object**                       | The content that needs to be backed up can be selected and customized.**All databases and objects** : Backup all databases and objects in this data source.**Custom Objects** : Manually select the databases and objects to be backed up. |
   | **backup strategy**                     | **Time zone** : Select the time zone of your region, the system will start the backup according to the time point in the time zone you selected, the default is Beijing time zone.**Backup frequency** : Choose how often to back up. You can choose any time period from Monday to Sunday, 00:00 to 23:59. You can also check **Daily** to back up once a day.**Storage time** : The storage time of backup files (including backup files and log files), which will be automatically deleted after expiration. The options are **7 days, 30 days, 60 days, 90 days, half a year, 1 year, 2 years** , and the default is **7 days** . |

6. On the **pre-check** page, the system will automatically perform a compatibility check, and the check result will be displayed on the page. After all are successful, click **Start the task** .

   :::tip

   If the check fails, you need to manually check the failed check items, and then reconfigure the backup task according to these steps.

   :::

7. After the **startup task** page prompts that **the startup is successful** , the data backup service will automatically start the backup in the backup cycle you set. You can also click **Backup** Now to make a backup immediately.

   :::tip

   You can also back up your data immediately in the following two ways:

   - On the left navigation bar, click **Data Backup** , and on the **Backup Tasks** page, click **Backup Now in the** **Action** column on the right side of the task to start the backup.
   - **Click Data Backup** on the left navigation bar , click the target job ID on the **Backup Jobs page, and click** **Backup Now in the upper right corner of the** **Backup Details** page .

   :::

8. **Click Data Backup** in the left navigation bar , and click the target **task ID** on the **backup task** page to view the detailed status of the backup task.

### Related Documentation

- [Introduction to Data Backup](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/intro_back.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Perform physical backups](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/physical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Restoring logical backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Restoring physical backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_physical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [View backup sets](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/view_backup_sets.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Query backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup_data_query.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

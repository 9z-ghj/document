---
sidebar_position: 2
---

# Restoring physical backup data

In the event of a misoperation or failure of the database, you can restore the backup data to the database through NineData's backup and recovery service.

### Preconditions

- A full backup has been completed. How to back up data, see See [Performing Physical Backups](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/physical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .
- The database that needs to be restored has been added to NineData through the connection method of the **gateway .** For more information, see [Adding Data Sources](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/datasource.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .
- The data source to be restored is the self-built SQL Server database.

### Precautions

The restored target data source version must be greater than or equal to the data source version of the backup data. For example, backup data for SQL Server 2019 does not support recovery to SQL Server 2017 data sources.

### Steps

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. On the left navigation bar, click **Backup & Restore** > **Data Recovery** .

   :::tip

   You can also click **Backup and Restore** > **Backup Sets** . On the **Full Backup Sets** tab, find the ID of the backup set that has been backed up, and click **Restore Data in the** **Actions** column on the right .

   :::

3. On the **Select Recovery Method** tab, configure according to the following table, and click **Next** .

   | Parameters <div style={{width:'50pt'}}> | illustrate                                                   |
   | --------------------------------------- | ------------------------------------------------------------ |
   | **mission name**                        | Enter the name of the recovery task. For the convenience of subsequent search and management, try to use a meaningful name. Up to 64 characters are supported. |
   | **source data source**                  | Backup objects, you can quickly find **backup tasks** by selecting the **source data source** . |
   | **backup task**                         | A backup job, created when backing up a data source, contains all the data needed for recovery. |
   | **recovery method**                     | The following recovery methods are supported:**Recovery by point in time** : This method is based on full backup data and logs, and can recover full data and subsequent incremental data. For the specific recovery time period, see the console.**Backup set** : This method is only based on the full backup data, and supports recovery to the point in time when the full backup is completed, excluding incremental data. |
   | **recovery point in time**              | **The recovery method** is configurable when **recovering by point in time** , and you can select the point in time to which the data will be recovered. Minute-level RPO is supported, which can restore data from a few minutes to 30 minutes before the current point in time from the start of the backup. |
   | **backup set**                          | It can be configured when the **recovery method** is **backup set . Select the full backup set. This option does not contain incremental data.** |
   | **target data source**                  | To restore the object, select which data source to restore the backup data to. |
   | **gateway**                             | Physical restore restores files directly to the target data source, so the target data source needs to have a gateway configured. If you have already accessed through the gateway when adding the data source, it has been automatically configured here. If you do not access the data source through the gateway, please refer to the following steps:Add the host where the data source is located [to the gateway](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/gateway.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .Connect the data source through the gateway. For more information, see [Adding Data Sources](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/datasource.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) . |

4. On the **Recovery Objects** tab, configure according to the following table, and click **Next** .

   | Parameters <div style={{width:'50pt'}}>                | illustrate                                                   |
   | ------------------------------------------------------ | ------------------------------------------------------------ |
   | **restore object**                                     | Confirm the content to be restored. You can select **all backups** to restore all data, or you can select **a custom object** and choose the data to be restored by yourself. |
   | **A processing policy already exists in the database** | **Overwrite the existing database (WITH REPLACE)** : If there is a library with the same name in the target library, it will be directly overwritten with the database in the backup file.**Report an error and exit** : If there is a library with the same name in the target library, an error will be reported in the pre-check. |

5. On the **Configure Mapping Objects** tab, configure the library name after restoring to the target data source, and click **Save and Precheck** .

6. On the **Pre-check** tab, wait for the system to complete the pre-check. After the pre-check passes, click **Start task** .

   :::tip

   - **If the pre-check fails, you need to click the details in the** **operation** column to the right of the target check item to check the cause of the failure, and then perform the pre-check again after manual repair until it passes.

- **Check items whose results** are **warnings** can be repaired or ignored according to specific circumstances.

  - If you do not want to start the task immediately, you can click **Save Task to return to the list** and save the current recovery task to the **recovery task** list to avoid reconfiguration later.

  :::

1. On the **Startup task** page, a message is displayed indicating that **the startup was successful** . Click **View Details** to view the execution status of the recovery tasks; click **Return to List** to return to **the recovery task** list.

### Related Documentation

- [Introduction to Data Backup](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/intro_back.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Perform physical backups](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/physical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [perform logical backup](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Restoring logical backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [View backup sets](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/view_backup_sets.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Query backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup_data_query.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
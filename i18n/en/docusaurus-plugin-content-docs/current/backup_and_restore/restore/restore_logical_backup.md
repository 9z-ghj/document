---
sidebar_position: 1
---
# Restoring logical backup data

In the event of a misoperation or failure of the database, you can restore the backup data to the database through NineData's backup and recovery service.

### Preconditions

- A full backup has been completed. For how to back up data, see See [Performing Logical Backups](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .
- The data sources that need to be restored have been added to NineData. For more information, see [Adding Data Sources](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/datasource.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .

### usage restrictions

- The target data source to be restored must be the same as the data source type of the backup data. For example, backup data for MySQL does not support recovery to SQL Server data sources.
- The restored target data source version must be greater than or equal to the data source version of the backup data. For example, MySQL 8.0 backup data does not support restoring to MySQL 5.6 data sources.
- The current SQL Server data source does not support incremental backups when performing logical backups, so point-in-time recovery is not supported.
- During full recovery, if the database contains views (VIEW), functions (FUNCTION), stored procedures (PROCEDURE), and triggers (TRIGGER), do not execute the configuration mapping object in [step 5 , otherwise the task will fail.](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#step5)
- Triggers (TRIGGERs) and events (EVENTs) created during incremental backups cannot be recovered, but the resulting data will be recovered normally.
- During recovery, if the database contains views (VIEW), functions (FUNCTION), stored procedures (PROCEDURE), triggers (TRIGGER), and events (EVENT), the definer (DEFINER) information of the above objects will be modified to the current recovery The account that accesses the database in the task.
- When restoring, if there is a foreign key (FOREIGN KEY) in the table, the foreign key constraint is not available.

### Steps

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. On the left navigation bar, click **Backup & Restore** > **Data Recovery** .

   :::tip

   You can also click **Backup and Restore** > **Backup Sets** . On the **Full Backup Sets** tab, find the ID of the backup set that has been backed up, and click **Restore Data in the** **Actions** column on the right .

   :::

3. On the **Create Recovery** page, configure according to the table below and click **Next** .

   | Parameters <div style={{width:'50pt'}}> | illustrate                                                   |
   | --------------------------------------- | ------------------------------------------------------------ |
   | **mission name**                        | Enter the name of the recovery task. For the convenience of subsequent search and management, try to use a meaningful name. Up to 64 characters are supported. |
   | **source data source**                  | Backup objects, you can quickly find **backup tasks** by selecting the **source data source** . |
   | **backup task**                         | A backup job, created when backing up a data source, contains all the data needed for recovery. |
   | **recovery method**                     | The following recovery methods are supported:**Recovery by point in time** (only supported by MySQL): This method is based on full backup data and logs, and can recover full data and subsequent incremental data. For the specific recovery time period, see the console.**Backup set** : This method is only based on the full backup data, and supports recovery to the point in time when the full backup is completed, excluding incremental data. |
   | **Recovery point in time** (MySQL only) | **The recovery method** is configurable when **recovering by point in time** , and you can select the point in time to which the data will be recovered. The second-level RPO can be achieved, and the data at any point in time between the start of the backup and the current point in time can be restored. |
   | **backup set**                          | It can be configured when the **recovery method** is **backup set . Select the full backup set. This option does not contain incremental data.** |
   | **target data source**                  | To restore the object, select which data source to restore the backup data to. |
   | **recovery type**                       | Select the content to be restored, and support single-selection or multiple-selection of **table structure** and **full data** . You can also click to expand the **advanced settings** and select the processing strategy when there is a table with the same name or the same data. |
   | **advanced settings**                   | **Structural conflict strategy****Ignore conflicts and continue the task** : When a table with the same name exists, ignore and continue the recovery task.**If the object already exists, stop the task** : When a table with the same name exists, stop the recovery task.**Data Conflict Policy****Ignore the conflict and continue the task** : When the same data exists, ignore this piece of data and continue to restore other data.**If the data already exists, stop the task** : When the same data exists, stop the recovery task.**Delete first, then rewrite** : delete the piece of data and rewrite it. |

4. On the **Restore Objects** tab, confirm the content to be restored. You can select **all backups** to restore all data, or you can select **a custom object** , select the data to be restored, and click **Next** .

5. On the **Configure Mapping Objects** tab, configure the table name after the target table is restored to the target data source, and click **Save and Precheck** .

6. On the **Pre-check** tab, wait for the system to complete the pre-check. After the pre-check passes, click **Start task** .

   :::tip

   - **If the pre-check fails, you need to click the details in the** **operation** column to the right of the target check item to check the cause of the failure, and then perform the pre-check again after manual repair until it passes.
   - **Check items whose results** are **warnings** can be repaired or ignored according to specific circumstances.

   :::

7. On the **Startup task** page, a message is displayed indicating that **the startup was successful** . Click **View Details** to view the execution status of the recovery tasks; click **Return to List** to return to **the recovery task** list.

### Related Documentation

- [Introduction to Data Backup](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/intro_back.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Perform physical backups](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/physical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [perform logical backup](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Restoring physical backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_physical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [View backup sets](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/view_backup_sets.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Query backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup_data_query.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

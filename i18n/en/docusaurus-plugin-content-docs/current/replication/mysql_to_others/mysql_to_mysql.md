---
sidebar_position: 1
---
# Data replication between MySQL self-built databases

NineData data replication supports full data synchronization and incremental data synchronization between self-built MySQL and self-built MySQL data sources.

### Preconditions

- Added source and target data sources to NineData. For how to add, see [Adding Data Sources](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/configuration/datasource.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .

- The versions of the source and target data sources are shown in the table below. Note that the source data source version must be less than or equal to the target data source version.

  | source data source | target data source            |
  | ------------------ | ----------------------------- |
  | MySQL 8.0          | MySQL 8.0                     |
  | MySQL 5.7          | MySQL 8.0, 5.7                |
  | MySQL 5.6          | MySQL 8.0, 5.7, 5.6           |
  | MySQL 5.5          | MySQL 8.0, 5.7, 5.6, 5.5      |
  | MySQL 5.1          | MySQL 8.0, 5.7, 5.6, 5.5, 5.1 |

- The source data source must enable Binlog, and the related parameters of Binlog are set as follows:

  - `binlog_format`=`ROW`
  - `binlog_row_image`=`FULL`

  :::tip

  If the source data source is the standby database, in order to obtain the complete Binlog log, the `log_slave_updates`parameter .

  :::

### usage restrictions

- Before performing data synchronization, you need to evaluate the performance of the source data source and the target data source, and it is recommended to perform data synchronization during low business peaks. Otherwise, the full data initialization will occupy a certain amount of read and write resources of the source data source and the target data source, resulting in increased database load.
- During the synchronization process, if the source data source contains views (VIEW), functions (FUNCTION), stored procedures (PROCEDURE), triggers (TRIGGER), and events (EVENT), after synchronizing to the target data source, the definer of the above objects (DEFINER) information will be modified in the target data source to the account that accesses the target data source in the current synchronization task.
- When the synchronization object is at the table level, do not use online DDL change tools (for example: **gh-ost** , **pt-online-schema-change** ) to change the synchronization object of the source database during the synchronization process, otherwise the synchronization will fail.
- It is necessary to ensure that each table in the synchronization object has a primary key or unique constraint, and the column name is unique, otherwise the same data may be synchronized repeatedly.
- During the synchronization process, if there are triggers in the source data source, the system will not synchronize the triggers until the incremental synchronization ends.

### Steps

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. **Click Data Copy** in the left navigation bar .

3. On the **Data Replication** page, click **Create Data Replication** in the upper right corner .

4. On the **Data Source and Target** tab, configure according to the following table, and click **Next** .

   | Parameters <div style={{width:'60pt'}}> | illustrate                                                   |
   | --------------------------------------- | ------------------------------------------------------------ |
   | **mission name**                        | Enter the name of the data replication task. For the convenience of subsequent search and management, please try to use a meaningful name. Up to 64 characters are supported. |
   | **source data source**                  | The MySQL data source where the synchronization object resides. |
   | **target data source**                  | MySQL data source to receive synchronization objects.        |
   | **Copy type**                           | **Structure replication** : Only the database table structure of the source data source is synchronized, but the data is not synchronized.**Full replication** : Synchronize all objects and data of the source data source, that is, full data replication.**Incremental replication** : After the full synchronization is completed, incremental synchronization is performed based on the logs of the metadata source.You can also click to expand the **advanced settings** and select the processing strategy when there is a table with the same name or the same data. |
   | **advanced settings**                   | **Structural conflict strategy****If there is an object with the same name, stop the task** : When there is a table with the same name, stop the synchronization task.**If there is an object with the same name, ignore the conflict and continue** : When there is a table with the same name, check whether the structure is consistent. If it is consistent, ignore and continue the synchronization task. If it is inconsistent, stop the synchronization and notify the user.**Data Conflict Policy****If the data already exists, stop the task** : When the same data exists, stop the synchronization task.**Ignore data conflicts and continue the task** : When the same data exists, ignore this piece of data and continue to synchronize other data.**Delete first, then rewrite** : delete the piece of data and rewrite it. |

   

5. On the **Select Copy Objects** tab, confirm the content to be copied. You can select **all objects** to synchronize all content in the source library, or you can select **a custom object** , select the content to be synchronized in the **source object** list, and click **> **Add to** target object list **on the right** **, and then click** Next**.

6. On the **Configure Mapping Objects** tab, configure the table name after the target table is synchronized to the target data source, and click **Save and Precheck** .

   :::tip

   You can click **Mapping and Filtering** on the right side of the page to customize the column names after they are synchronized to the target data source.

   :::

7. On the **Pre-check** tab, wait for the system to complete the pre-check. After the pre-check passes, click **Start task** .

   :::tip

   - You can tick to **enable data consistency comparison** . After the synchronization task is completed, the data consistency comparison based on the source data source is automatically enabled to ensure that the data at both ends are consistent. **Depending on the replication type** you choose , the data consistency comparison starts as follows:

     - **Structural Copy** : Starts after the structural copy is complete.

     - **Structural replication + full replication** : start after full replication is complete.

     - **Structural replication + full replication + incremental replication** : Start when the incremental data is consistent with the source data source for the first time and the **synchronization delay** is 0 seconds. You can click **View Details** to view the synchronization delay in the **replication details** page.

       [![sync_delay](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/replication/image/sync_delay.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/replication/image/sync_delay.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

   - **If the pre-check fails, you need to click the details in the** **operation** column to the right of the target check item to check the cause of the failure. After manual repair, click **Recheck to** re-execute the pre-check until it passes.

   - **Check items whose results** are **warnings** can be repaired or ignored according to specific circumstances.

8. On the **Startup task** page, a message is displayed indicating that **the startup is successful** , and the synchronization task starts to run. At this point you can do the following:

   - Click **View Details** to view the execution of each phase of the synchronization task.
   - Click **Back to List** to return to the **Data Copy** list.

### View sync results

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. **Click Data Copy** in the left navigation bar .

3. On the **data replication page, click the** **task ID** of the target synchronization task . The page description is as follows.

   [![result](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/replication/image/result1.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/replication/image/result1.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

   | Serial number <div style={{width:'25pt'}}> | function <div style={{width:'90pt'}}>                        | introduce                                                    |
   | ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | 1                                          | Sync delay                                                   | The data synchronization delay between the source data source and the target data source. 0 seconds means there is no delay between the two ends. At this time, you can choose to switch the business to the target data source to achieve smooth migration. |
   | 2                                          | Configure alerts                                             | After configuring alerts, the system notifies you in the method of your choice when a task fails. For more information, see [Introduction to Operational Monitoring](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/alart/intro.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) . |
   | 3                                          | More                                                         | **Pause** : Pause the task, only the task whose status is **running is** optional.**Terminate** : End the task that has not been completed or is being monitored (that is, in the process of incremental synchronization). The task cannot be restarted after the task is terminated. Please operate with caution. If the synchronization object contains triggers, a trigger copy option will pop up, please select as needed.**Delete** : Delete the task. After the task is deleted, it cannot be recovered. Please operate with caution. |
   | 4                                          | Structural copy (displayed in scenarios that include structural copy) | Shows the progress and details of structure replication.Click Logs on the right side of the page **:** View the execution log of the fabric replication.Click **Refresh** on the right side of the page : View the latest information.**Click View DDL in the** **operation** column to the right of the target table in the list : you can view the SQL playback. |
   | 5                                          | Full copy (displayed in scenarios including full copy)       | Displays the progress and details of the full copy.Click Monitoring on the right side of the page to **view** the monitoring indicators during the full replication process.Click Logs on the right side of the page **:** View the execution log of full replication.Click **Refresh** on the right side of the page : View the latest information. |
   | 6                                          | Incremental replication (displayed in scenarios that include incremental replication) | Displays various monitoring indicators of incremental replication.**Click Logs** on the right side of the page : View the execution log of incremental replication.Click **Refresh** on the right side of the page : View the latest information. |
   | 7                                          | modify object                                                | Displays the modification history of the synchronization object.Click **Modify synchronization object** on the right side of the page to configure synchronization objects. The configuration method is the same as [step 5](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/replication/mysql_to_others/mysql_to_mysql.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#step5) .Click **Refresh** on the right side of the page : View the latest information. |
   | 8                                          | Data comparison                                              | Displays the results of the data comparison between the source data source and the target data source. Contains **structural comparisons** and **data comparisons** .Click Re-compare on the right side of the page : **re-compare** the data at both ends of the current source and target.Click Logs on the right side of the page **:** View the execution log of the consistency comparison.Click **Monitoring** on the right side of the page (data comparison display only): View the trend graph of the comparison RPS (records per second comparison). Click **Details** to view earlier records.**Click in the operation** column on the right side of the comparison list [![details](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/replication/image/details.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/replication/image/details.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp): view the comparison details of the table definition DDL statements of the source and target.**Click in the operation** column on the right side of the comparison list [![sql](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/replication/image/sql.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/replication/image/sql.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)(displayed in case of inconsistency): generate change SQL, you can directly copy the SQL to the target data source for execution, and modify the inconsistent content. |

### Related Documentation

[Introduction to Data Replication](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/replication/intro_repli.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

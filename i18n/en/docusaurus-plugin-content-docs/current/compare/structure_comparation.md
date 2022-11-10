---
sidebar_position: 2
---

# Structural comparison

NineData database comparison function supports structure comparison, that is, metadata comparison, which is used to compare whether the definitions of objects in two databases are consistent. This article describes how to perform structural comparisons.

### Preconditions

- The data sources that need to be compared have been added to NineData. For more information, see [Adding Data Sources](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/datasource.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .

- The type and version of the source and target data sources are one of the following table.

  | source data source                               | target data source                               |
  | ------------------------------------------------ | ------------------------------------------------ |
  | MySQL: 8.0, 5.7, 5.6, 5.5, 5.1                   | MySQL: 8.0, 5.7, 5.6, 5.5, 5.1                   |
  | SQL Server: 2019, 2017, 2016, 2014, 2012, 2008R2 | SQL Server: 2019, 2017, 2016, 2014, 2012, 2008R2 |

### Steps

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Database Comparison** > **Structure Comparison** .

3. In the upper right corner of the **Structural Comparison** page, click **Create Structural Comparison** .

4. On the **Select Data Source** tab, configure according to the following table, and click **Next** .

   | Parameters <div style={{width:'50pt'}}>                   | illustrate                                                   |
   | --------------------------------------------------------- | ------------------------------------------------------------ |
   | **mission name**                                          | Enter the name of the comparison task. For the convenience of subsequent search and management, please try to use a meaningful name. Up to 64 characters are supported. |
   | **source data source**                                    | Compare the source data source of the task, and the system will compare based on the structure of the data source. |
   | **target data source**                                    | The object data source for the comparison task.              |
   | **Contrast frequency**                                    | Select how often the comparison is performed.**One-time comparison** : Perform the comparison task only once.**Periodic Compare** : Periodically perform a compare task. |
   | **Contrast Period** (Only **Periodic Contrast** Display)  | Choose how often to compare, you can choose any one or more days from Monday to Sunday, or you can check **every** day to back up once a day. |
   | **Start-up time** ( **periodic comparison** display only) | Select the time of each comparison period to start the comparison task, **from 00:00 to 23:59** . You can also click **Now** to select the current time as the start time. |

5. On the **Select Comparison Object** tab, select the content to be compared and click **Next** . **Both full instances** and **partial objects are** supported .

   - **Full instance** : Select all databases and objects in the source data source.
   - **Partial objects** : Customize the database and objects to be compared. **In the source object** list on the left , select the databases and objects to be compared, and click **> **Add to** Target Object** list.

6. On the **Configure Mapping Relationship** tab, configure the mapping relationship between the source and target databases and object names, and click **Save and Pre-Check** .

   :::tip

   If the database and object names in the target end are inconsistent with those in the source end, you need to configure them. **Click Mapping and Filtering** on the right side of the data table list to configure the mapping relationship between the target field name and the source field name.

   :::

7. On the **Pre-check** tab, wait for the system to complete the pre-check. After the pre-check passes, click **Start task** .

   :::tip

   - **If the pre-check fails, you need to click the details in the** **operation** column to the right of the target check item to check the cause of the failure, and then perform the pre-check again after manual repair until it passes.
   - **Check items whose results** are **warnings** can be repaired or ignored according to specific circumstances.

   :::

8. On the **Startup task** page, a message is displayed indicating that **the startup was successful** . You can do the following:

   - If it is a **periodic comparison** , you can click **Compare** Now to execute a comparison task immediately.
   - Click **View Details** to view the execution of the comparison task.
   - Click **Back to List** to return to the **structure comparison** list.

### View comparison results

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Database Comparison** > **Structure Comparison** .

3. On the **structure comparison** page, click the **task ID** of the target synchronization task. The page description is as follows.[![interface](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/compare/image/interface_structure.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/compare/image/interface_structure.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

   | Serial number <div style={{width:'25pt'}}> | function <div style={{width:'90pt'}}> | introduce                                                    |
   | ------------------------------------------ | ------------------------------------- | ------------------------------------------------------------ |
   | 1                                          | task status                           | Compare the current state of the task.                       |
   | 2                                          | Configure alerts                      | After configuring alerts, the system notifies you in the method of your choice when a task fails. |
   | 3                                          | Compare now                           | Only in-progress tasks are displayed, and a comparison task begins immediately. |
   | 4                                          | More                                  | **Pause** : Pause the task, only the task whose status is **running is** optional.**Edit** : Edit the configuration information of the task.**Terminate** : End the task.**Delete** : Delete the task. After the task is deleted, it cannot be recovered. Please operate with caution. |
   | 5                                          | Filter items                          | You can quickly filter the required comparison results by **object type** , **task status** , **task result** , and **object name .** |
   | 6                                          | log                                   | Records all logs during the execution of the comparison task, and supports quick filtering and positioning of target logs by **log type** , **log generation time** , **keywords and other items.** |
   | 7                                          | refresh                               | Get the latest status of comparison tasks.                   |
   | 8                                          | List of comparison results            | Show the results of the structural comparison between the source and destination.**Click in the operation** column on the right side of the comparison list [![details](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/compare/image/details.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/compare/image/details.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp): view the comparison details of the table definition DDL statements of the source and target.**Click in the operation** column on the right side of the comparison list [![sql](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/compare/image/sql.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/compare/image/sql.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)(displayed in case of inconsistency): generate change SQL, you can directly copy the SQL to the target data source for execution, and modify the inconsistent content. |

### Related Documentation

- [Introduction to Database Comparison](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/compare/intro_comp.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Perform data comparison](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/compare/data_comparation.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

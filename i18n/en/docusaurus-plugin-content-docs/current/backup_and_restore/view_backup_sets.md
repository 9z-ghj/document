---
rsidebar_position: 4
---

# View backup sets

NineData supports viewing all backup sets in all environments under the current user (personal mode) or organization (organizational mode).

### Steps

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Backup & Restore** > **Backup Sets** .

3. In the jumped page, you can perform the following operations.

   | Operation <div style={{width:'50pt'}}>                       | Step <div style={{width:'300pt'}}>                           |
   | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | View all full backup sets and log backup sets                | Click the **Full Backup Sets** tab or the **Log Backup Sets** tab on the page. |
   | Download log backup set                                      | To facilitate your problem analysis and traceability, NineData provides the download of Binlog log files. Download method:Click **the Log Backup Sets** tab.Click Download in the Action column to the right of the target Binlog file **to** **download** the Binlog file. **Note** : You can also click the **copy download link** to download in other ways. |
   | Restoring a **completed** backup set to the target data source | **Click Restore Data in the** **Action** column to the right of the target backup set ID . For more information, see [Restoring Logical Data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) or [Restoring Physical Data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_physical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) . |
   | Online data query for completed **backup sets**              | **Click Data Query in the** **Action** column to the right of the target backup set ID . For more information, see [Querying Backup Data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup_data_query.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) . |
   | View details of backup sets                                  | **Click Details in the** **Action** column to the right of the target backup set ID . |
   | Terminate a **backup** set that is being backed up or that **fails to be backed up** | **Click Terminate in the** **Action** column to the right of the target backup set ID . |
   | delete backup set                                            | **Click Delete in the** **Action** column to the right of the target backup set ID . |

   :::tip

   If you do not find the entry in the above method, click the [![more](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/backup_and_restore/image/more.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/image/more.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)button under the Action column.

   :::

### Related Documentation

- [Introduction to Data Backup](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/intro_back.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [perform logical backup](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Perform physical backups](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/physical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Restoring logical backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Restoring physical backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_physical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Query backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup_data_query.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

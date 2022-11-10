---
sidebar_position: 5
---

# Query backup data

Based on the self-developed computing storage engine, NineData data backup service can realize fast query of backup data at any point in time. When data loss occurs in the business database, this function can be used to quickly complete data query and recovery.

### Preconditions

A complete logical backup has been completed. For more information, see [Performing Logical Backups](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .

### usage restrictions

- VIEW queries are not currently supported.
- Currently only queries from logical backup data are supported.

### Steps

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Backup and Restore** > **Backup Data Query** .

3. On the **Backup Data Query** tab, configure according to the following table, and click **Start Query** .

   | Parameters <div style={{width:'85pt'}}> | illustrate                                                   |
   | --------------------------------------- | ------------------------------------------------------------ |
   | **Please select a source data source**  | Backup objects, you can quickly find the **backup set** by selecting the data source . |
   | **inquiry mode**                        | **Full backup set** : This method is based on full backup data, and supports querying all data before the full backup completion time point, excluding incremental data.**Query by point in time** : This method is based on full backup data and logs, and can query full data and subsequent incremental data. For the specific recovery time period, see the console. |
   | **backup set**                          | **Configurable when the query mode** is **full backup set** , select full backup set. |
   | **query time**                          | **The query method** is configurable when **querying by time point** , and you can choose which time period to query for data.Logical backup: When the second-level RPO is reached, the data at any point in time between the start of the backup and the current point in time can be queried.Physical backup: Minute-level RPO, which can query data from a few minutes to 30 minutes before the backup starts to the current time point. |

4. The page jumps to the SQL window, where you can query the contents of the backup data through query statements. You can click the **backup set** or **point-in-time to** switch the query method.[![data_query](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/backup_and_restore/image/data_query.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/image/data_query.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

   :::tip

   - For the usage of SQL window, please refer to [SQL window](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/sql_console.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .
   - After querying the required data, you can export and restore the data to the target database through the **export function in the result set.**[![export](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/backup_and_restore/image/export.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/image/export.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

   :::

### Appendix: Supported Query Syntax

The currently supported query syntax is as follows.

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<table>
<thead>
  <tr>
    <th>statement</th>
    <th>Options</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="9">SELECT (query)</td>
    <td>ALL | DISTINCT</td>
  </tr>
  <tr>
    <td>FROM</td>
  </tr>
  <tr>
    <td>WHERE</td>
  </tr>
  <tr>
    <td>GROUP BY</td>
  </tr>
  <tr>
    <td>HAVING</td>
  </tr>
  <tr>
    <td>WINDOW AS</td>
  </tr>
  <tr>
    <td>ORDER BY</td>
  </tr>
  <tr>
    <td>ASC | DESC</td>
  </tr>
  <tr>
    <td>LIMIT</td>
  </tr>
  <tr>
    <td>SHOW (view object list)</td>
    <td>TABLES</td>
  </tr>
  <tr>
    <td rowspan="6">SHOW CREATE (view object structure definition syntax)</td>
    <td>TABLE</td>
  </tr>
  <tr>
    <td>VIEW</td>
  </tr>
  <tr>
    <td>FUNCTION</td>
  </tr>
  <tr>
    <td>PROCEDURE</td>
  </tr>
  <tr>
    <td>TRIGGER</td>
  </tr>
  <tr>
    <td>EVENT</td>
  </tr>
</tbody>
</table>

<table>
<thead>
  <tr>
    <th>statement</th>
    <th>Options</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="9">SELECT (query)</td>
    <td>ALL | DISTINCT | DISTINCTROW</td>
  </tr>
  <tr>
    <td>FROM</td>
  </tr>
  <tr>
    <td>WHERE</td>
  </tr>
  <tr>
    <td>GROUP BY</td>
  </tr>
  <tr>
    <td>HAVING</td>
  </tr>
  <tr>
    <td>WINDOW AS</td>
  </tr>
  <tr>
    <td>ORDER BY</td>
  </tr>
  <tr>
    <td>ASC | DESC</td>
  </tr>
  <tr>
    <td>LIMIT</td>
  </tr>
  <tr>
    <td rowspan="7">SHOW (view object list)</td>
    <td>TABLES</td>
  </tr>
  <tr>
    <td>FUNCTIONS</td>
  </tr>
  <tr>
    <td>PROCEDURES</td>
  </tr>
  <tr>
    <td>TRIGGERS</td>
  </tr>
  <tr>
    <td>VIEWS</td>
  </tr>
  <tr>
    <td>SYNONYMS</td>
  </tr>
  <tr>
    <td>ASSONBLIES</td>
  </tr>
  <tr>
    <td rowspan="8">SHOW CREATE (view object structure definition syntax)</td>
    <td>TABLE</td>
  </tr>
  <tr>
    <td>VIEW</td>
  </tr>
  <tr>
    <td>FUNCTION</td>
  </tr>
  <tr>
    <td>PROCEDURE</td>
  </tr>
  <tr>
    <td>TRIGGER</td>
  </tr>
  <tr>
    <td>EVENT</td>
  </tr>
  <tr>
    <td>DATA TYPE</td>
  </tr>
  <tr>
    <td>SYNONYM</td>
  </tr>
</tbody>
</table>



### Related Documentation

- [Introduction to Data Backup](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/intro_back.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [perform logical backup](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Perform physical backups](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/backup/physical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Restoring logical backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_logical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Restoring physical backup data](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/restore/restore_physical_backup.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [View backup sets](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/view_backup_sets.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

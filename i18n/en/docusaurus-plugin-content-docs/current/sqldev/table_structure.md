---
sidebar_position: 4
---

# Design table structure

NineData provides a visual table structure design solution. You can click the mouse in the SQL window to complete the table structure design without manually entering SQL commands.

### Preconditions

- [In organizational](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/account/intro_account.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#组织) mode, has the SQL window function module authority.
- [In organizational](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/account/intro_account.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#组织) mode, it has read and write permissions to the target data source.

:::tip

If you do not have the above permissions, please contact your organization's system administrator to [configure permissions](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/account/manage_user?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#配置用户个人权限) or [bind roles](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/account/manage_role.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#绑定角色) for you .

:::

### Steps

You can design the table structure when creating or editing a table through the SQL window. This article takes creating a table as an example to demonstrate.

1. [Open the SQL window and go to the target data source](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/sql_console.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#操作步骤) .

2. In the database list on the left side of the SQL window, right-click the target database and click **Create Table** .

   :::tip

   The data table will be created in the target database.

   :::

3. On the **Create Table** tab, you can start to visually design the table structure, and the system will automatically generate **SQL scripts** at the bottom of the page according to your configuration . For details of the variable structure design page, please select the corresponding tab below and view it.

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

- **Table Name** : The name of the custom table.
- **Database** : Select the database under which the current table needs to be created. The default is the database right-clicked in step 2.
- **Table Comments** : Comments for the table, that is, the COMMENT attribute.

Set columns.

- **Column Name** : In the leftmost text box, enter the name of the column, up to 64 characters in length. The first row in the current interface defaults to the primary key column, and the column name defaults to **id** .

- **Data Type** : The second text box from the left, click the text box to select the data type of the column.

- **NOT NULL** : Sets whether the column allows null values. The primary key column of the first row in the current interface, this option is fixedly selected, that is, null values are not allowed.

- **Default value** : Set the default value of the current column, that is, the DEFAULT property. If no other value is inserted into the column, the default value is used.

- **Comment** : Set the comment of the current column, that is, the COMMENT property. Set a description for the column with a comment. The maximum length is 1024 characters.

- **PRIMARY KEY** : Set whether the current column is the primary key column, by selecting the check box to the left of **PRIMARY KEY** , or clicking the magnifying glass icon to the left of the column name to open, you can also set multiple columns as primary key columns to form a composite primary key.

- **AUTO_INCREMENT** : Only supported for integer type columns, set the current column as an auto-incrementing column.

- **UNSIGNED** : Only supported for integer type columns, set the current column to an unsigned integer type.

- **ON UPDATE CURRENT_TIMESTAMP** : Only supported by the time type, when the data in a row is updated, the time in the column is updated in real time.

- **SRID** : Only supported for geometry types, set the spatial reference identifier SRID.

- **Character Set** : Only supported for character type columns, set the character set of the current column.

- **Comparison rules** : Only supported by character type columns, set the comparison rules of the current column according to the character set.

- **Hidden column** : If there is no column suitable for the primary key in the current table, you can create the hidden column as the primary key.

- Generated column

   : Generated Column, the value of which can be the calculation result of other columns. After selecting, you also need to enter the 

  expression

   and choose whether to store the value of the column.

  - **VIRTUAL** (default): do not store
  - **STORED** : storage

Set the index.

- **Index Name** : Enter a name for the index. If there is a primary key in the current table, the first row defaults to the primary key index information.
- **Index Type** : Select the type of index to be added.
- **Index Column** : Select the column name to which the index needs to be added.
- **Comment** : Add comment information to the current index.
- **Hidden Index** : Only supported by MySQL 8.0 and above, set the current index as a hidden index.
- **Other indexing options** : Add other indexing options as needed.

Set foreign key constraints.

- **Foreign key name** : Enter the name of the foreign key.
- **Foreign key column** : Select the foreign key column that needs to be associated with the foreign table.
- **Reference** : Choose which library table column to associate the current foreign key column to.
- **ON UPDATE** : Set the limit for UPDATE operation.
- **ON DELETE** : Set the limit for DELETE operations.

Set check constraints (supported by MySQL 8.0.16 and above).

- **Check Constraint Name** : Enter a name for the check constraint.
- **Expression** : Enter the expression for the constraint. For example: age >= 20.
- **ENFORCED** : Whether to enforce the constraint.

If your database file is too large, you can set up partitions to improve read performance.

- **Partition statement** : Enter a partition statement, you can refer to the content of the **example statement** on the right for input.

Set table-level options.

- **Table Engine** : Select the storage engine for the table.
- **Character Set** : Set the character set of the current table.
- **Comparison Rules** : Set the comparison rules of the current table according to the character set.
- **Temporary table** : Create a temporary table. The life cycle of the table is limited to the current connection. After the connection is closed, the temporary table will be automatically deleted.
- **Other table options** : Add other table options as needed.

1. Click **Save** , and in the **Submit Changes** window that pops up, click **OK** .

   :::tip

   You can also copy SQL scripts and execute them manually in other database clients.

   :::

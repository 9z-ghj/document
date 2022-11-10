---
sidebar_position: 3
---

# Step 3: Apply for a free data source and generate test data

This article describes how to apply for a free data source (Demo data source) and generate test data.

### Function Description

NineData provides 2 free MySQL test data sources for each user and organization. Before officially adding the enterprise database to NineData, you can apply for free data sources for functional testing purposes.

**The Employees Sample Database** database officially provided by MySQL is automatically generated in the free data source. For more information about this database, please refer to the [official documentation](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://dev.mysql.com/doc/employee/en/employees-preface.html) .

### usage restrictions

- Free data can be used for 3 months from the date of application, and it will be automatically deleted when it expires.
- Free data sources have a storage size limit of 1 GB, beyond which they are readable and non-writable.
- The free data source is only for NineData functional testing, please do not use it for other purposes.
- Each [user](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/quick_start/account/intro_account?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#user) (personal mode) or [organization](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/quick_start/account/intro_account?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#organization) (organizational mode) can request up to 2 free data sources.
- The free data source does not support automatic database creation. When it is used as a data recovery target or data replication target, you need to manually create a database with the same name as the database to be recovered in the [SQL window](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/sql_console.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) , and then test it, otherwise it will prompt no DDL during pre-check. permissions.

### Steps

1. In the left navigation bar of the NineData console, click **Data Source Management** > **Data Sources** , and click **Apply for Data Sources** in the upper right corner of the page .

   :::tip

   **Newly registered users can also click to apply for a free data source on the workbench** page after logging in for a **quick experience** . This entry is only displayed if no data sources have been added under the current user or organization.

   :::

2. On the **Apply for Free Data Sources** page, select the **number** of data sources under the number of data sources to apply for, up to 2.

3. Click **Apply for a data source** to complete the application for a free data source, and jump to the **SQL window** page of the data source. At this point, the system starts to import the test data set. This process will last for about 30 seconds. After the import is complete, the SQL window will prompt that the **test set was imported successfully!** .

   :::tip

   You can also manually import the test dataset by clicking **Import Test Dataset in the upper right corner of the** **SQL window** page and clicking **OK** .

   :::

### Next step

- [Add data source](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/configuration/datasource.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Develop with SQL](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/sqldev/intro_sqldev.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Perform backup and restore](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/backup_and_restore/intro_back.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [perform data replication](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/replication/intro_repli.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Perform data comparison](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/compare/intro_comp.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

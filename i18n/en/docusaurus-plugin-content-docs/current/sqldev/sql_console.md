---
sidebar_position: 2
---

# SQL window

This article describes how to use the SQL window.

### Preconditions

The database that the target needs to manage has been added to NineData. How to add, see [Managing Data Sources](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/configuration/datasource.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .

### Steps

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. **Click SQL Development** > **SQL Window** in the left navigation bar .

   :::tip

   If you have logged in to the data source before and have not closed it, you will automatically enter the data source page.

   :::

3. Click the text box under **SQL Development** , the data source you have added will pop up, click the target data source, and click **Start Query** to jump to the SQL window.

   :::tip

   If there are multiple data sources, you can enter all or part of the keywords in the box for exact or fuzzy search. The fields that support searching are as follows:

   - data source name
   - IP address

   [![search](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/sqldev/image/search.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/image/search.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

   :::

4. Once the SQL window is open, you can perform SQL development operations on the data source. As shown in the figure below: [![execute_sql](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/sqldev/image/execute_sql.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/image/execute_sql.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)For details on how to use the SQL window, please refer to the [introduction to the functions of the SQL window](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/sql_console.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#sql-窗口功能介绍) .

   :::tip

   [If a sensitive data column](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/sensitive.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) is added to the target data source , you will not be able to fully view the content of the sensitive column. To view, please [apply for sensitive column permission](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_workflow.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#申请敏感数据权限) first .[![sensitive_data](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/sqldev/image/sensitive_data.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/image/sensitive_data.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

   :::

### SQL window function introduction

[![image-20220921114448614](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/sqldev/image/interface.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/image/interface.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

| Serial number <div style={{width:'25pt'}}> | function <div style={{width:'90pt'}}> | introduce                                                    |
| ------------------------------------------ | ------------------------------------- | ------------------------------------------------------------ |
| 1                                          | SQL window tab                        | Indicates the currently opened data source SQL window. Multiple SQL windows can be switched by clicking the tab. **Click the X** to the right of the tab to close the SQL window. |
| 2                                          | Open data source                      | Select and open the new data source SQL window.              |
| 3                                          | Data source information               | Display the data source information of the current SQL window, including the environment, IP address and port number. |
| 4                                          | refresh                               | The data in the current data source can be refreshed.        |
| 5                                          | Name database                         | Check the target database to perform the SQL operation. The effect is equivalent to the `USE`statement. |
| 6                                          | function button                       | **Execute** : Execute the selected SQL statement.**Formatting** : Adjust the structure of the selected SQL statement to enhance readability.**Execution plan** : View the execution plan of the selected SQL statement.**Save SQL** : Save all SQL statements in the current SQL window to the SQL list, which is convenient for next use.**View SQL** : View the saved SQL, you can insert the target SQL **into** the current SQL window. At the same time , the target SQL can be **edited** or **deleted .****Execution History** : View the execution history of SQL of the target data source. You can select a date to filter out the execution history of a certain time period, or search the execution history by keywords (SQL statement, database name, error message). |
| 7                                          | search table name                     | You can enter the table name to quickly find the target data table. |
| 8                                          | Database list                         | Displays all databases and data tables in the current data source. The following functions are supported:**View library details** : Right-click the target library and click **View Library Details** to open the **database details** page. **You can view all data tables** , **triggers** , **views** , **stored procedures** , **functions** and **events** in the target library here .**Create database** : Right-click any database, click **Create Database** , in the pop-up dialog box, enter the **database name** , **character set** and corresponding **comparison rules** , and click **OK** to create the database visually.**Query table data** : Right-click the target table and click **Query Table Data** to automatically query the data in the table, and return 100 rows by default.**View table details** : Right-click the target table and click **View Table Details** to open the **data table details** page. **You can view all column names** , **indexes** and **triggers** in the target table here .**Generate and create script** : Right-click the target library or table, and click **Generate and create script** to generate the created SQL statement.**Create Table** : Right-click the target library or any table in the library, and click **Create Table** to create a data table visually. For more information, see [Designing Table Structures](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/table_structure.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .**Edit Table** : Right-click the target table and click **Edit Table** to edit the structure of the target table. For more information, see [Designing Table Structures](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/table_structure.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .**Create New Query** : Right-click the target database or table, and click **Create New Query** to open a new SQL window tab.**Export** : Right-click the target table and click **Export** . It supports exporting data tables in SQL, CSV, JSON, and XML formats. The range that can be exported is the current page or all data (up to 10,000 items).**View User List : Right-click the** **user** at the bottom of the database list and click **View User List** to view all user information in the current data source.**Refresh** : Refresh the current data source. |
| 9                                          | SQL editor                            | The following functions are supported:SQL execution: supports single statement or batch execution.Interrupt execution: During SQL execution, you can click **Stop Query to** interrupt the execution of SQL.syntax highlightingKeyword and metadata autosuggestion |
| 10                                         | Execution information, result set     | Displays SQL execution information and result sets.Execution information: Contains information such as execution time, executed SQL statements, execution status, and execution time.Result Set: Displays the returned results of the SQL. At the same time, you can visually add, delete, and modify the database in the result set, and you can click **Export** to export the data table in SQL, CSV, JSON, and XML formats. The range that can be exported is the current page or all data (up to 10,000 items). |

### common problem

- What should I do if an error is reported when opening the MySQL data source through the SQL window `The user specified as a definer (‘mysql.infoschema‘@‘localhost‘) does not exist`?

  `root`Answer: To create a user through an account in the local MySQL client `mysql.infoschema`and authorize it, the command is as follows:

  1. create:`mysql> CREATE USER 'mysql.infoschema'@'localhost' IDENTIFIED BY '<密码>';`

     :::tip

     Example:`mysql> CREATE USER 'mysql.infoschema'@'localhost' IDENTIFIED BY '12345';`

     :::

  2. Authorization:`mysql> GRANT ALL PRIVILEGES ON *.* TO 'mysql.infoschema'@'localhost';`

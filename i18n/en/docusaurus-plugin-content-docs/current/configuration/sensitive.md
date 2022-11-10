---
sidebar_position: 2
---

# Manage sensitive data

NineData supports setting one or more columns in the data source as sensitive columns. Users who are not authorized to view sensitive columns will not be able to view the content of the column.

### Preconditions

A data source that requires adding sensitive fields has been added to NineData. For how to add, see [Adding Data Sources](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/datasource.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .

### Add Sensitive Columns to Data Sources

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. On the left navigation bar, click **Data Source Management** > **Sensitive Data** .

3. On the **Data Sources** tab, click **Add Data Source** in the upper right corner of the page .

4. Click the check box below the **data** source, a list of data sources that have been added to NineData will pop up, and select the data source that needs to add sensitive columns from the list.

   :::tip

   If you do not find the target data source, click **Create Now** below the list to add the data source. For more information, see [Adding Data Sources](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/datasource.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .

   :::

5. NineData supports two options: **manual add** and **scan add** , where **scan add** can automatically scan sensitive columns in the data source and add them to the list of sensitive columns according to [identification rules .](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/sensitive.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#附录-1识别规则)

   - **Manual addition** : Click **Manual Add , select the column names to be added as sensitive columns on the** **Add Sensitive Columns** page on the right , and click **OK** .

   :::tip

   If there is too much content in the database and it is difficult to find it, you can select the database and data table at the top of the **Add Sensitive Column** page, filter out the target table, and then search by column name to quickly locate the target column.

   :::

   - **Scan Add** : Click **Scan Add , click** **Start Scan on the** **Scan Add** page on the right , wait for the scan to complete, select the scanned sensitive column in the **sensitive column** list, and click **OK** .

6. The list of sensitive columns shows the columns you selected in the previous step, and you need to select the **data type** and **desensitization algorithm** for each column .[![sensitive column](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/configuration/image/sensitive_column.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/image/sensitive_column.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

   :::tip

   **The sensitivity level** of all columns added to the sensitive column is **sensitive** by default . If you adjust the **sensitivity level** to **normal** , it is equivalent to clicking the **remove** column **on** the right , and the column will no longer be a sensitive column.

   :::

7. Click **Add Data Source** to complete the addition of sensitive columns.

### Manage sensitive columns

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. On the left navigation bar, click **Data Source Management** > **Sensitive Data** .

3. Click **the Sensitive Columns** tab, and the sensitive columns in all data sources under the current NineData account will be listed here. You can do the following:

   - View all sensitive columns under the current NineData account.
   - Modify the **data type** and **desensitization algorithm** of sensitive columns .
   - Modify the sensitivity level of a sensitive column **:** After the **sensitivity level** is changed to **normal** , the column will be automatically removed from the **sensitive column** list.

   :::tip

   If there are too many sensitive columns to find, you can quickly locate the target sensitive column by filtering the data source, database, data table, and column name at the top right of the page.

   :::

### Create identification rules

Identification rules are used for the system to automatically scan sensitive columns in data sources. NineData provides 10 default [identification rules](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/sensitive.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#附录-1识别规则) , which cannot be modified. You can also create custom recognition rules by following the steps below.

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. On the left navigation bar, click **Data Source Management** > **Sensitive Data** .

3. Click the **Recognition Rules** tab and click **Create Recognition Rule** in the upper right corner of the page .

4. Configure according to the table below and click **Create Recognition Rule** .

   | parameter                     | illustrate                                                   |
   | ----------------------------- | ------------------------------------------------------------ |
   | **rule name**                 | Enter the name of the rule. For the convenience of subsequent search and management, please try to use a meaningful name. Up to 16 characters are supported. |
   | **Desensitization algorithm** | Choose how to desensitize sensitive columns. For details on desensitization algorithms, see [Desensitization Algorithms](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/sensitive.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#附录-2脱敏算法和脱敏前后对比) . |
   | **Description** (optional)    | Explain the identification rules to reduce communication costs. Up to 100 characters are supported. |
   | **identification rules**      | Enter the recognition rule. For the syntax structure of the rule, please refer to the **rule example** on the right side of the page . |

### Appendix 1: Identification Rules

| Rule name <div style={{width:'50pt'}}>              | Corresponding desensitization algorithm | Comparison before and after desensitization                  |
| --------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------ |
| Chinese address (address)                           | cn_address                              | Before desensitization: Room 101, Unit 1, Building 1, a community in a certain street, a certain city in a certain province After desensitization: a certain community in a certain street in a certain city in a certain province ***** |
| Encryption KEY (secret_key)                         | mask-full                               | Before desensitization: a6eb56f80be8a120436d6f1c9b8d87ca After desensitization: ****** |
| Bank card (card_number)                             | credit_card                             | Before desensitization: 6222022207223257981 After desensitization: 6222********7981 |
| Email (email)                                       | email                                   | Before desensitization: 000000*@qq.com *After desensitization: **** @* *qq.com * |
| ID number (id_number)                               | id_number                               | Before desensitization: 300900199909090099 After desensitization: 300************99 |
| IP address (ip_address)                             | ipv4                                    | Before desensitization: 192.168.12.91 After desensitization: 192.***.***.91 |
| Chinese license plate number (license_plate_number) | plate_number                            | Before desensitization: day Z0AB92 After desensitization: day Z***92 |
| MAC address (mac_address)                           | mask-full                               | Before desensitization: 00-1A-2B-3C-4D-56 After desensitization: ****** |
| password                                            | mask-full                               | Before desensitization: abcde12345 After desensitization: ****** |
| phone number                                        | phone                                   | Before desensitization: 13800000000 After desensitization: 138****0000 |

### Appendix 2: Desensitization algorithm and comparison before and after desensitization

| Algorithm name <div style={{width:'40pt'}}> | Comparison before and after desensitization <div style={{width:'40pt'}}> |
| ------------------------------------------- | ------------------------------------------------------------ |
| mask-full                                   | Before desensitization: Test content After desensitization: ****** |
| three-stars                                 | Before desensitization: Test content After desensitization: *** |
| email                                       | Before desensitization: *000000\*@qq.com After desensitization:* **@qq.com |
| phone                                       | Before desensitization: 13800000000 After desensitization: 138****0000 |
| MD5                                         | Before desensitization: a6eb56f80be8a120436d6f1c9b8d87ca After desensitization: 0b450f4fe1a8d243c9a6d479a124f0ba |
| SHA1                                        | Before desensitization: 69c9a5c19c5c27e43cb0efc4c8644ed6d03a110b After desensitization: 79860cbad9b9eca05df8337a7ce45af926ca6392 |
| AES                                         | Before desensitization: 0A6187FF44BEB44F651AAD3BB4003360 After desensitization: nOQIIwB8L/V/bpnT1bbuoKQ22YrN9ti9brcrC1bti9bkCkIvV1APJfdX5EE69ZW/ |
| cn_name                                     | Before desensitization: Zhang San After desensitization: *3  |
| cn_address                                  | Before desensitization: Room 101, Unit 1, Building 1, a community in a certain street in a certain city in a certain province After desensitization: a certain community in a certain street in a certain city in a certain province****** |
| id_number                                   | Before desensitization: 300900199909090099 After desensitization: 900************99 |
| credit_card                                 | Before desensitization: 6222022207223257981 After desensitization: 6222********7981 |
| ipv4                                        | Before desensitization: 192.168.12.91 After desensitization: 192.***.***.91 |
| plate_number                                | Before desensitization: day Z00000 After desensitization: day Z***00 |

---
sidebar_position: 1
---
# Manage data sources

NineData supports adding data sources of different types and environments to the console for unified management. You can use SQL development, backup and recovery, data replication, database comparison and other functions for the added data sources.

### Precautions

- Currently supported cloud vendors: Alibaba Cloud, Tencent Cloud, Huawei Cloud, AWS
- Currently supported database types: MySQL, SQL Server, ClickHouse

### Add self-built data source

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Data Source Management** > **Data Sources** .

3. On the **Create Data Source** page, configure the parameters according to the following table.

   | Parameters <div style={{width:'60pt'}}> | illustrate                                                   |
   | --------------------------------------- | ------------------------------------------------------------ |
   | **data source name**                    | Enter the name of the data source. For the convenience of subsequent search and management, please try to use a meaningful name. |
   | **Data source location**                | Select **public network/self-built/other cloud** .           |
   | **surroundings**                        | It is selected according to the actual business purpose of the data source as the environment identifier of the data source. **Production** and **development** environments are provided by default , while enabling you [to create custom environments](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/datasource.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#附录创建环境) . **Note** : In [organizational mode , the database environment can also be applied to permission policy management. For example, the ](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/intro_account.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#organization)**production environment administrator** role by default only supports access to data sources in the **production** environment and cannot access data sources in other environments. For more information, see [Managing Roles](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_role.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) . |
   | **database type**                       | Select the database type of the data source, **MySQL** , **SQL Server** , **ClickHouse** three data sources are supported. |
   | **Connection method**                   | Select the access method of the data source. Supports access through **public network address** , **gateway** , and **SSH Tunnel connection** .**Public network address** : To access the data source through the public network address, you need to enter the public network connection **address** of the data source in the connection address.**Gateway** : A safe and fast intranet access method provided by NineData. You need to connect the host where the data source is located first. For the access method, see [Adding a Gateway](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/gateway.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) . Then select the connected **gateway** and **connection address** below . The **connection address** can be written as **localhost** or intranet IP.**SSH Tunnel connection** : Access the data source through the SSH tunnel. You also need to enter the **SSH host** and corresponding port, **SSH authentication method** , **SSH user name** and SSH **connection address** . |
   | **username**                            | The username of the data source.                             |
   | **password**                            | Password for the data source.                                |
   | **encrypted transmission**              | Whether to use SSL encryption to access the data source. Click **>** on the left side of **encrypted transmission to expand detailed configuration.** |

4. After all configurations are completed, click the **connection test** to the right of the **password** to test whether the data source can be accessed normally, and if the **connection is successful** , click **Create data source** to complete the addition of the data source. Otherwise, recheck the connection settings until the connection test is successful.

### Add cloud vendor data source

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Data Source Management** > **Data Sources** .

3. On the **Create Data Source** page, configure the parameters according to the following table. On the **Create Data Source** page, configure the parameters according to the following table.

   | Parameters <div style={{width:'60pt'}}> | illustrate                                                   |
   | --------------------------------------- | ------------------------------------------------------------ |
   | **data source name**                    | Enter the name of the data source. For the convenience of subsequent search and management, please try to use a meaningful name. |
   | **Data source location**                | Select the cloud vendor corresponding to your data source , Alibaba **Cloud** , **Tencent Cloud** , **Huawei Cloud** , and **AWS** are supported . This article uses **Alibaba Cloud** as an example. |
   | **surroundings**                        | It is selected according to the actual business purpose of the data source as the environment identifier of the data source. **Production** and **development** environments are provided by default , while enabling you [to create custom environments](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/datasource.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#附录创建环境) . **Note** : In [organizational mode , the database environment can also be applied to permission policy management. For example, the ](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/intro_account.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#组织)**production environment administrator** role by default only supports access to data sources in the **production** environment and cannot access data sources in other environments. For more information, see [Managing Roles](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_role.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) . |
   | **instance type**                       | The type of the data source instance, you need to choose according to your own instance type. The following database types are supported:**ECS self** -built (AWS is **EC2 self** -built ): a self-built database built on the cloud vendor's ECS instance.**Access to self- built database through dedicated line/VPN gateway/smart gateway** : Self-built database accessed through Alibaba Cloud's network connection service.**ApsaraDB for RDS** : A relational database instance of cloud vendors.**PolarDB** : Alibaba Cloud's cloud-native relational database instance.**ApsaraDB for ClickHouse** : Alibaba Cloud's ClickHouse instance.**TDSQL-C** : Tencent Cloud's cloud-native relational database instance.**GaussDB** : HUAWEI CLOUD's GaussDB distributed database instance.**Aurora** : AWS' cloud-native relational database instance. |
   | **database type**                       | Select the database type of the data source. Depending on the cloud vendor, the supported data sources are also different. See the configuration page for details. |
   | **Connection method**                   | Select the access method of the data source.**Private network** (currently only supports Alibaba Cloud): To connect through the private network connection address of the cloud manufacturer, you must first connect the private network address to NineData. For the access method, see [Adding a Private Network Address](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/private_link.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) . Then select the connected **private network connection** below .**Public network address** : To access the data source through the public network address, you need to enter the public network connection **address** of the instance in the connection address.**Gateway** (only supports self-built database): A safe and fast intranet access method provided by NineData, you need to connect the host where the data source is located first. For the access method, see [Adding a Gateway](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/gateway.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) . Then select the connected **gateway** and **connection address** below . The **connection address** can be written as **localhost** or intranet IP.**SSH Tunnel connection** : Access the data source through the SSH tunnel. You also need to enter the **SSH host** and corresponding port, **SSH authentication method** , **SSH user name** and SSH **connection address** . |
   | **Access method**                       | Select the access method, which supports access in the form of **instance ID** or **connection address** .**Instance ID** : Access via the instance ID of ECS (EC2) or cloud database. To select this option, you also need to select parameters such as **cloud vendor access credentials** , **access region** , and **instance ID** . **Cloud vendor access credentials** need to be configured in advance. For the configuration method, see [Configuring Cloud Vendor Access Credentials](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/access_credentials.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .**Connection address** : Access through the connection address of the instance. The connection address varies according to the **connection** method **.** For details, please refer to the description of the **connection method** above . |
   | **username**                            | The username of the data source.                             |
   | **password**                            | Password for the data source.                                |
   | **encrypted transmission**              | Whether to use SSL encryption to access the data source. Click **>** on the left side of **encrypted transmission to expand detailed configuration.** |

4. After all configurations are completed, click the **connection test** to the right of the **password** to test whether the data source can be accessed normally, and if the **connection is successful** , click **Create data source** to complete the addition of the data source. Otherwise, recheck the connection settings until the connection test is successful.

### Appendix: Creating an Environment

To meet different enterprise needs, NineData not only provides default **production** and **development** environments, but also supports you to manually create custom environments.

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Data Source Management** > **Data Sources** .

3. Click **the Environments** tab to display all environments under the current [user](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/intro_account?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#用户) (personal mode) or [organization](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/intro_account?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#组织) (organizational mode). Here you can **edit** or **delete** custom created environments.

4. Click **Create Environment** in the upper right corner of the page .

5. Enter **a name for the environment and the** **color** that the environment will display in the console, and click **OK** .

   :::tip

   **The environment name** , as the identifier of the environment, needs to have a certain degree of recognition. Please use a meaningful name as much as possible, with a maximum of 16 characters.

   :::

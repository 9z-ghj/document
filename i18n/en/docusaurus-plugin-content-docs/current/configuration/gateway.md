---
sidebar_position: 3
---
# Manage Gateway

NineData's gateway is a database connection service that supports remote access to private network databases. By deploying a gateway, you can securely and inexpensively access a third-party cloud or local database to NineData without applying for an external network address, and you can access it securely through a private network address. This article describes how to configure and manage the gateway.

### Create gateway

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Data Source Management** > **Gateways** .

3. Click **Create Gateway** in the upper right corner of the page .

4. Configure the parameters according to the table below.

   | parameter               | illustrate                                                   |
   | ----------------------- | ------------------------------------------------------------ |
   | **Gateway name**        | The name of the gateway can be manually specified for the convenience of later search and management. |
   | **Gateway environment** | Select the operating system of the host where the gateway needs to be deployed, and the corresponding gateway installation method is displayed. The following operating systems are supported:Windows(x86_64)Linux(x86_64)macOS |

5. According to the installation guide shown below, install and configure the gateway on the host on the deployment side. After the configuration is complete, the **gateway connection diagram on the right side of the page will** **change** from **waiting for the local gateway to start to** successfully connecting to the local gateway .

6. Click **Finished Creation to return to the list** to view the list of gateways that have been created.

### View and manage gateways

You can view the current status of the gateway in the console and perform management operations on the gateway.

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Data Source Management** > **Gateways** .

3. On the **Gateways** page, you can view all gateways under the current [user](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/intro_account.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#用户) (personal mode) or [organization](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/intro_account.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#组织) (organizational mode). You can do the following:

   | Operation <div style={{width:'50pt'}}> | illustrate                                                   |
   | -------------------------------------- | ------------------------------------------------------------ |
   | View gateway details                   | Click the gateway ID, or click > **Details in the** **Action** column to the right of the gateway . **The gateway details** page contains the following: [![more](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/configuration/image/more.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/image/more.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)**Basic information** : The basic information of the gateway, including **gateway ID** , **gateway name** , **status** , **number of data sources** , **IP** , **installation path** , **creator** , **creation time** , etc.**Monitoring** : Graphs of CPU and memory utilization of the hosts on which the gateway is deployed.**Logs** : Gateway related logs. |
   | Create a data source                   | Find the gateway whose **status** is **normal** , and click > **Create Data Source in the** **operation** column on the right to create the data source . For more information, see [Adding Data Sources](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/datasource.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .[![more](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/configuration/image/more.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/image/more.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) |
   | stop gateway                           | Find the gateway whose **status** is **normal , click** **Stop in the** **operation** column on the right, and click **Stop Gateway** in the pop-up confirmation window . **Note** : After a gateway is stopped, the gateway process on the host where the gateway is deployed will automatically end within a few minutes. |
   | start gateway                          | Find the gateway whose status is **Stopped , click** **Start in the** **operation** column on the right, and in the **Start Gateway** window that pops up, restart the gateway according to the installation guide on the page. |
   | delete gateway                         | If you no longer need a gateway, click > **Delete** **on** the right side of the gateway, and click **Delete Gateway** in the confirmation window that pops up . **Note** : After the gateway is deleted, it cannot be recovered, please operate with caution.[![more](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/configuration/image/more.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/image/more.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) |

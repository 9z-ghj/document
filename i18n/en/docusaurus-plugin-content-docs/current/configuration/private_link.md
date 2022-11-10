---
sidebar_position: 5
---

# Create a private network connection

NineData supports the creation of a private network connection to connect NineData and the intranet of the target cloud vendor. You can connect to the cloud service through NineData without applying for the public network address of the cloud service.

### Preconditions

The cloud provider you use is Alibaba Cloud.

### Steps

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Data Source Management** > **Private Network Connection** .

3. Click **Create Private Network Connection** in the upper right corner of the page .

4. On the **Create Private Network Connection** page, configure parameters according to the following table.

   | Parameters <div style={{width:'50pt'}}> | illustrate                                                   |
   | --------------------------------------- | ------------------------------------------------------------ |
   | **connection name**                     | Enter the private network connection name. In order to facilitate subsequent search and management, please try to use meaningful names. |
   | **cloud vendors**                       | Select the name of the cloud vendor to which the private network connection needs to be added. Currently supports Alibaba **Cloud** , **Tencent Cloud** , **Huawei Cloud** , and **AWS** . |
   | **Is it authorized**                    | **Authorize cloud vendor access rights and automatically create private network connections** : To authorize cloud vendors to create private network connections, you need to configure cloud vendor access credentials in advance. For details, see [Configuring Cloud Vendor Access Credentials](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/access_credentials.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .**Manually create a private network connection without authorization** : You need to create a terminal node on the target cloud vendor console to manually open the private network connection. |
   | **Access area**                         | Select the region of the data source that needs to be connected through the private network. |
   | **Cloud vendor master account ID**      | Select the primary account ID of the cloud vendor that needs to establish a private network connection with NineData. |
   | **Cloud Vendor Access Credentials**     | It is only required when an authorized cloud vendor creates a private network connection. For details, see [Configuring Cloud Vendor Access Credentials](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/access_credentials.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) . |
   | **VPC**                                 | It is only required when an authorized cloud vendor creates a private network connection. Select the VPC under the cloud vendor ID that needs to be connected to the private network. |
   | **Endpoint ID**                         | It only needs to be filled in when manually creating a private network connection, and it needs to be created on the console of the target cloud vendor. For details on how to create an endpoint, see [Alibaba Cloud's official documentation](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://bp.aliyun.com/detail/186) . |
   | **Endpoint IP address**                 | It is only required when manually creating a private network connection. Enter the IP address corresponding to the endpoint ID. |

5. Click **Connection Test** , wait for the message that **the connection is successful** , and click **Create Private Network Connection** to complete the creation.

   :::tip

   If the connection test fails, adjust the parameter configuration until the connection test passes.

   :::

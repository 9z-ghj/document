---
sidebar_position: 4
---

# Configuring Cloud Vendor Access Credentials

NineData supports adding the cloud vendor's access credential information to the platform, which is convenient for pulling information such as database instances in the corresponding cloud from the NineData console.

### Permission description

Currently, cloud vendors that support configuring access credentials include Alibaba **Cloud** , **Tencent Cloud** , **Huawei Cloud** , and **AWS** . The access credentials of each cloud vendor are required to have certain permissions for establishing connections.

| Cloud vendor<div style={{width:"50px"}}> | Permission description                                       |
| ---------------------------------------- | ------------------------------------------------------------ |
| Ali Cloud                                | The terminal node used to create a private network connection for NineData, query some necessary information such as private network connection (PrivateLink), ECS, RDS, VPC, NAT gateway, etc., to establish point-to-point network connectivity between the NineData server and the database. |
| Tencent Cloud                            | The terminal node used to create a private connection for NineData, query some necessary information such as private network connection, CVM, CDB, VPC, etc., to establish point-to-point network connectivity between the NineData server and the database. |
| HUAWEI CLOUD                             | It is used to create a VPC endpoint for NineData, and query some necessary information about VPC endpoint, ECS, RDS, VPC and other products to establish point-to-point network connectivity between the NineData server and the database. |
| AWS                                      | The terminal node used to create a private connection for NineData, to query some necessary information of products such as private network connection, EC2, RDS, etc., to establish point-to-point network connectivity between the NineData server and the database. |

### Steps

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Data Source Management** > **Cloud Vendor Access Credentials** .

3. On the **Cloud Vendor Access Credentials** page, click **Create Credentials** in the upper right corner .

4. On the **Create Credentials** page, configure according to the following table.

   | parameter           | illustrate                                                   |
   | ------------------- | ------------------------------------------------------------ |
   | **Credential name** | Enter the credential name. In order to facilitate subsequent search and management, please try to use meaningful names. |
   | **cloud vendors**   | Select the name of the cloud vendor whose credentials need to be added. Currently supports Alibaba **Cloud** , **Tencent Cloud** , **Huawei Cloud** , and **AWS** . |
   | **Document Type**   | Select the type of credential to be added, which can be added through **Access Key** or **role** .**Access Key** : The identity of the sender of a request is verified by encrypting the Access Key (AK) and Access Key Secret (SK), which can be obtained in the console of the corresponding cloud vendor.**Role** : To authenticate the sender of a request by using the role name and role ARN, it needs to be created in the console of the corresponding cloud vendor. |

5. Click the **permission configuration instructions** , copy the content in the **configuration script** , and go to the corresponding cloud vendor to configure a custom permission policy.

6. Click **Create Credentials** to complete the creation of cloud vendor access credentials.

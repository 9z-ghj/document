---
sidebar_position: 2
---

# manage organization

For enterprise users, NineData's personal model cannot meet business needs. By managing the organization, multi-user collaboration can be effectively carried out, and the permissions of each user can be managed through roles. This article describes how to manage an organization.

### Create an organization

**Preconditions**

A NineData account has been registered. For more information, see [Registering a NineData Account](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/quick_start/1_registration.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .

**Steps**

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the upper right corner of the NineData console page, move the mouse over the user avatar and click **Switch Identity** > **Create Organization** .[![create_organization](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/account/image/create_organization.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/image/create_organization.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

3. On the **Create Organization** page, configure the parameters according to the following table.

   | Parameters <div style={{width:'50pt'}}> | illustrate                                                   |
   | --------------------------------------- | ------------------------------------------------------------ |
   | **name of association**                 | Enter the name of the organization, usually the business name for easy identification. Up to 24 characters are supported. |
   | **Invite users** (optional)             | Email: Enter the email addresses of the members you wish to invite to the organization.Role: Select the role of the corresponding user after joining the organization.Add: Add a user invitation record. This feature allows you to invite users to your organization in bulk. **Note** : You can also invite users after the organization is created. How to invite users, see [Inviting Users](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_user.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#邀请用户) . |

4. Click **OK** to complete the creation of the organization.

### switch to organization

**Preconditions**

Organization created. For more information, see [Creating Organizations](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_organization.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#创建组织) .

**Steps**

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .
2. In the upper right corner of the NineData console page, move the mouse over the user avatar, click **Switch Identity** , and select the created **organization** under Organization.
3. **At this point, you have switched from personal mode to organizational mode. Click Account Management** in the left navigation bar . Here, you can perform account-related management operations.[![account_management](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/account/image/account_management.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/image/account_management.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

:::tip

Only system administrator users can display management portals such as **user management** and **role management** , and users with other roles do not have this permission. For more information about the permissions corresponding to roles, see the [list of preset role permissions](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_role.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#附录预置角色权限列表) .

:::

### View or edit organization information

**Preconditions**

- [Organization created](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_organization.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#创建组织) and [switched to](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_organization.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#切换到组织) organization .
- To edit organization information, the user role must be **System Administrator** .

**Steps**

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Account Management** > **Organization Information** to view the information of the current organization.

3. On the **Organization Information** page, you can perform the following operations.[![edit_organization](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/account/image/edit_organization.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/image/edit_organization.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

   | Serial number <div style={{width:'25pt'}}> | Parameters <div style={{width:'50pt'}}>             | illustrate                                                   |
   | ------------------------------------------ | --------------------------------------------------- | ------------------------------------------------------------ |
   | 1                                          | Modify Organization Name (Administrator only)       | The organization name can be modified. Up to 24 characters are supported. After the modification is complete, you need to click **Save Modification** . |
   | 2                                          | Replacing the Logo (Only for system administrators) | Click **Change Logo** to upload the organization's logo. After the upload is complete, you need to click **Save Modifications** . |
   | 3                                          | **quit the organization**                           | Exit the current organization. If you are the only system administrator in the organization, you will need to transfer the system administrator to another member of the organization before you can leave. |
   | 4                                          | Delete Organization (Administrator Action Only)     | Delete the current organization. **Warning** : After deletion, all data sources, members, etc. in the organization will be lost, and the operation of deleting the organization cannot be undone, please operate with caution. |

### Next step

[Manage users](/account/manage_user.md)
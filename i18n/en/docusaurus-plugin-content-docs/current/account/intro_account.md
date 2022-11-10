---
sidebar_position: 1
---

# Introduction to Account Management

NineData provides multi-person collaboration capabilities for enterprises, which can be enabled after creating or joining an organization. This article introduces concepts such as organizations, users, roles, and more.

### organize

Under normal circumstances, after you [register a NineData account](/quick_start/1_registration.md) , the default is **personal mode** . At this time, you can use the four module functions ( [SQL window](/sqldev/sql_console.md) , [backup and recovery](/backup_and_restore/intro_back.md) , [data replication](/replication/intro_repli.md) , [database comparison](/compare/intro_comp.md) ) provided by NineData without barriers . Personal mode is suitable for Individual developers, such as backup, restore, synchronize, and compare their own databases, and perform daily development work with SQL windows.

However, for enterprise users, there is a need for multi-person collaborative development. In this scenario, there are multiple roles responsible for different businesses, so each role requires different permissions to meet the needs of data security. **The organization model** provided by NineData supports the assignment of different roles and resource management permissions to each user under the organization, and is suitable for multi-user collaborative development under the same organization. It ensures data security and improves overall production efficiency.

You can place your mouse over the icon in the upper right corner of the page to see which mode you are currently in.

[![organization_mode](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/account/image/organization_mode.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/image/organization_mode.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

How to manage organizations, see [Managing Organizations](/account/manage_organization.md) .

### user

A user is an independent individual in NineData. In the personal mode, the user is yourself and has all the rights to resources, and you do not need to perceive the concept of a user. In organizational mode, a user is part of an organization, and the system administrator decides what role the user is and assigns corresponding resource permissions.

You can place your mouse over the icon in the upper right corner of the page to see which mode you are currently in.

[![organization_mode1](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/account/image/organization_mode1.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/image/organization_mode1.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

For more information about users, see [Managing Users](/account/manage_user.md) .

### Role

The role determines the user's permission to use resources. NineData provides the following 5 preset roles:

- System administrator: The user who creates the organization is the system administrator by default, and has all the permissions of the data sources in the organization; has the management rights of users and roles in the organization; has the permissions of all function modules.
- Production environment administrator: By default, he has all the permissions of production environment data sources and function modules.
- Production environment read-only: By default, it has read-only permissions for production environment data sources, as well as all function module permissions.
- Development environment administrator: By default, it has all permissions for the development environment data sources and function modules.
- Ordinary members: have all functional module permissions.

:::tip

- System administrators can delete and edit all preset roles except **system administrators** , and can add custom roles. For more information, see [Managing Roles](/account/manage_role.md) .
- For detailed permissions corresponding to each preset role, see [Appendix: List of preset role permissions](/account/manage_role.md#Appendix:List of Preset Role Permissions) .

:::

### permission

The permissions in NineData are divided into four categories:

- **Manage permissions** : Manage users and roles in the current organization. Only **system administrators** have **administrative rights** .

- **Module permissions** : determine whether users can see the five modules on the left side of the console: **SQL development** , **backup and recovery** , **data replication** , **database comparison** , and **data source management** . The granularity is subdivided into sub-function entries in each module, such as **SQL development** . **SQL window** .

- **Data source permissions** : Determine whether users can initiate operations such as editing, SQL query or change, backup and recovery, data replication, database comparison, etc. on the target data source.

  :::tip

  **Data source permissions** need to be used in conjunction with **module permissions** . For example, if a user has the data copy permission to a data source, but has not been granted the data copy module permission, he still cannot use the data copy function.

  :::

- **Alarm permissions** : divided into two types: **managing alarms** and **viewing alarms** .

  - **Manage alarms** : Support viewing alarm information pushed by the system; support creating, editing, disabling, and deleting alarm policies. For more information, see [Managing Alerts](/alart/intro.md) .
  - **Viewing alarms** : Only supports viewing the alarm information pushed by the system.

### Appendix: View Current Mode

### Related Documentation

- [management organization](/account/manage_organization.md)
- [Manage users](/account/manage_user.md)
- [management role](/account/manage_role.md)
- [Manage work orders](/account/manage_workflow.md)

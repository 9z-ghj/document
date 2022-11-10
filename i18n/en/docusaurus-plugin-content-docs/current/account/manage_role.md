---
sidebar_position: 4
---

# management role

The role determines the user's permission to use resources. NineData provides 5 preset roles. You can edit any role other than the **system administrator** , or create a custom role. For roles that are no longer needed, you can manually delete them.

### Preconditions

- An organization has been created or joined. For more information, see [Managing Organizations](/account/manage_organization.md) .
- The NineData console is in org mode. How to switch from personal mode to organization mode, see [Switching to Organization](/account/manage_organization.md#swithing_to_organization) .
- Your role is System Administrator. For more information on roles, see [Roles](/account/intro_account.md#roles) .

### Precautions

- Among the preset roles, the role named **System Administrator** cannot be edited or deleted.
- When creating a role or editing a role name, the existing role name under the current NineData account cannot be used.

### View or add roles

1. Log [in to the NineData console](https://console.ninedata.cloud) .

2. In the left navigation bar, click **Account Management** > **Role Management** . On the left side of the opened page, you can see all roles under the current organization.

   :::tip

   If **Account Management** is not found , verify that your console is in Org Mode. How to switch from personal mode to organization mode, see [Switching to Organization](/account/manage_organization.md#swithing_to_organization) .

   :::

3. Click **Add Role** in the lower left corner of the page .

4. In the **New Role** dialog box, enter a name for the new role. This name is used to identify the role. Please use a meaningful name with a maximum of 16 characters.

5. Click **OK** to complete the creation of the new role. At this time, the page automatically jumps to the permission configuration page of the newly created role. You can configure the permissions of the role according to actual business needs.

   :::tip

   For more information on permissions, see [Permissions](/account/intro_account.md#permissions) .

   :::

### Edit an existing role

You can edit all roles except the **system administrator** . The editable content includes the role name and specific permissions.

1. Log [in to the NineData console](https://console.ninedata.cloud) .

2. In the left navigation bar, click **Account Management** > **Role Management** . You can choose to rename the role name, or edit the role's permissions.

   :::tip

   If **Account Management** is not found , verify that your console is in Org Mode. How to switch from personal mode to organization mode, see [Switching to Organization](/account/manage_organization.md#swithing_to_organization) .

   :::

   - Role renaming: In the role list on the left side of the page, move the mouse to the role to be renamed, click the  ![icon2](./image/icon2.png) on the right, in the pop-up **Edit Role** dialog box, enter the new role name, and click OK. Role names support up to 16 characters.

     :::tip

     **This icon does not appear to the right of the System Administrator** role because it cannot be changed.

     :::

   - Edit role permissions: In the role list on the left side of the page, click the name of the target role, edit the permissions of the role on the permission configuration page on the right, and click **Save Changes** in the lower left corner of the page after editing .

     :::tip

     For more information on permissions, see [Permissions](/account/intro_account.md#permissions) .

     :::

### delete role

You can delete all roles except **System Administrator .**

1. Log [in to the NineData console](https://console.ninedata.cloud) .

2. In the left navigation bar, click **Account Management** > **Role Management** .

   :::tip

   If **Account Management** is not found , verify that your console is in Org Mode. How to switch from personal mode to organization mode, see [Switching to Organization](/account/manage_organization.md#swithing_to_organization) .

   :::

3. In the role list on the left side of the page, move the mouse to the role to be deleted, and click the [![icon2](./image/icon2.png)icon on the right.

   :::tip

   **This icon does not appear to the right of the System Administrator** role because it cannot be removed.

   :::

4. **In the Edit Role** dialog box that pops up , click **Delete Role** in the lower left corner .

   :::caution

   After the role is deleted, the user bound to the role will lose the role and all corresponding permissions. This operation is irreversible, please operate with caution.

   :::

5. In the confirmation box that pops up, enter a name for the role and click **Delete Role** in the lower right corner .

### bind role

The role will only work after it is bound to the target user. Before binding, you need to ensure that the target user has joined the organization. For more information, see [Inviting Users](/account/manage_user.md#Inviting_Users) .

1. Log [in to the NineData console](https://console.ninedata.cloud) .

2. In the left navigation bar, click **Account Management** > **Role Management** .

   :::tip

   If **Account Management** is not found , verify that your console is in Org Mode. How to switch from personal mode to organization mode, see [Switching to Organization](/account/manage_organization.md#swithing_to_organization) .

   :::

3. In the role list on the left side of the page, click the name of the target role, and in the **member list** on the right side of the page , click **Add** .

4. In the pop-up **Add Member** dialog box, click the check box below the **member** , and select the target user in the member list. You can click multiple users to bind in batches.

5. Click **OK** .

### Related Documentation

- [management organization](/account/manage_organization.md)
- [Manage users](/account/manage_user.md)

### Appendix: List of Preset Role Permissions

<table>
<thead>
  <tr>
    <th>permission</th>
    <th>module</th>
    <th>category</th>
    <th>system<br>administrator</th>
    <th>production environment<br>administrator</th>
    <th>Production environment<br>read only</th>
    <th>development environment<br>administrator</th>
    <th>ordinary member</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="8">Administrative rights</td>
    <td rowspan="3">User Management</td>
    <td>Invite users</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>remove user</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Configure individual permissions</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="4">role management</td>
    <td>Add role</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Edit role permissions</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Edit a user's role</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>delete role</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Audit log</td>
    <td>View user behavior records</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Module permissions</td>
    <td>functional module</td>
    <td>All functional modules</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
  </tr>
  <tr>
    <td rowspan="11">Data source permissions (production environment)</td>
    <td rowspan="4">SQL development</td>
    <td>read only</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>read and write</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Approval and Release</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Sensitive data management</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="3">Backup and restore</td>
    <td>data backup</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Data Recovery</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>backup set</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>data replication</td>
    <td>data replication</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="2">Database comparison</td>
    <td>Data comparison</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Structural comparison</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Basic configuration</td>
    <td>data source</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="11">Data source permissions (development environment)</td>
    <td rowspan="4">SQL development</td>
    <td>read only</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>read and write</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Approval and Release</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Sensitive data management</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="3">Backup and restore</td>
    <td>data backup</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Data Recovery</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>backup set</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>data replication</td>
    <td>data replication</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="2">Database comparison</td>
    <td>Data comparison</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Structural comparison</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Basic configuration</td>
    <td>data source</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="2">Alarm permission</td>
    <td rowspan="2">Alarm permission</td>
    <td>Manage alerts</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>View alerts</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
  </tr>
</tbody>
</table>


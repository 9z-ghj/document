---
sidebar_position: 4
---

# 管理角色

角色决定了用户对于资源的使用权限，NineData 提供了 5 个预置角色，您可以编辑**系统管理员**以外的任何角色，也可以创建自定义角色，对于不再需要的角色，可以手动进行删除。

### 前提条件

* 已创建或加入组织。更多信息，请参见[管理组织](manage_organization.md)。
* NineData 控制台处于组织模式。如何从个人模式切换组织模式，请参见[切换到组织](manage_organization.md#切换到组织)。
* 您的角色为系统管理员。更多关于角色的信息，请参见[角色](intro_account.md#角色)。

### 注意事项

- 预置角色中，名为**系统管理员**的角色无法被编辑和删除。
- 创建角色或编辑角色名称时，不可使用当前 NineData 账户下已有的角色名称。

### 查看或新增角色

1. 登录 [NineData 控制台](https://console.9z.cloud)。

2. 在左侧导航栏，单击**账户管理**>**角色管理**。在打开的页面左侧，可以看到当前组织下的所有角色。

   :::tip

   如果未找到**账户管理**，请确认您的控制台处于组织模式。如何从个人模式切换组织模式，请参见[切换到组织](manage_organization.md#切换到组织)。

   :::

3. 单击页面左下角的**新增角色**。

4. 在**新建角色**对话框中，输入新角色的名称，该名称用于辨识角色用途，请使用有意义的名称，最多支持 16 个字符。

5. 单击**确定**，完成新角色的创建，此时页面自动跳转至新建角色的权限配置页面，您可以根据实际业务需求配置角色的权限。

   :::tip
   
   更多关于权限的说明，请参见[权限](intro_account.md#权限)。
   
   :::

### 编辑已有角色

您可以编辑**系统管理员**以外的所有角色，可编辑内容包括角色名称和具体权限。

1. 登录 [NineData 控制台](https://console.9z.cloud)。

2. 在左侧导航栏，单击**账户管理**>**角色管理**。您可以选择重命名角色名称，或编辑角色的权限。

   :::tip

   如果未找到**账户管理**，请确认您的控制台处于组织模式。如何从个人模式切换组织模式，请参见[切换到组织](manage_organization.md#切换到组织)。

   :::

   - 角色重命名：在页面左侧的角色列表中，将鼠标移动到需要重命名的角色上，单击右侧的![icon2](./image/icon2.png)图标，在弹出的**编辑角色**对话框中，输入新的角色名称，单击确定。角色名称最多支持 16 个字符。

     :::tip
   
     **系统管理员**角色由于无法更改，其右侧不会出现该图标。
   
     :::
   
   - 编辑角色权限：在页面左侧的角色列表中，单击目标角色名称，在右侧的权限配置页面中编辑该角色的权限，编辑完成后单击页面左下角的**保存更改**。
   
     :::tip
     
     更多关于权限的说明，请参见[权限](intro_account.md#权限)。
     
     :::

### 删除角色

您可以删除**系统管理员**以外的所有角色。

1. 登录 [NineData 控制台](https://console.9z.cloud)。

2. 在左侧导航栏，单击**账户管理**>**角色管理**。

   :::tip

   如果未找到**账户管理**，请确认您的控制台处于组织模式。如何从个人模式切换组织模式，请参见[切换到组织](manage_organization.md#切换到组织)。

   :::

3. 在页面左侧的角色列表中，将鼠标移动到需要删除的角色上，单击右侧的![icon2](./image/icon2.png)图标。

   :::tip

   **系统管理员**角色由于无法删除，其右侧不会出现该图标。

   :::

4. 在弹出的**编辑角色**对话框中，单击左下角的**删除角色**。

   :::caution

   角色删除后，绑定了该角色的用户会失去该角色以及对应的所有权限。本操作不可撤销，请谨慎操作。

   :::

5. 在弹出的确认框中，输入该角色的名称，并单击右下角的**删除角色**。

### <span id="binding">绑定角色</span>

角色只有在绑定到目标用户之后才会发挥作用，绑定之前，您需要确保目标用户已经加入组织。更多信息，请参见[邀请用户](manage_user.md#邀请用户)。

1. 登录 [NineData 控制台](https://console.9z.cloud)。

2. 在左侧导航栏，单击**账户管理**>**角色管理**。

   :::tip

   如果未找到**账户管理**，请确认您的控制台处于组织模式。如何从个人模式切换组织模式，请参见[切换到组织](manage_organization.md#切换到组织)。

   :::

3. 在页面左侧的角色列表中，单击目标角色名称，在页面右侧的**成员列表**中，单击**新增**。

4. 在弹出的**新增成员**对话框中，单击**成员**下方的选框，在成员列表中选择目标用户，您可以单击多个用户进行批量绑定。

5. 单击**确定**。

### 相关文档

- [管理组织](manage_organization.md)
- [管理用户](manage_user.md)

<h2 id="role_list"></h2>

### 附录：预置角色权限列表

<table>
<thead>
  <tr>
    <th width="110px">权限</th>
    <th width="110px">模块</th>
    <th width="142px">类别</th>
    <th width="110px">系统<br/>管理员</th>
    <th width="110px">生产环境<br/>管理员</th>
    <th width="110px">生产环境<br/>只读</th>
    <th width="110px">开发环境<br/>管理员</th>
    <th width="110px">普通成员</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="8">管理权限</td>
    <td rowspan="3">用户管理</td>
    <td>邀请用户</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>移除用户</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>配置个人权限</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="4">角色管理</td>
    <td>新增角色</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>编辑角色权限</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>编辑用户的角色</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>删除角色</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>审计日志</td>
    <td>查看用户行为记录</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>模块权限</td>
    <td>功能模块</td>
    <td>所有功能模块</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
  </tr>
  <tr>
    <td rowspan="11">数据源权限（生产环境）</td>
    <td rowspan="4">SQL 开发</td>
    <td>只读</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>读写</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>审批与发布</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>敏感数据管理</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="3">备份与恢复</td>
    <td>数据备份</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>数据恢复</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>备份集</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>数据复制</td>
    <td>数据复制</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="2">数据库对比</td>
    <td>数据对比</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>结构对比</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>基础配置</td>
    <td>数据源</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="11">数据源权限（开发环境）</td>
    <td rowspan="4">SQL 开发</td>
    <td>只读</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>读写</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>审批与发布</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>敏感数据管理</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="3">备份与恢复</td>
    <td>数据备份</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>数据恢复</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>备份集</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>数据复制</td>
    <td>数据复制</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="2">数据库对比</td>
    <td>数据对比</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>结构对比</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>基础配置</td>
    <td>数据源</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="2">告警权限</td>
    <td rowspan="2">告警权限</td>
    <td>管理告警</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>查看告警</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
  </tr>
</tbody>
</table>

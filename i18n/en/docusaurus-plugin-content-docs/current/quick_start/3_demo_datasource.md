---
sidebar_position: 2
---

# 步骤三：申请免费数据源并生成测试数据

本文介绍如何申请免费数据源（Demo 数据源）并生成测试数据。

### 功能说明

NineData 为每个用户以及组织提供了 2 个免费的 MySQL 测试数据源，在正式添加企业的数据库到 NineData 之前，您可以申请免费数据源作为功能测试用途。

免费数据源中会自动生成 MySQL 官方提供的 **Employees Sample Database** 数据库，有关该数据库的更多信息，请参见[官方文档](https://dev.mysql.com/doc/employee/en/employees-preface.html)。

### 使用限制

- 免费数据源自申请日开始可使用 3 个月，过期自动删除。
- 免费数据源的存储大小限制为 1 GB，超出后可读不可写。
- 免费数据源仅供 NineData 功能测试，请勿用于其他用途。
- 每个[用户](./account/intro_account#user)（个人模式）或[组织](./account/intro_account#organization)（组织模式）最多可申请 2 个免费数据源。

### 操作步骤

1. 在 NineData 控制台左侧导航栏，单击**基础配置**>**数据源**，并单击页面右上角的**申请数据源**。

   :::tip

   新注册的用户也可以在登录后，单击**工作台**页面的**申请免费数据源，快速体验**。该入口仅在当前用户或组织下没有添加任何数据源时显示。

   :::

2. 在**申请免费数据源**页面，选择**申请数据源数量**下的数据源个数，最多 2 个。

3. 单击**申请数据源**，即可完成免费数据源的申请，并跳转到该数据源的 **SQL 窗口**页面，此时系统开始导入测试数据集，该过程将持续约 30 秒。导入完成后，SQL 窗口中将提示**测试集导入成功！**。

   :::tip

   你还可以单击 **SQL 窗口**页面右上角的**导入测试数据集**，并单击**确定**，手动导入测试数据集。

   :::

### 下一步

* [添加数据源](/configuration/datasource.md)
* [使用 SQL 开发](/sqldev/intro_sqldev.md)
* [执行备份与恢复](/backup_and_restore/intro_back.md)
* [执行数据复制](/replication/intro_repli.md)
* [执行数据对比](/compare/intro_comp.md)
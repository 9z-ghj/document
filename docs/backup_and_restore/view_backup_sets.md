---
rsidebar_position: 4
---

# 查看备份集

NineData 支持查看当前当前用户（个人模式）或组织（组织模式）下的所有环境下所有备份集。

### 操作步骤

1. 登录 [NineData 控制台](https://console.ninedata.cloud)。

2. 在左侧导航栏单击**备份与恢复**>**备份集**。

3. 在跳转的页面中，您可以进行如下操作。

   | 操作<div style={{width:'50pt'}}></div> | 步骤<div style={{width:'300pt'}}></div>                      |
   | -------------------------------------- | ------------------------------------------------------------ |
   | 查看所有全量备份集和日志备份集         | 单击页面中的**全量备份集**页签或**日志备份集**页签。         |
   | 下载日志备份集                         | 为方便您进行问题分析溯源，NineData 提供 Binlog 日志文件的下载。下载方式：<ol><li>单击**日志备份集**页签。</li><li>单击目标 Binlog 文件右侧**操作**列的**下载**，下载 Binlog 文件。</li></ol><br />**说明**：您也可以单击**复制下载链接**，通过其他方式下载。 |
   | 将**已完成**的备份集恢复到目标数据源   | 单击目标备份集 ID 右侧**操作**列的**恢复数据**。更多信息，请参见[恢复逻辑数据](restore/restore_logical_backup.md)或[恢复物理数据](restore/restore_physical_backup.md)。 |
   | 对**已完成**的备份集进行在线数据查询   | 单击目标备份集 ID 右侧**操作**列的**数据查询**。更多信息，请参见[查询备份数据](backup_data_query.md)。 |
   | 查看备份集的详情                       | 单击目标备份集 ID 右侧**操作**列的**详情**。                   |
   | 终止**备份中**或**备份失败**的备份集   | 单击目标备份集 ID 右侧**操作**列的**终止**。                   |
   | 删除备份集                             | 单击目标备份集 ID 右侧**操作**列的**删除**。                   |
   
   :::tip
   
   如果没有找到上述方法中的入口，请单击操作列下的![more](./image/more.png)按钮。
   
   :::

### 相关文档

- [数据备份简介](intro_back.md)
- [执行逻辑备份](backup/logical_backup.md)
- [执行物理备份](backup/physical_backup.md)
- [恢复逻辑备份数据](restore/restore_logical_backup.md)
- [恢复物理备份数据](restore/restore_physical_backup.md)
- [查询备份数据](backup_data_query.md)


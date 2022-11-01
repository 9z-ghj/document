---
sidebar_position: 4
---



# 设计表结构

NineData 提供可视化表结构设计方案，您可以在 SQL 窗口中点击鼠标完成表结构的设计，无需再手动输入 SQL 命令。

### 前提条件

- [组织](/account/intro_account.md#组织)模式下，拥有 SQL 窗口功能模块权限。
- [组织](/account/intro_account.md#组织)模式下，拥有对目标数据源的读写权限。

:::tip

如果您无上述权限，请联系您组织的系统管理员为您[配置权限](/account/manage_user#配置用户个人权限)或[绑定角色](/account/manage_role.md#绑定角色)。

:::

### 操作步骤

您可以在通过 SQL 窗口创建表或编辑表时设计表结构，本文以创建表为例进行演示。

1. [打开 SQL 窗口并进入目标数据源](sql_console.md#操作步骤)。

2. 在 SQL 窗口左侧数据库列表中，右键单击目标数据库，并单击**创建表**。

   :::tip

   数据表将会创建在该目标数据库中。

   :::

3. 在**创建表**页签中，即可开始以可视化的方式设计表结构，系统会根据您的配置自动在页面下方生成 **SQL 脚本**。变结构设计页面的详情，请在下方选择对应页签并查看。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="common" label="通用项" default>

<ul><li><b>表名称</b>：自定义表的名称。</li><li><b>数据库</b>：选择当前表需要创建在哪个数据库下，默认为步骤2中右键单击的数据库。</li><li><b>表注释</b>：表的注释，即COMMENT属性。</li></ul>

  </TabItem>

  <TabItem value="column" label="列">

设置列。

<ul><li><b>列名</b>：最左侧文本框，输入列的名称，长度最大为 64 个字符。当前界面中的第一行默认为主键列，列名默认为 <b>id</b>。</li><li><b>数据类型</b>：左侧第二个文本框，单击该文本框可以选择列的数据类型。</li><li><b>NOT NULL</b>：设置该列是否允许空值。当前界面中的第一行主键列，该选项固定选中，即不允许空值。</li><li><b>默认值</b>：设置当前列的默认值，即 DEFAULT 属性。在该列没有插入其他值的情况下，则使用该默认值。</li><li><b>注释</b>：设置当前列的注释，即 COMMENT 属性。通过注释给列设置说明。长度最大为 1024 个字符。</li><li><b>PRIMARY KEY</b>：设置当前列是否为主键列，通过选中 <b>PRIMARY KEY</b> 左侧复选框，或者单击列名左侧的放大镜图标开启，您也可以将多个列设置为主键列，组成复合主键。</li><li><b>AUTO_INCREMENT</b>：仅整数类型列支持，将当前列设置为自增列。</li><li><b>UNSIGNED</b>：仅整数类型列支持，将当前列设置为无符号整数类型。</li><li><b>ON UPDATE CURRENT_TIMESTAMP</b>：仅时间类型支持，在更新某一行中的数据时，实时更新该列中的时间。</li><li><b>SRID</b>：仅几何图形类型支持，设置空间引用标识符 SRID。</li><li><b>字符集</b>：仅字符类型的列支持，设置当前列的字符集。</li><li><b>比较规则</b>：仅字符类型的列支持，根据字符集设置当前列的比较规则。</li><li><b>隐藏列</b>：如果当前表中没有适合作为主键的列，可以通过创建该隐藏列作为主键。</li><li><b>生成列</b>：即 Generated Column，该的值可以是其他列的计算结果，选中后，还需要输入<b>表达式</b>中以及选择是否存储列的值。<ul>
  <li><b>VIRTUAL</b>（默认）：不存储</li><li><b>STORED</b>：存储</li>
  </ul></li></ul>

  </TabItem>
  <TabItem value="index" label="索引">

设置索引。

<ul><li><b>索引名称</b>：输入索引的名称。当前表中有主键的情况下，第一行默认为主键索引信息。</li><li><b>索引类型</b>：选择需要添加的索引的类型。</li><li><b>索引列</b>：选择需要添加该索引的列名。</li><li><b>注释</b>：为当前索引添加注释信息。</li><li><b>隐藏索引</b>：仅 MySQL 8.0 及以上版本支持，将当前索引设置为隐藏索引。</li><li><b>其他索引选项</b>：根据需求加入其他索引选项。</li></ul>

  </TabItem>
  <TabItem value="foreign_key" label="外键">

设置外键约束。

<ul><li><b>外键名称</b>：输入外键的名称。</li><li><b>外键列</b>：选择需要关联外表的外键列。</li><li><b>引用</b>：选择将当前外键列关联到哪个库表列。</li><li><b>ON UPDATE</b>：设置 UPDATE 操作时的限制。</li><li><b>ON DELETE</b>：设置 DELETE 操作时的限制。</li></ul>

  </TabItem>

  <TabItem value="constraint" label="约束">

设置检查约束（MySQL 8.0.16 及以上版本支持）。

<ul><li><b>检查约束名称</b>：输入检查约束的名称。</li><li><b>表达式</b>：输入约束的表达式。例如：age >= 20。</li><li><b>ENFORCED</b>：是否强制执行约束。</li></ul>

  </TabItem>

  <TabItem value="partition" label="分区">

如果您的数据库文件太大，可以设置分区，以提升读取新能。

<ul><li><b>分区语句</b>：输入分区语句，您可以参考右侧<b>示例语句</b>的内容进行输入。</li></ul>

  </TabItem>

  <TabItem value="options" label="表选项">

设置表级别的选项。

<ul><li><b>表引擎</b>：选择表的存储引擎。</li><li><b>字符集</b>：设置当前表的字符集。</li><li><b>比较规则</b>：根据字符集设置当前表的比较规则。</li><li><b>临时表</b>：创建临时表，该表的生命周期仅限于当前连接，连接关闭后该临时表将自动删除。</li><li><b>其他表选项</b>：根据需求加入其他表选项。</li></ul>

  </TabItem>

</Tabs>

4. 单击**保存**，并在弹出的**提交变更**窗口中，单击**确认**。

   :::tip

   您也可以复制 SQL 脚本，手动在其他数据库客户端中执行。

   :::


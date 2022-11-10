---
sidebar_position: 3
---
# Configure an alert policy

NineData provides an alarm function. You need to create an alarm policy to enable the push function of alarm information. This article describes how to create alert policies and customize alert rules.

### Create an alert policy

**Preconditions**

- **An alarm recipient** or an **alarm recipient group** has been created . For more information, see [Configuring Alarm Receiving](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/alart_receiver.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .
- A task that needs to be monitored has been created. If it has not been created, please create a task first. Supported tasks: [data backup](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/intro_back.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) , [data recovery](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/backup_and_restore/intro_back.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) , [data replication](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/replication/intro_repli.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) , [data comparison](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/compare/intro_comp.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) , [structure comparison](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/compare/intro_comp.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) , [gateway](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/configuration/gateway.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .

**Steps**

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation pane, click **O&M Monitoring** > **Alarm Policy** .

3. On the **Alarm Policy** tab, click **Create Policy** in the upper right corner .

4. On the **Create Policy** page, configure according to the following table.

   | Parameters <div style={{width:'50pt'}}> | illustrate                                                   |
   | --------------------------------------- | ------------------------------------------------------------ |
   | **Policy name**                         | Enter the name of the policy. For the convenience of subsequent search and management, try to use a meaningful name. Up to 24 characters are supported. |
   | **task type**                           | Select the task type to be monitored. The supported task types are as follows:**data backup****Data Recovery****data replication****Data comparison****Structural comparison****gateway** |
   | **Associated tasks**                    | Select the tasks to be monitored, and click different tasks to make multiple selections. Alarm policies can only be associated with tasks of the corresponding task type. For example, when the **task type** is **data backup** , only the task list of **data backup** is displayed here . **Note** : Creation of an alarm policy is only supported when the corresponding task has been created. |
   | **Alert rules**                         | Select an alarm rule. The alarm rule contains the conditions for triggering the alarm and the push method of the alarm. NineData provides a default alarm rule, which is only pushed through SMS. If you need to [customize alert rules](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/alart_rule.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#创建告警规则) , click **Create Now** below the rules list . |
   | **Alert recipient/group**               | Select the destination for alarm push. The following options are supported:**User** : User who has been added to NineData.**Recipient** : The recipient that has been created. **If not, click Create Now** below the recipient list . For more information, see [Configuring Alarm Receiving](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/alart_receiver.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .**Receiving group** : The receiving group that has been created. **If not, click Create Now** below the recipient list . For more information, see [Configuring Alarm Receiving](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/alart_receiver.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) . |

5. Click **Create Policy** .

### Create alert rules

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation pane, click **O&M Monitoring** > **Alarm Policy** .

3. Click the **Alert Rules** tab, and click **Create Rule** in the upper right corner .

4. On the **Create Rule** page, configure according to the following table.

   | Parameters <div style={{width:'50pt'}}> | illustrate                                                   |
   | --------------------------------------- | ------------------------------------------------------------ |
   | **rule name**                           | Enter the name of the policy. For the convenience of subsequent search and management, try to use a meaningful name. Up to 24 characters are supported. |
   | **task type**                           | Select the task type corresponding to the rule. The supported task types are as follows:**data backup****Data Recovery****data replication****Data comparison****Structural comparison****gateway** |
   | **Alarm condition**                     | Select the condition of the alarm, which is displayed in the form of a logical expression in the console. Include:**Task Status** : Alerts when the task fails to run.**Full backup time** : Alarms when the full backup time is greater than the threshold.**Log backup delay** : When the log backup delay is greater than the threshold, an alarm is issued.**Replication Delay** : Alarms when the replication delay is greater than the threshold.**Comparison time** : When the comparison time is greater than the threshold, an alarm is issued.**Comparison result** : When the comparison result is **inconsistent** , an alarm is issued.**Gateway Status** : Alerts when the gateway status is abnormal. **Note** : When there are multiple conditions in the task type, you can click **Add** to configure multiple conditions. |
   | **Alarm mode**                          | Select the alarm method, which can be single or multiple. Support SMS, phone, email, Webhook (Dingding, Feishu, enterprise WeChat). |

5. Click **Create Rule** .
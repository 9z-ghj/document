---
sidebar_position: 1
---
# Introduction to Operation and Maintenance Monitoring

NineData provides the operation and maintenance monitoring function, which can monitor the running status of NineData tasks in real time. For abnormal tasks, it can notify you in real time in the form of alarms, so that you can take timely measures.

### Background Information

For tasks that run asynchronously and run for a long time, such as **data comparison** , **data replication** , and **data backup , it is difficult for users to check the running status of the tasks through status polling.**

In order to improve the user experience, NineData provides a monitoring and alarm function, which can monitor the running status of tasks anytime and anywhere, and push abnormal information to you in real time through SMS, phone, email, Webhook, etc., greatly reducing task maintenance costs.

### Features

| item <div style={{width:'60pt'}}> | illustrate                                                   |
| --------------------------------- | ------------------------------------------------------------ |
| Supported tasks                   | Data backup, data recovery, data replication, data comparison, structure comparison, gateway |
| Monitoring indicators             | Data backup: task status, full backup time, log backup delay Data recovery: task status Data replication: task status, replication delay Data comparison: task status, comparison time, comparison result Structure comparison: task status, comparison time, comparison result Gateway: gateway status |
| Alert rules                       | NineData provides a default alarm rule for each task type, which cannot be modified. You can also create custom rules based on business needs. For more information, see [Creating Alert Rules](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/alart_rule.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#创建告警规则) . |
| Alert recipient                   | It supports sending alarms to individuals, as well as to all members in the alarm receiving group. NineData provides a default alarm receiving group `默认告警组`, and you can also create a custom alarm receiving group. For more information, see [Configuring Alarm Receiving](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/alart_receiver.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) . |
| Alarm channel                     | Support text messages, phone calls, emails, DingTalk, Feishu, and corporate WeChat. The alarm channel of the default alarm rule is SMS. If you want to use other alarm channels, [create an alarm rule](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/alart_rule.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#创建告警规则) manually . |
| View History                      | After the alarm is triggered, a history record will be generated, which is convenient for you to manage the operation and maintenance of the task in the future. |

### Use flowcharts

[![flow](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/alart/image/flow4.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/image/flow4.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

### Related Documentation

- [Configure Alarm Receiving](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/alart_receiver.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Configure an alert policy](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/alart_rule.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [View alarm history](/alart/alart_history.md)
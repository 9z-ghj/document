---
sidebar_position: 4
---
# View alarm history

NineData provides an alarm history function. After an alarm is triggered, a history record will be generated. You can quickly locate abnormal tasks by viewing the alarm history and improve the efficiency of fault recovery.

### Steps

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation pane, click **O&M Monitoring** > **Alarm History** . The interface description is as follows:[![interface](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/alart/image/interface.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/image/interface.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

   | Serial number <div style={{width:'25pt'}}> | Parameters <div style={{width:'50pt'}}> | illustrate                                                   |
   | ------------------------------------------ | --------------------------------------- | ------------------------------------------------------------ |
   | 1                                          | just look at yourself                   | You can filter the alarm content whose recipient is the current account. |
   | 2                                          | Content filtering options               | Target abnormal tasks can be quickly located by task type, alarm policy, alarm time, and keyword search. |
   | 3                                          | refresh                                 | Refresh the alarm history page.                              |
   | 4                                          | Alarm time                              | The push time of the alarm.                                  |
   | 5                                          | task type                               | The task type corresponding to the alarm.                    |
   | 6                                          | unusual task                            | The name of the original task that triggered the alert. You can click the task name to go directly to the task page. |
   | 7                                          | Alarm mode                              | How to push alarms.                                          |
   | 8                                          | state                                   | Whether the alarm is successfully pushed, if the push target is a group, all receivers in the group need to receive the alarm to display **success** , otherwise it will display **failure** . |
   | 9                                          | Alarm content                           | Details of the alarm, including the task name, failure reason, etc. |
   | 10                                         | operate                                 | You can click **Details** to view the details of the target alarm. Contains **basic information** , **alarm settings** , and **alarm content** . |

### Related Documentation

- [Configure Alarm Receiving](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/alart_receiver.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
- [Configure an alert policy](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/alart_rule.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
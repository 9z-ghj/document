---
sidebar_position: 2
---
# Configure Alarm Receiving

NineData operation and maintenance monitoring supports sending alarms through receiving groups or receivers. This article describes how to create an alarm receiving group or an alarm receiver.

### Create an alarm receiving group

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation pane, click **O&M Monitoring** > **Alarm Receiving** .

3. On the **Alarm Receiving Groups** tab, click **Create Receiving Group** in the upper right corner .

4. On the **Create Receiving Group** page, configure according to the following table.

   | Parameters <div style={{width:'50pt'}}>       | illustrate                                                   |
   | --------------------------------------------- | ------------------------------------------------------------ |
   | **receiving group name**                      | Enter the name of the alarm receiving group. To facilitate subsequent search and management, try to use a meaningful name. Up to 24 characters are supported. |
   | **Add recipient** (SMS, phone, email)         | Click the input box under **Add recipient,** and a list of created alarm recipients will pop up. Click on the recipient name you want to add to add it. You can also enter some keywords of the recipient in the input box to perform a fuzzy search to quickly locate the target recipient. **Note** : If you have not created a recipient, you can click **Create Now below the list to create** an alarm recipient. |
   | **Feishu/DingTalk/Enterprise WeChat Webhook** | Enter the webhook address of the group robot in the left box. If signature verification is enabled for the webhook address, you also need to enter the signature key in the right box (leave it blank if signature verification is not enabled). Click **Verify Availability** to test Whether the entered webhook address is available. How to obtain the webhook address, please refer to the following official documents:[Feishu Webhook](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://www.feishu.cn/hc/zh-CN/articles/244506653275)[DingTalk Webhook](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://help.aliyun.com/document_detail/251838.htm)[Enterprise WeChat Webhook](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://open.work.weixin.qq.com/help2/pc/14931) **Note: \**To add multiple Webhooks at the same time, click the\** Add** button. |

5. Click **Create Receiving Group** .

   :::tip

   NineData provides a default receiver group `默认告警组`. You can also directly click **Edit in the** **operation** column on the right side of the receiver group to add receivers or Webhooks to the group. For the editing method, see the table above.

   :::

### Create an alert recipient

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation pane, click **O&M Monitoring** > **Alarm Receiving** .

3. Click **the Alert Recipients** tab and click **Create Recipient in the** upper right corner of the page .

4. On the **Create Receiver** page, configure according to the following table.

   | Parameters <div style={{width:'50pt'}}>                      | illustrate                                                   |
   | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | **recipient name**                                           | Enter the name of the alarm receiving group. To facilitate subsequent search and management, try to use a meaningful name. Up to 24 characters are supported. |
   | **Configuration method**                                     | **Manual configuration** : Manually enter the recipient's **mobile phone number** and **email address** (optional).**NineData User** : Select a user who has joined NineData to automatically fill in the user's **mobile phone number** and **email** address . |
   | **Mobile phone number** ( visible when the **configuration method** is **manual configuration )** | Enter the recipient's mobile phone number, currently only mobile phone numbers in mainland China are supported. **Note** : After the input is complete, you can click **Verify Availability** on the right to verify whether the entered mobile phone number is available. |
   | **Mailbox** ( visible when the **configuration method** is **manual configuration )** | (Optional) Enter the recipient's email address. **Note** : After the input is complete, you can click **Verify Availability** on the right to verify whether the entered email address is available. |
   | **Join the alarm receiving group**                           | (Optional) Click the input box under **Join Alarm Receiving Group** , and a list of created alarm receiving groups will pop up. Click the name of the receiving group you want to add to add it. You can also enter some keywords of the receiving group in the input box to perform a fuzzy search to quickly locate the target receiving group. **Note** : If you have not created a receiving group, you can click **Create Now below the list to create** an alarm receiving group. |

5. Click **Create Recipient** .

### Next step

[Configure an alert policy](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/alart/alart_rule.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
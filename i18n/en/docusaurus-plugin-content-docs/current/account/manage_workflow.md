---
sidebar_position: 5
---

# Permission application and approval

NineData supports the data security management and control function within the organization and provides the corresponding approval flow. You can apply for permissions or apply for permissions submitted by other users.

### Apply for sensitive data permission

Data with sensitive columns set in the data source cannot be viewed directly. At this time, you can apply for the permission of sensitive columns. After the application is approved, you can view the sensitive columns in the target data source.

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Account Management** > **Permission Application and Approval** .

   :::tip

   If **Account Management** is not found , verify that your console is in Org Mode. How to switch from personal mode to organization mode, see [Switching to Organization](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_organization.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#切换到组织) .

   :::

3. On the **permission application and approval** page, click **Apply for Permissions** in the upper right corner .

4. On the **Apply for Sensitive Data Permission** page, configure according to the following table, and click **Submit Application** .

   | Parameters <div style={{width:'50pt'}}> | illustrate                                                   |
   | --------------------------------------- | ------------------------------------------------------------ |
   | **data source**                         | The data source to which the sensitive column that needs to be viewed belongs to. |
   | **sensitive column**                    | Add sensitive columns that need to be requested to be viewed. Operation steps: 1. Click **Add** to find the sensitive column you want to view. You can quickly locate target sensitive columns by filtering libraries, tables, or directly searching for column names. 2. To the left of the Sensitive Columns list, select the checkbox for the target sensitive column and click OK in the lower right corner of the **page** . |
   | **Permission validity period**          | Select the validity period of the permission, during which you can view the sensitive columns with permission without restrictions. Optional validity is **7 days** , **30 days** , **60 days** , **90 days** , **half year** , **1 year** , **3 years** , **custom** . Custom can enter the number of days to be applied by yourself, the valid range is **1~10000** . |
   | **Reason for application**              | Enter the reason for requesting permission.                  |
   | **Approver**                            | Select the user who has permission to this sensitive column to approve the ticket. **Note** : Only users with sensitive data management permissions are displayed in the approver list. |

5. After submitting the application work order, the page automatically jumps to the **permission application and approval** page. In the work order list, all the work orders you have submitted will be displayed. Wait for the work order **status** to change from **pending** to **approval** .

### View or manage tickets

You can view all work orders you have submitted, work orders pending your approval, and all work orders within your organization. In addition, you can manage the work orders you have submitted and the work orders waiting for you to submit.

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **Account Management** > **Permission Application and Approval** .

   :::tip

   If **Account Management** is not found , verify that your console is in Org Mode. How to switch from personal mode to organization mode, see [Switching to Organization](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_organization.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#切换到组织) .

   :::

   **View work order**

   1. The page automatically jumps to the **My Submitted** tab, which displays all your submitted work orders.
   2. Click **the Pending My Approval** tab, which displays all work orders waiting for your approval.
   3. Click the **All Approval** tab, and all work orders under the current organization are displayed in this tab.

   **Manage work orders**

   Click the **details in the** **operation** column on the right side of the work order to view the details page of the work order. The details page includes the **work order ID** , **application content** and **operation history** . If you are the submitter or approver of the work order, according to the work order status, You can also perform the following operations.

   - Transfer : Transfer the ticket to other users for approval (displayed when the status of the ticket is **pending** **and** you are the submitter or approver of the ticket). After clicking **Transfer** , you will also need to select the transfer person and click **OK** .
   - **Approval Failed** : Reject the work order application (displayed when the work order status is **pending** and you are the work order approver). After clicking **Approval Failed** , you need to enter the reason for rejection and click **Approval Failed** .
   - **Approved** : Approve the work order application (displayed when the work order status is **pending** and you are the work order approver). After clicking **Approve** , you can enter the reason for approval and click **Approve** .
   - **Withdraw** : withdraw the ticket application (displayed when the status of the ticket is **pending** and you are the submitter of the ticket). After clicking **withdraw , you will also need to click** **withdraw** in the confirmation box that pops up . The undo operation cannot be undone, please operate with caution.
   - **Delete** : Delete the ticket (displayed when the status of the ticket is **pending** and you are the submitter of the ticket). After clicking **Delete , you also need to click** **Delete** in the confirmation box that pops up . The delete operation cannot be undone, please operate with caution.
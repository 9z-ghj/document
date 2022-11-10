---
sidebar_position: 3
---

# SQL tasks

The SQL task is the task of initiating SQL operations on the database, mainly including SQL statements such as DDL (Database Definition Language) and DML (Database Manipulation Language). This article describes how to use SQL tasks.

### Features

To ensure data security, users who do not have write permissions to the target data source cannot initiate changes to the content of the data source. If there is a change requirement, it can be achieved by submitting a SQL task work order. The SQL task function provided by NineData has full-cycle security control, including steps such as submission, approval, execution, and rollback.

### Preconditions

- An organization has been created or joined. For more information, see [Managing Organizations](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_organization.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp) .
- The NineData console is in org mode. How to switch from personal mode to organization mode, see [Switching to Organization](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_organization.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#切换到组织) .
- The current user has access to the SQL Tasks module. For more information, see [List of Preset Role Permissions](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_role.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#附录预置角色权限列表) .

### Submit SQL Change Task

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **SQL Development** > **SQL Tasks** .

   :::tip

   If no **SQL tasks** are found , verify that your console is in org mode. How to switch from personal mode to organization mode, see [Switching to Organization](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_organization.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#切换到组织) .

   :::

3. On the **SQL Tasks** page, click **Create SQL Task** in the upper right corner .

4. On the **Create SQL Task** page, configure the ticket according to the table below.[![commit_sql](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/sqldev/image/commit_sql.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/image/commit_sql.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

   | Parameters <div style={{width:'50pt'}}> | illustrate                                                   |
   | --------------------------------------- | ------------------------------------------------------------ |
   | **mission name**                        | Enter the name of the SQL task, which usually contains the purpose of executing the SQL statement. To reduce communication costs, try to use a meaningful name. Up to 64 characters are supported. |
   | **data source**                         | The target needs to change the data source where the database is located. |
   | **database**                            | The database that needs to perform SQL changes.              |
   | **publisher**                           | The approver of the current SQL task order and the executor of the SQL statement after approval. **Note : Only users who have** **approval and publishing** permissions for the current data source are displayed in the user list . For information about permissions, see the [list of preset role permissions](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_role.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#附录预置角色权限列表) . |
   | **remarks** (optional)                  | A description of the unfinished matters of the current SQL task, such as the reason for executing the task, the expected execution time, etc. |
   | **How to submit**                       | Enter the SQL statement to be executed or upload a file containing the SQL statement.**SQL text** : Enter the SQL statement to be executed directly in the text box.**Upload SQL file** : Click **Upload file** , select the file containing the SQL statement to be executed, and click **Open** . **Note** : After the upload is complete, move the mouse to the file name, and select [![review](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/sqldev/image/review.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/image/review.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)(preview file) or [![delete](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/sqldev/image/delete.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/image/delete.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)(delete file) on the right side of the file name. |

5. Click **pre-check** , and the system will check the SQL statement in advance to rule out syntax errors and other situations that cannot be executed. If there is a problem with the SQL statement, a prompt will appear below. Click **View Details** in the prompt to view the specific error information, which is convenient for you to locate and modify.

6. **After the pre-check** is passed, click **Create SQL Task** to initiate the SQL task. At this point, the page automatically jumps to the **SQL task** page, where you can view the SQL task list or manage the SQL tasks.

   :::tip

   For tasks for which you are the **submitter** , you can also do the following on the **SQL Tasks page:**

   - **Edit** : If the task is rejected (task status is **rejected** ), you can click Edit in the operation column to the right of the task **,** **re** - edit the SQL task, and click **Resubmit** .
   - **Transfer** : Click > Transfer in the **operation** column on the right side of the task **to** change the executor of the SQL task.[![more](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/sqldev/image/more.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/image/more.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
   - **Recall** : Recall the SQL task. For more information, see [Recalling SQL Tasks](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/sql_task.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#撤回-SQL-任务) .
   - **Copy a task** : Click > **Copy Task in the** **operation** column on the right side of the task to copy an identical task list.[![more](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/sqldev/image/more.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/image/more.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
   - **Close** : Click > **Close in the** **operation** column to the right of the task to close the target task list. After shutdown, if the SQL task has not been executed, it will not be executed again.[![more](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/sqldev/image/more.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/image/more.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)
   - **Delete** : If the task status is **Terminated** , click > **Delete in the** **Action** column to the right of the task , enter the task name, and click **Delete Task** .[![more](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/sqldev/image/more.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/image/more.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

   :::

### Withdraw SQL tasks

When the status of the SQL task is **pending** , you can withdraw the application for the SQL task. After the withdrawal, the task will no longer be executed, and you can re-edit the task list and submit it again.

**Preconditions**

- The status of the SQL task is **pending** .
- **You are the submitter** of the target SQL task .

**Steps**

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **SQL Development** > **SQL Tasks** .

   :::tip

   If no **SQL tasks** are found , verify that your console is in org mode. How to switch from personal mode to organization mode, see [Switching to Organization](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_organization.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#切换到组织) .

   :::

3. On the **SQL Tasks** page, find the target SQL task, and click the task ID or **details in the** **Action** column to the right of the task . Click **Withdraw** in the upper right corner of the task details page .

   :::tip

   You can also click > **Withdraw in the** **Action** column to the right of the task .[![more](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/sqldev/image/more.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/image/more.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

   :::

4. In the confirmation window that pops up, click **Recall** or **Retract and Edit** .

   - **Withdraw** : The page automatically jumps to the details page of the SQL task. You can click **Edit** in the upper right corner of the page , or go back to the **SQL task** list to find the SQL task, and click Edit under the operation column on the right **to** **re** - edit the task list.
   - **Withdraw and Edit** : The page automatically jumps to the edit page of the SQL task.

### Approve SQL tasks

**Preconditions**

- The status of the SQL task is **pending** .
- **You are the publisher** of the target SQL task .

**Steps**

1. Log [in to the NineData console](https://translate.google.com/website?sl=auto&tl=en&hl=ja&client=webapp&u=https://console.ninedata.cloud) .

2. In the left navigation bar, click **SQL Development** > **SQL Tasks** .

   :::tip

   If no **SQL tasks** are found , verify that your console is in org mode. How to switch from personal mode to organization mode, see [Switching to Organization](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/account/manage_organization.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#切换到组织) .

   :::

3. On the **SQL Tasks** page, find the target SQL task, and click the task ID or **details in the** **Action** column to the right of the task .

4. On the **task details** page, approve the contents in the **SQL details , and choose** **to transfer** , **execute** or **reject** according to the actual situation .

   | <div style={{width:'25pt'}}>Operation | illustrate                                                   |
   | ------------------------------------- | ------------------------------------------------------------ |
   | **transfer**                          | Transfer the task order to other users for approval.         |
   | **implement**                         | Approve the application and choose **immediate** , **scheduled** or **manual execution** based on business needs .**Execute Immediately** : Execute the SQL statement immediately.**Scheduled execution** : Select a time to execute the SQL statement. **Manual execution** : Manually execute the SQL in the SQL task list, and click **Executed to mark success** . You can also click **Go to SQL Window Execute to** execute the SQL manually. |
   | **turn down**                         | The request is rejected and the SQL task is not executed. After clicking Reject , you will also need to enter **the reason for rejection** **and** click **OK** . If you approve an SQL task and select **Scheduled execution** , you can also dismiss the SQL task if the task status is **pending .** Steps: On the **SQL task** page, click Undo Execution under the Action column on the right side of the **task** **,** or click **Undo Execution** in the upper-right corner of the task's details page .Enter **the reason for rejection** and click **OK** . **Note** : **If the submitter** and the **publisher** are the same person, it cannot be **rejected** , and only [the SQL task can be withdrawn](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/sql_task.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp#撤回-sql-任务) . |

5. You can view the process details of the ticket in the **operation history of the** **task details.**[![workflow](https://github.com/9z-ghj/Docs/raw/v1_0_0/docs/sqldev/image/workflow.png)](https://github-com.translate.goog/9z-ghj/Docs/blob/v1_0_0/docs/sqldev/image/workflow.png?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

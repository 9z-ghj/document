---
sidebar_position: 1
---

# Terms

This article introduces the terminology encountered during the use of NineData products.

### S

- Data source: The data source in current SQL development refers to database instance information, including database connection string, login authentication information, etc.
- Private network connection: Private network connection allows users to access cloud vendor services, third-party services, or self-published services through the private network in their own VPC. These services are all deployed in the service provider's VPC.
- SQL task: refers to the task of changing the database, mainly including DDL (Database Definition Language), DML (Database Manipulation Language) and other statements. Because it involves changes to the database, it is necessary to have full-cycle security management and control of SQL tasks, including steps such as submission, approval, execution, and rollback.

### W

- Gateway: A database connection service that supports remote access to private network databases. Through the gateway, third-party cloud or local databases can be connected to the NineData platform securely and at low cost.

### Y

- Cloud Vendor Access Credentials: The cloud host needs to use the Access Key (AK) and Access Key Secret (SK) encryption methods to verify the identity of the sender of a request. AK is used to identify the user, SK is the key used by the user to encrypt the authentication string and the cloud vendor used to verify the authentication string, and the SK must be kept secret.
- Metadata: Metadata is an integral part of the database, which includes database name, database character set, table name, table size, table record row count, table character set, table index, table remarks, field name, field type, field precision, Field remarks, etc., these information are partly saved in the system table of the database. For example, MySQL metadata information is stored `information_schema`in databases such as . The size of the table and the number of rows in the table may not be very accurate, so it is only an order of magnitude reference.
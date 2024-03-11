# DB-Assignment
1. In the schema provided, the relationship between the "Product" and "Product_Category" entities is represented as follows:

-Product_Category: This collection stores information about different categories of products. Each document in this collection represents a product category.

-Product: This collection stores information about individual products. Each document in this collection represents a single product. Within each product document, there is a field named `category_id`, which is a reference to the `_id` field of a document in the "Product_Category" collection. This field establishes a relationship between a product and its corresponding category.

In summary, the relationship between the "Product" and "Product_Category" entities is a one-to-many relationship, where one product category can have multiple products associated with it, but each product belongs to only one category. This relationship is implemented using references in the "Product" collection to documents in the "Product_Category" collection.


2.To ensure that each product in the "Product" collection has a valid category assigned to it in MongoDB, you can follow these steps:

Define a Schema: When defining the schema for the "Product" collection using Mongoose or another MongoDB ORM, specify a field for the category ID that references the "_id" field of the "Product_Category" collection.

Use References: Use references to establish the relationship between the "Product" and "Product_Category" collections. Ensure that the category ID field in the "Product" collection references a valid document ID in the "Product_Category" collection.

Validation: Implement validation logic in your application or Mongoose schema to ensure that a product cannot be created or updated with an invalid category ID. You can use Mongoose's built-in validation features or custom validation functions to enforce this rule.

Pre-save Hook: Implement a pre-save hook in your Mongoose schema to perform additional validation before saving a product document. This hook can check if the referenced category ID exists in the "Product_Category" collection and reject the operation if it's invalid.

Error Handling: Handle errors gracefully in your application logic. If an attempt is made to create or update a product with an invalid category ID, respond with an appropriate error message and prevent the operation from proceeding.

By implementing these steps, you can ensure that each product in the "Product" collection has a valid category assigned to it, maintaining data integrity and consistency in your MongoDB database.

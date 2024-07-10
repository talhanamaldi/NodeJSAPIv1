module.exports = app => {
  const employees = require("../controllers/employeeController.js");
  const router = require("express").Router();

  /**
   * @swagger
   * components:
   *   schemas:
   *     Employee:
   *       type: object
   *       properties:
   *         name:
   *           type: string
   *           description: The name of the employee
   *         email:
   *           type: string
   *           description: The email of the employee
   *       example:
   *         id: 1
   *         name: John Doe
   *         email: johndoe@example.com
   */

  /**
   * @swagger
   * tags:
   *   name: Employees
   *   description: The employee managing API
   */

  /**
   * @swagger
   * /api/employees:
   *   post:
   *     summary: Create a new employee
   *     tags: [Employees]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Employee'
   *     responses:
   *       200:
   *         description: The employee was successfully created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Employee'
   *       500:
   *         description: Some server error
   */
  router.post("/", employees.create);

  /**
   * @swagger
   * /api/employees:
   *   get:
   *     summary: Returns the list of all the employees
   *     tags: [Employees]
   *     responses:
   *       200:
   *         description: The list of the employees
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Employee'
   */
  router.get("/", employees.findAll);

  /**
   * @swagger
   * /api/employees/{id}:
   *   get:
   *     summary: Get the employee by id
   *     tags: [Employees]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *         description: The employee id
   *     responses:
   *       200:
   *         description: The employee description by id
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Employee'
   *       404:
   *         description: The employee was not found
   */
  router.get("/:id", employees.findOne);

  /**
   * @swagger
   * /api/employees/{id}:
   *   put:
   *     summary: Update the employee by the id
   *     tags: [Employees]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *         description: The employee id
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Employee'
   *     responses:
   *       200:
   *         description: The employee was updated
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Employee'
   *       404:
   *         description: The employee was not found
   *       500:
   *         description: Some error happened
   */
  router.put("/:id", employees.update);

  /**
   * @swagger
   * /api/employees/{id}:
   *   delete:
   *     summary: Remove the employee by id
   *     tags: [Employees]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *         description: The employee id
   *     responses:
   *       200:
   *         description: The employee was deleted
   *       404:
   *         description: The employee was not found
   */
  router.delete("/:id", employees.delete);

  /**
   * @swagger
   * /api/employees:
   *   delete:
   *     summary: Remove all employees
   *     tags: [Employees]
   *     responses:
   *       200:
   *         description: All employees were deleted
   *       500:
   *         description: Some error happened
   */
  router.delete("/", employees.deleteAll);

  app.use("/api/employees", router);
};

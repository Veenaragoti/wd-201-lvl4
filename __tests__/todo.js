const todoList = require("../todo");
const { all, markAsComplete, add ,overdue,dueToday,dueLater} = todoList();
describe("Todolist Test suite", () => {
  beforeAll(() => {
    const dateToday = new Date();

    [
      {
        title: "complete the course",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "prepare for mids",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
    ].forEach(add);
  });
  test("checks for creating a new todo", () => {
    expect(all.length).toEqual(2);
    add({
      title: "go for walking",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(3);
  });

  test("checks for marking a todo as completed", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("checks for retrieval of overdue items", () => {
    expect(overdue().length).toEqual(0);
  });

  test("checks for retrieval of due today items", () => {
    expect(dueToday().length).toEqual(3);
  });

  test("checks for retrieval of due later items", () => {
    expect(dueLater().length).toEqual(0);
  });
});

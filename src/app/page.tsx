import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

const getToDo = () => {
  return prisma.todo.findMany();
};

const handleCheckToggle = async (id: string, checkValue: boolean) => {
  "use server";
  console.log(id, checkValue);
  prisma.todo.update({ where: { id }, data: { complete: checkValue } });
};

export default async function Home() {
  // const user = await prisma.todo.create({
  //   data: {
  //     title: "water",
  //     complete: false,
  //   },
  // });

  const todos = await getToDo();
  return (
    <>
      <header className=" h-10 bg-blue-800 text-white flex justify-between p-4 items-center">
        <h1>to-do-app</h1>
        <Link
          href="/new"
          className="border-2 border-white rounded-md py-1 px-2"
        >
          NEW
        </Link>
      </header>
      <section>
        <div className="p-10 list-none">
          <form>
            {todos.map((todo, index) => {
              return (
                <TodoItem
                  toggleTodo={handleCheckToggle}
                  key={todo.id}
                  {...todo}
                />
              );
            })}
          </form>
        </div>
      </section>
    </>
  );
}

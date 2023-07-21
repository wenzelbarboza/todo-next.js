import Link from "next/link";
import React from "react";
import Button from "@/components/Button";
import { redirect } from "next/navigation";
import { prisma } from "@/db";

//server action
const addToDo = async (data: FormData) => {
  "use server";
  const title = data.get("todoItem");

  if (typeof title !== "string" || title?.length == 0) {
    throw new Error("invalid title");
  }
  await prisma.todo.create({ data: { title, complete: false } });
  console.log(title);
  console.log("server Hi");
  redirect("/");
};

export default function newToDo() {
  return (
    <>
      <header className=" h-10 bg-blue-800 text-white flex justify-end p-4 items-center">
        <Link href="/" className="border-2 border-white rounded-md py-1 px-2">
          list
        </Link>
      </header>
      <section>
        <div>
          <h1>NEW</h1>
          <form action={addToDo}>
            <input
              type="text"
              name="todoItem"
              id="todoItem"
              className="text-slate-900"
            />
            <div className="flex justify-end">
              <Button type="submit">submit</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

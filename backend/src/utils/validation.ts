import zod from "zod";

const createUser = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    contact: zod.string().max(10, {message: "Contact number should be max 10 digits"}).min(10, {message: "Contact number should be min 10 digits"}),
    email: zod.string().email({ message: "Invalid email address" }),
    password: zod.string().min(8, { message: "Password must be at least 8 characters long" }),
    role: zod.string().refine(role => role === "user" || role === "admin", { message: "Invalid role" }),
  });

export { createUser };

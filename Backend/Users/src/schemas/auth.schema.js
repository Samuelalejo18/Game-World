//este archivo valida la informacion que ingresa el cliente

//zod es una depedencia donde 'z', permite dar tipos de datos(tipar)

const { z } = require("zod");
//validar el registro
const registerSchema = z.object({
    name: z.string({ required_error: 'name is required' }),
    lastName: z.string({ required_error: 'last name is required' }),
    age: z.number({ required_error: 'age is required' }).int().min(18, 'You must be at least 18 years old').max(100, 'You must be at most 100 years old'),
    address: z.string({ required_error: 'address is required' }),
    phone: z.number().int().refine((value) => { const phoneNumber = value.toString(); return phoneNumber.length === 10; }, { message: 'Phone number must have exactly 10 digits' }),
    username: z.string({ required_error: 'user name is required' }).min(6, { message: 'Password must be at least 6 characters' }).max(14, { message: 'The password must have a maximum of 14 characters' }),
    email: z.string({ required_error: 'email is required' }).email({ message: 'invalid email' }),
    password: z.string({ required_error: 'password is required' }).min(6, { message: 'Password must be at least 6 characters' }).max(14, { message: 'The password must have a maximum of 14 characters' }),
});

//validar el login  

const loginSchema = z.object({
    email: z.string({ required_error: 'Email is required', }).email({ message: 'Invalid email' }),
    password: z.string({ required_error: 'password is required' }).min(6, { message: 'Password must be at least 6 characters' }).max(14, { message: 'The password must have a maximum of 14 characters' }),
});


module.exports = { registerSchema,  loginSchema };
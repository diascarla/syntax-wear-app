import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../Utils/cpf-validator";

const registerUserFormSchema = z
  .object({
    firstName: z
      .string()
      .nonempty("Campo obrigatório.")
      .transform((name) => {
        return name.trim().replace(/^\w/, (c) => c.toLocaleUpperCase());
      }),

    email: z.email("E-mail inválido"),

    password: z
      .string()
      .nonempty("Campo obrigatorio.")
      .min(8, "Verifique se a senha tem pelo menos 8 caracteres."),

    confirmPassword: z.string().nonempty("Informe a senha novamente."),

    lastName: z
      .string()
      .nonempty("Campo obrigatório.")
      .transform((name) => {
        return name.trim().replace(/^\w/, (c) => c.toLocaleUpperCase());
      }),

    cpf: z
      .string()
      .min(11, "Campo obrigatório.")
      .refine((cpf) => isValidCPF(cpf), {
        message: "CPF inválido.",
        path: ["cpf"],
      }),

    dateBirth: z
      .string()
      .refine(
        (date) => !isNaN(Date.parse(date)),
        "Data de nascimento inválida",
      ),

    phone: z.string().nonempty("Campo obrigatório."),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas informadas não correspondem. Tente novamente.",
    path: ["confirmPassword"],
  });

type registerUserFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<registerUserFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(registerUserFormSchema),
  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    setError,
    reset,
  };
};

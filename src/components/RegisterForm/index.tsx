import { useRegisterForm } from "./register-form.schema.ts"

export const RegisterForm = () => {
    const { 
        register,
        errors,
        isSubmitting,
    } = useRegisterForm()

    return (
        <form
            className="flex flex-col gap-4 text-black"
        >
            {/* Email */}
            <div>
                <label className="text-xs text-gray-600">Email*</label>
                <input
                    type="email"
                    {...register('email')}
                    className={`w-full border rounded-xs px-1  mt-1 focus:outline-none focus:ring-2 ${errors.email
                        ? 'text-error focus:ring-red-400'
                        : 'border-border focus:ring-accent'
                        }`}
                />
                {errors.email && (
                    <p className="text-xs text-red-600 mt-1">⚠ {errors.email.message}</p>
                )}
            </div>

            {/* Senha */}
            <div>
                <label className="text-xs text-gray-600">Senha*</label>
                <input
                    type="password"
                    {...register('password')}
                    className={`w-full border rounded-xs px-1  mt-1 focus:outline-none focus:ring-2 ${errors.password
                        ? 'text-error focus:ring-red-400'
                        : 'border-border focus:ring-accent'
                        }`}
                />
                {errors.password && (
                    <p className="text-xs text-red-600 mt-1">⚠ {errors.password.message}</p>
                )}
            </div>

            {/* Confirmar Senha */}
            <div>
                <label className="text-xs text-gray-600">Confirmar senha*</label>
                <input
                    type="password"
                    {...register('confirmPassword')}
                    className={`w-full border rounded-xs px-1  mt-1 focus:outline-none focus:ring-2 ${errors.confirmPassword
                        ? 'text-error focus:ring-red-400'
                        : 'border-border focus:ring-accent'
                        }`}
                />
                {errors.confirmPassword && (
                    <p className="text-xs text-red-600 mt-1">
                        ⚠ {errors.confirmPassword.message}
                    </p>
                )}
            </div>

            {/* Nome */}
            <div>
                <label className="text-xs text-gray-600">Nome*</label>
                <input
                    type="text"
                    {...register('firstName')}
                    className="w-full border border-border rounded-xs px-1  mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                {errors.firstName && (
                    <p className="text-xs text-red-600 mt-1">⚠ {errors.firstName.message}</p>
                )}
            </div>

            {/* Sobrenome */}
            <div>
                <label className="text-xs text-gray-600">Sobrenome*</label>
                <input
                    type="text"
                    {...register('lastName')}
                    className="w-full border border-border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                {errors.lastName && (
                    <p className="text-xs text-red-600 mt-1">⚠ {errors.lastName.message}</p>
                )}
            </div>

            {/* CPF */}
            <div>
                <label className="text-xs text-gray-600">CPF*</label>
                <input
                    type="text"
                    {...register('cpf')}
                    className="w-full border border-border rounded-xs px-1  mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                {errors.cpf && (
                    <p className="text-xs text-red-600 mt-1">⚠ {errors.cpf.message}</p>
                )}
            </div>

            {/* Data de nascimento */}
            <div>
                <label className="text-xs text-gray-600">Data de nascimento</label>
                <input
                    type="date"
                    {...register('dateBirth')}
                    className="w-full border border-border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                {errors.dateBirth && (
                    <p className="text-xs text-red-600 mt-1">
                        ⚠ {errors.dateBirth.message}
                    </p>
                )}
            </div>

            {/* Celular */}
            <div>
                <label className="text-xs text-gray-600">Telefone*</label>
                <input
                    type="tel"
                    {...register('phone')}
                    className="w-full border border-border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                {errors.phone && (
                    <p className="text-xs text-red-600 mt-1">⚠ {errors.phone.message}</p>
                )}
            </div>

            {/* Botão */}
            <button
                disabled={isSubmitting}
                className="bg-accent text-white font-semibold uppercase rounded-md py-3 transition-all hover:bg-accent-hover disabled:opacity-50 cursor-pointer mt-2"
            >
                {isSubmitting ? 'Enviando...' : 'Continuar'}
            </button>
        </form>
    )
}
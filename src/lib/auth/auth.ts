interface IUser {
  email: string;
  password: string;
}

export async function login(formData: FormData) {
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
}

export function logout() {}

// Якобы защита от xss чтобы хранить токен в замыкании
// Хотя по идее в куках было бы норм с samesite=strict
const inMemoryJWTService = () => {
  let inMemoryJWT: string | null = null;

  const getToken = () => inMemoryJWT;

  const setToken = (token: string, tokenExpiration: number) => {
    inMemoryJWT = token;
  };

  return { getToken, setToken };
};

export default inMemoryJWTService();

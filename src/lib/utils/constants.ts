// Любой импорт от сюда в клиентский компонент по идее === смерть
// Нужно как-то обезопасить себя от рук обезьяны
export const COOKIE_SETTINGS = {
  REFRESH_TOKEN: {
    httpOnly: true,
    expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 15), // (15 дней)
    SameSite: 'None',
    Secure: true,
  },
};

export const ACCESS_TOKEN_EXPRIRATION = 1e3 * 60 * 30; // (30 мин)

export function createUserLookup(users) {
  return Object.fromEntries(
    users.map((user) => [user.id, user.name])
  );
}

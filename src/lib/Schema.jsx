export async function createLoginActivity(client) {
  await client.query(
    `create table owner_login_activity
      (
          email     text                                not null,
          login_at  timestamp default CURRENT_TIMESTAMP not null,
          jwt_token text                                not null
      );
      
      alter table owner_login_activity
          owner to postgres;      
      `
  );
}

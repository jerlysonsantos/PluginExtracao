/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('authentication_token', {
    id: 'id',
    token: {
      type: 'uuid',
      default: new PgLiteral('uuid_generate_v4()'),
      notNull: true,
    },
    origin: { type: 'varchar(25)', notNull: true },
    attempts: { type: 'integer', notNull: true, default: 0 },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updated_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('users');
};

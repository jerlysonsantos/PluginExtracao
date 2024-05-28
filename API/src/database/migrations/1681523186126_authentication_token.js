/* eslint-disable camelcase */
const { PgLiteral } = require('node-pg-migrate');

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  pgm.createTable('authentication_token', {
    id: 'id',
    token: {
      type: 'uuid',
      default: new PgLiteral('uuid_generate_v4()'),
      notNull: true,
    },
    origin: { type: 'varchar(25)', notNull: true },
    limit: { type: 'int', notNull: true, default: 0 },
    limit_timeout: { type: 'timestamp', notNull: false },
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
  pgm.dropTable('authentication_token');
};

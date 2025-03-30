/* eslint-disable camelcase */
const { PgLiteral } = require('node-pg-migrate');

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  pgm.createTable('extraction', {
    id: 'id',
    token: {
      type: 'uuid',
      default: new PgLiteral('uuid_generate_v4()'),
      notNull: true,
    },
    origin: { type: 'varchar(25)', notNull: true },
    os: { type: 'varchar(35)', notNull: true },
    device: { type: 'varchar(35)', notNull: true },
    theme_change_count: { type: 'int', notNull: true, default: 0 },
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
  pgm.dropTable('extraction');
};

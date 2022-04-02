/**
 * Generate primary key column
 * @param options
 * @returns
 */
const primaryKey = (options?: object) => ({
  name: 'id',
  type: 'int',
  isPrimary: true,
  ...options,
});

/**
 * Generate timestamp column
 */
const timeStamp = () => [
  {
    name: 'created_at',
    type: 'timestamp',
    default: 'now()',
  },
  {
    name: 'updated_at',
    type: 'timestamp',
    default: 'now()',
  },
];

/**
 * Generate soft delete column
 */
const deletedAt = () => ({
  name: 'deleted_at',
  type: 'timestamp',
  default: 'now()',
});

export { primaryKey, timeStamp, deletedAt };

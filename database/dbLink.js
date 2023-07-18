import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: 'postgres://yipglpsr:wX6Y9OLeAy__pUrJQwErK4idLd1dI0eA@horton.db.elephantsql.com/yipglpsr',
});

export default pool;

export const sqlConfig = {
  server: '192.168.56.1',
  port: 1433,
  user: 'sa',
  password: '2785',
  database: 'senai',
  options: {
    enableArithAbort : true,
    encrypt: false,
    trustServerCertificate: true,
  },
  connectionTimeout : 5000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
}
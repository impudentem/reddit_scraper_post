import sqlite3 from 'sqlite3'
import {Database, open} from 'sqlite'
// sqlite3.verbose();

export async function openDb(): Promise<Database> {
    let db = await open<sqlite3.Database, sqlite3.Statement>({
        filename: '/tmp/database.db',
        driver: sqlite3.cached.Database
    });
    await db.migrate();
    // db.on('trace', (data:any) => {
    //     console.log(data);
    // });
    return db;
}

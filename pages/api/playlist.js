// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const Database = require("better-sqlite3");
const db = new Database("base.db", { verbose: console.log });

export default function handler(req, res) {
    const stmt = db.prepare("select * from playlist");
    const songs = stmt.all();
    console.log(songs);
    res.status(200).json(songs)
}
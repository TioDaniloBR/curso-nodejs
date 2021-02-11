const knex = require('../../config/database');

class NewsRepository{
    
    async all(){
        return await knex('news').select('*');
    }

    async one({ id }){
        return await knex('news').where({ id }).select('*');
    }

    async save({ data }){
        return await knex('news').insert({ ...data });
    }

    async update({ id, data }){
        return await knex('news').where({ id }).update({ ...data });
    }

    async delete({ id }){
        return await knex('news').where({ id }).del();
    }
}

module.exports = new NewsRepository();
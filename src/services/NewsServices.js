const newsRepository = require('../repository/NewsRepository');

class NewsServices{

    async all(){
        return await newsRepository.all();
    }

    async one({ id }){
        return await newsRepository.one({ id });
    }

    async save({ data }){
        return await newsRepository.save({ data });
    }

    async update({ id, data }){
        return await newsRepository.update({ id, data });
    }

    async delete({ id }){
        return await newsRepository.delete({ id });
    }
}

module.exports = new NewsServices();
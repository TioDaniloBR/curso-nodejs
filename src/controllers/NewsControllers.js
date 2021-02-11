const newsServices = require('../services/NewsServices');

class NewsControllers{
    async all(req, res){
        
        const news = await newsServices.all();
        res.status(200).json({ success:true, news});
    }

    async one(req, res){
        const {id} = req.params;

        const news = await newsServices.one({ id });
        res.status(200).json({ success:true, news});
    }

    async save(req, res){
        const data = req.body;
        
        const news = await newsServices.save({ data });
        res.status(200).json({ success:true, news});
    }

    async update(req, res){
        const { id } = req.params;
        const data = req.body;

        const news = await newsServices.update({ id, data });
        res.status(200).json({ success:true, news});
    }

    async delete(req, res){
        const { id } = req.params;
        

        const news = await newsServices.delete({ id });
        res.status(200).json({ success:true, news});
    }

}

module.exports = new NewsControllers();
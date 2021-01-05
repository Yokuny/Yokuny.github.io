import connect from '../../utils/database';
export default async function saveForm (req, res) {
    if(req.method === 'POST'){
        const {name, email, message} = req.body;
        if(!name || !email || !message){
            res.status(400).json({message: 'Missing parameters'});
            return;
        }
        const {db} = await connect();
        const response = await db.insertOne({name,email,message});
        res.status(200).json(response.ops[0]);
    };
}